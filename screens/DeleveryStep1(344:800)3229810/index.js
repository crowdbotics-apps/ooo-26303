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
      <View style={styles.View_344_801}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bad/eb04/5e43243a2cb902e20ef6ad663b93436a"
          }}
          style={styles.ImageBackground_I344_801_341_642}
        />
        <View style={styles.View_I344_801_341_789}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2c1/0833/d6d4060014b7f190bab41e868dc761ed"
            }}
            style={styles.ImageBackground_I344_801_341_789_10_142}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf79/ed7b/46268746c56de1b5dbc375c72afdb50e"
            }}
            style={styles.ImageBackground_I344_801_341_789_10_148}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cba4/0abf/ccfff56a185a3e2c8a6ce71478a2ca29"
            }}
            style={styles.ImageBackground_I344_801_341_789_10_149}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cba4/0abf/ccfff56a185a3e2c8a6ce71478a2ca29"
            }}
            style={styles.ImageBackground_I344_801_341_789_10_152}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61d4/87aa/c375f27ef59d269ef0351542b38a27a1"
            }}
            style={styles.ImageBackground_I344_801_341_789_10_155}
          />
        </View>
        <View style={styles.View_I344_801_341_790}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68b4/f149/4d5ff23a064e26f6b700f841d56de739"
            }}
            style={styles.ImageBackground_I344_801_341_791}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/435a/9b0f/2b03d2889d30e28c3b77bc8dfbc8c885"
            }}
            style={styles.ImageBackground_I344_801_341_793}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/937c/e77c/3532f7395042563bd9d19953336b573c"
            }}
            style={styles.ImageBackground_I344_801_341_794}
          />
        </View>
      </View>
      <View style={styles.View_344_802}>
        <View style={styles.View_344_803}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4f7/fe67/ee816a60180231140cc512817fe7b777"
            }}
            style={styles.ImageBackground_401_66}
          />
          <View style={styles.View_344_804}>
            <Text style={styles.Text_344_804}>Step 1: delevery options</Text>
          </View>
        </View>
        <View style={styles.View_344_805}>
          <View style={styles.View_344_806}>
            <Text style={styles.Text_344_806}> offer stay alive for :</Text>
          </View>
          <View style={styles.View_344_807}>
            <View style={styles.View_I344_807_341_1713}>
              <Text style={styles.Text_I344_807_341_1713}>
                {" "}
                how long your offer stay on waiting list
              </Text>
            </View>
            <View style={styles.View_I344_807_341_1794}>
              <View style={styles.View_I344_807_341_1794_341_1776}>
                <View style={styles.View_I344_807_341_1794_341_1776_341_1774}>
                  <Text style={styles.Text_I344_807_341_1794_341_1776_341_1774}>
                    -
                  </Text>
                </View>
              </View>
              <View style={styles.View_I344_807_341_1794_341_1779}>
                <View style={styles.View_I344_807_341_1794_341_1779_341_1772}>
                  <Text style={styles.Text_I344_807_341_1794_341_1779_341_1772}>
                    00:30
                  </Text>
                </View>
              </View>
              <View style={styles.View_I344_807_341_1794_341_1780}>
                <View style={styles.View_I344_807_341_1794_341_1780_341_1774}>
                  <Text style={styles.Text_I344_807_341_1794_341_1780_341_1774}>
                    +
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_344_808}>
            <Text style={styles.Text_344_808}> deliver time : </Text>
          </View>
          <View style={styles.View_344_809}>
            <View style={styles.View_I344_809_341_1713}>
              <Text style={styles.Text_I344_809_341_1713}>
                maximum time to deliver the product
              </Text>
            </View>
            <View style={styles.View_I344_809_341_1794}>
              <View style={styles.View_I344_809_341_1794_341_1776}>
                <View style={styles.View_I344_809_341_1794_341_1776_341_1774}>
                  <Text style={styles.Text_I344_809_341_1794_341_1776_341_1774}>
                    -
                  </Text>
                </View>
              </View>
              <View style={styles.View_I344_809_341_1794_341_1779}>
                <View style={styles.View_I344_809_341_1794_341_1779_341_1772}>
                  <Text style={styles.Text_I344_809_341_1794_341_1779_341_1772}>
                    00:30
                  </Text>
                </View>
              </View>
              <View style={styles.View_I344_809_341_1794_341_1780}>
                <View style={styles.View_I344_809_341_1794_341_1780_341_1774}>
                  <Text style={styles.Text_I344_809_341_1794_341_1780_341_1774}>
                    +
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_344_810}>
            <Text style={styles.Text_344_810}> Tip</Text>
          </View>
          <View style={styles.View_344_811}>
            <View style={styles.View_I344_811_341_1713}>
              <Text style={styles.Text_I344_811_341_1713}>
                you have to pay the delivery right?
              </Text>
            </View>
            <View style={styles.View_I344_811_341_1794}>
              <View style={styles.View_I344_811_341_1794_341_1776}>
                <View style={styles.View_I344_811_341_1794_341_1776_341_1774}>
                  <Text style={styles.Text_I344_811_341_1794_341_1776_341_1774}>
                    -
                  </Text>
                </View>
              </View>
              <View style={styles.View_I344_811_341_1794_341_1779}>
                <View style={styles.View_I344_811_341_1794_341_1779_341_1772}>
                  <Text style={styles.Text_I344_811_341_1794_341_1779_341_1772}>
                    200 Dzd
                  </Text>
                </View>
              </View>
              <View style={styles.View_I344_811_341_1794_341_1780}>
                <View style={styles.View_I344_811_341_1794_341_1780_341_1774}>
                  <Text style={styles.Text_I344_811_341_1794_341_1780_341_1774}>
                    +
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_344_812}>
            <Text style={styles.Text_344_812}> distance</Text>
          </View>
          <View style={styles.View_344_813}>
            <View style={styles.View_I344_813_341_1713}>
              <Text style={styles.Text_I344_813_341_1713}>
                how far your order can be annonced
              </Text>
            </View>
            <View style={styles.View_I344_813_341_1794}>
              <View style={styles.View_I344_813_341_1794_341_1776}>
                <View style={styles.View_I344_813_341_1794_341_1776_341_1774}>
                  <Text style={styles.Text_I344_813_341_1794_341_1776_341_1774}>
                    -
                  </Text>
                </View>
              </View>
              <View style={styles.View_I344_813_341_1794_341_1779}>
                <View style={styles.View_I344_813_341_1794_341_1779_341_1772}>
                  <Text style={styles.Text_I344_813_341_1794_341_1779_341_1772}>
                    200 M
                  </Text>
                </View>
              </View>
              <View style={styles.View_I344_813_341_1794_341_1780}>
                <View style={styles.View_I344_813_341_1794_341_1780_341_1774}>
                  <Text style={styles.Text_I344_813_341_1794_341_1780_341_1774}>
                    +
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_344_814}>
          <View style={styles.View_344_815}>
            <View style={styles.View_I344_815_341_1866}>
              <Text style={styles.Text_I344_815_341_1866}>Next</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77d9/c75c/8f71f9ef4b6c4ffa365e05bda871e44a"
              }}
              style={styles.ImageBackground_I344_815_341_1868}
            />
          </View>
          <View style={styles.View_344_816}>
            <Text style={styles.Text_344_816}>
              Please enable Gps and press on verify
            </Text>
          </View>
          <View style={styles.View_344_817}>
            <Text style={styles.Text_344_817}>
              Notice: we need your location to in order to deliver our services
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_344_818}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd15/55c6/63341221ff30be1735811c044f45a1d9"
          }}
          style={styles.ImageBackground_I344_818_341_180}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0af1/bfaf/4f3ce786061504b8b01404d70a05ea87"
          }}
          style={styles.ImageBackground_I344_818_341_181}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a35/f51b/e56b1fb5002149255a1cab29bb055b47"
          }}
          style={styles.ImageBackground_I344_818_341_179}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd7c/4081/eafbcfb77a6b923c75af49bf653f221a"
          }}
          style={styles.ImageBackground_I344_818_341_260}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd15/55c6/63341221ff30be1735811c044f45a1d9"
          }}
          style={styles.ImageBackground_I344_818_341_177}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0af1/bfaf/4f3ce786061504b8b01404d70a05ea87"
          }}
          style={styles.ImageBackground_I344_818_341_178}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a35/f51b/e56b1fb5002149255a1cab29bb055b47"
          }}
          style={styles.ImageBackground_I344_818_341_176}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_344_801: {
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
  ImageBackground_I344_801_341_642: {
    flexGrow: 1,
    width: wp("7.995891110332693%"),
    height: hp("4.277829133747706%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.4129972197318987%")
  },
  View_I344_801_341_789: {
    flexGrow: 1,
    width: wp("24.154589371980677%"),
    height: hp("6.967144325131276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.77566896890097%"),
    top: hp("0.06833936347336067%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I344_801_341_789_10_142: {
    flexGrow: 1,
    width: wp("24.154589371980677%"),
    height: hp("6.967144325131276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I344_801_341_789_10_148: {
    flexGrow: 1,
    width: wp("3.3815989747715456%"),
    height: hp("3.2786465733429124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.835630849939605%"),
    top: hp("0.6830601092896176%")
  },
  ImageBackground_I344_801_341_789_10_149: {
    flexGrow: 1,
    width: wp("1.207714034739324%"),
    height: hp("3.141974360565019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.49734865640096%"),
    top: hp("0.819672131147541%")
  },
  ImageBackground_I344_801_341_789_10_152: {
    flexGrow: 1,
    width: wp("1.207714034739324%"),
    height: hp("3.141974360565019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.178626019021742%"),
    top: hp("0.819672131147541%")
  },
  ImageBackground_I344_801_341_789_10_155: {
    flexGrow: 1,
    width: wp("3.140056536393465%"),
    height: hp("2.0491540106267876%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.149522569444443%"),
    top: hp("1.9125182771943305%")
  },
  View_I344_801_341_790: {
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
  ImageBackground_I344_801_341_791: {
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
  ImageBackground_I344_801_341_793: {
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
  ImageBackground_I344_801_341_794: {
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
  View_344_802: {
    width: wp("85.02415458937197%"),
    minWidth: wp("85.02415458937197%"),
    height: hp("88.11475409836066%"),
    minHeight: hp("88.11475409836066%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("15.915300546448089%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_344_803: {
    width: wp("85.02415458937197%"),
    minWidth: wp("85.02415458937197%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_401_66: {
    width: wp("19.7701643054612%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.62697671346618%")
  },
  View_344_804: {
    width: wp("85.02415458937197%"),
    minWidth: wp("85.02415458937197%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.644808743169397%")
  },
  Text_344_804: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 16,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_344_805: {
    width: wp("85.02415458937197%"),
    minWidth: wp("85.02415458937197%"),
    height: hp("52.459016393442624%"),
    minHeight: hp("52.459016393442624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.021857923497267%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_344_806: {
    width: wp("85.02415458937197%"),
    minWidth: wp("85.02415458937197%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.2786885245901622%")
  },
  Text_344_806: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_344_807: {
    width: wp("57.48792270531401%"),
    minWidth: wp("57.48792270531401%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.768115942028984%"),
    top: hp("6.967213114754099%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_807_341_1713: {
    flexGrow: 1,
    width: wp("57.48792270531401%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I344_807_341_1713: {
    color: "rgba(185, 195, 209, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_807_341_1794: {
    flexGrow: 1,
    width: wp("41.30434782608695%"),
    height: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.09178743961353%"),
    top: hp("3.0054644808743163%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_807_341_1794_341_1776: {
    flexGrow: 1,
    width: wp("7.729468599033816%"),
    height: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(209, 207, 213, 1)"
  },
  View_I344_807_341_1794_341_1776_341_1774: {
    flexGrow: 1,
    width: wp("1.6908212560386473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.019323671497581%"),
    top: hp("0.9562841530054627%")
  },
  Text_I344_807_341_1794_341_1776_341_1774: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.36,
    textTransform: "none"
  },
  View_I344_807_341_1794_341_1779: {
    flexGrow: 1,
    width: wp("25.845410628019323%"),
    height: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033815%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_807_341_1794_341_1779_341_1772: {
    flexGrow: 1,
    width: wp("25.845410628019323%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I344_807_341_1794_341_1779_341_1772: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_807_341_1794_341_1780: {
    flexGrow: 1,
    width: wp("7.729468599033816%"),
    height: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.57487922705314%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 120, 84, 1)"
  },
  View_I344_807_341_1794_341_1780_341_1774: {
    flexGrow: 1,
    width: wp("2.4154589371980677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.65700483091787%"),
    top: hp("0.9562841530054627%")
  },
  Text_I344_807_341_1794_341_1780_341_1774: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_344_808: {
    width: wp("85.02415458937197%"),
    minWidth: wp("85.02415458937197%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.437158469945356%")
  },
  Text_344_808: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_344_809: {
    width: wp("54.347826086956516%"),
    minWidth: wp("54.347826086956516%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.33816425120773%"),
    top: hp("18.442622950819672%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_809_341_1713: {
    flexGrow: 1,
    width: wp("54.347826086956516%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I344_809_341_1713: {
    color: "rgba(185, 195, 209, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_809_341_1794: {
    flexGrow: 1,
    width: wp("41.30434782608695%"),
    height: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.521739130434785%"),
    top: hp("3.0054644808743163%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_809_341_1794_341_1776: {
    flexGrow: 1,
    width: wp("7.729468599033816%"),
    height: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(209, 207, 213, 1)"
  },
  View_I344_809_341_1794_341_1776_341_1774: {
    flexGrow: 1,
    width: wp("1.6908212560386473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.019323671497581%"),
    top: hp("0.9562841530054698%")
  },
  Text_I344_809_341_1794_341_1776_341_1774: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.36,
    textTransform: "none"
  },
  View_I344_809_341_1794_341_1779: {
    flexGrow: 1,
    width: wp("25.845410628019323%"),
    height: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033815%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_809_341_1794_341_1779_341_1772: {
    flexGrow: 1,
    width: wp("25.845410628019323%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I344_809_341_1794_341_1779_341_1772: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_809_341_1794_341_1780: {
    flexGrow: 1,
    width: wp("7.729468599033816%"),
    height: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.57487922705314%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 120, 84, 1)"
  },
  View_I344_809_341_1794_341_1780_341_1774: {
    flexGrow: 1,
    width: wp("2.4154589371980677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.65700483091787%"),
    top: hp("0.9562841530054698%")
  },
  Text_I344_809_341_1794_341_1780_341_1774: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_344_810: {
    width: wp("85.02415458937197%"),
    minWidth: wp("85.02415458937197%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.91256830601093%")
  },
  Text_344_810: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_344_811: {
    width: wp("50.24154589371981%"),
    minWidth: wp("50.24154589371981%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.391304347826086%"),
    top: hp("30.054644808743166%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_811_341_1713: {
    flexGrow: 1,
    width: wp("50.24154589371981%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I344_811_341_1713: {
    color: "rgba(185, 195, 209, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_811_341_1794: {
    flexGrow: 1,
    width: wp("41.30434782608695%"),
    height: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.468599033816428%"),
    top: hp("3.0054644808743234%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_811_341_1794_341_1776: {
    flexGrow: 1,
    width: wp("7.729468599033816%"),
    height: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(209, 207, 213, 1)"
  },
  View_I344_811_341_1794_341_1776_341_1774: {
    flexGrow: 1,
    width: wp("1.6908212560386473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.019323671497581%"),
    top: hp("0.9562841530054627%")
  },
  Text_I344_811_341_1794_341_1776_341_1774: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.36,
    textTransform: "none"
  },
  View_I344_811_341_1794_341_1779: {
    flexGrow: 1,
    width: wp("25.845410628019323%"),
    height: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033815%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_811_341_1794_341_1779_341_1772: {
    flexGrow: 1,
    width: wp("25.845410628019323%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I344_811_341_1794_341_1779_341_1772: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_811_341_1794_341_1780: {
    flexGrow: 1,
    width: wp("7.729468599033816%"),
    height: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.57487922705314%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 120, 84, 1)"
  },
  View_I344_811_341_1794_341_1780_341_1774: {
    flexGrow: 1,
    width: wp("2.4154589371980677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.65700483091787%"),
    top: hp("0.9562841530054627%")
  },
  Text_I344_811_341_1794_341_1780_341_1774: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_344_812: {
    width: wp("85.02415458937197%"),
    minWidth: wp("85.02415458937197%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.52459016393442%")
  },
  Text_344_812: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_344_813: {
    width: wp("52.41545893719807%"),
    minWidth: wp("52.41545893719807%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.304347826086957%"),
    top: hp("41.66666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_813_341_1713: {
    flexGrow: 1,
    width: wp("52.41545893719807%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I344_813_341_1713: {
    color: "rgba(185, 195, 209, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_813_341_1794: {
    flexGrow: 1,
    width: wp("41.30434782608695%"),
    height: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555557%"),
    top: hp("3.0054644808743234%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_813_341_1794_341_1776: {
    flexGrow: 1,
    width: wp("7.729468599033816%"),
    height: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(209, 207, 213, 1)"
  },
  View_I344_813_341_1794_341_1776_341_1774: {
    flexGrow: 1,
    width: wp("1.6908212560386473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.019323671497581%"),
    top: hp("0.9562841530054556%")
  },
  Text_I344_813_341_1794_341_1776_341_1774: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.36,
    textTransform: "none"
  },
  View_I344_813_341_1794_341_1779: {
    flexGrow: 1,
    width: wp("25.845410628019323%"),
    height: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033815%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_813_341_1794_341_1779_341_1772: {
    flexGrow: 1,
    width: wp("25.845410628019323%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I344_813_341_1794_341_1779_341_1772: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_813_341_1794_341_1780: {
    flexGrow: 1,
    width: wp("7.729468599033816%"),
    height: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.57487922705314%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 120, 84, 1)"
  },
  View_I344_813_341_1794_341_1780_341_1774: {
    flexGrow: 1,
    width: wp("2.4154589371980677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.65700483091787%"),
    top: hp("0.9562841530054556%")
  },
  Text_I344_813_341_1794_341_1780_341_1774: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_344_814: {
    width: wp("71.73913043478261%"),
    minWidth: wp("71.73913043478261%"),
    height: hp("19.53551912568306%"),
    minHeight: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.642512077294686%"),
    top: hp("68.57923497267758%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_344_815: {
    width: wp("71.73913043478261%"),
    minWidth: wp("71.73913043478261%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 120, 84, 1)"
  },
  View_I344_815_341_1866: {
    flexGrow: 1,
    width: wp("55.434782608695656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("2.732240437158481%")
  },
  Text_I344_815_341_1866: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I344_815_341_1868: {
    flexGrow: 1,
    width: wp("4.2270531400966185%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.68115942028985%"),
    top: hp("3.0054644808743234%")
  },
  View_344_816: {
    width: wp("70.04830917874396%"),
    minWidth: wp("70.04830917874396%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.845410628019323%"),
    top: hp("10.245901639344268%")
  },
  Text_344_816: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_344_817: {
    width: wp("71.01449275362319%"),
    minWidth: wp("71.01449275362319%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.36231884057971087%"),
    top: hp("14.344262295081975%")
  },
  Text_344_817: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_344_818: {
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
  ImageBackground_I344_818_341_180: {
    flexGrow: 1,
    width: wp("5.314009661835748%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("4.234972677595621%")
  },
  ImageBackground_I344_818_341_181: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.8743961352657%"),
    top: hp("3.551912568306008%")
  },
  ImageBackground_I344_818_341_179: {
    flexGrow: 1,
    width: wp("5.314009661835748%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.845410628019327%"),
    top: hp("4.030054644808743%")
  },
  ImageBackground_I344_818_341_260: {
    flexGrow: 1,
    width: wp("17.391304347826086%"),
    height: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.130434782608695%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_I344_818_341_177: {
    flexGrow: 1,
    width: wp("5.314009661835748%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.49275362318839%"),
    top: hp("4.234972677595621%")
  },
  ImageBackground_I344_818_341_178: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.77777777777777%"),
    top: hp("3.551912568306008%")
  },
  ImageBackground_I344_818_341_176: {
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
