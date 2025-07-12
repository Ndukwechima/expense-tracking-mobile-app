import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Input from "@/components/Input";
import ScreenWrapper from "@/components/ScreenWrapper";
import { colors, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { useRouter } from "expo-router";
import * as Icons from "phosphor-react-native";
import React, { useRef, useState } from "react";
import { Alert, Pressable, StyleSheet, View } from "react-native";
import Typo from "../../components/Typo";

const Register = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async () => {
    if (!nameRef.current || !emailRef.current || !passwordRef.current) {
      Alert.alert("Signup", "Please fill all fields");
      return;
    }

    console.log("name:", nameRef.current);
    console.log("email:", emailRef.current);
    console.log("password:", passwordRef.current);
    console.log("Good to go!");
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton iconSize={28} />

        <View style={{ gap: 5, marginTop: spacingY._20 }}>
          <Typo size={30} fontWeight={"800"}>
            Let's
          </Typo>
          <Typo size={30} fontWeight={"800"}>
            Get started
          </Typo>
        </View>

        {/* form */}
        <View style={styles.form}>
          <Typo size={16} color={colors.textLighter}>
            Create an account to track all your expenses
          </Typo>

          <Input
            onChangeText={(value) => (nameRef.current = value)}
            placeholder="Enter your name"
            icon={
              <Icons.UserIcon
                size={verticalScale(26)}
                color={colors.neutral300}
                weight="fill"
              />
            }
          />

          <Input
            onChangeText={(value) => (emailRef.current = value)}
            placeholder="Enter your email"
            icon={
              <Icons.AtIcon
                size={verticalScale(26)}
                color={colors.neutral300}
                weight="fill"
              />
            }
          />

          <Input
            onChangeText={(value) => (passwordRef.current = value)}
            secureTextEntry
            placeholder="Enter your password"
            icon={
              <Icons.LockIcon
                size={verticalScale(26)}
                color={colors.neutral300}
                weight="fill"
              />
            }
          />

          <Button loading={isLoading} onPress={handleSubmit}>
            <Typo fontWeight={"700"} color={colors.black} size={20}>
              Sign up
            </Typo>
          </Button>
        </View>

        {/* footer */}
        <View style={styles.footer}>
          <Typo color={colors.neutral300} size={15}>
            Alraedy have an account?
          </Typo>
          <Pressable onPress={() => router.navigate("/(auth)/login")}>
            <Typo size={15} fontWeight={"700"} color={colors.primary}>
              Login
            </Typo>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacingY._30,
    paddingHorizontal: spacingY._20,
  },

  welcomeText: {
    fontSize: verticalScale(20),
    fontWeight: "bold",
    color: colors.text,
  },

  form: {
    gap: spacingY._20,
  },

  forgotPassword: {
    textAlign: "right",
    fontWeight: "500",
    color: colors.text,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },

  footerText: {
    textAlign: "center",
    color: colors.text,
    fontSize: verticalScale(15),
  },
});
