import { colors, spacingX, spacingY } from '@/constants/theme'
import { scale, verticalScale } from '@/utils/styling'
import * as Icons from "phosphor-react-native"
import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import Typo from './Typo'



const HomeCard = () => {
  return (
    <ImageBackground
      source={require("../assets/images/card.png")}
      resizeMode="stretch"
      style={styles.bgImage}
    >
      <View style={styles.container}>
        <View>
          {/* total balance */}
          <View style={styles.totalBalanceRow}>
            <Typo color={colors.neutral800} size={18} fontWeight={"500"}>
              Total Balance
            </Typo>

            <Icons.DotsThreeOutlineIcon
              size={verticalScale(23)}
              color={colors.black}
              weight="fill"
            />
          </View>

          <Typo color={colors.black} size={scale(30)} fontWeight={"bold"}>
            $ 2,000,000
          </Typo>
        </View>

        {/* total expense and income */}
        <View style={styles.stats}>
          {/* income */}
          <View style={{ gap: verticalScale(5) }}>
            <View style={styles.incomeExpense}>
              <View style={styles.statsIcon}>
                <Icons.ArrowDownIcon
                  size={verticalScale(15)}
                  color={colors.black}
                  weight="bold"
                />
              </View>

              <Typo
                color={colors.neutral800}
                size={scale(16)}
                fontWeight={"500"}
              >
                Income
              </Typo>
            </View>

            <View style={{ alignSelf: "center" }}>
              <Typo size={18} color={colors.green} fontWeight={"600"}>
               $ 2342
              </Typo>
            </View>
          </View>

          {/* expense */}
          <View style={{ gap: verticalScale(5) }}>
            <View style={styles.incomeExpense}>
              <View style={styles.statsIcon}>
                <Icons.ArrowUpIcon
                  size={verticalScale(15)}
                  color={colors.black}
                  weight="bold"
                />
              </View>

              <Typo
                color={colors.neutral800}
                size={scale(16)}
                fontWeight={"500"}
              >
                Expense
              </Typo>
            </View>

            <View style={{ alignSelf: "center" }}>
              <Typo size={18} color={colors.rose} fontWeight={"600"}>
                 $ 1720
              </Typo>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

export default HomeCard

const styles = StyleSheet.create({
 bgImage: {
     height: scale(210),
     width: '100%',
 },

 container: {
     padding: spacingX._20,
     paddingHorizontal: scale(23),
     height: "87%",
     width: "100%",
     justifyContent: "space-between",
 },

 totalBalanceRow: {
     flexDirection: "row",
     alignItems: "center",
     justifyContent: "space-between",
     marginBottom: spacingY._5,
 },

 stats: {
     flexDirection: "row",
     alignItems: "center",
     justifyContent: "space-between",
 },

 statsIcon: {
     backgroundColor: colors.neutral350,
     padding: spacingY._5,
     borderRadius: 50,
 },

 incomeExpense: {
     flexDirection: "row",
     alignItems: "center",
     gap: spacingY._7,
 }

})