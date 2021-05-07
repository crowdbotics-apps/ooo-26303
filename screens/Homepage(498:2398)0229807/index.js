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
      <View style={styles.View_498_2399}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9606/ab9d/b892c5d360adff849262c03c67e9a2a1"
          }}
          style={styles.ImageBackground_I498_2399_4_8}
        />
        <View style={styles.View_I498_2399_341_644}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b7c/b23f/8dc99a37a2098f430093f8d7a655683e"
            }}
            style={styles.ImageBackground_I498_2399_341_644_10_142}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf79/ed7b/46268746c56de1b5dbc375c72afdb50e"
            }}
            style={styles.ImageBackground_I498_2399_341_644_10_148}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cba4/0abf/ccfff56a185a3e2c8a6ce71478a2ca29"
            }}
            style={styles.ImageBackground_I498_2399_341_644_10_149}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cba4/0abf/ccfff56a185a3e2c8a6ce71478a2ca29"
            }}
            style={styles.ImageBackground_I498_2399_341_644_10_152}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61d4/87aa/c375f27ef59d269ef0351542b38a27a1"
            }}
            style={styles.ImageBackground_I498_2399_341_644_10_155}
          />
        </View>
        <View style={styles.View_I498_2399_341_166}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68b4/f149/4d5ff23a064e26f6b700f841d56de739"
            }}
            style={styles.ImageBackground_I498_2399_341_167}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/435a/9b0f/2b03d2889d30e28c3b77bc8dfbc8c885"
            }}
            style={styles.ImageBackground_I498_2399_341_169}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/937c/e77c/3532f7395042563bd9d19953336b573c"
            }}
            style={styles.ImageBackground_I498_2399_341_170}
          />
        </View>
      </View>
      <View style={styles.View_498_2400}>
        <View style={styles.View_I498_2400_10_140}>
          <Text style={styles.Text_I498_2400_10_140}>ex : milk 1l</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af29/9410/275f2545412c1305964aabd255ef9aca"
          }}
          style={styles.ImageBackground_I498_2400_10_107}
        />
      </View>
      <View style={styles.View_498_2401}>
        <Text style={styles.Text_498_2401}>Categories</Text>
      </View>
      <View style={styles.View_498_2402}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d993/3358/912a05f7e1f8d2f98bde29036d5a7bdd"
          }}
          style={styles.ImageBackground_I498_2402_6_18}
        />
        <View style={styles.View_I498_2402_6_11}>
          <Text style={styles.Text_I498_2402_6_11}>Pastries</Text>
        </View>
        <View style={styles.View_I498_2402_6_12}>
          <Text style={styles.Text_I498_2402_6_12}>Pastries</Text>
        </View>
        <View style={styles.View_I498_2402_6_13}>
          <Text style={styles.Text_I498_2402_6_13}>Pastries</Text>
        </View>
        <View style={styles.View_I498_2402_6_14}>
          <Text style={styles.Text_I498_2402_6_14}>Pastries</Text>
        </View>
        <View style={styles.View_I498_2402_6_15}>
          <Text style={styles.Text_I498_2402_6_15}>Pastries</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ed3/ad23/188bbe1da392f9b8c985019bbd0bfb0a"
          }}
          style={styles.ImageBackground_I498_2402_6_17}
        />
      </View>
      <View style={styles.View_498_2267}>
        <View style={styles.View_498_2268}>
          <View style={styles.View_498_2269}>
            <View style={styles.View_I498_2269_440_1268}>
              <View style={styles.View_I498_2269_440_1269} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c7e/4125/1ffa64c73d137fbbb4c2630550e884a7"
                }}
                style={styles.ImageBackground_I498_2269_440_1270}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a21a/da94/382577fe03610295a635b1f49b136778"
                }}
                style={styles.ImageBackground_I498_2269_440_1271}
              />
            </View>
            <View style={styles.View_I498_2269_440_1272}>
              <Text style={styles.Text_I498_2269_440_1272}>Candia</Text>
            </View>
            <View style={styles.View_I498_2269_440_1273}>
              <Text style={styles.Text_I498_2269_440_1273}>30-180 Dzd</Text>
            </View>
          </View>
          <View style={styles.View_498_2270}>
            <View style={styles.View_I498_2270_440_1268}>
              <View style={styles.View_I498_2270_440_1269} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c7e/4125/1ffa64c73d137fbbb4c2630550e884a7"
                }}
                style={styles.ImageBackground_I498_2270_440_1270}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a21a/da94/382577fe03610295a635b1f49b136778"
                }}
                style={styles.ImageBackground_I498_2270_440_1271}
              />
            </View>
            <View style={styles.View_I498_2270_440_1272}>
              <Text style={styles.Text_I498_2270_440_1272}>Candia</Text>
            </View>
            <View style={styles.View_I498_2270_440_1273}>
              <Text style={styles.Text_I498_2270_440_1273}>30-180 Dzd</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_498_2271}>
          <View style={styles.View_498_2272}>
            <View style={styles.View_I498_2272_440_1268}>
              <View style={styles.View_I498_2272_440_1269} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c7e/4125/1ffa64c73d137fbbb4c2630550e884a7"
                }}
                style={styles.ImageBackground_I498_2272_440_1270}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a21a/da94/382577fe03610295a635b1f49b136778"
                }}
                style={styles.ImageBackground_I498_2272_440_1271}
              />
            </View>
            <View style={styles.View_I498_2272_440_1272}>
              <Text style={styles.Text_I498_2272_440_1272}>Candia</Text>
            </View>
            <View style={styles.View_I498_2272_440_1273}>
              <Text style={styles.Text_I498_2272_440_1273}>30-180 Dzd</Text>
            </View>
          </View>
          <View style={styles.View_498_2273}>
            <View style={styles.View_I498_2273_440_1268}>
              <View style={styles.View_I498_2273_440_1269} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c7e/4125/1ffa64c73d137fbbb4c2630550e884a7"
                }}
                style={styles.ImageBackground_I498_2273_440_1270}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a21a/da94/382577fe03610295a635b1f49b136778"
                }}
                style={styles.ImageBackground_I498_2273_440_1271}
              />
            </View>
            <View style={styles.View_I498_2273_440_1272}>
              <Text style={styles.Text_I498_2273_440_1272}>Candia</Text>
            </View>
            <View style={styles.View_I498_2273_440_1273}>
              <Text style={styles.Text_I498_2273_440_1273}>30-180 Dzd</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_498_2404}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd15/55c6/63341221ff30be1735811c044f45a1d9"
          }}
          style={styles.ImageBackground_I498_2404_341_180}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0af1/bfaf/4f3ce786061504b8b01404d70a05ea87"
          }}
          style={styles.ImageBackground_I498_2404_341_181}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a35/f51b/e56b1fb5002149255a1cab29bb055b47"
          }}
          style={styles.ImageBackground_I498_2404_341_179}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd7c/4081/eafbcfb77a6b923c75af49bf653f221a"
          }}
          style={styles.ImageBackground_I498_2404_341_260}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd15/55c6/63341221ff30be1735811c044f45a1d9"
          }}
          style={styles.ImageBackground_I498_2404_341_177}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0af1/bfaf/4f3ce786061504b8b01404d70a05ea87"
          }}
          style={styles.ImageBackground_I498_2404_341_178}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a35/f51b/e56b1fb5002149255a1cab29bb055b47"
          }}
          style={styles.ImageBackground_I498_2404_341_176}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_498_2399: {
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
  ImageBackground_I498_2399_4_8: {
    flexGrow: 1,
    width: wp("6.159420289855073%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.3907103825136615%")
  },
  View_I498_2399_341_644: {
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
  ImageBackground_I498_2399_341_644_10_142: {
    flexGrow: 1,
    width: wp("24.154589371980677%"),
    height: hp("6.967144325131276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I498_2399_341_644_10_148: {
    flexGrow: 1,
    width: wp("3.3815989747715456%"),
    height: hp("3.2786465733429124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.835512907608695%"),
    top: hp("0.6830601092896176%")
  },
  ImageBackground_I498_2399_341_644_10_149: {
    flexGrow: 1,
    width: wp("1.207714034739324%"),
    height: hp("3.141974360565019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.497348656400973%"),
    top: hp("0.819672131147541%")
  },
  ImageBackground_I498_2399_341_644_10_152: {
    flexGrow: 1,
    width: wp("1.207714034739324%"),
    height: hp("3.141974360565019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.178743961352659%"),
    top: hp("0.819672131147541%")
  },
  ImageBackground_I498_2399_341_644_10_155: {
    flexGrow: 1,
    width: wp("3.140056536393465%"),
    height: hp("2.0491540106267876%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.149522569444443%"),
    top: hp("1.9125182771943305%")
  },
  View_I498_2399_341_166: {
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
  ImageBackground_I498_2399_341_167: {
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
  ImageBackground_I498_2399_341_169: {
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
  ImageBackground_I498_2399_341_170: {
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
  View_498_2400: {
    width: wp("79.22705314009661%"),
    minWidth: wp("79.22705314009661%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.38647342995169%"),
    top: hp("12.868845788507514%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I498_2400_10_140: {
    flexGrow: 1,
    width: wp("18.59903381642512%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6908212560386477%"),
    top: hp("2.049180327868852%")
  },
  Text_I498_2400_10_140: {
    color: "rgba(224, 224, 224, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I498_2400_10_107: {
    flexGrow: 1,
    width: wp("7.971014492753622%"),
    height: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.56521739130434%"),
    top: hp("1.0928961748633892%")
  },
  View_498_2401: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("22.595631750554986%")
  },
  Text_498_2401: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 31,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_498_2402: {
    width: wp("88.16425120772948%"),
    minWidth: wp("88.16425120772948%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.917874396135265%"),
    top: hp("31.775952948898567%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I498_2402_6_18: {
    flexGrow: 1,
    width: wp("0.966183574879227%"),
    height: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896167%")
  },
  View_I498_2402_6_11: {
    flexGrow: 1,
    width: wp("13.768115942028986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169085%"),
    top: hp("0%")
  },
  Text_I498_2402_6_11: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I498_2402_6_12: {
    flexGrow: 1,
    width: wp("13.768115942028986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.531400966183575%"),
    top: hp("0%")
  },
  Text_I498_2402_6_12: {
    color: "rgba(185, 195, 209, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I498_2402_6_13: {
    flexGrow: 1,
    width: wp("13.768115942028986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.19806763285024%"),
    top: hp("0%")
  },
  Text_I498_2402_6_13: {
    color: "rgba(185, 195, 209, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I498_2402_6_14: {
    flexGrow: 1,
    width: wp("13.768115942028986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.864734299516904%"),
    top: hp("0%")
  },
  Text_I498_2402_6_14: {
    color: "rgba(185, 195, 209, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I498_2402_6_15: {
    flexGrow: 1,
    width: wp("13.768115942028986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.53140096618357%"),
    top: hp("0%")
  },
  Text_I498_2402_6_15: {
    color: "rgba(185, 195, 209, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I498_2402_6_17: {
    flexGrow: 1,
    width: wp("0.966183574879227%"),
    height: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.19806763285025%"),
    top: hp("0.6830601092896167%")
  },
  View_498_2267: {
    width: wp("91.78743961352657%"),
    minWidth: wp("91.78743961352657%"),
    height: hp("68.30601092896174%"),
    minHeight: hp("68.30601092896174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("37.40437825520833%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_498_2268: {
    width: wp("91.78743961352657%"),
    minWidth: wp("91.78743961352657%"),
    height: hp("35.38251366120219%"),
    minHeight: hp("35.38251366120219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_498_2269: {
    width: wp("43.47826086956522%"),
    minWidth: wp("43.47826086956522%"),
    height: hp("35.38251366120219%"),
    minHeight: hp("35.38251366120219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I498_2269_440_1268: {
    flexGrow: 1,
    width: wp("43.47826086956522%"),
    height: hp("27.049180327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I498_2269_440_1269: {
    width: wp("43.47826086956522%"),
    height: hp("27.049180327868854%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 229, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_I498_2269_440_1270: {
    width: wp("18.527667649126283%"),
    height: hp("16.47054328293097%"),
    top: hp("4.686732891478833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.59883567330918%"),
    resizeMode: "cover"
  },
  ImageBackground_I498_2269_440_1271: {
    width: wp("5.040814680753699%"),
    minWidth: wp("5.040814680753699%"),
    height: hp("2.343974608541186%"),
    minHeight: hp("2.343974608541186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.98956446256039%"),
    top: hp("2.0091239220457737%")
  },
  View_I498_2269_440_1272: {
    flexGrow: 1,
    width: wp("35.02415458937198%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28.415300546448094%")
  },
  Text_I498_2269_440_1272: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I498_2269_440_1273: {
    flexGrow: 1,
    width: wp("19.082125603864732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.51366120218579%")
  },
  Text_I498_2269_440_1273: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_498_2270: {
    width: wp("43.47826086956522%"),
    minWidth: wp("43.47826086956522%"),
    height: hp("35.38251366120219%"),
    minHeight: hp("35.38251366120219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.309178743961354%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I498_2270_440_1268: {
    flexGrow: 1,
    width: wp("43.47826086956522%"),
    height: hp("27.049180327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I498_2270_440_1269: {
    width: wp("43.47826086956522%"),
    height: hp("27.049180327868854%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 229, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_I498_2270_440_1270: {
    width: wp("18.527667649126283%"),
    height: hp("16.47054328293097%"),
    top: hp("4.686732891478833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.598835673309182%"),
    resizeMode: "cover"
  },
  ImageBackground_I498_2270_440_1271: {
    width: wp("5.040814680753699%"),
    minWidth: wp("5.040814680753699%"),
    height: hp("2.343974608541186%"),
    minHeight: hp("2.343974608541186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.98956446256038%"),
    top: hp("2.0091239220457737%")
  },
  View_I498_2270_440_1272: {
    flexGrow: 1,
    width: wp("35.02415458937198%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28.415300546448094%")
  },
  Text_I498_2270_440_1272: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I498_2270_440_1273: {
    flexGrow: 1,
    width: wp("19.082125603864732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.51366120218579%")
  },
  Text_I498_2270_440_1273: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_498_2271: {
    width: wp("91.78743961352657%"),
    minWidth: wp("91.78743961352657%"),
    height: hp("35.38251366120219%"),
    minHeight: hp("35.38251366120219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.11475409836066%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_498_2272: {
    width: wp("43.47826086956522%"),
    minWidth: wp("43.47826086956522%"),
    height: hp("35.38251366120219%"),
    minHeight: hp("35.38251366120219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I498_2272_440_1268: {
    flexGrow: 1,
    width: wp("43.47826086956522%"),
    height: hp("27.049180327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I498_2272_440_1269: {
    width: wp("43.47826086956522%"),
    height: hp("27.049180327868854%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 229, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_I498_2272_440_1270: {
    width: wp("18.527667649126283%"),
    height: hp("16.47054328293097%"),
    top: hp("4.686732891478826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.59883567330918%"),
    resizeMode: "cover"
  },
  ImageBackground_I498_2272_440_1271: {
    width: wp("5.040814680753699%"),
    minWidth: wp("5.040814680753699%"),
    height: hp("2.343974608541186%"),
    minHeight: hp("2.343974608541186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.98956446256039%"),
    top: hp("2.0091239220457595%")
  },
  View_I498_2272_440_1272: {
    flexGrow: 1,
    width: wp("35.02415458937198%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28.41530054644808%")
  },
  Text_I498_2272_440_1272: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I498_2272_440_1273: {
    flexGrow: 1,
    width: wp("19.082125603864732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.5136612021858%")
  },
  Text_I498_2272_440_1273: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_498_2273: {
    width: wp("43.47826086956522%"),
    minWidth: wp("43.47826086956522%"),
    height: hp("35.38251366120219%"),
    minHeight: hp("35.38251366120219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.309178743961354%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I498_2273_440_1268: {
    flexGrow: 1,
    width: wp("43.47826086956522%"),
    height: hp("27.049180327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I498_2273_440_1269: {
    width: wp("43.47826086956522%"),
    height: hp("27.049180327868854%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 229, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_I498_2273_440_1270: {
    width: wp("18.527667649126283%"),
    height: hp("16.47054328293097%"),
    top: hp("4.686732891478826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.598835673309182%"),
    resizeMode: "cover"
  },
  ImageBackground_I498_2273_440_1271: {
    width: wp("5.040814680753699%"),
    minWidth: wp("5.040814680753699%"),
    height: hp("2.343974608541186%"),
    minHeight: hp("2.343974608541186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.98956446256038%"),
    top: hp("2.0091239220457595%")
  },
  View_I498_2273_440_1272: {
    flexGrow: 1,
    width: wp("35.02415458937198%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28.41530054644808%")
  },
  Text_I498_2273_440_1272: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I498_2273_440_1273: {
    flexGrow: 1,
    width: wp("19.082125603864732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.5136612021858%")
  },
  Text_I498_2273_440_1273: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_498_2404: {
    width: wp("95.65217391304348%"),
    minWidth: wp("95.65217391304348%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1739130434782608%"),
    top: hp("108.74316939890711%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I498_2404_341_180: {
    flexGrow: 1,
    width: wp("5.314009661835748%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("4.234972677595621%")
  },
  ImageBackground_I498_2404_341_181: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.8743961352657%"),
    top: hp("3.551912568306008%")
  },
  ImageBackground_I498_2404_341_179: {
    flexGrow: 1,
    width: wp("5.314009661835748%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.845410628019327%"),
    top: hp("4.030054644808729%")
  },
  ImageBackground_I498_2404_341_260: {
    flexGrow: 1,
    width: wp("17.391304347826086%"),
    height: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.130434782608695%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_I498_2404_341_177: {
    flexGrow: 1,
    width: wp("5.314009661835748%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.49275362318839%"),
    top: hp("4.234972677595621%")
  },
  ImageBackground_I498_2404_341_178: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.77777777777777%"),
    top: hp("3.551912568306008%")
  },
  ImageBackground_I498_2404_341_176: {
    flexGrow: 1,
    width: wp("5.314009661835748%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.7487922705314%"),
    top: hp("4.030054644808729%")
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
