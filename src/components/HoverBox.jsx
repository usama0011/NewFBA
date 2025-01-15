import React from "react";
import "../styles/hoverbox.css";
import Elogo from "../assets/e.png";
const HoverBox = ({
  description,
  learnmoreabove,
  learnmorebottom,
  pagename,
  likesshow,
  angryshow,
  happyshow,
  commetsshow,
  sharesshow,
  campaingImage,
  learnmorecenter,
}) => {
  return (
    <div>
      <div
        style={{ textAlign: "left" }}
        className="x2i-6ma x1m-ihi x1y-lb7 xdj-ec5 xkr-x4b xat-oal x1g-2n1 xw2-x5l x1o-j9m stopethisyar x47-iig x87-ri1"
      >
        <div
          class=""
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",

            padding: "10px 5px",
          }}
        >
          <img
            src={Elogo}
            style={{
              width: "60px",
              height: "60px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
            alt=""
          />
          <div
            style={{ marginLeft: "10px" }}
            class="x78-xhl xdt-5yo xam-vod x1a-3sf xh8-g1j"
          >
            <div>
              <span class="x1f-wep x1f-mt7 xuy-n8w">
                <span
                  class="x1x-9jy"
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "13px",
                  }}
                >
                  {pagename}
                </span>
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
              class="x1h-p2x x1p-q8p x94-da5 x1n-xis x17-9q6 xt0-i3p"
            >
              <div class="xt0-i3p">Sponsored</div> ·{" "}
              <img
                style={{ width: "10px", height: "10px", marginLeft: "3px" }}
                class="ifvad"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxb3i4puLGhc1tBwhkq2Bp4ojm-qq-rJ5OgA&s"
              />
            </div>
          </div>
          <div
            class="x78-xhl x1q-thw x1g-sne xh8-g1j x13-sfo"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <i class="xam-vod ifvad style-JYod8" id="style-JYod8"></i>
            <i class="x1d-9kn xam-vod ifvad style-a9NYn" id="style-a9NYn"></i>
          </div>
        </div>
        <span
          style={{
            textWrap: "wrap",
            padding: "10px",
            textAlign: "left",
            fontSize: "14px",
            color: "black",
            fontWeight: "400",
          }}
        >
          {description}
        </span>
        <div class="x1n-xis x1j-eyf x1m-ihi x1e-twr">
          <div class="x1n-xis">
            <div class="x10-4mo x17-ki8 x13-xkl xqv-qxt x1m-ihi x1v-wv3 x17-4d9 x13-7gs"></div>
            <div class="x1n-xis">
              <img
                class="x1l-wyp x19-ps6 ifvad"
                height="179"
                width="320"
                src={campaingImage}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "10px",
              }}
              class=""
            >
              <div class="" id="">
                <div>
                  <div class="xh8-g1j x1d-6rx">
                    <span class="x1n-pz2 x1k-nwz _6i-itb">
                      <span
                        style={{ fontSize: "12px", color: "black" }}
                        id="style-eG8LF"
                        class="style-eG8LF"
                      >
                        {learnmoreabove}
                      </span>
                    </span>
                  </div>
                  <div class="xow-5xl">
                    <div>
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "bold",
                          color: "black",
                        }}
                        class="xh8-g1j x1f-x1i x6p-mro x11-nh8"
                        dir=""
                      >
                        {learnmorecenter}
                      </span>
                    </div>
                  </div>
                </div>
                <div dir="" id="" class="">
                  <span class="" style={{ fontSize: "14px", color: "gray" }}>
                    {learnmorebottom}
                  </span>
                </div>
              </div>
              <div class="x16-dxc">
                <div>
                  <div class="">
                    <div
                      class="x1j-eyf x78-xhl x2l-16r x1n-xis xl5-lfh x6s-9wf xoz-9k4 x1q-thw xi1-cyo x17-x7g x58-59z x14-m8e x97-c2r xcf-o84 x1q-nif xm0-wbl x9f-7xt xn6-wz5 x1y-xo6 x1q-r3k x1r-phh"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                    >
                      Learn more
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="x10-4mo xso-wnk x1q-cax x1m-goq x1m-ihi x1v-wv3 xds-tfk x1e-kkq"></div>
          </div>
        </div>
        <div></div>
        <div class="x1a-wka _3q-wva _61-826 _2f-tdp _3q-v5g">
          <div
            className="mytextbox"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: "10px",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              {likesshow && (
                <i
                  style={{ marginRight: "5px", marginLeft: "5px" }}
                  class="_3j-38l _2p-roz _as-nbl"
                ></i>
              )}
              {angryshow && (
                <i
                  style={{ marginRight: "5px" }}
                  class="_3j-6ed _2p-roz _as-nbl"
                ></i>
              )}
              {happyshow && (
                <i
                  style={{ marginRight: "5px" }}
                  class="_3j-fyq _2p-roz _as-nbl"
                ></i>
              )}

              <span class="x8t-icy x1f-on5 xo1-4bf xxi-m2c x1h-1sc xq9-ymg x1h-mzp xeu-di5">
                22
              </span>
            </div>

            <div class="" id="style-M6mHf">
              <div
                class=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  paddingRight: "10px",
                }}
              >
                {commetsshow && (
                  <div
                    class="_6g-491 x1i-fvw xmi-55w style-ZjDy9"
                    id="style-ZjDy9"
                  >
                    <span class="x8t-icy x1f-on5 xo1-4bf xxi-m2c x1h-1sc xq9-ymg x1h-mzp xeu-di5">
                      49 comments
                    </span>
                  </div>
                )}
                {sharesshow && (
                  <div class="_6g-6jg style-MtpQR" id="style-MtpQR">
                    <span class="x8t-icy x1f-on5 xo1-4bf xxi-m2c x1h-1sc xq9-ymg x1h-mzp xeu-di5">
                      2 shares
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div class="x14-k5s xjm-jt2 x1g-2n1 xkr-x4b xdz-4zb"></div>
          <div
            class="_6g-491 xdz-4zb x1y-w8s x1i-fvw x11-b6m x1s-odf style-kkDX8"
            id="style-kkDX8"
            style={{ padding: "10px 10px" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
              class="x1s-nxi x11-ja9 _3q-wva _6t-t5e _2f-k9l _3q-v5g"
            >
              <div class="_6g-491 style-wUFD9" id="style-wUFD9">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                  class="_3q-wva _61-826 _2f-k9l _3q-v5g"
                >
                  <div
                    class="_6g-491 x1s-kso x1j-781 xg3-ved style-Fnspc"
                    id="style-Fnspc"
                  >
                    <i class="ifvad style-Pkf82" id="style-Pkf82"></i>
                  </div>
                  <div class="_6g-491 style-jkJHv" id="style-jkJHv">
                    Like
                  </div>
                </div>
              </div>
              <div class="_6g-491 style-HHAwj" id="style-HHAwj">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                  class="_3q-wva _61-826 _2f-k9l _3q-v5g"
                >
                  <div
                    class="_6g-491 x1s-kso x1j-781 xg3-ved style-diCjQ"
                    id="style-diCjQ"
                  >
                    <i class="ifvad style-dYpkV" id="style-dYpkV"></i>
                  </div>
                  <div class="_6g-491 style-NRTrP" id="style-NRTrP">
                    Comment
                  </div>
                </div>
              </div>
              <div class="_6g-491 style-4oOFY" id="style-4oOFY">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                  class="_3q-wva _61-826 _2f-k9l _3q-v5g"
                >
                  <div
                    class="_6g-491 x1s-kso x1j-781 xg3-ved style-cBLZy"
                    id="style-cBLZy"
                  >
                    <i class="ifvad style-OQXUa" id="style-OQXUa"></i>
                  </div>
                  <div class="_6g-491 style-dHSq7" id="style-dHSq7">
                    Share
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverBox;
