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
      <View style={styles.View_407_1376}>
        <View style={styles.View_407_1377}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9606/ab9d/b892c5d360adff849262c03c67e9a2a1"
            }}
            style={styles.ImageBackground_I407_1377_4_8}
          />
          <View style={styles.View_I407_1377_341_644}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2c1/0833/d6d4060014b7f190bab41e868dc761ed"
              }}
              style={styles.ImageBackground_I407_1377_341_644_10_142}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf79/ed7b/46268746c56de1b5dbc375c72afdb50e"
              }}
              style={styles.ImageBackground_I407_1377_341_644_10_148}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cba4/0abf/ccfff56a185a3e2c8a6ce71478a2ca29"
              }}
              style={styles.ImageBackground_I407_1377_341_644_10_149}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cba4/0abf/ccfff56a185a3e2c8a6ce71478a2ca29"
              }}
              style={styles.ImageBackground_I407_1377_341_644_10_152}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61d4/87aa/c375f27ef59d269ef0351542b38a27a1"
              }}
              style={styles.ImageBackground_I407_1377_341_644_10_155}
            />
          </View>
          <View style={styles.View_I407_1377_341_166}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68b4/f149/4d5ff23a064e26f6b700f841d56de739"
              }}
              style={styles.ImageBackground_I407_1377_341_167}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/435a/9b0f/2b03d2889d30e28c3b77bc8dfbc8c885"
              }}
              style={styles.ImageBackground_I407_1377_341_169}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/937c/e77c/3532f7395042563bd9d19953336b573c"
              }}
              style={styles.ImageBackground_I407_1377_341_170}
            />
          </View>
        </View>
        <View style={styles.View_407_1378}>
          <View style={styles.View_407_1379}>
            <Text style={styles.Text_407_1379}>Activity</Text>
          </View>
          <View style={styles.View_407_1380}>
            <View style={styles.View_407_1381}>
              <Text style={styles.Text_407_1381}>Active</Text>
            </View>
            <View style={styles.View_407_1382}>
              <Text style={styles.Text_407_1382}>Finished</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8fa2/8aad/dfadd97183791f64094acefacf4d01db"
              }}
              style={styles.ImageBackground_407_1383}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8840/5fdc/7b8fb97fd958cc9e7b7f5ad6b401ed9a"
              }}
              style={styles.ImageBackground_407_1384}
            />
          </View>
        </View>
        <View style={styles.View_407_1385}>
          <View style={styles.View_407_1386}>
            <View style={styles.View_I407_1386_407_1239}>
              <View style={styles.View_I407_1386_407_1240} />
            </View>
            <View style={styles.View_I407_1386_407_1241}>
              <View style={styles.View_I407_1386_407_1242}>
                <View style={styles.View_I407_1386_407_1243}>
                  <Text style={styles.Text_I407_1386_407_1243}>
                    Reciept #1235467
                  </Text>
                </View>
                <View style={styles.View_I407_1386_407_1244}>
                  <View style={styles.View_I407_1386_407_1245}>
                    <Text style={styles.Text_I407_1386_407_1245}>
                      Status : In the way
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31b4/0d32/694d841e12524da19484ff16eb2f83fa"
                    }}
                    style={styles.ImageBackground_I407_1386_407_1272}
                  />
                </View>
              </View>
              <View style={styles.View_I407_1386_407_1248}>
                <Text style={styles.Text_I407_1386_407_1248}>20:25</Text>
              </View>
              <View style={styles.View_I407_1386_407_1249}>
                <Text style={styles.Text_I407_1386_407_1249}>remining :</Text>
              </View>
              <View style={styles.View_I407_1386_407_1250}>
                <Text style={styles.Text_I407_1386_407_1250}> 900 Dzd </Text>
              </View>
              <View style={styles.View_I407_1386_407_1268}>
                <View style={styles.View_I407_1386_407_1268_341_754}>
                  <Text style={styles.Text_I407_1386_407_1268_341_754}>
                    Its here!
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I407_1386_407_1251}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f400/5d69/65a601546f270a06979a9b3db4714aa3"
                }}
                style={styles.ImageBackground_I407_1386_407_1252}
              />
            </View>
          </View>
          <View style={styles.View_407_1387}>
            <View style={styles.View_I407_1387_401_486}>
              <View style={styles.View_I407_1387_401_412} />
            </View>
            <View style={styles.View_I407_1387_401_762}>
              <View style={styles.View_I407_1387_401_952}>
                <View style={styles.View_I407_1387_401_408}>
                  <Text style={styles.Text_I407_1387_401_408}>
                    Reciept #1235467
                  </Text>
                </View>
                <View style={styles.View_I407_1387_401_951}>
                  <View style={styles.View_I407_1387_401_413}>
                    <Text style={styles.Text_I407_1387_401_413}>
                      Status : You have delevery 1 request
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4229/d73e/5c2f28f0234bf7b1eefb929e220cb554"
                    }}
                    style={styles.ImageBackground_I407_1387_401_414}
                  />
                </View>
              </View>
              <View style={styles.View_I407_1387_401_503}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7cd/0afe/84d58a8d09e4ba3060bf5cf4214a759e"
                  }}
                  style={styles.ImageBackground_I407_1387_401_503_401_372}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19f7/591b/99f9c3919a1fafa3772469fb871b6f1c"
                  }}
                  style={styles.ImageBackground_I407_1387_401_503_401_366}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e8d/4837/ae6e6bb7529f678e18588a305edccc05"
                  }}
                  style={styles.ImageBackground_I407_1387_401_503_401_378}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38f1/38dd/fd715ed3fccf553db3cc5397c1bc9419"
                  }}
                  style={styles.ImageBackground_I407_1387_401_503_401_375}
                />
              </View>
              <View style={styles.View_I407_1387_401_585}>
                <Text style={styles.Text_I407_1387_401_585}>20:25</Text>
              </View>
              <View style={styles.View_I407_1387_401_586}>
                <Text style={styles.Text_I407_1387_401_586}>remining :</Text>
              </View>
              <View style={styles.View_I407_1387_401_954}>
                <Text style={styles.Text_I407_1387_401_954}> 900 Dzd </Text>
              </View>
            </View>
            <View style={styles.View_I407_1387_401_415}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7cd/0afe/84d58a8d09e4ba3060bf5cf4214a759e"
                }}
                style={styles.ImageBackground_I407_1387_401_437}
              />
              <View style={styles.View_I407_1387_401_418}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41d0/a783/bc6ea4cd23f1a162afc72bfeab21255c"
                  }}
                  style={styles.ImageBackground_I407_1387_401_418_391_1}
                />
                <View style={styles.View_I407_1387_401_418_391_2}>
                  <Text text="" style={styles.Text_I407_1387_401_418_391_2} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_407_1388}>
            <View style={styles.View_I407_1388_401_1214}>
              <View style={styles.View_I407_1388_401_1215} />
            </View>
            <View style={styles.View_I407_1388_401_1216}>
              <View style={styles.View_I407_1388_401_1217}>
                <View style={styles.View_I407_1388_401_1218}>
                  <Text style={styles.Text_I407_1388_401_1218}>
                    Reciept #1235467
                  </Text>
                </View>
                <View style={styles.View_I407_1388_401_1219}>
                  <View style={styles.View_I407_1388_401_1220}>
                    <Text style={styles.Text_I407_1388_401_1220}>
                      Status : Painding{" "}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I407_1388_401_1223}>
                <Text style={styles.Text_I407_1388_401_1223}>20:25</Text>
              </View>
              <View style={styles.View_I407_1388_401_1224}>
                <Text style={styles.Text_I407_1388_401_1224}>remining :</Text>
              </View>
              <View style={styles.View_I407_1388_401_1225}>
                <Text style={styles.Text_I407_1388_401_1225}> 900 Dzd </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab05/fef7/d7062aca7cc400d02d889882a6cb9bfe"
                }}
                style={styles.ImageBackground_I407_1388_401_1211}
              />
            </View>
            <View style={styles.View_I407_1388_401_1226}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21c2/846e/3c4ea01b5a98327b640ddf455c682a8a"
                }}
                style={styles.ImageBackground_I407_1388_401_1227}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_407_1389}>
          <View style={styles.View_407_1390} />
          <View style={styles.View_407_1391} />
          <View style={styles.View_407_1392} />
        </View>
        <View style={styles.View_407_1393}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd15/55c6/63341221ff30be1735811c044f45a1d9"
            }}
            style={styles.ImageBackground_I407_1393_341_180}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0af1/bfaf/4f3ce786061504b8b01404d70a05ea87"
            }}
            style={styles.ImageBackground_I407_1393_341_181}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a35/f51b/e56b1fb5002149255a1cab29bb055b47"
            }}
            style={styles.ImageBackground_I407_1393_341_179}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd7c/4081/eafbcfb77a6b923c75af49bf653f221a"
            }}
            style={styles.ImageBackground_I407_1393_341_260}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd15/55c6/63341221ff30be1735811c044f45a1d9"
            }}
            style={styles.ImageBackground_I407_1393_341_177}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0af1/bfaf/4f3ce786061504b8b01404d70a05ea87"
            }}
            style={styles.ImageBackground_I407_1393_341_178}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a35/f51b/e56b1fb5002149255a1cab29bb055b47"
            }}
            style={styles.ImageBackground_I407_1393_341_176}
          />
        </View>
      </View>
      <View style={styles.View_407_1345}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5136/fc7b/10c3d896ad8302c298517e3e8ad048cd"
          }}
          style={styles.ImageBackground_407_1346}
        />
        <View style={styles.View_407_1338}>
          <Text style={styles.Text_407_1338}>Delevery arrive</Text>
        </View>
        <View style={styles.View_407_1337}>
          <Text style={styles.Text_407_1337}>Reciept #1235467</Text>
        </View>
        <View style={styles.View_407_1366}>
          <View style={styles.View_407_1340}>
            <Text style={styles.Text_407_1340}>
              Please provide your delevery guy with the code bellow :
            </Text>
          </View>
          <View style={styles.View_407_1371}>
            <View style={styles.View_407_1342}>
              <Text style={styles.Text_407_1342}>D567-454</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_407_1343}>
          <Text style={styles.Text_407_1343}>Not verified</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c25/909a/89d530fd6fc08f6169b046a9430e16da"
          }}
          style={styles.ImageBackground_407_1344}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_407_1376: {
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
  View_407_1377: {
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
  ImageBackground_I407_1377_4_8: {
    flexGrow: 1,
    width: wp("6.159420289855073%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.3907103825136615%")
  },
  View_I407_1377_341_644: {
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
  ImageBackground_I407_1377_341_644_10_142: {
    flexGrow: 1,
    width: wp("24.154589371980677%"),
    height: hp("6.967144325131276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I407_1377_341_644_10_148: {
    flexGrow: 1,
    width: wp("3.3815989747715456%"),
    height: hp("3.2786465733429124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.835571878774154%"),
    top: hp("0.6830601092896176%")
  },
  ImageBackground_I407_1377_341_644_10_149: {
    flexGrow: 1,
    width: wp("1.207714034739324%"),
    height: hp("3.141974360565019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.497289685235508%"),
    top: hp("0.819672131147541%")
  },
  ImageBackground_I407_1377_341_644_10_152: {
    flexGrow: 1,
    width: wp("1.207714034739324%"),
    height: hp("3.141974360565019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.178626019021742%"),
    top: hp("0.819672131147541%")
  },
  ImageBackground_I407_1377_341_644_10_155: {
    flexGrow: 1,
    width: wp("3.140056536393465%"),
    height: hp("2.0491540106267876%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.149522569444443%"),
    top: hp("1.9125182771943305%")
  },
  View_I407_1377_341_166: {
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
  ImageBackground_I407_1377_341_167: {
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
  ImageBackground_I407_1377_341_169: {
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
  ImageBackground_I407_1377_341_170: {
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
  View_407_1378: {
    width: wp("87.43961352657004%"),
    minWidth: wp("87.43961352657004%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("16.120218579234972%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_407_1379: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_407_1379: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 31,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_1380: {
    width: wp("87.43961352657004%"),
    minWidth: wp("87.43961352657004%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191257%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_407_1381: {
    width: wp("11.83574879227053%"),
    minWidth: wp("11.83574879227053%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.942028985507246%"),
    top: hp("0%")
  },
  Text_407_1381: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_1382: {
    width: wp("15.70048309178744%"),
    minWidth: wp("15.70048309178744%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.72946859903381%"),
    top: hp("0%")
  },
  Text_407_1382: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_407_1383: {
    width: wp("43.71980676328502%"),
    minWidth: wp("43.71980676328502%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.1420765027322375%")
  },
  ImageBackground_407_1384: {
    width: wp("43.71980676328502%"),
    minWidth: wp("43.71980676328502%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.71980676328502%"),
    top: hp("3.1420765027322375%")
  },
  View_407_1385: {
    width: wp("86.71497584541062%"),
    minWidth: wp("86.71497584541062%"),
    height: hp("62.704918032786885%"),
    minHeight: hp("62.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.642512077294686%"),
    top: hp("34.01639344262295%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_407_1386: {
    width: wp("86.71497584541062%"),
    minWidth: wp("86.71497584541062%"),
    height: hp("20.901639344262296%"),
    minHeight: hp("20.901639344262296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I407_1386_407_1239: {
    flexGrow: 1,
    width: wp("71.01449275362319%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.589371980676328%"),
    top: hp("6.010928961748633%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I407_1386_407_1240: {
    width: wp("71.01449275362319%"),
    minWidth: wp("71.01449275362319%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.0491803278688607%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I407_1386_407_1241: {
    flexGrow: 1,
    width: wp("85.02415458937197%"),
    height: hp("17.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%"),
    top: hp("3.278688524590166%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I407_1386_407_1242: {
    width: wp("37.92270531400966%"),
    minWidth: wp("37.92270531400966%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8985507246376816%"),
    top: hp("2.7322404371584668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I407_1386_407_1243: {
    width: wp("34.05797101449276%"),
    minWidth: wp("34.05797101449276%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I407_1386_407_1243: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I407_1386_407_1244: {
    width: wp("37.92270531400966%"),
    minWidth: wp("37.92270531400966%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737707%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I407_1386_407_1245: {
    width: wp("31.40096618357488%"),
    minWidth: wp("31.40096618357488%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I407_1386_407_1245: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I407_1386_407_1272: {
    width: wp("5.314009661835748%"),
    height: hp("2.459016393442623%"),
    top: hp("0.06830601092896416%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.608695652173914%")
  },
  View_I407_1386_407_1248: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.04830917874396%"),
    top: hp("1.0928961748633839%")
  },
  Text_I407_1386_407_1248: {
    color: "rgba(233, 120, 84, 1)",
    fontSize: 12,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I407_1386_407_1249: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.89855072463769%"),
    top: hp("1.3661202185792334%")
  },
  Text_I407_1386_407_1249: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I407_1386_407_1250: {
    width: wp("16.425120772946862%"),
    minWidth: wp("16.425120772946862%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8985507246376816%"),
    top: hp("13.251366120218577%")
  },
  Text_I407_1386_407_1250: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I407_1386_407_1268: {
    width: wp("18.357487922705314%"),
    minWidth: wp("18.357487922705314%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.801932367149774%"),
    top: hp("11.612021857923494%"),
    backgroundColor: "rgba(233, 120, 84, 1)"
  },
  View_I407_1386_407_1268_341_754: {
    flexGrow: 1,
    width: wp("13.043478260869565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.657004830917856%"),
    top: hp("1.2978142076502763%")
  },
  Text_I407_1386_407_1268_341_754: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I407_1386_407_1251: {
    flexGrow: 1,
    width: wp("9.66183574879227%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I407_1386_407_1252: {
    width: wp("9.178743961352657%"),
    minWidth: wp("9.178743961352657%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.483091787439613%"),
    top: hp("0.9562841530054698%")
  },
  View_407_1387: {
    width: wp("86.71497584541062%"),
    minWidth: wp("86.71497584541062%"),
    height: hp("20.901639344262296%"),
    minHeight: hp("20.901639344262296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.9016393442623%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I407_1387_401_486: {
    flexGrow: 1,
    width: wp("71.01449275362319%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.589371980676328%"),
    top: hp("6.010928961748633%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I407_1387_401_412: {
    width: wp("71.01449275362319%"),
    minWidth: wp("71.01449275362319%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.0491803278688465%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I407_1387_401_762: {
    flexGrow: 1,
    width: wp("85.02415458937197%"),
    height: hp("17.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%"),
    top: hp("3.2786885245901587%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I407_1387_401_952: {
    width: wp("71.01449275362319%"),
    minWidth: wp("71.01449275362319%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8985507246376816%"),
    top: hp("2.732240437158474%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I407_1387_401_408: {
    width: wp("34.05797101449276%"),
    minWidth: wp("34.05797101449276%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I407_1387_401_408: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I407_1387_401_951: {
    width: wp("71.01449275362319%"),
    minWidth: wp("71.01449275362319%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737693%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I407_1387_401_413: {
    width: wp("65.70048309178745%"),
    minWidth: wp("65.70048309178745%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I407_1387_401_413: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I407_1387_401_414: {
    width: wp("4.1062801932367154%"),
    minWidth: wp("4.1062801932367154%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.90821256038647%"),
    top: hp("0.1366120218579283%")
  },
  View_I407_1387_401_503: {
    width: wp("48.792270531400966%"),
    minWidth: wp("48.792270531400966%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.231884057971016%"),
    top: hp("11.065573770491817%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I407_1387_401_503_401_372: {
    flexGrow: 1,
    width: wp("9.178743961352657%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%"),
    top: hp("0.6830601092896131%")
  },
  ImageBackground_I407_1387_401_503_401_366: {
    flexGrow: 1,
    width: wp("9.178743961352657%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.009661835748801%"),
    top: hp("0.6830601092896131%")
  },
  ImageBackground_I407_1387_401_503_401_378: {
    flexGrow: 1,
    width: wp("9.178743961352657%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.60386473429952%"),
    top: hp("0.6830601092896131%")
  },
  ImageBackground_I407_1387_401_503_401_375: {
    flexGrow: 1,
    width: wp("9.178743961352657%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.19806763285024%"),
    top: hp("0.6830601092896131%")
  },
  View_I407_1387_401_585: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.04830917874396%"),
    top: hp("1.092896174863391%")
  },
  Text_I407_1387_401_585: {
    color: "rgba(233, 120, 84, 1)",
    fontSize: 12,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I407_1387_401_586: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.89855072463769%"),
    top: hp("1.3661202185792334%")
  },
  Text_I407_1387_401_586: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I407_1387_401_954: {
    width: wp("16.425120772946862%"),
    minWidth: wp("16.425120772946862%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8985507246376816%"),
    top: hp("13.251366120218584%")
  },
  Text_I407_1387_401_954: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I407_1387_401_415: {
    flexGrow: 1,
    width: wp("9.66183574879227%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I407_1387_401_437: {
    width: wp("9.178743961352657%"),
    height: hp("5.191256830601093%"),
    top: hp("0.9562841530054627%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.483091787439613%")
  },
  View_I407_1387_401_418: {
    width: wp("3.3816425120772946%"),
    minWidth: wp("3.3816425120772946%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.483091787439613%"),
    top: hp("0.9562841530054627%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I407_1387_401_418_391_1: {
    flexGrow: 1,
    width: wp("3.3816425120772946%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I407_1387_401_418_391_2: {
    flexGrow: 1,
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6908212560386486%"),
    top: hp("0.1366120218579212%")
  },
  Text_I407_1387_401_418_391_2: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_1388: {
    width: wp("86.71497584541062%"),
    minWidth: wp("86.71497584541062%"),
    height: hp("20.901639344262296%"),
    minHeight: hp("20.901639344262296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41.80327868852459%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I407_1388_401_1214: {
    flexGrow: 1,
    width: wp("71.01449275362319%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.589371980676328%"),
    top: hp("6.010928961748633%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I407_1388_401_1215: {
    width: wp("71.01449275362319%"),
    minWidth: wp("71.01449275362319%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.0491803278688536%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I407_1388_401_1216: {
    flexGrow: 1,
    width: wp("85.02415458937197%"),
    height: hp("17.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%"),
    top: hp("3.278688524590166%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I407_1388_401_1217: {
    width: wp("71.01449275362319%"),
    minWidth: wp("71.01449275362319%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8985507246376816%"),
    top: hp("2.7322404371584668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I407_1388_401_1218: {
    width: wp("34.05797101449276%"),
    minWidth: wp("34.05797101449276%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I407_1388_401_1218: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I407_1388_401_1219: {
    width: wp("71.01449275362319%"),
    minWidth: wp("71.01449275362319%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737707%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I407_1388_401_1220: {
    width: wp("31.40096618357488%"),
    minWidth: wp("31.40096618357488%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I407_1388_401_1220: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I407_1388_401_1223: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.04830917874396%"),
    top: hp("1.0928961748633839%")
  },
  Text_I407_1388_401_1223: {
    color: "rgba(233, 120, 84, 1)",
    fontSize: 12,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I407_1388_401_1224: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.89855072463769%"),
    top: hp("1.3661202185792263%")
  },
  Text_I407_1388_401_1224: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I407_1388_401_1225: {
    width: wp("16.425120772946862%"),
    minWidth: wp("16.425120772946862%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8985507246376816%"),
    top: hp("13.251366120218577%")
  },
  Text_I407_1388_401_1225: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I407_1388_401_1211: {
    width: wp("12.560386473429952%"),
    minWidth: wp("12.560386473429952%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.46376811594203%"),
    top: hp("12.978142076502735%")
  },
  View_I407_1388_401_1226: {
    flexGrow: 1,
    width: wp("9.66183574879227%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I407_1388_401_1227: {
    width: wp("9.178743961352657%"),
    height: hp("5.191256830601093%"),
    top: hp("0.9562841530054556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.483091787439613%")
  },
  View_407_1389: {
    width: wp("88.88888888888889%"),
    minWidth: wp("88.88888888888889%"),
    height: hp("0.8196721962892293%"),
    minHeight: hp("0.8196721962892293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("103.00546448087431%")
  },
  View_407_1390: {
    width: wp("27.294685990338163%"),
    minWidth: wp("27.294685990338163%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
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
  View_407_1391: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
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
  View_407_1392: {
    width: wp("47.82608695652174%"),
    minWidth: wp("47.82608695652174%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
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
  View_407_1393: {
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
  ImageBackground_I407_1393_341_180: {
    flexGrow: 1,
    width: wp("5.314009661835748%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("4.234972677595621%")
  },
  ImageBackground_I407_1393_341_181: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.8743961352657%"),
    top: hp("3.551912568306008%")
  },
  ImageBackground_I407_1393_341_179: {
    flexGrow: 1,
    width: wp("5.314009661835748%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.845410628019327%"),
    top: hp("4.030054644808743%")
  },
  ImageBackground_I407_1393_341_260: {
    flexGrow: 1,
    width: wp("17.391304347826086%"),
    height: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.130434782608695%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_I407_1393_341_177: {
    flexGrow: 1,
    width: wp("5.314009661835748%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.49275362318839%"),
    top: hp("4.234972677595621%")
  },
  ImageBackground_I407_1393_341_178: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.77777777777777%"),
    top: hp("3.551912568306008%")
  },
  ImageBackground_I407_1393_341_176: {
    flexGrow: 1,
    width: wp("5.314009661835748%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.7487922705314%"),
    top: hp("4.030054644808743%")
  },
  View_407_1345: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("77.59562841530054%"),
    minHeight: hp("77.59562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.67213114754098%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_407_1346: {
    width: wp("7.995891110332693%"),
    height: hp("4.551053177463552%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.002049837711354%")
  },
  View_407_1338: {
    width: wp("33.81642512077295%"),
    minWidth: wp("33.81642512077295%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.091787439613526%"),
    top: hp("8.512803374743854%")
  },
  Text_407_1338: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 15,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_1337: {
    width: wp("32.125603864734295%"),
    minWidth: wp("32.125603864734295%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.93719806763285%"),
    top: hp("13.840672227202866%")
  },
  Text_407_1337: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_1366: {
    width: wp("83.09178743961353%"),
    minWidth: wp("83.09178743961353%"),
    height: hp("25.40983606557377%"),
    minHeight: hp("25.40983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.454106280193237%"),
    top: hp("18.622092992230193%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_407_1340: {
    width: wp("73.42995169082126%"),
    minWidth: wp("73.42995169082126%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("2.7322404371584668%")
  },
  Text_407_1340: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_1371: {
    width: wp("73.42995169082126%"),
    minWidth: wp("73.42995169082126%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("13.797814207650262%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_407_1342: {
    width: wp("25.60386473429952%"),
    minWidth: wp("25.60386473429952%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.913043478260867%"),
    top: hp("2.732240437158481%")
  },
  Text_407_1342: {
    color: "rgba(233, 120, 84, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_1343: {
    width: wp("28.26086956521739%"),
    minWidth: wp("28.26086956521739%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.869565217391305%"),
    top: hp("46.35433342938866%")
  },
  Text_407_1343: {
    color: "rgba(185, 195, 209, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_407_1344: {
    width: wp("13.043478260869565%"),
    minWidth: wp("13.043478260869565%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.47826086956522%"),
    top: hp("52.09203834742145%")
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
