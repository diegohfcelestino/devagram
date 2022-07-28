import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../app.json";
const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
    marginTop: 16
  },
  containerInfoProfile: {
    flexDirection: "row",
    //marginHorizontal: 24
    marginHorizontal: 50
  },
  containerInfo: {
    alignItems: "center"
  },
  textNumber: {
    fontSize: 14,
    color: colors.grayColor04,
    fontFamily: "biennale-bold"
  },
  placeholder: {
    fontSize: 12,
    color: colors.grayColor04,
    fontFamily: "biennale-regular"
  },
  outlineButton: {
    width: 216,
    height: 28,
    backgroundColor: colors.whiteColor,
    borderWidth: 1,
    borderColor: colors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4
  },
  textButtonOutline: {
    fontSize: 12,
    color: colors.primaryColor,
    fontFamily: "biennale-regular"
  },
  button: {
    width: 216,
    height: 28,
    backgroundColor: colors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4
  },
  textButton: {
    fontSize: 12,
    color: colors.whiteColor,
    fontFamily: "biennale-regular"
  }
});

export default styles;
