import React, { useEffect, useState } from "react";
import "../style/Layout.css";
import { setAppData, getAppData } from "../utilities/MetaCommonData";
import { wifiJsonList } from "../URLlist/jsonLink";

export default function HomePage() {
  
  const [connectflg, setConnectFlg] = useState();

  useEffect(() => {
    const postData = async (e) => {
      await getAppData(wifiJsonList)
        .then((res) => {
          if (!res) {
            setAppData();
          }
        })
        .catch((err) => {
          console.log("ERR home page", err);
        });
    };
    postData();

    // localStorage check
    const getlocaldata = localStorage.getItem("wifiID");
    setConnectFlg(getlocaldata);

    // const getData = async() => {
    //   const res = await fetch ('https://fire-base-withwifi-default-rtdb.firebaseio.com/signin.json')
    //   .then(res => (res.json()))
    //   .then(data => {
    //     if (data) {
    //       const test = Object.values(data)
    //       console.log(data, test[0].name);
    //       setdata(data)
    //     }
    //   })
    // }
    // getData()
  }, []);

  if (connectflg) {
    return (
      <>
        <div style={{ textAlign: "center", paddingTop: "100px" }}>
          <h2>ネットワーク接続済みです。❕</h2>

          <h3>アイコンログイン際に、ホームページを表示になります。</h3>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div style={{ textAlign: "center", paddingTop: "100px" }}>
          <h1>ネットワーク接続(エラー999)</h1>
          {/* {Data} */}
          {/* <button>handle</button> */}
          <h3>ネットワーク接続してご利用ください</h3>
        </div>
      </>
    );
  }
}
