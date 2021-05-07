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
      <View style={styles.View_344_790}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9606/ab9d/b892c5d360adff849262c03c67e9a2a1"
          }}
          style={styles.ImageBackground_I344_790_4_8}
        />
        <View style={styles.View_I344_790_341_644}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2c1/0833/d6d4060014b7f190bab41e868dc761ed"
            }}
            style={styles.ImageBackground_I344_790_341_644_10_142}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf79/ed7b/46268746c56de1b5dbc375c72afdb50e"
            }}
            style={styles.ImageBackground_I344_790_341_644_10_148}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cba4/0abf/ccfff56a185a3e2c8a6ce71478a2ca29"
            }}
            style={styles.ImageBackground_I344_790_341_644_10_149}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cba4/0abf/ccfff56a185a3e2c8a6ce71478a2ca29"
            }}
            style={styles.ImageBackground_I344_790_341_644_10_152}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61d4/87aa/c375f27ef59d269ef0351542b38a27a1"
            }}
            style={styles.ImageBackground_I344_790_341_644_10_155}
          />
        </View>
        <View style={styles.View_I344_790_341_166}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68b4/f149/4d5ff23a064e26f6b700f841d56de739"
            }}
            style={styles.ImageBackground_I344_790_341_167}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/435a/9b0f/2b03d2889d30e28c3b77bc8dfbc8c885"
            }}
            style={styles.ImageBackground_I344_790_341_169}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/937c/e77c/3532f7395042563bd9d19953336b573c"
            }}
            style={styles.ImageBackground_I344_790_341_170}
          />
        </View>
      </View>
      <View style={styles.View_344_791}>
        <View style={styles.View_344_792}>
          <Text style={styles.Text_344_792}>My Bag</Text>
        </View>
        <View style={styles.View_344_793}>
          <View style={styles.View_344_794}>
            <View style={styles.View_I344_794_341_435}>
              <View style={styles.View_I344_794_341_413}>
                <Text style={styles.Text_I344_794_341_413}>Milk bottle</Text>
              </View>
              <View style={styles.View_I344_794_341_433}>
                <View style={styles.View_I344_794_598_2928}>
                  <View style={styles.View_I344_794_598_2177}>
                    <View style={styles.View_I344_794_598_2178}>
                      <Text style={styles.Text_I344_794_598_2178}>condia</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I344_794_598_3198}>
                  <View style={styles.View_I344_794_598_3199}>
                    <View style={styles.View_I344_794_598_3200}>
                      <Text style={styles.Text_I344_794_598_3200}>1L</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I344_794_598_3345}>
                  <View style={styles.View_I344_794_598_3346}>
                    <View style={styles.View_I344_794_598_3347}>
                      <Text style={styles.Text_I344_794_598_3347}>
                        no calory
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_I344_794_341_432}>
                <View style={styles.View_I344_794_341_401}>
                  <Text style={styles.Text_I344_794_341_401}>-</Text>
                </View>
                <View style={styles.View_I344_794_341_402}>
                  <Text style={styles.Text_I344_794_341_402}>1</Text>
                </View>
                <View style={styles.View_I344_794_341_403}>
                  <Text style={styles.Text_I344_794_341_403}>+</Text>
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/986b/f7b7/873a3815bc20dc0326e42265a125a646"
              }}
              style={styles.ImageBackground_I344_794_341_400}
            />
          </View>
          <View style={styles.View_344_795}>
            <View style={styles.View_344_796}>
              <View style={styles.View_I344_796_598_3742}>
                <View style={styles.View_I344_796_598_3743}>
                  <View style={styles.View_I344_796_598_3744}>
                    <Text style={styles.Text_I344_796_598_3744}>
                      what’s up bitch
                    </Text>
                  </View>
                  <View style={styles.View_I344_796_598_3402}>
                    <View style={styles.View_I344_796_598_3403}>
                      <View style={styles.View_I344_796_598_3404}>
                        <View style={styles.View_I344_796_598_3405}>
                          <Text style={styles.Text_I344_796_598_3405}>
                            condia
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_I344_796_598_3406}>
                      <View style={styles.View_I344_796_598_3407}>
                        <View style={styles.View_I344_796_598_3408}>
                          <Text style={styles.Text_I344_796_598_3408}>1L</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_I344_796_598_3409}>
                      <View style={styles.View_I344_796_598_3410}>
                        <View style={styles.View_I344_796_598_3411}>
                          <Text style={styles.Text_I344_796_598_3411}>
                            no calory
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I344_796_598_3749}>
                    <View style={styles.View_I344_796_598_3750}>
                      <Text style={styles.Text_I344_796_598_3750}>-</Text>
                    </View>
                    <View style={styles.View_I344_796_598_3751}>
                      <Text style={styles.Text_I344_796_598_3751}>1</Text>
                    </View>
                    <View style={styles.View_I344_796_598_3752}>
                      <Text style={styles.Text_I344_796_598_3752}>+</Text>
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/986b/f7b7/873a3815bc20dc0326e42265a125a646"
                  }}
                  style={styles.ImageBackground_I344_796_598_3753}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e32/6ffc/66c25f686b5d9067c0d067b1aafdc848"
                }}
                style={styles.ImageBackground_I344_796_341_484}
              />
            </View>
          </View>
          <View style={styles.View_344_797}>
            <View style={styles.View_I344_797_341_435}>
              <View style={styles.View_I344_797_341_413}>
                <Text style={styles.Text_I344_797_341_413}>Milk bottle</Text>
              </View>
              <View style={styles.View_I344_797_341_433}>
                <View style={styles.View_I344_797_598_2928}>
                  <View style={styles.View_I344_797_598_2177}>
                    <View style={styles.View_I344_797_598_2178}>
                      <Text style={styles.Text_I344_797_598_2178}>condia</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I344_797_598_3198}>
                  <View style={styles.View_I344_797_598_3199}>
                    <View style={styles.View_I344_797_598_3200}>
                      <Text style={styles.Text_I344_797_598_3200}>1L</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I344_797_598_3345}>
                  <View style={styles.View_I344_797_598_3346}>
                    <View style={styles.View_I344_797_598_3347}>
                      <Text style={styles.Text_I344_797_598_3347}>
                        no calory
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_I344_797_341_432}>
                <View style={styles.View_I344_797_341_401}>
                  <Text style={styles.Text_I344_797_341_401}>-</Text>
                </View>
                <View style={styles.View_I344_797_341_402}>
                  <Text style={styles.Text_I344_797_341_402}>1</Text>
                </View>
                <View style={styles.View_I344_797_341_403}>
                  <Text style={styles.Text_I344_797_341_403}>+</Text>
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/986b/f7b7/873a3815bc20dc0326e42265a125a646"
              }}
              style={styles.ImageBackground_I344_797_341_400}
            />
          </View>
        </View>
        <View style={styles.View_411_1170}>
          <View style={styles.View_I411_1170_22_138} />
          <View style={styles.View_I411_1170_22_137} />
          <View style={styles.View_I411_1170_22_136} />
        </View>
        <View style={styles.View_411_1171}>
          <View style={styles.View_I411_1171_22_133}>
            <Text style={styles.Text_I411_1171_22_133}>9 Item</Text>
          </View>
          <View style={styles.View_I411_1171_22_134}>
            <Text style={styles.Text_I411_1171_22_134}>900 Dzd</Text>
          </View>
        </View>
        <View style={styles.View_344_798}>
          <View style={styles.View_I344_798_341_754}>
            <Text style={styles.Text_I344_798_341_754}>checkout</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_344_799}>
        <View style={styles.View_I344_799_9_30} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd59/26e3/529ce0c38724a2248e9c1a04c87512e8"
          }}
          style={styles.ImageBackground_I344_799_9_104}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31b4/0d32/694d841e12524da19484ff16eb2f83fa"
          }}
          style={styles.ImageBackground_I344_799_9_106}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0af1/bfaf/4f3ce786061504b8b01404d70a05ea87"
          }}
          style={styles.ImageBackground_I344_799_9_107}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a35/f51b/e56b1fb5002149255a1cab29bb055b47"
          }}
          style={styles.ImageBackground_I344_799_9_108}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd15/55c6/63341221ff30be1735811c044f45a1d9"
          }}
          style={styles.ImageBackground_I344_799_9_109}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0af1/bfaf/4f3ce786061504b8b01404d70a05ea87"
          }}
          style={styles.ImageBackground_I344_799_9_110}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f319/18ae/ccd92f132a77a0b583e08a2fcf41c8a6"
          }}
          style={styles.ImageBackground_I344_799_9_58}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58d2/61e3/46b7dbc39bd938b5b7c71aff852ac8e1"
          }}
          style={styles.ImageBackground_I344_799_9_94}
        />
        <View style={styles.View_I344_799_66_29}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41d0/a783/bc6ea4cd23f1a162afc72bfeab21255c"
            }}
            style={styles.ImageBackground_I344_799_66_27}
          />
          <View style={styles.View_I344_799_66_28}>
            <Text style={styles.Text_I344_799_66_28}>1</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_344_790: {
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
  ImageBackground_I344_790_4_8: {
    flexGrow: 1,
    width: wp("6.159420289855073%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.3907103825136615%")
  },
  View_I344_790_341_644: {
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
  ImageBackground_I344_790_341_644_10_142: {
    flexGrow: 1,
    width: wp("24.154589371980677%"),
    height: hp("6.967144325131276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I344_790_341_644_10_148: {
    flexGrow: 1,
    width: wp("3.3815989747715456%"),
    height: hp("3.2786465733429124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.835630849939612%"),
    top: hp("0.6830601092896176%")
  },
  ImageBackground_I344_790_341_644_10_149: {
    flexGrow: 1,
    width: wp("1.207714034739324%"),
    height: hp("3.141974360565019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.497348656400973%"),
    top: hp("0.819672131147541%")
  },
  ImageBackground_I344_790_341_644_10_152: {
    flexGrow: 1,
    width: wp("1.207714034739324%"),
    height: hp("3.141974360565019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.178626019021742%"),
    top: hp("0.819672131147541%")
  },
  ImageBackground_I344_790_341_644_10_155: {
    flexGrow: 1,
    width: wp("3.140056536393465%"),
    height: hp("2.0491540106267876%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.149522569444443%"),
    top: hp("1.9125182771943305%")
  },
  View_I344_790_341_166: {
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
  ImageBackground_I344_790_341_167: {
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
  ImageBackground_I344_790_341_169: {
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
  ImageBackground_I344_790_341_170: {
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
  View_344_791: {
    width: wp("88.88888888888889%"),
    minWidth: wp("88.88888888888889%"),
    height: hp("83.60655737704919%"),
    minHeight: hp("83.60655737704919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("18.101092896174865%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_344_792: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_344_792: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 31,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_344_793: {
    width: wp("88.88888888888889%"),
    minWidth: wp("88.88888888888889%"),
    height: hp("51.63934426229508%"),
    minHeight: hp("51.63934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.606557377049178%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_344_794: {
    width: wp("88.88888888888889%"),
    minWidth: wp("88.88888888888889%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_794_341_435: {
    flexGrow: 1,
    width: wp("42.270531400966185%"),
    height: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169094%"),
    top: hp("1.9808743169398895%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_794_341_413: {
    width: wp("40.57971014492754%"),
    minWidth: wp("40.57971014492754%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I344_794_341_413: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_794_341_433: {
    width: wp("42.270531400966185%"),
    minWidth: wp("42.270531400966185%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.303278688524589%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I344_794_598_2928: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_794_598_2177: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I344_794_598_2178: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1400966183574877%"),
    top: hp("0.8196721311475414%")
  },
  Text_I344_794_598_2178: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_794_598_3198: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.975845410628018%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_794_598_3199: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I344_794_598_3200: {
    width: wp("2.4154589371980677%"),
    minWidth: wp("2.4154589371980677%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275363%"),
    top: hp("0.8196721311475414%")
  },
  Text_I344_794_598_3200: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_794_598_3345: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.95169082125604%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_794_598_3346: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I344_794_598_3347: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8115942028985472%"),
    top: hp("0.8196721311475414%")
  },
  Text_I344_794_598_3347: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_794_341_432: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.016393442622952%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_794_341_401: {
    width: wp("1.6908212560386473%"),
    minWidth: wp("1.6908212560386473%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.34153005464480657%")
  },
  Text_I344_794_341_401: {
    color: "rgba(209, 207, 213, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_794_341_402: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.589371980676329%"),
    top: hp("0%")
  },
  Text_I344_794_341_402: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_794_341_403: {
    width: wp("2.4154589371980677%"),
    minWidth: wp("2.4154589371980677%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.661835748792267%"),
    top: hp("0.34153005464480657%")
  },
  Text_I344_794_341_403: {
    color: "rgba(209, 207, 213, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I344_794_341_400: {
    flexGrow: 1,
    width: wp("16.183574879227052%"),
    height: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.84057971014492%"),
    top: hp("1.0928961748633874%"),
    resizeMode: "cover"
  },
  View_344_795: {
    width: wp("88.88888888888889%"),
    minWidth: wp("88.88888888888889%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.62295081967213%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_344_796: {
    width: wp("113.28502415458937%"),
    minWidth: wp("113.28502415458937%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-24.396135265700487%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_796_598_3742: {
    flexGrow: 1,
    width: wp("88.88888888888889%"),
    height: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I344_796_598_3743: {
    width: wp("42.270531400966185%"),
    minWidth: wp("42.270531400966185%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516911%"),
    top: hp("1.9808743169398895%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_796_598_3744: {
    width: wp("40.57971014492754%"),
    minWidth: wp("40.57971014492754%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I344_796_598_3744: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_796_598_3402: {
    width: wp("42.270531400966185%"),
    height: hp("3.278688524590164%"),
    top: hp("4.303278688524593%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I344_796_598_3403: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_796_598_3404: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I344_796_598_3405: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1400966183574877%"),
    top: hp("0.8196721311475486%")
  },
  Text_I344_796_598_3405: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_796_598_3406: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.975845410628018%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_796_598_3407: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I344_796_598_3408: {
    width: wp("2.4154589371980677%"),
    minWidth: wp("2.4154589371980677%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("0.8196721311475486%")
  },
  Text_I344_796_598_3408: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_796_598_3409: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.951690821256037%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_796_598_3410: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I344_796_598_3411: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8115942028985508%"),
    top: hp("0.8196721311475486%")
  },
  Text_I344_796_598_3411: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_796_598_3749: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.016393442622956%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_796_598_3750: {
    width: wp("1.6908212560386473%"),
    minWidth: wp("1.6908212560386473%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.34153005464480657%")
  },
  Text_I344_796_598_3750: {
    color: "rgba(209, 207, 213, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_796_598_3751: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.589371980676328%"),
    top: hp("0%")
  },
  Text_I344_796_598_3751: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_796_598_3752: {
    width: wp("2.4154589371980677%"),
    minWidth: wp("2.4154589371980677%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%"),
    top: hp("0.34153005464480657%")
  },
  Text_I344_796_598_3752: {
    color: "rgba(209, 207, 213, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I344_796_598_3753: {
    width: wp("16.183574879227052%"),
    height: hp("14.071038251366119%"),
    top: hp("1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.84057971014494%"),
    resizeMode: "cover"
  },
  ImageBackground_I344_796_341_484: {
    flexGrow: 1,
    width: wp("22.463768115942027%"),
    height: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.82125603864733%"),
    top: hp("0%")
  },
  View_344_797: {
    width: wp("88.88888888888889%"),
    minWidth: wp("88.88888888888889%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.382513661202196%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_797_341_435: {
    flexGrow: 1,
    width: wp("42.270531400966185%"),
    height: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169094%"),
    top: hp("1.9808743169398824%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_797_341_413: {
    width: wp("40.57971014492754%"),
    minWidth: wp("40.57971014492754%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I344_797_341_413: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_797_341_433: {
    width: wp("42.270531400966185%"),
    minWidth: wp("42.270531400966185%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3032786885246%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I344_797_598_2928: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_797_598_2177: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I344_797_598_2178: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1400966183574877%"),
    top: hp("0.8196721311475414%")
  },
  Text_I344_797_598_2178: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_797_598_3198: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.975845410628018%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_797_598_3199: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I344_797_598_3200: {
    width: wp("2.4154589371980677%"),
    minWidth: wp("2.4154589371980677%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275363%"),
    top: hp("0.8196721311475414%")
  },
  Text_I344_797_598_3200: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_797_598_3345: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.95169082125604%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_797_598_3346: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I344_797_598_3347: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8115942028985472%"),
    top: hp("0.8196721311475414%")
  },
  Text_I344_797_598_3347: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_797_341_432: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.016393442622956%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_797_341_401: {
    width: wp("1.6908212560386473%"),
    minWidth: wp("1.6908212560386473%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.34153005464480657%")
  },
  Text_I344_797_341_401: {
    color: "rgba(209, 207, 213, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_797_341_402: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.589371980676329%"),
    top: hp("0%")
  },
  Text_I344_797_341_402: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I344_797_341_403: {
    width: wp("2.4154589371980677%"),
    minWidth: wp("2.4154589371980677%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.661835748792267%"),
    top: hp("0.34153005464480657%")
  },
  Text_I344_797_341_403: {
    color: "rgba(209, 207, 213, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I344_797_341_400: {
    flexGrow: 1,
    width: wp("16.183574879227052%"),
    height: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.84057971014492%"),
    top: hp("1.0928961748633768%"),
    resizeMode: "cover"
  },
  View_411_1170: {
    width: wp("88.88888888888889%"),
    minWidth: wp("88.88888888888889%"),
    height: hp("0.8196721962892293%"),
    minHeight: hp("0.8196721962892293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("62.70491803278688%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I411_1170_22_138: {
    flexGrow: 1,
    width: wp("47.82608695652174%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.06280193236715%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 120, 84, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_I411_1170_22_137: {
    flexGrow: 1,
    width: wp("11.352657004830919%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.5024154589372%"),
    top: hp("0%"),
    backgroundColor: "rgba(209, 207, 213, 1)",
    borderTopLeftRadius: 4.5,
    borderTopRightRadius: 4.5,
    borderBottomLeftRadius: 4.5,
    borderBottomRightRadius: 4.5
  },
  View_I411_1170_22_136: {
    flexGrow: 1,
    width: wp("27.294685990338163%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(209, 207, 213, 1)",
    borderTopLeftRadius: 4.5,
    borderTopRightRadius: 4.5,
    borderBottomLeftRadius: 4.5,
    borderBottomRightRadius: 4.5
  },
  View_411_1171: {
    width: wp("88.88888888888889%"),
    minWidth: wp("88.88888888888889%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("65.98360655737706%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I411_1171_22_133: {
    flexGrow: 1,
    width: wp("22.463768115942027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I411_1171_22_133: {
    color: "rgba(209, 207, 213, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I411_1171_22_134: {
    flexGrow: 1,
    width: wp("22.463768115942027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.42512077294685%"),
    top: hp("0%")
  },
  Text_I411_1171_22_134: {
    color: "rgba(209, 207, 213, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_344_798: {
    width: wp("88.88888888888889%"),
    minWidth: wp("88.88888888888889%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("74.86338797814207%"),
    backgroundColor: "rgba(233, 120, 84, 1)"
  },
  View_I344_798_341_754: {
    flexGrow: 1,
    width: wp("21.256038647342994%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.81642512077295%"),
    top: hp("2.732240437158481%")
  },
  Text_I344_798_341_754: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_344_799: {
    width: wp("95.16908212560386%"),
    minWidth: wp("95.16908212560386%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%"),
    top: hp("109.97267759562841%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I344_799_9_30: {
    flexGrow: 1,
    width: wp("95.16908212560386%"),
    height: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 229, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  ImageBackground_I344_799_9_104: {
    flexGrow: 1,
    width: wp("5.314009661835748%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.26570048309179%"),
    top: hp("4.0983606557377215%")
  },
  ImageBackground_I344_799_9_106: {
    flexGrow: 1,
    width: wp("5.314009661835748%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.97584541062803%"),
    top: hp("4.37158469945355%")
  },
  ImageBackground_I344_799_9_107: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.77777777777779%"),
    top: hp("3.6885245901639365%")
  },
  ImageBackground_I344_799_9_108: {
    flexGrow: 1,
    width: wp("5.314009661835748%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.120772946859905%"),
    top: hp("4.0983606557377215%")
  },
  ImageBackground_I344_799_9_109: {
    flexGrow: 1,
    width: wp("5.314009661835748%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("4.37158469945355%")
  },
  ImageBackground_I344_799_9_110: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.632850241545896%"),
    top: hp("3.6885245901639365%")
  },
  ImageBackground_I344_799_9_58: {
    flexGrow: 1,
    width: wp("17.391304347826086%"),
    height: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.888888888888886%"),
    top: hp("0.6830601092896273%")
  },
  ImageBackground_I344_799_9_94: {
    flexGrow: 1,
    width: wp("6.763285024154589%"),
    height: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.20289855072464%"),
    top: hp("3.5519125683060224%")
  },
  View_I344_799_66_29: {
    flexGrow: 1,
    width: wp("3.3816425120772946%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.88888888888889%"),
    top: hp("3.1420765027322375%")
  },
  ImageBackground_I344_799_66_27: {
    width: wp("3.3816425120772946%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I344_799_66_28: {
    width: wp("0.966183574879227%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.207729468599041%")
  },
  Text_I344_799_66_28: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
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
