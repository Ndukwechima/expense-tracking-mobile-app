import { expenseCategories } from '@/constants/data'
import { colors, radius, spacingY } from '@/constants/theme'
import { TransactionItemProps, TransactionListType } from '@/types'
import { verticalScale } from '@/utils/styling'
import { FlashList } from "@shopify/flash-list"
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'
import Loading from './Loading'
import Typo from './Typo'

const TransactionList = ({
    data,
    title,
    loading,
    emptyListMessage
}: TransactionListType) => {

const handleClick = () => {
    // TODO: open transaction details
}

  return (
    <View style={styles.container}>
      {title && (
        <Typo size={20} fontWeight={"500"}>
          {title}
        </Typo>
      )}

      <View style={styles.list}>
        <FlashList
          data={data}
          renderItem={({ item, index }) => (
            <TransactionItem
              item={item}
              index={index}
              handleClick={handleClick}
            />
          )}
          estimatedItemSize={60}
        />
      </View>

      {
        !loading && data.length === 0 && (
          <Typo size={15} color={colors.neutral400} style={{textAlign: 'center', marginTop: spacingY._15}} fontWeight={"500"}>{emptyListMessage}</Typo>
        )}

        {
          loading && (
            <View style={{top: verticalScale(100)}}>
           <Loading />
            </View>
          )
        }
    </View>
  );
}


const TransactionItem = ({
    item,
    index,
    handleClick
}: TransactionItemProps) => {

  let category = expenseCategories['utilities']
  const IconComponent = category.icon
  

    return (
      <Animated.View entering={FadeInDown.delay(index * 100).springify().damping(14)}>
        <TouchableOpacity style={styles.row} onPress={() => handleClick(item)}>
          <View style={[styles.icon, { backgroundColor: category.bgColor }]}>
            {IconComponent && (
              <IconComponent
                size={verticalScale(20)}
                weight="fill"
                color={colors.white}
              />
            )}
          </View>
          <View style={styles.categoryDes}>
            <Typo size={17}>{category.label}</Typo>
            <Typo size={12} color={colors.neutral400} textProps={{numberOfLines: 1}}>Paid wifi bill</Typo>
          </View>

          <View style={styles.amountDate}>
            <Typo  fontWeight={"500"} 
            color={colors.rose}>- $10</Typo>
            <Typo size={13} color={colors.neutral400}>20 Jul</Typo>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
}
export default TransactionList

const styles = StyleSheet.create({
    container: {
        gap: spacingY._17,
    },

    list: {
        minHeight: 3,
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: spacingY._12,
        marginBottom: spacingY._12,

        // list with background
        backgroundColor: colors.neutral800,
        padding: spacingY._10,
        paddingHorizontal: spacingY._10,
        borderRadius: radius._17
    },

    icon: {
        height: verticalScale(44),
        aspectRatio: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: radius._12,
        borderCurve: "continuous"
    },

    categoryDes: {
        flex: 1,
        gap: 2.5,
    },

    amountDate: {
        alignItems: "flex-end",
        gap: 3
    }
})