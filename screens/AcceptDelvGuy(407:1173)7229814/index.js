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
      <View style={styles.View_407_1174}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bad/eb04/5e43243a2cb902e20ef6ad663b93436a"
          }}
          style={styles.ImageBackground_I407_1174_341_642}
        />
        <View style={styles.View_I407_1174_341_789}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2c1/0833/d6d4060014b7f190bab41e868dc761ed"
            }}
            style={styles.ImageBackground_I407_1174_341_789_10_142}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf79/ed7b/46268746c56de1b5dbc375c72afdb50e"
            }}
            style={styles.ImageBackground_I407_1174_341_789_10_148}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cba4/0abf/ccfff56a185a3e2c8a6ce71478a2ca29"
            }}
            style={styles.ImageBackground_I407_1174_341_789_10_149}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cba4/0abf/ccfff56a185a3e2c8a6ce71478a2ca29"
            }}
            style={styles.ImageBackground_I407_1174_341_789_10_152}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61d4/87aa/c375f27ef59d269ef0351542b38a27a1"
            }}
            style={styles.ImageBackground_I407_1174_341_789_10_155}
          />
        </View>
        <View style={styles.View_I407_1174_341_790}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68b4/f149/4d5ff23a064e26f6b700f841d56de739"
            }}
            style={styles.ImageBackground_I407_1174_341_791}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/435a/9b0f/2b03d2889d30e28c3b77bc8dfbc8c885"
            }}
            style={styles.ImageBackground_I407_1174_341_793}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/937c/e77c/3532f7395042563bd9d19953336b573c"
            }}
            style={styles.ImageBackground_I407_1174_341_794}
          />
        </View>
      </View>
      <View style={styles.View_407_1175}>
        <View style={styles.View_407_1217}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d062/7351/70b2391d3ee4b14b69c4dc2fd23f067e"
            }}
            style={styles.ImageBackground_407_1218}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a65d/ff0f/f4b8a416325ffbf0ce1c4bda00dc8ae5"
            }}
            style={styles.ImageBackground_407_1219}
          />
        </View>
        <View style={styles.View_407_1177}>
          <Text style={styles.Text_407_1177}>Your order is on the way!</Text>
        </View>
      </View>
      <View style={styles.View_407_1178}>
        <View style={styles.View_407_1179}>
          <Text style={styles.Text_407_1179}>
            1.we will notify you when a delevery guy accept your request.
            2.please stay tune so you will not lose your guy gay. 3.we will
            refund you if the delevery fail
          </Text>
        </View>
        <View style={styles.View_407_1180}>
          <Text style={styles.Text_407_1180}>to lets you know:</Text>
        </View>
      </View>
      <View style={styles.View_407_1181}>
        <View style={styles.View_I407_1181_341_754}>
          <Text style={styles.Text_I407_1181_341_754}>Continue</Text>
        </View>
      </View>
      <View style={styles.View_407_1182}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd15/55c6/63341221ff30be1735811c044f45a1d9"
          }}
          style={styles.ImageBackground_I407_1182_341_180}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0af1/bfaf/4f3ce786061504b8b01404d70a05ea87"
          }}
          style={styles.ImageBackground_I407_1182_341_181}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a35/f51b/e56b1fb5002149255a1cab29bb055b47"
          }}
          style={styles.ImageBackground_I407_1182_341_179}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd7c/4081/eafbcfb77a6b923c75af49bf653f221a"
          }}
          style={styles.ImageBackground_I407_1182_341_260}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd15/55c6/63341221ff30be1735811c044f45a1d9"
          }}
          style={styles.ImageBackground_I407_1182_341_177}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0af1/bfaf/4f3ce786061504b8b01404d70a05ea87"
          }}
          style={styles.ImageBackground_I407_1182_341_178}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a35/f51b/e56b1fb5002149255a1cab29bb055b47"
          }}
          style={styles.ImageBackground_I407_1182_341_176}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_407_1174: {
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
  ImageBackground_I407_1174_341_642: {
    flexGrow: 1,
    width: wp("7.995891110332693%"),
    height: hp("4.277829133747706%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.4129972197318987%")
  },
  View_I407_1174_341_789: {
    flexGrow: 1,
    width: wp("24.154589371980677%"),
    height: hp("6.967144325131276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.77572794006642%"),
    top: hp("0.06833936347336067%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I407_1174_341_789_10_142: {
    flexGrow: 1,
    width: wp("24.154589371980677%"),
    height: hp("6.967144325131276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I407_1174_341_789_10_148: {
    flexGrow: 1,
    width: wp("3.3815989747715456%"),
    height: hp("3.2786465733429124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.835571878774154%"),
    top: hp("0.6830601092896176%")
  },
  ImageBackground_I407_1174_341_789_10_149: {
    flexGrow: 1,
    width: wp("1.207714034739324%"),
    height: hp("3.141974360565019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.497289685235508%"),
    top: hp("0.819672131147541%")
  },
  ImageBackground_I407_1174_341_789_10_152: {
    flexGrow: 1,
    width: wp("1.207714034739324%"),
    height: hp("3.141974360565019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.178626019021742%"),
    top: hp("0.819672131147541%")
  },
  ImageBackground_I407_1174_341_789_10_155: {
    flexGrow: 1,
    width: wp("3.140056536393465%"),
    height: hp("2.0491540106267876%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.14952256944445%"),
    top: hp("1.9125182771943305%")
  },
  View_I407_1174_341_790: {
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
  ImageBackground_I407_1174_341_791: {
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
  ImageBackground_I407_1174_341_793: {
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
  ImageBackground_I407_1174_341_794: {
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
  View_407_1175: {
    width: wp("80.91787439613528%"),
    minWidth: wp("80.91787439613528%"),
    height: hp("25.40983606557377%"),
    minHeight: hp("25.40983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.541062801932366%"),
    top: hp("20.491803278688526%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_407_1217: {
    width: wp("20.28985507246377%"),
    minWidth: wp("20.28985507246377%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.31400966183575%"),
    top: hp("2.7322404371584703%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_407_1218: {
    width: wp("20.28985507246377%"),
    minWidth: wp("20.28985507246377%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_407_1219: {
    width: wp("11.83574879227053%"),
    height: hp("5.46448087431694%"),
    top: hp("3.0054644808743163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.106280193236714%")
  },
  View_407_1177: {
    width: wp("71.25603864734299%"),
    minWidth: wp("71.25603864734299%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396137%"),
    top: hp("19.672131147540984%")
  },
  Text_407_1177: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_1178: {
    width: wp("85.02415458937197%"),
    minWidth: wp("85.02415458937197%"),
    height: hp("23.497267759562842%"),
    minHeight: hp("23.497267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("56.557377049180324%")
  },
  View_407_1179: {
    width: wp("85.02415458937197%"),
    minWidth: wp("85.02415458937197%"),
    minHeight: hp("15.846994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043723%")
  },
  Text_407_1179: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_1180: {
    width: wp("57.729468599033815%"),
    minWidth: wp("57.729468599033815%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_407_1180: {
    color: "rgba(233, 120, 84, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_1181: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("90.7103825136612%"),
    backgroundColor: "rgba(233, 120, 84, 1)"
  },
  View_I407_1181_341_754: {
    flexGrow: 1,
    width: wp("21.014492753623188%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.628019323671495%"),
    top: hp("2.732240437158481%")
  },
  Text_I407_1181_341_754: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_1182: {
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
  ImageBackground_I407_1182_341_180: {
    flexGrow: 1,
    width: wp("5.314009661835748%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("4.234972677595621%")
  },
  ImageBackground_I407_1182_341_181: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.8743961352657%"),
    top: hp("3.551912568306008%")
  },
  ImageBackground_I407_1182_341_179: {
    flexGrow: 1,
    width: wp("5.314009661835748%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.845410628019327%"),
    top: hp("4.030054644808743%")
  },
  ImageBackground_I407_1182_341_260: {
    flexGrow: 1,
    width: wp("17.391304347826086%"),
    height: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.130434782608695%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_I407_1182_341_177: {
    flexGrow: 1,
    width: wp("5.314009661835748%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.49275362318839%"),
    top: hp("4.234972677595621%")
  },
  ImageBackground_I407_1182_341_178: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.77777777777777%"),
    top: hp("3.551912568306008%")
  },
  ImageBackground_I407_1182_341_176: {
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
