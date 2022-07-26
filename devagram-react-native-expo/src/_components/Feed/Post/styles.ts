import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../../app.json";
const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    marginVertical: 16
  },
  containerUser: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
    marginBottom: 20
  },
  textUserName: {
    marginLeft: 8,
    fontFamily: "biennale-bold",
    fontSize: 12,
    color: colors.grayColor04,
    paddingRight: 12
  },
  imageUser: {
    width: 32,
    height: 32,
    borderRadius: 100
  },
  postImage: {
    height: height / 2,
    width: width
  },
  containerLikeAndComment: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16,
    marginTop: 10
  },
  textLike: {
    marginLeft: 12,
    fontSize: 12,
    color: colors.grayColor04,
    fontFamily: "biennale-regular"
  },
  TextLikeBold: {
    fontFamily: "biennale-bold"
  },
  icon: {
    marginLeft: 12
  },
  containerDescription: {
    marginTop: 10,
    marginHorizontal: 16,
    flexDirection: "row"
  },
  textDescription: {
    fontSize: 12,
    fontFamily: "biennale-regular",
    color: colors.grayColor04,
    width: width / 1.4
  },
  textMoreOrLess: {
    color: colors.greenWaterColor
  },
  containerMoreOrLess: {
    color: colors.grayColor04
  }
});

export default styles;
