import { auth, firestore } from "@/config/firebase";
import { AuthContextType, UserType } from "@/types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserType>(null);

  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return { success: true };
    } catch (error: any) {
      let msg = error.message;
      return { success: false, msg };
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      let response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      
      await setDoc(doc(firestore, "users", response.user?.uid),{
        name,
        email,
        uid: response?.user?.uid,
      })

      return { success: true };
    } catch (error: any) {
      let msg = error.message;
      return { success: false, msg };
    }
  };

  const updateUserData = async (uui: string) => {
     try {
      const docRef = doc(firestore, "users", uui);
      const docSnap = await getDoc(docRef);

      if(docSnap.exists()) {
        const data = docSnap.data();
        const userData: UserType = {
          uid: data?.uid,
          name: data.name || null,
          email: data.email || null,
          image: data.image || null,
        };

        setUser({ ...userData });
        // return { success: true, userData };
      }
     } catch (error: any) {
       let msg = error.message;
      //  return { success: false, msg };
      console.log('error:',  error);  
     }
  }

  const contextvalue: AuthContextType = {
    user,
    login,
    setUser,
    register,
      updateUserData,
  }

  return (
    <AuthContext.Provider value={contextvalue}>
      {children}
    </AuthContext.Provider>
  )
};

// create a hook
export const useAuth = (): AuthContextType => {
   const context = useContext(AuthContext);

   if(!context) {
     throw new Error('useAuth must be used within an AuthProvider');
   }

   return context;
}

// export default AuthProvider;
