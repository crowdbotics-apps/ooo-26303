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
      <View style={styles.View_344_771}>
        <View style={styles.View_I344_771_341_1318}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9606/ab9d/b892c5d360adff849262c03c67e9a2a1"
            }}
            style={styles.ImageBackground_I344_771_341_1318_4_8}
          />
          <View style={styles.View_I344_771_341_1318_341_644}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2c1/0833/d6d4060014b7f190bab41e868dc761ed"
              }}
              style={styles.ImageBackground_I344_771_341_1318_341_644_10_142}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf79/ed7b/46268746c56de1b5dbc375c72afdb50e"
              }}
              style={styles.ImageBackground_I344_771_341_1318_341_644_10_148}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cba4/0abf/ccfff56a185a3e2c8a6ce71478a2ca29"
              }}
              style={styles.ImageBackground_I344_771_341_1318_341_644_10_149}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cba4/0abf/ccfff56a185a3e2c8a6ce71478a2ca29"
              }}
              style={styles.ImageBackground_I344_771_341_1318_341_644_10_152}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61d4/87aa/c375f27ef59d269ef0351542b38a27a1"
              }}
              style={styles.ImageBackground_I344_771_341_1318_341_644_10_155}
            />
          </View>
          <View style={styles.View_I344_771_341_1318_341_166}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68b4/f149/4d5ff23a064e26f6b700f841d56de739"
              }}
              style={styles.ImageBackground_I344_771_341_1318_341_167}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/435a/9b0f/2b03d2889d30e28c3b77bc8dfbc8c885"
              }}
              style={styles.ImageBackground_I344_771_341_1318_341_169}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/937c/e77c/3532f7395042563bd9d19953336b573c"
              }}
              style={styles.ImageBackground_I344_771_341_1318_341_170}
            />
          </View>
        </View>
        <View style={styles.View_I344_771_341_1024}>
          <View style={styles.View_I344_771_341_1024_10_140}>
            <Text style={styles.Text_I344_771_341_1024_10_140}>
              ex : milk 1l
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af29/9410/275f2545412c1305964aabd255ef9aca"
            }}
            style={styles.ImageBackground_I344_771_341_1024_10_107}
          />
        </View>
        <View style={styles.View_I344_771_341_1025}>
          <Text style={styles.Text_I344_771_341_1025}>Categories</Text>
        </View>
        <View style={styles.View_I344_771_341_1026}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d993/3358/912a05f7e1f8d2f98bde29036d5a7bdd"
            }}
            style={styles.ImageBackground_I344_771_341_1026_6_18}
          />
          <View style={styles.View_I344_771_341_1026_6_11}>
            <Text style={styles.Text_I344_771_341_1026_6_11}>Pastries</Text>
          </View>
          <View style={styles.View_I344_771_341_1026_6_12}>
            <Text style={styles.Text_I344_771_341_1026_6_12}>Pastries</Text>
          </View>
          <View style={styles.View_I344_771_341_1026_6_13}>
            <Text style={styles.Text_I344_771_341_1026_6_13}>Pastries</Text>
          </View>
          <View style={styles.View_I344_771_341_1026_6_14}>
            <Text style={styles.Text_I344_771_341_1026_6_14}>Pastries</Text>
          </View>
          <View style={styles.View_I344_771_341_1026_6_15}>
            <Text style={styles.Text_I344_771_341_1026_6_15}>Pastries</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ed3/ad23/188bbe1da392f9b8c985019bbd0bfb0a"
            }}
            style={styles.ImageBackground_I344_771_341_1026_6_17}
          />
        </View>
        <View style={styles.View_I344_771_341_1027}>
          <View style={styles.View_I344_771_341_1027_4_25}>
            <View style={styles.View_I344_771_341_1027_4_21} />
            <View style={styles.View_I344_771_341_1027_4_23} />
          </View>
          <View style={styles.View_I344_771_341_1027_4_26}>
            <View style={styles.View_I344_771_341_1027_341_156}>
              <View style={styles.View_I344_771_341_1027_341_660}>
                <View style={styles.View_I344_771_341_1027_341_660_4_17} />
                <View style={styles.View_I344_771_341_1027_341_660_4_27}>
                  <Text style={styles.Text_I344_771_341_1027_341_660_4_27}>
                    30-180 Dzd
                  </Text>
                </View>
                <View style={styles.View_I344_771_341_1027_341_660_5_2}>
                  <Text style={styles.Text_I344_771_341_1027_341_660_5_2}>
                    Milk
                  </Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad88/bf83/377a7a028c4c226b209d994d356e06a5"
                  }}
                  style={styles.ImageBackground_I344_771_341_1027_341_660_6_1}
                />
              </View>
              <View style={styles.View_I344_771_341_1027_6_25}>
                <View style={styles.View_I344_771_341_1027_6_25_4_17} />
                <View style={styles.View_I344_771_341_1027_6_25_4_27}>
                  <Text style={styles.Text_I344_771_341_1027_6_25_4_27}>
                    30-180 Dzd
                  </Text>
                </View>
                <View style={styles.View_I344_771_341_1027_6_25_5_2}>
                  <Text style={styles.Text_I344_771_341_1027_6_25_5_2}>
                    Milk
                  </Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad88/bf83/377a7a028c4c226b209d994d356e06a5"
                  }}
                  style={styles.ImageBackground_I344_771_341_1027_6_25_6_1}
                />
              </View>
            </View>
            <View style={styles.View_I344_771_341_1027_341_155}>
              <View style={styles.View_I344_771_341_1027_6_30}>
                <View style={styles.View_I344_771_341_1027_6_30_4_17} />
                <View style={styles.View_I344_771_341_1027_6_30_4_27}>
                  <Text style={styles.Text_I344_771_341_1027_6_30_4_27}>
                    30-180 Dzd
                  </Text>
                </View>
                <View style={styles.View_I344_771_341_1027_6_30_5_2}>
                  <Text style={styles.Text_I344_771_341_1027_6_30_5_2}>
                    Milk
                  </Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad88/bf83/377a7a028c4c226b209d994d356e06a5"
                  }}
                  style={styles.ImageBackground_I344_771_341_1027_6_30_6_1}
                />
              </View>
              <View style={styles.View_I344_771_341_1027_6_35}>
                <View style={styles.View_I344_771_341_1027_6_35_4_17} />
                <View style={styles.View_I344_771_341_1027_6_35_4_27}>
                  <Text style={styles.Text_I344_771_341_1027_6_35_4_27}>
                    30-180 Dzd
                  </Text>
                </View>
                <View style={styles.View_I344_771_341_1027_6_35_5_2}>
                  <Text style={styles.Text_I344_771_341_1027_6_35_5_2}>
                    Milk
                  </Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad88/bf83/377a7a028c4c226b209d994d356e06a5"
                  }}
                  style={styles.ImageBackground_I344_771_341_1027_6_35_6_1}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I344_771_341_993}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd15/55c6/63341221ff30be1735811c044f45a1d9"
            }}
            style={styles.ImageBackground_I344_771_341_993_341_180}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0af1/bfaf/4f3ce786061504b8b01404d70a05ea87"
            }}
            style={styles.ImageBackground_I344_771_341_993_341_181}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a35/f51b/e56b1fb5002149255a1cab29bb055b47"
            }}
            style={styles.ImageBackground_I344_771_341_993_341_179}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd7c/4081/eafbcfb77a6b923c75af49bf653f221a"
            }}
            style={styles.ImageBackground_I344_771_341_993_341_260}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd15/55c6/63341221ff30be1735811c044f45a1d9"
            }}
            style={styles.ImageBackground_I344_771_341_993_341_177}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0af1/bfaf/4f3ce786061504b8b01404d70a05ea87"
            }}
            style={styles.ImageBackground_I344_771_341_993_341_178}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a35/f51b/e56b1fb5002149255a1cab29bb055b47"
            }}
            style={styles.ImageBackground_I344_771_341_993_341_176}
          />
        </View>
      </View>
      <View style={styles.View_508_92}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5136/fc7b/10c3d896ad8302c298517e3e8ad048cd"
          }}
          style={styles.ImageBackground_508_93}
        />
        <View style={styles.View_508_94}>
          <View style={styles.View_I508_94_341_348}>
            <View style={styles.View_I508_94_341_348_341_301}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d45a/d445/12967658e5289da9f71dd031ee7bc4c9"
                }}
                style={styles.ImageBackground_I508_94_341_348_38_122}
              />
              <View style={styles.View_I508_94_341_348_38_123}>
                <Text style={styles.Text_I508_94_341_348_38_123}>
                  A bottle of milk
                </Text>
              </View>
            </View>
            <View style={styles.View_I508_94_341_348_344_1341}>
              <View style={styles.View_I508_94_341_348_344_1341_341_1776}>
                <View
                  style={styles.View_I508_94_341_348_344_1341_341_1776_341_1774}
                >
                  <Text
                    style={
                      styles.Text_I508_94_341_348_344_1341_341_1776_341_1774
                    }
                  >
                    -
                  </Text>
                </View>
              </View>
              <View style={styles.View_I508_94_341_348_344_1341_341_1779}>
                <View
                  style={styles.View_I508_94_341_348_344_1341_341_1779_341_1772}
                >
                  <Text
                    style={
                      styles.Text_I508_94_341_348_344_1341_341_1779_341_1772
                    }
                  >
                    x1
                  </Text>
                </View>
              </View>
              <View style={styles.View_I508_94_341_348_344_1341_341_1780}>
                <View
                  style={styles.View_I508_94_341_348_344_1341_341_1780_341_1774}
                >
                  <Text
                    style={
                      styles.Text_I508_94_341_348_344_1341_341_1780_341_1774
                    }
                  >
                    +
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_508_95}>
          <View style={styles.View_508_96}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4771/9d4a/cbdfb2d8b26811c5b25d57e161547c16"
              }}
              style={styles.ImageBackground_508_97}
            />
            <View style={styles.View_508_98}>
              <Text style={styles.Text_508_98}>mark</Text>
            </View>
            <View style={styles.View_508_99}>
              <View style={styles.View_508_100}>
                <View style={styles.View_I508_100_506_2211}>
                  <Text style={styles.Text_I508_100_506_2211}>condia</Text>
                </View>
              </View>
              <View style={styles.View_508_101}>
                <View style={styles.View_I508_101_506_2209}>
                  <Text style={styles.Text_I508_101_506_2209}>Rayzen</Text>
                </View>
              </View>
              <View style={styles.View_508_102}>
                <View style={styles.View_I508_102_506_2211}>
                  <Text style={styles.Text_I508_102_506_2211}>pure milk</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_508_104}>
              <Text style={styles.Text_508_104}>Wieght/volume</Text>
            </View>
            <View style={styles.View_508_105}>
              <View style={styles.View_508_106}>
                <View style={styles.View_I508_106_506_2211}>
                  <Text style={styles.Text_I508_106_506_2211}>1L</Text>
                </View>
              </View>
              <View style={styles.View_508_107}>
                <View style={styles.View_I508_107_506_2209}>
                  <Text style={styles.Text_I508_107_506_2209}>1L</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_508_108}>
              <View style={styles.View_508_109}>
                <Text style={styles.Text_508_109}>Add costume detail</Text>
              </View>
              <View style={styles.View_508_110}>
                <View style={styles.View_508_111} />
                <View style={styles.View_508_112}>
                  <Text style={styles.Text_508_112}>+</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_508_113}>
            <View style={styles.View_I508_113_66_22} />
            <View style={styles.View_I508_113_66_23} />
          </View>
        </View>
        <View style={styles.View_508_114}>
          <View style={styles.View_I508_114_38_149}>
            <Text style={styles.Text_I508_114_38_149}>add to bag</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/275d/778a/4d11309f66113e79920186c238f84bb9"
            }}
            style={styles.ImageBackground_I508_114_38_155}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_344_771: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I344_771_341_1318: {
    flexGrow: 1,
    width: wp("92.27053140096618%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("2.73224043715847%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I344_771_341_1318_4_8: {
    flexGrow: 1,
    width: wp("6.159420289855073%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.3907103825136615%")
  },
  View_I344_771_341_1318_341_644: {
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
  ImageBackground_I344_771_341_1318_341_644_10_142: {
    flexGrow: 1,
    width: wp("24.154589371980677%"),
    height: hp("6.967144325131276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I344_771_341_1318_341_644_10_148: {
    flexGrow: 1,
    width: wp("3.3815989747715456%"),
    height: hp("3.2786465733429124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.835630849939612%"),
    top: hp("0.6830601092896176%")
  },
  ImageBackground_I344_771_341_1318_341_644_10_149: {
    flexGrow: 1,
    width: wp("1.207714034739324%"),
    height: hp("3.141974360565019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.497348656400973%"),
    top: hp("0.819672131147541%")
  },
  ImageBackground_I344_771_341_1318_341_644_10_152: {
    flexGrow: 1,
    width: wp("1.207714034739324%"),
    height: hp("3.141974360565019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.178626019021742%"),
    top: hp("0.819672131147541%")
  },
  ImageBackground_I344_771_341_1318_341_644_10_155: {
    flexGrow: 1,
    width: wp("3.140056536393465%"),
    height: hp("2.0491540106267876%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.149522569444443%"),
    top: hp("1.9125182771943305%")
  },
  View_I344_771_341_1318_341_166: {
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
  ImageBackground_I344_771_341_1318_341_167: {
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
  ImageBackground_I344_771_341_1318_341_169: {
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
  ImageBackground_I344_771_341_1318_341_170: {
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
  View_I344_771_341_1024: {
    flexGrow: 1,
    width: wp("79.22705314009661%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.38647342995169%"),
    top: hp("14.617486338797814%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_771_341_1024_10_140: {
    flexGrow: 1,
    width: wp("18.59903381642512%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6908212560386477%"),
    top: hp("2.04918032786885%")
  },
  Text_I344_771_341_1024_10_140: {
    color: "rgba(224, 224, 224, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I344_771_341_1024_10_107: {
    flexGrow: 1,
    width: wp("7.971014492753622%"),
    height: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.56521739130434%"),
    top: hp("1.0928961748633892%")
  },
  View_I344_771_341_1025: {
    flexGrow: 1,
    width: wp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("26.09289617486339%")
  },
  Text_I344_771_341_1025: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 31,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_771_341_1026: {
    flexGrow: 1,
    width: wp("88.16425120772948%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.917874396135265%"),
    top: hp("37.02185792349727%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I344_771_341_1026_6_18: {
    flexGrow: 1,
    width: wp("0.966183574879227%"),
    height: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896131%")
  },
  View_I344_771_341_1026_6_11: {
    flexGrow: 1,
    width: wp("13.768115942028986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169085%"),
    top: hp("0%")
  },
  Text_I344_771_341_1026_6_11: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_771_341_1026_6_12: {
    flexGrow: 1,
    width: wp("13.768115942028986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.531400966183575%"),
    top: hp("0%")
  },
  Text_I344_771_341_1026_6_12: {
    color: "rgba(185, 195, 209, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_771_341_1026_6_13: {
    flexGrow: 1,
    width: wp("13.768115942028986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.19806763285024%"),
    top: hp("0%")
  },
  Text_I344_771_341_1026_6_13: {
    color: "rgba(185, 195, 209, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_771_341_1026_6_14: {
    flexGrow: 1,
    width: wp("13.768115942028986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.864734299516904%"),
    top: hp("0%")
  },
  Text_I344_771_341_1026_6_14: {
    color: "rgba(185, 195, 209, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_771_341_1026_6_15: {
    flexGrow: 1,
    width: wp("13.768115942028986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.53140096618357%"),
    top: hp("0%")
  },
  Text_I344_771_341_1026_6_15: {
    color: "rgba(185, 195, 209, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I344_771_341_1026_6_17: {
    flexGrow: 1,
    width: wp("0.966183574879227%"),
    height: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.19806763285025%"),
    top: hp("0.6830601092896131%")
  },
  View_I344_771_341_1027: {
    flexGrow: 1,
    width: wp("92.27053140096618%"),
    height: hp("60.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("44.39890710382514%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_771_341_1027_4_25: {
    flexGrow: 1,
    width: wp("1.4492753623188406%"),
    height: hp("57.92349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.57971014492753%"),
    top: hp("0%")
  },
  View_I344_771_341_1027_4_21: {
    width: wp("1.4492753623188406%"),
    minWidth: wp("1.4492753623188406%"),
    height: hp("57.92349726775956%"),
    minHeight: hp("57.92349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 252, 252, 1)",
    borderTopLeftRadius: 4.5,
    borderTopRightRadius: 4.5,
    borderBottomLeftRadius: 4.5,
    borderBottomRightRadius: 4.5
  },
  View_I344_771_341_1027_4_23: {
    width: wp("1.4492753623188406%"),
    minWidth: wp("1.4492753623188406%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 120, 84, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_I344_771_341_1027_4_26: {
    flexGrow: 1,
    width: wp("89.85507246376811%"),
    height: hp("56.69398907103825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.2295081967213122%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_771_341_1027_341_156: {
    width: wp("89.85507246376811%"),
    minWidth: wp("89.85507246376811%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_771_341_1027_341_660: {
    width: wp("42.51207729468599%"),
    minWidth: wp("42.51207729468599%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_771_341_1027_341_660_4_17: {
    flexGrow: 1,
    width: wp("42.51207729468599%"),
    height: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 229, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_I344_771_341_1027_341_660_4_27: {
    flexGrow: 1,
    width: wp("21.497584541062803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.381642512077295%"),
    top: hp("1.2295081967213122%")
  },
  Text_I344_771_341_1027_341_660_4_27: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_771_341_1027_341_660_5_2: {
    flexGrow: 1,
    width: wp("42.028985507246375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.48309178743961345%"),
    top: hp("21.311475409836063%")
  },
  Text_I344_771_341_1027_341_660_5_2: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I344_771_341_1027_341_660_6_1: {
    flexGrow: 1,
    width: wp("18.115942028985508%"),
    height: hp("16.80327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.318840579710145%"),
    top: hp("4.781420765027313%"),
    resizeMode: "cover"
  },
  View_I344_771_341_1027_6_25: {
    width: wp("42.51207729468599%"),
    minWidth: wp("42.51207729468599%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.34299516908213%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_771_341_1027_6_25_4_17: {
    flexGrow: 1,
    width: wp("42.51207729468599%"),
    height: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 229, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_I344_771_341_1027_6_25_4_27: {
    flexGrow: 1,
    width: wp("21.497584541062803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.381642512077285%"),
    top: hp("1.2295081967213122%")
  },
  Text_I344_771_341_1027_6_25_4_27: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_771_341_1027_6_25_5_2: {
    flexGrow: 1,
    width: wp("42.028985507246375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.483091787439605%"),
    top: hp("21.311475409836063%")
  },
  Text_I344_771_341_1027_6_25_5_2: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I344_771_341_1027_6_25_6_1: {
    flexGrow: 1,
    width: wp("18.115942028985508%"),
    height: hp("16.80327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.318840579710141%"),
    top: hp("4.781420765027313%"),
    resizeMode: "cover"
  },
  View_I344_771_341_1027_341_155: {
    width: wp("89.85507246376811%"),
    minWidth: wp("89.85507246376811%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.098360655737707%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_771_341_1027_6_30: {
    width: wp("42.51207729468599%"),
    minWidth: wp("42.51207729468599%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_771_341_1027_6_30_4_17: {
    flexGrow: 1,
    width: wp("42.51207729468599%"),
    height: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 229, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_I344_771_341_1027_6_30_4_27: {
    flexGrow: 1,
    width: wp("21.497584541062803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.381642512077295%"),
    top: hp("1.229508196721298%")
  },
  Text_I344_771_341_1027_6_30_4_27: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_771_341_1027_6_30_5_2: {
    flexGrow: 1,
    width: wp("42.028985507246375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.48309178743961345%"),
    top: hp("21.311475409836063%")
  },
  Text_I344_771_341_1027_6_30_5_2: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I344_771_341_1027_6_30_6_1: {
    flexGrow: 1,
    width: wp("18.115942028985508%"),
    height: hp("16.80327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.318840579710145%"),
    top: hp("4.78142076502732%"),
    resizeMode: "cover"
  },
  View_I344_771_341_1027_6_35: {
    width: wp("42.51207729468599%"),
    minWidth: wp("42.51207729468599%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.34299516908213%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_771_341_1027_6_35_4_17: {
    flexGrow: 1,
    width: wp("42.51207729468599%"),
    height: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 229, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_I344_771_341_1027_6_35_4_27: {
    flexGrow: 1,
    width: wp("21.497584541062803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.381642512077285%"),
    top: hp("1.229508196721298%")
  },
  Text_I344_771_341_1027_6_35_4_27: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_771_341_1027_6_35_5_2: {
    flexGrow: 1,
    width: wp("42.028985507246375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.483091787439605%"),
    top: hp("21.311475409836063%")
  },
  Text_I344_771_341_1027_6_35_5_2: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I344_771_341_1027_6_35_6_1: {
    flexGrow: 1,
    width: wp("18.115942028985508%"),
    height: hp("16.80327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.318840579710141%"),
    top: hp("4.78142076502732%"),
    resizeMode: "cover"
  },
  View_I344_771_341_993: {
    flexGrow: 1,
    width: wp("95.65217391304348%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1739130434782608%"),
    top: hp("110.10928961748634%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I344_771_341_993_341_180: {
    flexGrow: 1,
    width: wp("5.314009661835748%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("4.234972677595621%")
  },
  ImageBackground_I344_771_341_993_341_181: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.8743961352657%"),
    top: hp("3.551912568306008%")
  },
  ImageBackground_I344_771_341_993_341_179: {
    flexGrow: 1,
    width: wp("5.314009661835748%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.845410628019327%"),
    top: hp("4.030054644808743%")
  },
  ImageBackground_I344_771_341_993_341_260: {
    flexGrow: 1,
    width: wp("17.391304347826086%"),
    height: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.130434782608695%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_I344_771_341_993_341_177: {
    flexGrow: 1,
    width: wp("5.314009661835748%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.49275362318839%"),
    top: hp("4.234972677595621%")
  },
  ImageBackground_I344_771_341_993_341_178: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.77777777777777%"),
    top: hp("3.551912568306008%")
  },
  ImageBackground_I344_771_341_993_341_176: {
    flexGrow: 1,
    width: wp("5.314009661835748%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.7487922705314%"),
    top: hp("4.030054644808743%")
  },
  View_508_92: {
    width: wp("103.38164251207729%"),
    minWidth: wp("103.38164251207729%"),
    height: hp("91.98274872993511%"),
    minHeight: hp("91.98274872993511%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30.421622854764347%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_508_93: {
    width: wp("7.995891110332693%"),
    height: hp("4.551053177463552%"),
    top: hp("1.6393442622950793%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.69293006491546%")
  },
  View_508_94: {
    width: wp("70.04830917874396%"),
    minWidth: wp("70.04830917874396%"),
    height: hp("39.61748633879781%"),
    minHeight: hp("39.61748633879781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.666666666666664%"),
    top: hp("8.51280337474385%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I508_94_341_348: {
    flexGrow: 1,
    width: wp("69.80676328502415%"),
    height: hp("37.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.04282466700819754%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I508_94_341_348_341_301: {
    flexGrow: 1,
    width: wp("34.78260869565217%"),
    height: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.512077294685994%"),
    top: hp("2.4590163934426243%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I508_94_341_348_38_122: {
    width: wp("21.73913043478261%"),
    height: hp("21.311475409836063%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.521739130434781%"),
    resizeMode: "cover"
  },
  View_I508_94_341_348_38_123: {
    width: wp("34.78260869565217%"),
    top: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I508_94_341_348_38_123: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I508_94_341_348_344_1341: {
    flexGrow: 1,
    width: wp("41.30434782608695%"),
    height: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.2512077294686%"),
    top: hp("30.32786885245902%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I508_94_341_348_344_1341_341_1776: {
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
  View_I508_94_341_348_344_1341_341_1776_341_1774: {
    flexGrow: 1,
    width: wp("1.6908212560386473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0193236714975846%"),
    top: hp("0.9562841530054556%")
  },
  Text_I508_94_341_348_344_1341_341_1776_341_1774: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.36,
    textTransform: "none"
  },
  View_I508_94_341_348_344_1341_341_1779: {
    flexGrow: 1,
    width: wp("25.845410628019323%"),
    height: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033819%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I508_94_341_348_344_1341_341_1779_341_1772: {
    flexGrow: 1,
    width: wp("25.845410628019323%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I508_94_341_348_344_1341_341_1779_341_1772: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I508_94_341_348_344_1341_341_1780: {
    flexGrow: 1,
    width: wp("7.729468599033816%"),
    height: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.574879227053145%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 120, 84, 1)"
  },
  View_I508_94_341_348_344_1341_341_1780_341_1774: {
    flexGrow: 1,
    width: wp("2.4154589371980677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.65700483091787%"),
    top: hp("0.9562841530054556%")
  },
  Text_I508_94_341_348_344_1341_341_1780_341_1774: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_508_95: {
    width: wp("89.3719806763285%"),
    minWidth: wp("89.3719806763285%"),
    height: hp("28.825136612021858%"),
    minHeight: hp("28.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("50.45269408512637%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_508_96: {
    width: wp("86.47342995169082%"),
    minWidth: wp("86.47342995169082%"),
    height: hp("27.049180327868854%"),
    minHeight: hp("27.049180327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_508_97: {
    width: wp("86.47342995169082%"),
    minWidth: wp("86.47342995169082%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_508_98: {
    width: wp("9.903381642512077%"),
    minWidth: wp("9.903381642512077%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792263%")
  },
  Text_508_98: {
    color: "rgba(185, 195, 209, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_508_99: {
    width: wp("86.47342995169082%"),
    minWidth: wp("86.47342995169082%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.4644808743169335%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_508_100: {
    width: wp("15.70048309178744%"),
    minWidth: wp("15.70048309178744%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I508_100_506_2211: {
    flexGrow: 1,
    width: wp("10.869565217391305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%"),
    top: hp("1.3661202185792263%")
  },
  Text_I508_100_506_2211: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_508_101: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.115942028985508%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 120, 84, 1)"
  },
  View_I508_101_506_2209: {
    flexGrow: 1,
    width: wp("11.83574879227053%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%"),
    top: hp("1.3661202185792263%")
  },
  Text_I508_101_506_2209: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_508_102: {
    width: wp("20.048309178743963%"),
    minWidth: wp("20.048309178743963%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.19806763285024%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I508_102_506_2211: {
    flexGrow: 1,
    width: wp("15.217391304347828%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%"),
    top: hp("1.3661202185792263%")
  },
  Text_I508_102_506_2211: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_508_104: {
    width: wp("29.227053140096622%"),
    minWidth: wp("29.227053140096622%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.748633879781408%")
  },
  Text_508_104: {
    color: "rgba(185, 195, 209, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_508_105: {
    width: wp("86.47342995169082%"),
    minWidth: wp("86.47342995169082%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.846994535519116%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_508_106: {
    width: wp("13.285024154589372%"),
    minWidth: wp("13.285024154589372%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I508_106_506_2211: {
    flexGrow: 1,
    width: wp("3.6231884057971016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396134%"),
    top: hp("1.3661202185792405%")
  },
  Text_I508_106_506_2211: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_508_107: {
    width: wp("13.285024154589372%"),
    minWidth: wp("13.285024154589372%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.70048309178744%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 120, 84, 1)"
  },
  View_I508_107_506_2209: {
    flexGrow: 1,
    width: wp("3.6231884057971016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("1.3661202185792405%")
  },
  Text_I508_107_506_2209: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_508_108: {
    width: wp("65.21739130434783%"),
    minWidth: wp("65.21739130434783%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.13114754098359%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_508_109: {
    width: wp("37.19806763285024%"),
    minWidth: wp("37.19806763285024%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0928961748633839%")
  },
  Text_508_109: {
    color: "rgba(185, 195, 209, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_508_110: {
    width: wp("8.454106280193237%"),
    minWidth: wp("8.454106280193237%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.763285024154584%"),
    top: hp("0%")
  },
  View_508_111: {
    width: wp("8.454106280193237%"),
    minWidth: wp("8.454106280193237%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(209, 207, 213, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_508_112: {
    width: wp("3.6231884057971016%"),
    minWidth: wp("3.6231884057971016%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.415458937198075%"),
    top: hp("0.546448087431699%")
  },
  Text_508_112: {
    color: "rgba(233, 120, 84, 1)",
    fontSize: 19,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_508_113: {
    width: wp("1.4492753623188406%"),
    minWidth: wp("1.4492753623188406%"),
    height: hp("28.825136612021858%"),
    minHeight: hp("28.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.92270531400966%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I508_113_66_22: {
    flexGrow: 1,
    width: wp("1.4492753623188406%"),
    height: hp("28.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 252, 252, 1)",
    borderTopLeftRadius: 4.5,
    borderTopRightRadius: 4.5,
    borderBottomLeftRadius: 4.5,
    borderBottomRightRadius: 4.5
  },
  View_I508_113_66_23: {
    flexGrow: 1,
    width: wp("1.4492753623188406%"),
    height: hp("23.90710382513661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 120, 84, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_508_114: {
    width: wp("71.73913043478261%"),
    minWidth: wp("71.73913043478261%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.821256038647343%"),
    top: hp("81.60023506873291%"),
    backgroundColor: "rgba(233, 120, 84, 1)"
  },
  View_I508_114_38_149: {
    flexGrow: 1,
    width: wp("55.31400966183575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594201%"),
    top: hp("2.7322404371584668%")
  },
  Text_I508_114_38_149: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I508_114_38_155: {
    flexGrow: 1,
    width: wp("4.3478260869565215%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.56038647342995%"),
    top: hp("3.0054644808743234%")
  },
  View_2: { height: 896.313720703125 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
