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
        style={styles.ImageBackground_407_1813}
      />
      <View style={styles.View_407_1814}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45d8/49ec/6a37c2d2cfe6792a1174d329fc17c643"
          }}
          style={styles.ImageBackground_407_1815}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e99c/9eb7/789eb6efec0cc726155952396cbfc4be"
          }}
          style={styles.ImageBackground_407_1821}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4da/ec56/8b6ea163f1e4870d42be90c10ca85236"
          }}
          style={styles.ImageBackground_407_1822}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4da/ec56/8b6ea163f1e4870d42be90c10ca85236"
          }}
          style={styles.ImageBackground_407_1825}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64c7/777c/1b5027a17a835d2669160fafb010bcdc"
          }}
          style={styles.ImageBackground_407_1828}
        />
      </View>
      <View style={styles.View_407_1832}>
        <View style={styles.View_407_1833} />
        <View style={styles.View_407_1834}>
          <Text style={styles.Text_407_1834}>Sign In</Text>
        </View>
      </View>
      <View style={styles.View_407_1835}>
        <View style={styles.View_407_1836} />
        <View style={styles.View_407_1837}>
          <Text style={styles.Text_407_1837}>Sign Up</Text>
        </View>
      </View>
      <View style={styles.View_407_1749}>
        <View style={styles.View_407_1750}>
          <Text style={styles.Text_407_1750}>Sign In</Text>
        </View>
        <View style={styles.View_407_1751}>
          <View style={styles.View_407_1752}>
            <View style={styles.View_407_1753}>
              <View style={styles.View_407_1754}>
                <View style={styles.View_I407_1754_130_316} />
                <View style={styles.View_I407_1754_130_317}>
                  <Text style={styles.Text_I407_1754_130_317}>Email</Text>
                </View>
              </View>
              <View style={styles.View_407_1755}>
                <View style={styles.View_407_1756}>
                  <Text style={styles.Text_407_1756}>Password</Text>
                </View>
                <View style={styles.View_407_1757} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c6b/02d7/7a92553b6ef807b17e585fb75d522c96"
                  }}
                  style={styles.ImageBackground_407_1758}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f36/7e3d/cb3da3460002ce476c8a25c0aa5c163a"
                  }}
                  style={styles.ImageBackground_407_1759}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_407_1760}>
            <View style={styles.View_407_1761} />
            <View style={styles.View_407_1762}>
              <Text style={styles.Text_407_1762}>Sign In</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_407_1763}>
          <Text style={styles.Text_407_1763}>Hacker? Sign In</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_407_1813: {
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
  View_407_1814: {
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
  ImageBackground_407_1815: {
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
  ImageBackground_407_1821: {
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
  ImageBackground_407_1822: {
    width: wp("2.415428069478648%"),
    minWidth: wp("2.415428069478648%"),
    height: hp("6.283965397402238%"),
    minHeight: hp("6.283965397402238%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.9946678272192%"),
    top: hp("1.6393609385672931%")
  },
  ImageBackground_407_1825: {
    width: wp("2.415428069478648%"),
    minWidth: wp("2.415428069478648%"),
    height: hp("6.283965397402238%"),
    minHeight: hp("6.283965397402238%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.357222552460748%"),
    top: hp("1.6393609385672931%")
  },
  ImageBackground_407_1828: {
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
  View_407_1832: {
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
  View_407_1833: {
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
  View_407_1834: {
    width: wp("64.73429951690821%"),
    minWidth: wp("64.73429951690821%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_407_1834: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_1835: {
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
  View_407_1836: {
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
  View_407_1837: {
    width: wp("64.73429951690821%"),
    minWidth: wp("64.73429951690821%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_407_1837: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_1749: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("73.224043715847%"),
    minHeight: hp("73.224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49.18032786885246%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_407_1750: {
    width: wp("85.99033816425121%"),
    minWidth: wp("85.99033816425121%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("6.830601092896174%")
  },
  Text_407_1750: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_1751: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    height: hp("42.62295081967213%"),
    minHeight: hp("42.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%"),
    top: hp("19.262295081967224%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_407_1752: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    height: hp("24.316939890710383%"),
    minHeight: hp("24.316939890710383%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_407_1753: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    height: hp("24.316939890710383%"),
    minHeight: hp("24.316939890710383%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_407_1754: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I407_1754_130_316: {
    flexGrow: 1,
    width: wp("80.67632850241546%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.6885245901639223%"),
    borderColor: "rgba(185, 195, 209, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_I407_1754_130_317: {
    flexGrow: 1,
    width: wp("11.594202898550725%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I407_1754_130_317: {
    color: "rgba(185, 195, 209, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_1755: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.251366120218577%")
  },
  View_407_1756: {
    width: wp("19.806763285024154%"),
    minWidth: wp("19.806763285024154%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_407_1756: {
    color: "rgba(185, 195, 209, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_1757: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.6885245901639223%"),
    borderColor: "rgba(233, 120, 84, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_407_1758: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.77294685990339%"),
    top: hp("6.420765027322403%")
  },
  ImageBackground_407_1759: {
    width: wp("15.942028985507244%"),
    minWidth: wp("15.942028985507244%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.347826086956523%"),
    top: hp("6.693989071038246%")
  },
  View_407_1760: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34.153005464480856%")
  },
  View_407_1761: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
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
  View_407_1762: {
    width: wp("64.73429951690821%"),
    minWidth: wp("64.73429951690821%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753625%"),
    top: hp("0%")
  },
  Text_407_1762: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_1763: {
    width: wp("32.125603864734295%"),
    minWidth: wp("32.125603864734295%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.93719806763285%"),
    top: hp("68.71584699453551%")
  },
  Text_407_1763: {
    color: "rgba(0, 0, 0, 1)",
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
