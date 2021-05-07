import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1792/5d88/dc1c3ae27ec3a50f4d3325ad82022943"
        }}
        style={styles.ImageBackground_407_1724}
      />
      <View style={styles.View_407_1725}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5126/7c45/ace49f778a9f7f5f93084dbf074f2d02"
          }}
          style={styles.ImageBackground_407_1726}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e99c/9eb7/789eb6efec0cc726155952396cbfc4be"
          }}
          style={styles.ImageBackground_407_1732}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4da/ec56/8b6ea163f1e4870d42be90c10ca85236"
          }}
          style={styles.ImageBackground_407_1733}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4da/ec56/8b6ea163f1e4870d42be90c10ca85236"
          }}
          style={styles.ImageBackground_407_1736}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64c7/777c/1b5027a17a835d2669160fafb010bcdc"
          }}
          style={styles.ImageBackground_407_1739}
        />
      </View>
      <View style={styles.View_407_1743}>
        <View style={styles.View_407_1744} />
        <View style={styles.View_407_1745}>
          <Text style={styles.Text_407_1745}>Sign In</Text>
        </View>
      </View>
      <View style={styles.View_407_1746}>
        <View style={styles.View_407_1747} />
        <View style={styles.View_407_1748}>
          <Text style={styles.Text_407_1748}>Sign Up</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_407_1724: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_407_1725: {
    width: wp("48.309178743961354%"),
    minWidth: wp("48.309178743961354%"),
    height: hp("13.934238621445951%"),
    minHeight: hp("13.934238621445951%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.845410628019323%"),
    top: hp("91.80327868852459%")
  },
  ImageBackground_407_1726: {
    width: wp("48.309178743961354%"),
    minWidth: wp("48.309178743961354%"),
    height: hp("13.934238621445951%"),
    minHeight: hp("13.934238621445951%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_407_1732: {
    width: wp("6.763197949543091%"),
    minWidth: wp("6.763197949543091%"),
    height: hp("6.557293146685825%"),
    minHeight: hp("6.557293146685825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.671202728713766%"),
    top: hp("1.3660868660348342%")
  },
  ImageBackground_407_1733: {
    width: wp("2.415428069478648%"),
    minWidth: wp("2.415428069478648%"),
    height: hp("6.283965397402238%"),
    minHeight: hp("6.283965397402238%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.99469731280193%"),
    top: hp("1.6393609385672931%")
  },
  ImageBackground_407_1736: {
    width: wp("2.415428069478648%"),
    minWidth: wp("2.415428069478648%"),
    height: hp("6.283965397402238%"),
    minHeight: hp("6.283965397402238%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.357252038043477%"),
    top: hp("1.6393609385672931%")
  },
  ImageBackground_407_1739: {
    width: wp("6.28011307278693%"),
    minWidth: wp("6.28011307278693%"),
    height: hp("4.098308021253575%"),
    minHeight: hp("4.098308021253575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.299045138888886%"),
    top: hp("3.825003201844268%")
  },
  View_407_1743: {
    width: wp("64.73429951690821%"),
    minWidth: wp("64.73429951690821%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.632850241545896%"),
    top: hp("72.54098360655738%")
  },
  View_407_1744: {
    width: wp("64.73429951690821%"),
    minWidth: wp("64.73429951690821%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  View_407_1745: {
    width: wp("64.73429951690821%"),
    minWidth: wp("64.73429951690821%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_407_1745: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_1746: {
    width: wp("64.73429951690821%"),
    minWidth: wp("64.73429951690821%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.632850241545896%"),
    top: hp("61.74863387978142%")
  },
  View_407_1747: {
    width: wp("64.73429951690821%"),
    minWidth: wp("64.73429951690821%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 120, 84, 1)",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  View_407_1748: {
    width: wp("64.73429951690821%"),
    minWidth: wp("64.73429951690821%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_407_1748: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 896 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
