import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import Modal from "react-modal";
// import { auth } from "../config/firebase"
// import { createUserWithEmailAndPassword } from "firebase/auth";

const modalStyle = {
  overlay: {
    background: "#353535",
    opacity: "0.95",
  },
  content: {
    width: "400px",
    height: "300px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export default function WifiLoginForm(props) {
  const [psw, setpsw] = useState();
  const [message, setmessage] = useState();

  if (!props.isOpen) return null;
  // console.log(parentData.id);
  //   const signIn = async () => {
  // await createUserWithEmailAndPassword(auth, email, "emamexp9")
  //   };

  const setDataForParents = (connectFlg, disconnectFlg) => {

    if (props.parentData.id) {
      // 正しいpassword入力する際に、wifi接続する
      if (props.parentData.password === psw ) {
        const childData = {
          wifiDisconnect: disconnectFlg,
          wifiConnect: connectFlg,
          selectWifi: props.parentData.id,
        };
        props.revDataFromChild(childData);
        
      }else if (localStorage.getItem('wifiID') || disconnectFlg) {
        const childData = {
          wifiDisconnect: disconnectFlg,
          wifiConnect: connectFlg,
          selectWifi: props.parentData.id,
        };
        props.revDataFromChild(childData);
        localStorage.removeItem('wifiID')
        // localStorage.setItem('wifiID', null)
        // passwordを入力してない場合はメッセージを表示する
      } else {
        setmessage("passwordを入力してください");
      }
    }
  };
  // 「閉じるボタン」
  const closeHandle = (ele) => {
    const childData = {
      wifiConnect: ele,
    };
    props.revDataFromChild(childData);
    setmessage("");
  };

  const inputPassword = (event) => {
    setpsw(event.target.value);
  };
  if (!props.wifiIsconnect) {
    return (
      <div>
        <Modal style={modalStyle} isOpen={true}>
          <div style={{ marginLeft: "18%" }}>
            <h1>WifiLoginForm</h1>
            <div style={{ display: "block" }}>
              <form>
                <div>
                  <input
                    style={{
                      border: "solid 2px black",
                      marginBottom: "5px",
                      padding: "8px",
                      width: "240px",
                    }}
                    id="Name"
                    type="text"
                    value={props.parentData.name}
                    // placeholder={props.parentData.name}
                    disabled
                  />
                </div>
                {/* <label for="Name">Name</label> */}
                <div>
                  <input
                    type="password"
                    onChange={inputPassword}
                    //   value={psw} when use value then can not change input value
                    style={{
                      border: "solid 2px black",
                      marginBottom: "5px",
                      padding: "8px",
                      width: "240px",
                    }}
                    id="Password"
                    placeholder="Password"
                    required
                  />
                </div>

                {/* <label for="Password">Password</label> */}
              </form>
            </div>
            {message}
            <ButtonComponent
              styleVariant={"authFrom"}
              onClick={() => {
                setDataForParents(true, undefined);
              }}
            >
              接続する
            </ButtonComponent>

            <ButtonComponent
              styleVariant={"authFrom"}
              onClick={() => {
                closeHandle(false);
              }}
            >
              閉じる
            </ButtonComponent>
          </div>
        </Modal>
      </div>
    );
  } else {
    return (
      <div>
        <Modal style={modalStyle} isOpen={true}>
          <div style={{ marginLeft: "18%" }}>
            <h1>
              ネットワーク接続を
              <br />
              閉じる❓
            </h1>
            <div style={{ display: "block" }}>
              <ButtonComponent
                styleVariant={"authFrom"}
                onClick={() => {
                  setDataForParents(undefined, true);
                }}
              >
                はい
              </ButtonComponent>

              <ButtonComponent
                styleVariant={"authFrom"}
                onClick={() => {
                  closeHandle(false);
                }}
              >
                いいえ
              </ButtonComponent>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
