import React, { useEffect, useState } from "react";
import WifiLockIcone from "../assets/Wifi_lock.png";
import wifiUnlockIcone from "../assets/wifi.svg";
import WifiLoginForm from "../components/WifiLoginForm";
import ConfrimMark from "../assets/ok.svg";
import "../style/WifiListPage.css";
import { getAppData } from "../utilities/MetaCommonData";
import { wifiJsonList } from "../URLlist/jsonLink";
import LoadingComponent from "../components/LoadingComponent";

export default function WifiListPage() {
  const [parentData, setParentData] = useState({
    id: null,
    name: null,
    password: null,
  });
  const [modalOpen, setModal] = useState(false);
  const [dataList, setDataList] = useState("");
  const [connectflg, setConnectFlg] = useState();
  const [wifiId, setWifiId] = useState();
  const [localData, setLocalData] = useState()
  // const [dataList, setDataList] = useReducer(x => x+1,0);

  const clickOnWifiList = (id, name, password) => {
    // チャイルドのためデータ設定する
    setParentData({
      id: id,
      name: name,
      password: password,
    });
    // wifi接続されている場合、閉じるダイヤログ表示
    const getLocalData=localStorage.getItem('wifiID')
    console.log();
    if (wifiId === id || getLocalData == id ) {
      setConnectFlg(true);
    } else {
      setConnectFlg(false);
    }

    if (!modalOpen) {
      setModal(true);
    }
  };
  // auth-modalからデータ取得
  const getDataFromChildAuth = (data) => {
    // auth-modal閉じる
    setModal(false);
    // wifiConnectTest(true);

    for (let i = 0; i < dataList[0].length; i++) {
      if (data.wifiConnect) {
        if (dataList[0][i].id === data.selectWifi) {
          dataList[0][i].wifiConnectFlg = true;
          setWifiId(data.selectWifi);
          setDataList(dataList);
          setLocalData(data.selectWifi)
          localStorage.setItem('wifiID',data.selectWifi)
        } else {
          dataList[0][i].wifiConnectFlg = false;
          setDataList(dataList);
        }
      } else if (data.wifiDisconnect && dataList[0][i].id === data.selectWifi) {
        dataList[0][i].wifiConnectFlg = false;
        setConnectFlg(false);
        setWifiId("");
        setDataList(dataList);
        // setModal(false);
      }
    }
  };
  // useReducer();
  useEffect(() => {
    
    
    // wifiリスト取得する
    const postData = async (e) => {
      const data = await getAppData(wifiJsonList);
      if (data) {
        const getLocalData = localStorage.getItem('wifiID')
        for (let i = 0; i < data[0]?.length; i++) {
          console.log('wifiID', getLocalData);
            if (data[0][i].id == getLocalData ) {
              data[0][i].wifiConnectFlg = true;
              // setConnectFlg(false);
              setDataList(data);
              // setLocalData(data.selectWifi)
              // localStorage.setItem('wifiID',data.selectWifi)
            }
        }
        setDataList(data);
       } 
 
      // const res = await fetch('https://fire-base-withwifi-default-rtdb.firebaseio.com/wifilist.json')
      // .then((res => res.json()))
      // .then((dataa) => {
      //   const getdata = Object.values(data)
      //   // setDataList(getdata);
      // })
    };
    postData();
  
    
  }, []);

  console.log("dataList11", dataList);
  // console.log("wifiConnectTest", wifiConnectTest());
  if (!dataList) {
    return <LoadingComponent type="spin" />;
  } else {
    return (
      <>
        <h1 style={{ textAlign: "center", paddingTop: "0px" }}>無線一覧表</h1>
        <div className="wifiListMainArea">
          <h1 style={{ padding: "10px 10px 0px 25px", textAlign: "left" }}>
            SSID
          </h1>

          {dataList?.length > 0 &&
            dataList[0]?.map((item, index) => {
              // console.log(item.name);
              // 無線アイコンを表示の判定
              let setIcone = item.wifiConnectFlg
                ? wifiUnlockIcone
                : WifiLockIcone;
              let wifiIconeStyle = "24px";
              let okMark;
              if (item.wifiConnectFlg) {
                wifiIconeStyle = "30px";
                okMark = (
                  <img
                    src={ConfrimMark}
                    alt="wifi"
                    style={{ height: "27px" }}
                  />
                );
              }
              return (
                <div className="divMainArea">
                  <div
                    className="styleDiv"
                    key={index}
                    onClick={() => {
                      clickOnWifiList(item.id, item.name, item.password);
                    }}
                  >
                    {/* SSID名エリア */}
                    <div style={{ paddingLeft: "25px" }}>{item.name}</div>
                    {/* 　OKマークエリア */}
                    <div
                      style={{
                        paddingTop: "7px",
                        textAlign: "right",
                        paddingRight: "10px",
                      }}
                    >
                      {okMark}
                    </div>
                    {/* wifi-Icone　エリア */}
                    <div
                      style={{
                        textAlign: "right",
                        padding: "5px 8px 0px 25px",
                      }}
                    >
                      <img
                        src={setIcone}
                        alt="wifi"
                        style={{ height: wifiIconeStyle }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}

          <WifiLoginForm
            isOpen={modalOpen}
            wifiIsconnect={connectflg}
            parentData={parentData}
            revDataFromChild={getDataFromChildAuth}
          ></WifiLoginForm>
        </div>
      </>
    );
  }
}
