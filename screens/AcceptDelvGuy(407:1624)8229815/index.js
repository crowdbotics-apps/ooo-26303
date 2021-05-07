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
      <View style={styles.View_407_1625}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9606/ab9d/b892c5d360adff849262c03c67e9a2a1"
          }}
          style={styles.ImageBackground_I407_1625_4_8}
        />
        <View style={styles.View_I407_1625_341_644}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2c1/0833/d6d4060014b7f190bab41e868dc761ed"
            }}
            style={styles.ImageBackground_I407_1625_341_644_10_142}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf79/ed7b/46268746c56de1b5dbc375c72afdb50e"
            }}
            style={styles.ImageBackground_I407_1625_341_644_10_148}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cba4/0abf/ccfff56a185a3e2c8a6ce71478a2ca29"
            }}
            style={styles.ImageBackground_I407_1625_341_644_10_149}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cba4/0abf/ccfff56a185a3e2c8a6ce71478a2ca29"
            }}
            style={styles.ImageBackground_I407_1625_341_644_10_152}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61d4/87aa/c375f27ef59d269ef0351542b38a27a1"
            }}
            style={styles.ImageBackground_I407_1625_341_644_10_155}
          />
        </View>
        <View style={styles.View_I407_1625_341_166}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68b4/f149/4d5ff23a064e26f6b700f841d56de739"
            }}
            style={styles.ImageBackground_I407_1625_341_167}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/435a/9b0f/2b03d2889d30e28c3b77bc8dfbc8c885"
            }}
            style={styles.ImageBackground_I407_1625_341_169}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/937c/e77c/3532f7395042563bd9d19953336b573c"
            }}
            style={styles.ImageBackground_I407_1625_341_170}
          />
        </View>
      </View>
      <View style={styles.View_407_1626}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62fb/433f/14930bf6108e0a735f563dc0e5acdfa5"
          }}
          style={styles.ImageBackground_407_1670}
        />
        <View style={styles.View_407_1671}>
          <Text style={styles.Text_407_1671}>Congrate!</Text>
        </View>
        <View style={styles.View_407_1668}>
          <Text style={styles.Text_407_1668}>Cost : 900 Dzd </Text>
        </View>
        <View style={styles.View_407_1669}>
          <Text style={styles.Text_407_1669}>Delevered By : John Doe</Text>
        </View>
      </View>
      <View style={styles.View_407_1634}>
        <View style={styles.View_I407_1634_341_754}>
          <Text style={styles.Text_I407_1634_341_754}>Go home</Text>
        </View>
      </View>
      <View style={styles.View_407_1635}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd15/55c6/63341221ff30be1735811c044f45a1d9"
          }}
          style={styles.ImageBackground_I407_1635_341_180}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0af1/bfaf/4f3ce786061504b8b01404d70a05ea87"
          }}
          style={styles.ImageBackground_I407_1635_341_181}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a35/f51b/e56b1fb5002149255a1cab29bb055b47"
          }}
          style={styles.ImageBackground_I407_1635_341_179}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd7c/4081/eafbcfb77a6b923c75af49bf653f221a"
          }}
          style={styles.ImageBackground_I407_1635_341_260}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd15/55c6/63341221ff30be1735811c044f45a1d9"
          }}
          style={styles.ImageBackground_I407_1635_341_177}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0af1/bfaf/4f3ce786061504b8b01404d70a05ea87"
          }}
          style={styles.ImageBackground_I407_1635_341_178}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a35/f51b/e56b1fb5002149255a1cab29bb055b47"
          }}
          style={styles.ImageBackground_I407_1635_341_176}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_407_1625: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("2.73224043715847%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I407_1625_4_8: {
    flexGrow: 1,
    width: wp("6.159420289855073%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.3907103825136615%")
  },
  View_I407_1625_341_644: {
    flexGrow: 1,
    width: wp("24.154589371980677%"),
    height: hp("6.967144325131276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.857487922705314%"),
    top: hp("0.06833936347336067%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I407_1625_341_644_10_142: {
    flexGrow: 1,
    width: wp("24.154589371980677%"),
    height: hp("6.967144325131276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I407_1625_341_644_10_148: {
    flexGrow: 1,
    width: wp("3.3815989747715456%"),
    height: hp("3.2786465733429124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.835571878774154%"),
    top: hp("0.6830601092896176%")
  },
  ImageBackground_I407_1625_341_644_10_149: {
    flexGrow: 1,
    width: wp("1.207714034739324%"),
    height: hp("3.141974360565019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.497289685235508%"),
    top: hp("0.819672131147541%")
  },
  ImageBackground_I407_1625_341_644_10_152: {
    flexGrow: 1,
    width: wp("1.207714034739324%"),
    height: hp("3.141974360565019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.178626019021742%"),
    top: hp("0.819672131147541%")
  },
  ImageBackground_I407_1625_341_644_10_155: {
    flexGrow: 1,
    width: wp("3.140056536393465%"),
    height: hp("2.0491540106267876%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.149522569444443%"),
    top: hp("1.9125182771943305%")
  },
  View_I407_1625_341_166: {
    flexGrow: 1,
    width: wp("12.560386473429952%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.71014492753623%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I407_1625_341_167: {
    width: wp("12.560386473429952%"),
    minWidth: wp("12.560386473429952%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I407_1625_341_169: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516897%"),
    top: hp("4.2349726775956285%")
  },
  ImageBackground_I407_1625_341_170: {
    width: wp("3.140096618357488%"),
    minWidth: wp("3.140096618357488%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.589371980676333%"),
    top: hp("2.185792349726776%")
  },
  View_407_1626: {
    width: wp("94.68599033816425%"),
    minWidth: wp("94.68599033816425%"),
    height: hp("36.0655737704918%"),
    minHeight: hp("36.0655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.657004830917874%"),
    top: hp("28.460843445824796%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_407_1670: {
    width: wp("20.28985507246377%"),
    minWidth: wp("20.28985507246377%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.19806763285024%"),
    top: hp("2.7322404371584668%")
  },
  View_407_1671: {
    width: wp("45.169082125603865%"),
    minWidth: wp("45.169082125603865%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.758454106280194%"),
    top: hp("16.211287701716184%")
  },
  Text_407_1671: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 31,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_1668: {
    width: wp("85.02415458937197%"),
    minWidth: wp("85.02415458937197%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("24.499094811945017%")
  },
  Text_407_1668: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 17,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_1669: {
    width: wp("85.02415458937197%"),
    minWidth: wp("85.02415458937197%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("29.918032786885245%")
  },
  Text_407_1669: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_1634: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("83.1511784120987%"),
    backgroundColor: "rgba(233, 120, 84, 1)"
  },
  View_I407_1634_341_754: {
    flexGrow: 1,
    width: wp("18.115942028985508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.07729468599033%"),
    top: hp("2.732240437158481%")
  },
  Text_I407_1634_341_754: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_1635: {
    width: wp("95.65217391304348%"),
    minWidth: wp("95.65217391304348%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1739130434782608%"),
    top: hp("110.10928961748634%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I407_1635_341_180: {
    flexGrow: 1,
    width: wp("5.314009661835748%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("4.234972677595621%")
  },
  ImageBackground_I407_1635_341_181: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.8743961352657%"),
    top: hp("3.551912568306008%")
  },
  ImageBackground_I407_1635_341_179: {
    flexGrow: 1,
    width: wp("5.314009661835748%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.845410628019327%"),
    top: hp("4.030054644808743%")
  },
  ImageBackground_I407_1635_341_260: {
    flexGrow: 1,
    width: wp("17.391304347826086%"),
    height: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.130434782608695%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_I407_1635_341_177: {
    flexGrow: 1,
    width: wp("5.314009661835748%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.49275362318839%"),
    top: hp("4.234972677595621%")
  },
  ImageBackground_I407_1635_341_178: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.77777777777777%"),
    top: hp("3.551912568306008%")
  },
  ImageBackground_I407_1635_341_176: {
    flexGrow: 1,
    width: wp("5.314009661835748%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.7487922705314%"),
    top: hp("4.030054644808743%")
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
