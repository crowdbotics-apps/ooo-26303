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
      <View style={styles.View_637_2573}>
        <View style={styles.View_637_2574}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9606/ab9d/b892c5d360adff849262c03c67e9a2a1"
            }}
            style={styles.ImageBackground_I637_2574_4_8}
          />
          <View style={styles.View_I637_2574_341_644}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2c1/0833/d6d4060014b7f190bab41e868dc761ed"
              }}
              style={styles.ImageBackground_I637_2574_341_644_10_142}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf79/ed7b/46268746c56de1b5dbc375c72afdb50e"
              }}
              style={styles.ImageBackground_I637_2574_341_644_10_148}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cba4/0abf/ccfff56a185a3e2c8a6ce71478a2ca29"
              }}
              style={styles.ImageBackground_I637_2574_341_644_10_149}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cba4/0abf/ccfff56a185a3e2c8a6ce71478a2ca29"
              }}
              style={styles.ImageBackground_I637_2574_341_644_10_152}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61d4/87aa/c375f27ef59d269ef0351542b38a27a1"
              }}
              style={styles.ImageBackground_I637_2574_341_644_10_155}
            />
          </View>
          <View style={styles.View_I637_2574_341_166}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68b4/f149/4d5ff23a064e26f6b700f841d56de739"
              }}
              style={styles.ImageBackground_I637_2574_341_167}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/435a/9b0f/2b03d2889d30e28c3b77bc8dfbc8c885"
              }}
              style={styles.ImageBackground_I637_2574_341_169}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/937c/e77c/3532f7395042563bd9d19953336b573c"
              }}
              style={styles.ImageBackground_I637_2574_341_170}
            />
          </View>
        </View>
        <View style={styles.View_637_2575}>
          <View style={styles.View_637_2576}>
            <Text style={styles.Text_637_2576}>Activity</Text>
          </View>
          <View style={styles.View_637_2577}>
            <View style={styles.View_637_2578}>
              <Text style={styles.Text_637_2578}>Active</Text>
            </View>
            <View style={styles.View_637_2579}>
              <Text style={styles.Text_637_2579}>Finished</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8fa2/8aad/dfadd97183791f64094acefacf4d01db"
              }}
              style={styles.ImageBackground_637_2580}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8840/5fdc/7b8fb97fd958cc9e7b7f5ad6b401ed9a"
              }}
              style={styles.ImageBackground_637_2581}
            />
          </View>
        </View>
        <View style={styles.View_637_2582}>
          <View style={styles.View_637_2583}>
            <View style={styles.View_I637_2583_407_1239}>
              <View style={styles.View_I637_2583_407_1240} />
            </View>
            <View style={styles.View_I637_2583_407_1241}>
              <View style={styles.View_I637_2583_407_1242}>
                <View style={styles.View_I637_2583_407_1243}>
                  <Text style={styles.Text_I637_2583_407_1243}>
                    Reciept #1235467
                  </Text>
                </View>
                <View style={styles.View_I637_2583_407_1244}>
                  <View style={styles.View_I637_2583_407_1245}>
                    <Text style={styles.Text_I637_2583_407_1245}>
                      Status : Delevering
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31b4/0d32/694d841e12524da19484ff16eb2f83fa"
                    }}
                    style={styles.ImageBackground_I637_2583_407_1272}
                  />
                </View>
              </View>
              <View style={styles.View_I637_2583_407_1248}>
                <Text style={styles.Text_I637_2583_407_1248}>20:25</Text>
              </View>
              <View style={styles.View_I637_2583_407_1249}>
                <Text style={styles.Text_I637_2583_407_1249}>remining :</Text>
              </View>
              <View style={styles.View_I637_2583_407_1250}>
                <Text style={styles.Text_I637_2583_407_1250}> 900 Dzd </Text>
              </View>
              <View style={styles.View_I637_2583_407_1268}>
                <View style={styles.View_I637_2583_407_1268_341_754}>
                  <Text style={styles.Text_I637_2583_407_1268_341_754}>
                    Its here!
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I637_2583_407_1251}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f400/5d69/65a601546f270a06979a9b3db4714aa3"
                }}
                style={styles.ImageBackground_I637_2583_407_1252}
              />
            </View>
          </View>
          <View style={styles.View_637_2584}>
            <View style={styles.View_I637_2584_401_486}>
              <View style={styles.View_I637_2584_401_412} />
            </View>
            <View style={styles.View_I637_2584_401_762}>
              <View style={styles.View_I637_2584_401_952}>
                <View style={styles.View_I637_2584_401_408}>
                  <Text style={styles.Text_I637_2584_401_408}>
                    Reciept #1235467
                  </Text>
                </View>
                <View style={styles.View_I637_2584_401_951}>
                  <View style={styles.View_I637_2584_401_413}>
                    <Text style={styles.Text_I637_2584_401_413}>
                      Status : You have delevery 1 request
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4229/d73e/5c2f28f0234bf7b1eefb929e220cb554"
                    }}
                    style={styles.ImageBackground_I637_2584_401_414}
                  />
                </View>
              </View>
              <View style={styles.View_I637_2584_401_503}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7cd/0afe/84d58a8d09e4ba3060bf5cf4214a759e"
                  }}
                  style={styles.ImageBackground_I637_2584_401_503_401_372}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19f7/591b/99f9c3919a1fafa3772469fb871b6f1c"
                  }}
                  style={styles.ImageBackground_I637_2584_401_503_401_366}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e8d/4837/ae6e6bb7529f678e18588a305edccc05"
                  }}
                  style={styles.ImageBackground_I637_2584_401_503_401_378}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38f1/38dd/fd715ed3fccf553db3cc5397c1bc9419"
                  }}
                  style={styles.ImageBackground_I637_2584_401_503_401_375}
                />
              </View>
              <View style={styles.View_I637_2584_401_585}>
                <Text style={styles.Text_I637_2584_401_585}>20:25</Text>
              </View>
              <View style={styles.View_I637_2584_401_586}>
                <Text style={styles.Text_I637_2584_401_586}>remining :</Text>
              </View>
              <View style={styles.View_I637_2584_401_954}>
                <Text style={styles.Text_I637_2584_401_954}> 900 Dzd </Text>
              </View>
            </View>
            <View style={styles.View_I637_2584_401_415}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7cd/0afe/84d58a8d09e4ba3060bf5cf4214a759e"
                }}
                style={styles.ImageBackground_I637_2584_401_437}
              />
              <View style={styles.View_I637_2584_401_418}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41d0/a783/bc6ea4cd23f1a162afc72bfeab21255c"
                  }}
                  style={styles.ImageBackground_I637_2584_401_418_391_1}
                />
                <View style={styles.View_I637_2584_401_418_391_2}>
                  <Text text="" style={styles.Text_I637_2584_401_418_391_2} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_637_2585}>
            <View style={styles.View_I637_2585_401_1214}>
              <View style={styles.View_I637_2585_401_1215} />
            </View>
            <View style={styles.View_I637_2585_401_1216}>
              <View style={styles.View_I637_2585_401_1217}>
                <View style={styles.View_I637_2585_401_1218}>
                  <Text style={styles.Text_I637_2585_401_1218}>
                    Reciept #1235467
                  </Text>
                </View>
                <View style={styles.View_I637_2585_401_1219}>
                  <View style={styles.View_I637_2585_401_1220}>
                    <Text style={styles.Text_I637_2585_401_1220}>
                      Status : Waiting for delevery requests{" "}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I637_2585_401_1223}>
                <Text style={styles.Text_I637_2585_401_1223}>20:25</Text>
              </View>
              <View style={styles.View_I637_2585_401_1224}>
                <Text style={styles.Text_I637_2585_401_1224}>remining :</Text>
              </View>
              <View style={styles.View_I637_2585_401_1225}>
                <Text style={styles.Text_I637_2585_401_1225}> 900 Dzd </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab05/fef7/d7062aca7cc400d02d889882a6cb9bfe"
                }}
                style={styles.ImageBackground_I637_2585_401_1211}
              />
            </View>
            <View style={styles.View_I637_2585_401_1226}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21c2/846e/3c4ea01b5a98327b640ddf455c682a8a"
                }}
                style={styles.ImageBackground_I637_2585_401_1227}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_637_2586}>
          <View style={styles.View_637_2587} />
          <View style={styles.View_637_2588} />
          <View style={styles.View_637_2589} />
        </View>
        <View style={styles.View_637_2590}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd15/55c6/63341221ff30be1735811c044f45a1d9"
            }}
            style={styles.ImageBackground_I637_2590_341_180}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0af1/bfaf/4f3ce786061504b8b01404d70a05ea87"
            }}
            style={styles.ImageBackground_I637_2590_341_181}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a35/f51b/e56b1fb5002149255a1cab29bb055b47"
            }}
            style={styles.ImageBackground_I637_2590_341_179}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd7c/4081/eafbcfb77a6b923c75af49bf653f221a"
            }}
            style={styles.ImageBackground_I637_2590_341_260}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd15/55c6/63341221ff30be1735811c044f45a1d9"
            }}
            style={styles.ImageBackground_I637_2590_341_177}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0af1/bfaf/4f3ce786061504b8b01404d70a05ea87"
            }}
            style={styles.ImageBackground_I637_2590_341_178}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a35/f51b/e56b1fb5002149255a1cab29bb055b47"
            }}
            style={styles.ImageBackground_I637_2590_341_176}
          />
        </View>
      </View>
      <View style={styles.View_401_1604}>
        <View style={styles.View_401_273}>
          <View style={styles.View_401_279}>
            <Text style={styles.Text_401_279}>Reciept #1235467</Text>
          </View>
          <View style={styles.View_401_280}>
            <Text style={styles.Text_401_280}>
              You have to accept the request before the time’s up
            </Text>
          </View>
          <View style={styles.View_401_281}>
            <Text style={styles.Text_401_281}>Delevery requests</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5136/fc7b/10c3d896ad8302c298517e3e8ad048cd"
            }}
            style={styles.ImageBackground_401_1605}
          />
        </View>
        <View style={styles.View_401_1597}>
          <View style={styles.View_401_1722}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e38/db3c/7236ad6156032960b2383380b5cf9281"
              }}
              style={styles.ImageBackground_I401_1722_401_285}
            />
            <View style={styles.View_I401_1722_401_1591}>
              <View style={styles.View_I401_1722_401_1596}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39fa/0355/a59455fb44d67d9c97af848c6ad1439e"
                  }}
                  style={styles.ImageBackground_I401_1722_401_286}
                />
                <View style={styles.View_I401_1722_401_1590}>
                  <View style={styles.View_I401_1722_401_1587}>
                    <View style={styles.View_I401_1722_401_287}>
                      <Text style={styles.Text_I401_1722_401_287}>
                        John doe
                      </Text>
                    </View>
                    <View style={styles.View_I401_1722_401_289}>
                      <View style={styles.View_I401_1722_401_290}>
                        <Text style={styles.Text_I401_1722_401_290}>Rank</Text>
                      </View>
                      <View style={styles.View_I401_1722_401_291}>
                        <Text style={styles.Text_I401_1722_401_291}>21</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I401_1722_401_288}>
                    <Text style={styles.Text_I401_1722_401_288}>Age :18</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I401_1722_401_1589}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecb8/3394/caa991ac872c5448d3ddfa69a0a98bc2"
                  }}
                  style={styles.ImageBackground_I401_1722_401_293}
                />
                <View style={styles.View_I401_1722_401_292}>
                  <Text style={styles.Text_I401_1722_401_292}>1:10</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_401_1739}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e38/db3c/7236ad6156032960b2383380b5cf9281"
              }}
              style={styles.ImageBackground_I401_1739_401_285}
            />
            <View style={styles.View_I401_1739_401_1591}>
              <View style={styles.View_I401_1739_401_1596}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39fa/0355/a59455fb44d67d9c97af848c6ad1439e"
                  }}
                  style={styles.ImageBackground_I401_1739_401_286}
                />
                <View style={styles.View_I401_1739_401_1590}>
                  <View style={styles.View_I401_1739_401_1587}>
                    <View style={styles.View_I401_1739_401_287}>
                      <Text style={styles.Text_I401_1739_401_287}>
                        John doe
                      </Text>
                    </View>
                    <View style={styles.View_I401_1739_401_289}>
                      <View style={styles.View_I401_1739_401_290}>
                        <Text style={styles.Text_I401_1739_401_290}>Rank</Text>
                      </View>
                      <View style={styles.View_I401_1739_401_291}>
                        <Text style={styles.Text_I401_1739_401_291}>21</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I401_1739_401_288}>
                    <Text style={styles.Text_I401_1739_401_288}>Age :18</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I401_1739_401_1589}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecb8/3394/caa991ac872c5448d3ddfa69a0a98bc2"
                  }}
                  style={styles.ImageBackground_I401_1739_401_293}
                />
                <View style={styles.View_I401_1739_401_292}>
                  <Text style={styles.Text_I401_1739_401_292}>0:10</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_637_2573: {
    width: wp("100.24213075060533%"),
    minWidth: wp("100.24213075060533%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_637_2574: {
    width: wp("92.49394673123487%"),
    minWidth: wp("92.49394673123487%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.87409200968523%"),
    top: hp("2.73224043715847%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I637_2574_4_8: {
    flexGrow: 1,
    width: wp("6.174334140435835%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.3907103825136615%")
  },
  View_I637_2574_341_644: {
    flexGrow: 1,
    width: wp("24.213075060532688%"),
    height: hp("6.967144325131276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.93220338983051%"),
    top: hp("0.06833936347336067%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I637_2574_341_644_10_142: {
    flexGrow: 1,
    width: wp("24.213075060532688%"),
    height: hp("6.967144325131276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I637_2574_341_644_10_148: {
    flexGrow: 1,
    width: wp("3.389786865751622%"),
    height: hp("3.2786465733429124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.86428855175545%"),
    top: hp("0.6830601092896176%")
  },
  ImageBackground_I637_2574_341_644_10_149: {
    flexGrow: 1,
    width: wp("1.2106382817968042%"),
    height: hp("3.141974360565019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.549400348062953%"),
    top: hp("0.819672131147541%")
  },
  ImageBackground_I637_2574_341_644_10_152: {
    flexGrow: 1,
    width: wp("1.2106382817968042%"),
    height: hp("3.141974360565019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.20085029509685%"),
    top: hp("0.819672131147541%")
  },
  ImageBackground_I637_2574_341_644_10_155: {
    flexGrow: 1,
    width: wp("3.147659578854466%"),
    height: hp("2.0491540106267876%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.19104683716707%"),
    top: hp("1.9125182771943305%")
  },
  View_I637_2574_341_166: {
    flexGrow: 1,
    width: wp("12.590799031477%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.90314769975787%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I637_2574_341_167: {
    width: wp("12.590799031477%"),
    minWidth: wp("12.590799031477%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I637_2574_341_169: {
    width: wp("4.842615012106537%"),
    minWidth: wp("4.842615012106537%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.874092009685242%"),
    top: hp("4.2349726775956285%")
  },
  ImageBackground_I637_2574_341_170: {
    width: wp("3.14769975786925%"),
    minWidth: wp("3.14769975786925%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.600484261501222%"),
    top: hp("2.185792349726776%")
  },
  View_637_2575: {
    width: wp("87.65133171912834%"),
    minWidth: wp("87.65133171912834%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.2953995157385%"),
    top: hp("16.120218579234972%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_637_2576: {
    width: wp("50.12106537530266%"),
    minWidth: wp("50.12106537530266%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_637_2576: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 31,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_637_2577: {
    width: wp("87.65133171912834%"),
    minWidth: wp("87.65133171912834%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191257%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_637_2578: {
    width: wp("11.864406779661017%"),
    minWidth: wp("11.864406779661017%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.980629539951572%"),
    top: hp("0%")
  },
  Text_637_2578: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_637_2579: {
    width: wp("15.738498789346247%"),
    minWidth: wp("15.738498789346247%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.869249394673126%"),
    top: hp("0%")
  },
  Text_637_2579: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_637_2580: {
    width: wp("43.82566585956417%"),
    minWidth: wp("43.82566585956417%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.1420765027322375%")
  },
  ImageBackground_637_2581: {
    width: wp("43.82566585956417%"),
    minWidth: wp("43.82566585956417%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.82566585956416%"),
    top: hp("3.1420765027322375%")
  },
  View_637_2582: {
    width: wp("86.92493946731234%"),
    minWidth: wp("86.92493946731234%"),
    height: hp("62.704918032786885%"),
    minHeight: hp("62.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.658595641646489%"),
    top: hp("34.01639344262295%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_637_2583: {
    width: wp("86.92493946731234%"),
    minWidth: wp("86.92493946731234%"),
    height: hp("20.901639344262296%"),
    minHeight: hp("20.901639344262296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I637_2583_407_1239: {
    flexGrow: 1,
    width: wp("71.1864406779661%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.60048426150121%"),
    top: hp("6.010928961748633%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I637_2583_407_1240: {
    width: wp("71.1864406779661%"),
    minWidth: wp("71.1864406779661%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.0491803278688607%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I637_2583_407_1241: {
    flexGrow: 1,
    width: wp("85.23002421307507%"),
    height: hp("17.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.694915254237289%"),
    top: hp("3.278688524590166%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I637_2583_407_1242: {
    width: wp("39.95157384987893%"),
    minWidth: wp("39.95157384987893%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.905569007263921%"),
    top: hp("2.7322404371584668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I637_2583_407_1243: {
    width: wp("34.14043583535109%"),
    minWidth: wp("34.14043583535109%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I637_2583_407_1243: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I637_2583_407_1244: {
    width: wp("39.95157384987893%"),
    minWidth: wp("39.95157384987893%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737707%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I637_2583_407_1245: {
    width: wp("33.41404358353511%"),
    minWidth: wp("33.41404358353511%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I637_2583_407_1245: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I637_2583_407_1272: {
    width: wp("5.326876513317192%"),
    height: hp("2.459016393442623%"),
    top: hp("0.06830601092896416%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.624697336561745%")
  },
  View_I637_2583_407_1248: {
    width: wp("11.138014527845035%"),
    minWidth: wp("11.138014527845035%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.2179176755448%"),
    top: hp("1.0928961748633839%")
  },
  Text_I637_2583_407_1248: {
    color: "rgba(233, 120, 84, 1)",
    fontSize: 12,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I637_2583_407_1249: {
    width: wp("15.49636803874092%"),
    minWidth: wp("15.49636803874092%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.02663438256658%"),
    top: hp("1.3661202185792334%")
  },
  Text_I637_2583_407_1249: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I637_2583_407_1250: {
    width: wp("16.46489104116223%"),
    minWidth: wp("16.46489104116223%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.905569007263921%"),
    top: hp("13.251366120218577%")
  },
  Text_I637_2583_407_1250: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I637_2583_407_1268: {
    width: wp("18.401937046004843%"),
    minWidth: wp("18.401937046004843%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.95399515738499%"),
    top: hp("11.612021857923494%"),
    backgroundColor: "rgba(233, 120, 84, 1)"
  },
  View_I637_2583_407_1268_341_754: {
    flexGrow: 1,
    width: wp("13.075060532687651%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.663438256658594%"),
    top: hp("1.2978142076502763%")
  },
  Text_I637_2583_407_1268_341_754: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I637_2583_407_1251: {
    flexGrow: 1,
    width: wp("9.685230024213075%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I637_2583_407_1252: {
    width: wp("9.200968523002421%"),
    minWidth: wp("9.200968523002421%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4842615012106535%"),
    top: hp("0.9562841530054698%")
  },
  View_637_2584: {
    width: wp("86.92493946731234%"),
    minWidth: wp("86.92493946731234%"),
    height: hp("20.901639344262296%"),
    minHeight: hp("20.901639344262296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.9016393442623%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I637_2584_401_486: {
    flexGrow: 1,
    width: wp("71.1864406779661%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.60048426150121%"),
    top: hp("6.010928961748633%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I637_2584_401_412: {
    width: wp("71.1864406779661%"),
    minWidth: wp("71.1864406779661%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.0491803278688465%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I637_2584_401_762: {
    flexGrow: 1,
    width: wp("85.23002421307507%"),
    height: hp("17.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.694915254237289%"),
    top: hp("3.2786885245901587%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I637_2584_401_952: {
    width: wp("71.1864406779661%"),
    minWidth: wp("71.1864406779661%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.905569007263921%"),
    top: hp("2.732240437158474%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I637_2584_401_408: {
    width: wp("34.14043583535109%"),
    minWidth: wp("34.14043583535109%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I637_2584_401_408: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I637_2584_401_951: {
    width: wp("71.1864406779661%"),
    minWidth: wp("71.1864406779661%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737693%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I637_2584_401_413: {
    width: wp("65.85956416464892%"),
    minWidth: wp("65.85956416464892%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I637_2584_401_413: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I637_2584_401_414: {
    width: wp("4.116222760290557%"),
    minWidth: wp("4.116222760290557%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.07021791767555%"),
    top: hp("0.1366120218579283%")
  },
  View_I637_2584_401_503: {
    width: wp("48.91041162227603%"),
    minWidth: wp("48.91041162227603%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.31961259079903%"),
    top: hp("11.065573770491817%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I637_2584_401_503_401_372: {
    flexGrow: 1,
    width: wp("9.200968523002421%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4213075060532603%"),
    top: hp("0.6830601092896131%")
  },
  ImageBackground_I637_2584_401_503_401_366: {
    flexGrow: 1,
    width: wp("9.200968523002421%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.043583535108958%"),
    top: hp("0.6830601092896131%")
  },
  ImageBackground_I637_2584_401_503_401_378: {
    flexGrow: 1,
    width: wp("9.200968523002421%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.66585956416465%"),
    top: hp("0.6830601092896131%")
  },
  ImageBackground_I637_2584_401_503_401_375: {
    flexGrow: 1,
    width: wp("9.200968523002421%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.28813559322033%"),
    top: hp("0.6830601092896131%")
  },
  View_I637_2584_401_585: {
    width: wp("11.138014527845035%"),
    minWidth: wp("11.138014527845035%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.2179176755448%"),
    top: hp("1.092896174863391%")
  },
  Text_I637_2584_401_585: {
    color: "rgba(233, 120, 84, 1)",
    fontSize: 12,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I637_2584_401_586: {
    width: wp("15.49636803874092%"),
    minWidth: wp("15.49636803874092%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.02663438256658%"),
    top: hp("1.3661202185792334%")
  },
  Text_I637_2584_401_586: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I637_2584_401_954: {
    width: wp("16.46489104116223%"),
    minWidth: wp("16.46489104116223%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.905569007263921%"),
    top: hp("13.251366120218584%")
  },
  Text_I637_2584_401_954: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I637_2584_401_415: {
    flexGrow: 1,
    width: wp("9.685230024213075%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I637_2584_401_437: {
    width: wp("9.200968523002421%"),
    height: hp("5.191256830601093%"),
    top: hp("0.9562841530054627%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4842615012106535%")
  },
  View_I637_2584_401_418: {
    width: wp("3.389830508474576%"),
    minWidth: wp("3.389830508474576%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4842615012106535%"),
    top: hp("0.9562841530054627%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I637_2584_401_418_391_1: {
    flexGrow: 1,
    width: wp("3.389830508474576%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I637_2584_401_418_391_2: {
    flexGrow: 1,
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.694915254237289%"),
    top: hp("0.1366120218579212%")
  },
  Text_I637_2584_401_418_391_2: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_637_2585: {
    width: wp("86.92493946731234%"),
    minWidth: wp("86.92493946731234%"),
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
  View_I637_2585_401_1214: {
    flexGrow: 1,
    width: wp("71.1864406779661%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.60048426150121%"),
    top: hp("6.010928961748633%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I637_2585_401_1215: {
    width: wp("71.1864406779661%"),
    minWidth: wp("71.1864406779661%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.0491803278688536%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I637_2585_401_1216: {
    flexGrow: 1,
    width: wp("85.23002421307507%"),
    height: hp("17.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.694915254237289%"),
    top: hp("3.278688524590166%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I637_2585_401_1217: {
    width: wp("71.1864406779661%"),
    minWidth: wp("71.1864406779661%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.905569007263921%"),
    top: hp("2.7322404371584668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I637_2585_401_1218: {
    width: wp("34.14043583535109%"),
    minWidth: wp("34.14043583535109%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I637_2585_401_1218: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I637_2585_401_1219: {
    width: wp("71.1864406779661%"),
    minWidth: wp("71.1864406779661%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737707%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I637_2585_401_1220: {
    width: wp("69.00726392251816%"),
    minWidth: wp("69.00726392251816%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I637_2585_401_1220: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I637_2585_401_1223: {
    width: wp("11.138014527845035%"),
    minWidth: wp("11.138014527845035%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.2179176755448%"),
    top: hp("1.0928961748633839%")
  },
  Text_I637_2585_401_1223: {
    color: "rgba(233, 120, 84, 1)",
    fontSize: 12,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I637_2585_401_1224: {
    width: wp("15.49636803874092%"),
    minWidth: wp("15.49636803874092%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.02663438256658%"),
    top: hp("1.3661202185792263%")
  },
  Text_I637_2585_401_1224: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I637_2585_401_1225: {
    width: wp("16.46489104116223%"),
    minWidth: wp("16.46489104116223%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.905569007263921%"),
    top: hp("13.251366120218577%")
  },
  Text_I637_2585_401_1225: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I637_2585_401_1211: {
    width: wp("12.590799031477%"),
    minWidth: wp("12.590799031477%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.63922518159806%"),
    top: hp("12.978142076502735%")
  },
  View_I637_2585_401_1226: {
    flexGrow: 1,
    width: wp("9.685230024213075%"),
    height: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I637_2585_401_1227: {
    width: wp("9.200968523002421%"),
    height: hp("5.191256830601093%"),
    top: hp("0.9562841530054556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4842615012106535%")
  },
  View_637_2586: {
    width: wp("89.10411622276028%"),
    minWidth: wp("89.10411622276028%"),
    height: hp("0.8196721962892293%"),
    minHeight: hp("0.8196721962892293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.569007263922518%"),
    top: hp("103.00546448087431%")
  },
  View_637_2587: {
    width: wp("27.36077481840194%"),
    minWidth: wp("27.36077481840194%"),
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
  View_637_2588: {
    width: wp("11.380145278450362%"),
    minWidth: wp("11.380145278450362%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.571428571428573%"),
    top: hp("0%"),
    backgroundColor: "rgba(209, 207, 213, 1)",
    borderTopLeftRadius: 4.5,
    borderTopRightRadius: 4.5,
    borderBottomLeftRadius: 4.5,
    borderBottomRightRadius: 4.5
  },
  View_637_2589: {
    width: wp("47.94188861985472%"),
    minWidth: wp("47.94188861985472%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.162227602905574%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 120, 84, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_637_2590: {
    width: wp("95.88377723970945%"),
    minWidth: wp("95.88377723970945%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1791767554479415%"),
    top: hp("110.10928961748634%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I637_2590_341_180: {
    flexGrow: 1,
    width: wp("5.326876513317192%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.600484261501211%"),
    top: hp("4.234972677595621%")
  },
  ImageBackground_I637_2590_341_181: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.91767554479419%"),
    top: hp("3.551912568306008%")
  },
  ImageBackground_I637_2590_341_179: {
    flexGrow: 1,
    width: wp("5.326876513317192%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.907990314769975%"),
    top: hp("4.030054644808743%")
  },
  ImageBackground_I637_2590_341_260: {
    flexGrow: 1,
    width: wp("17.433414043583532%"),
    height: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.22518159806295%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_I637_2590_341_177: {
    flexGrow: 1,
    width: wp("5.326876513317192%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.64891041162228%"),
    top: hp("4.234972677595621%")
  },
  ImageBackground_I637_2590_341_178: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.96610169491525%"),
    top: hp("3.551912568306008%")
  },
  ImageBackground_I637_2590_341_176: {
    flexGrow: 1,
    width: wp("5.326876513317192%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.95641646489103%"),
    top: hp("4.030054644808743%")
  },
  View_401_1604: {
    width: wp("99.75786924939467%"),
    minWidth: wp("99.75786924939467%"),
    height: hp("74.4535519125683%"),
    minHeight: hp("74.4535519125683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.694915254237288%"),
    top: hp("47.950819672131146%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_401_273: {
    width: wp("87.40920096852301%"),
    minWidth: wp("87.40920096852301%"),
    height: hp("20.12482523266735%"),
    minHeight: hp("20.12482523266735%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.174334140435835%"),
    top: hp("1.639344262295083%")
  },
  View_401_279: {
    width: wp("32.20338983050847%"),
    minWidth: wp("32.20338983050847%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.602905569007266%"),
    top: hp("11.92810392119194%")
  },
  Text_401_279: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_280: {
    width: wp("87.40920096852301%"),
    minWidth: wp("87.40920096852301%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.665808839224724%")
  },
  Text_401_280: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_281: {
    width: wp("40.67796610169492%"),
    minWidth: wp("40.67796610169492%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.486682808716708%"),
    top: hp("6.873459112448771%")
  },
  Text_401_281: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 15,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_401_1605: {
    width: wp("8.015251621495725%"),
    height: hp("4.551053177463552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.696910941283285%")
  },
  View_401_1597: {
    width: wp("85.04861088122352%"),
    minWidth: wp("85.04861088122352%"),
    height: hp("33.7431693989071%"),
    minHeight: hp("33.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.354603321731234%"),
    top: hp("24.086573866547127%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_401_1722: {
    width: wp("75.36338085701044%"),
    minWidth: wp("75.36338085701044%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.84261501210654%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I401_1722_401_285: {
    flexGrow: 1,
    width: wp("69.5522428424826%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.811138014527845%"),
    top: hp("10.792349726775953%")
  },
  View_I401_1722_401_1591: {
    flexGrow: 1,
    width: wp("75.30266343825666%"),
    height: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_1722_401_1596: {
    width: wp("53.026634382566584%"),
    minWidth: wp("53.026634382566584%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8879781420765056%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I401_1722_401_286: {
    width: wp("15.49636803874092%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I401_1722_401_1590: {
    width: wp("36.077481840193705%"),
    minWidth: wp("36.077481840193705%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.94915254237288%"),
    top: hp("1.2978142076502763%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_1722_401_1587: {
    width: wp("36.077481840193705%"),
    minWidth: wp("36.077481840193705%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_1722_401_287: {
    width: wp("15.012106537530268%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I401_1722_401_287: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I401_1722_401_289: {
    width: wp("15.980629539951574%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.096852300242134%")
  },
  View_I401_1722_401_290: {
    width: wp("10.16949152542373%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I401_1722_401_290: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I401_1722_401_291: {
    width: wp("5.811138014527845%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.16949152542373%")
  },
  Text_I401_1722_401_291: {
    color: "rgba(233, 120, 84, 1)",
    fontSize: 12,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I401_1722_401_288: {
    width: wp("12.832929782082324%"),
    top: hp("3.6885245901639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I401_1722_401_288: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I401_1722_401_1589: {
    width: wp("9.200968523002421%"),
    minWidth: wp("9.200968523002421%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.10169491525423%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I401_1722_401_293: {
    width: wp("9.200968523002421%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I401_1722_401_292: {
    width: wp("6.5375302663438255%"),
    top: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.331719128329297%")
  },
  Text_I401_1722_401_292: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_1739: {
    width: wp("75.36338085701044%"),
    minWidth: wp("75.36338085701044%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.84261501210654%"),
    top: hp("19.125683060109296%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I401_1739_401_285: {
    flexGrow: 1,
    width: wp("69.5522428424826%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.811138014527845%"),
    top: hp("10.792349726775939%")
  },
  View_I401_1739_401_1591: {
    flexGrow: 1,
    width: wp("75.30266343825666%"),
    height: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_1739_401_1596: {
    width: wp("53.026634382566584%"),
    minWidth: wp("53.026634382566584%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8879781420765056%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I401_1739_401_286: {
    width: wp("15.49636803874092%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I401_1739_401_1590: {
    width: wp("36.077481840193705%"),
    minWidth: wp("36.077481840193705%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.94915254237288%"),
    top: hp("1.2978142076502621%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_1739_401_1587: {
    width: wp("36.077481840193705%"),
    minWidth: wp("36.077481840193705%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_1739_401_287: {
    width: wp("15.012106537530268%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I401_1739_401_287: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I401_1739_401_289: {
    width: wp("15.980629539951574%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.096852300242134%")
  },
  View_I401_1739_401_290: {
    width: wp("10.16949152542373%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I401_1739_401_290: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I401_1739_401_291: {
    width: wp("5.811138014527845%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.16949152542373%")
  },
  Text_I401_1739_401_291: {
    color: "rgba(233, 120, 84, 1)",
    fontSize: 12,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I401_1739_401_288: {
    width: wp("12.832929782082324%"),
    top: hp("3.6885245901639365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I401_1739_401_288: {
    color: "rgba(54, 59, 100, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I401_1739_401_1589: {
    width: wp("9.200968523002421%"),
    minWidth: wp("9.200968523002421%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.10169491525423%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I401_1739_401_293: {
    width: wp("9.200968523002421%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I401_1739_401_292: {
    width: wp("7.263922518159806%"),
    top: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.968523002421307%")
  },
  Text_I401_1739_401_292: {
    color: "rgba(233, 84, 84, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
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
