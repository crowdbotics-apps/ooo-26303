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
        style={styles.ImageBackground_407_1839}
      />
      <View style={styles.View_407_1840}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45d8/49ec/6a37c2d2cfe6792a1174d329fc17c643"
          }}
          style={styles.ImageBackground_407_1841}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e99c/9eb7/789eb6efec0cc726155952396cbfc4be"
          }}
          style={styles.ImageBackground_407_1847}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4da/ec56/8b6ea163f1e4870d42be90c10ca85236"
          }}
          style={styles.ImageBackground_407_1848}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4da/ec56/8b6ea163f1e4870d42be90c10ca85236"
          }}
          style={styles.ImageBackground_407_1851}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64c7/777c/1b5027a17a835d2669160fafb010bcdc"
          }}
          style={styles.ImageBackground_407_1854}
        />
      </View>
      <View style={styles.View_407_1858}>
        <View style={styles.View_407_1859} />
        <View style={styles.View_407_1860}>
          <Text style={styles.Text_407_1860}>Sign In</Text>
        </View>
      </View>
      <View style={styles.View_407_1861}>
        <View style={styles.View_407_1862} />
        <View style={styles.View_407_1863}>
          <Text style={styles.Text_407_1863}>Sign Up</Text>
        </View>
      </View>
      <View style={styles.View_407_1764}>
        <View style={styles.View_407_1765}>
          <Text style={styles.Text_407_1765}>Sign Up</Text>
        </View>
        <View style={styles.View_407_1766}>
          <View style={styles.View_407_1767}>
            <View style={styles.View_407_1768} />
            <View style={styles.View_407_1769}>
              <Text style={styles.Text_407_1769}>Sign In</Text>
            </View>
          </View>
          <View style={styles.View_407_1770}>
            <View style={styles.View_407_1771}>
              <View style={styles.View_411_1182}>
                <View style={styles.View_I411_1182_130_316} />
                <View style={styles.View_I411_1182_130_317}>
                  <Text style={styles.Text_I411_1182_130_317}>Full Name</Text>
                </View>
              </View>
              <View style={styles.View_407_1772}>
                <View style={styles.View_I407_1772_130_316} />
                <View style={styles.View_I407_1772_130_317}>
                  <Text style={styles.Text_I407_1772_130_317}>Phone</Text>
                </View>
              </View>
              <View style={styles.View_407_1773}>
                <View style={styles.View_I407_1773_130_316} />
                <View style={styles.View_I407_1773_130_317}>
                  <Text style={styles.Text_I407_1773_130_317}>Email</Text>
                </View>
              </View>
              <View style={styles.View_407_1774}>
                <View style={styles.View_407_1775}>
                  <Text style={styles.Text_407_1775}>Password</Text>
                </View>
                <View style={styles.View_407_1776} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c6b/02d7/7a92553b6ef807b17e585fb75d522c96"
                  }}
                  style={styles.ImageBackground_407_1777}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f36/7e3d/cb3da3460002ce476c8a25c0aa5c163a"
                  }}
                  style={styles.ImageBackground_407_1778}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_407_1779}>
          <Text style={styles.Text_407_1779}>Hacker? Sign In</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_407_1839: {
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
  View_407_1840: {
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
  ImageBackground_407_1841: {
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
  ImageBackground_407_1847: {
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
  ImageBackground_407_1848: {
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
  ImageBackground_407_1851: {
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
  ImageBackground_407_1854: {
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
  View_407_1858: {
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
  View_407_1859: {
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
  View_407_1860: {
    width: wp("64.73429951690821%"),
    minWidth: wp("64.73429951690821%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_407_1860: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_1861: {
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
  View_407_1862: {
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
  View_407_1863: {
    width: wp("64.73429951690821%"),
    minWidth: wp("64.73429951690821%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_407_1863: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_1764: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("97.40437158469946%"),
    minHeight: hp("97.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.098360655737704%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_407_1765: {
    width: wp("85.99033816425121%"),
    minWidth: wp("85.99033816425121%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("6.830601092896178%")
  },
  Text_407_1765: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_1766: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    height: hp("66.80327868852459%"),
    minHeight: hp("66.80327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%"),
    top: hp("19.262295081967213%")
  },
  View_407_1767: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("58.33333333333333%")
  },
  View_407_1768: {
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
  View_407_1769: {
    width: wp("64.73429951690821%"),
    minWidth: wp("64.73429951690821%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753625%"),
    top: hp("0%")
  },
  Text_407_1769: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_1770: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    height: hp("50.81967213114754%"),
    minHeight: hp("50.81967213114754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_407_1771: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    height: hp("50.81967213114754%"),
    minHeight: hp("50.81967213114754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_411_1182: {
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
  View_I411_1182_130_316: {
    flexGrow: 1,
    width: wp("80.67632850241546%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.6885245901639294%"),
    borderColor: "rgba(185, 195, 209, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_I411_1182_130_317: {
    flexGrow: 1,
    width: wp("21.014492753623188%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I411_1182_130_317: {
    color: "rgba(185, 195, 209, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_1772: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.251366120218577%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I407_1772_130_316: {
    flexGrow: 1,
    width: wp("80.67632850241546%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.6885245901639365%"),
    borderColor: "rgba(185, 195, 209, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_I407_1772_130_317: {
    flexGrow: 1,
    width: wp("13.043478260869565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I407_1772_130_317: {
    color: "rgba(185, 195, 209, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_1773: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.50273224043717%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I407_1773_130_316: {
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
  View_I407_1773_130_317: {
    flexGrow: 1,
    width: wp("11.594202898550725%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I407_1773_130_317: {
    color: "rgba(185, 195, 209, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_1774: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39.754098360655746%")
  },
  View_407_1775: {
    width: wp("19.806763285024154%"),
    minWidth: wp("19.806763285024154%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_407_1775: {
    color: "rgba(185, 195, 209, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_1776: {
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
  ImageBackground_407_1777: {
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
  ImageBackground_407_1778: {
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
  View_407_1779: {
    width: wp("32.125603864734295%"),
    minWidth: wp("32.125603864734295%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.93719806763285%"),
    top: hp("92.89617486338798%")
  },
  Text_407_1779: {
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
