import React, { useState } from "react";
import "../style/Navbar.css";
import ShoModal from "./ShoModal";
// import { Outlet, Link, NavLink } from "react-router-dom";
// 
const Nabvar = (props) => {
  const [Open, modalOpen] = useState(false);
  const handleClick = (ele) => {
    modalOpen(ele);
    console.log(ele);
  };
  const handleClose = (childData) => {
    modalOpen(false);
  };

  const onChangeMainSection = (ele) =>{
    // props.onChangeSec(ele)
    console.log("click Home Btn");
  }

  return (
    <>
      <div className="NavArea">
        <ul>
          <li>
            {/* <img src={HomeIcone} alt="" srcset="" /> */}
            <a
              className="active"
              href="/"
              onClick={() => {
                onChangeMainSection("home");
              }}
            >
              ホーム
            </a>
          </li>
          <li>
            <a
              href="#Home"
              onClick={() => {
                onChangeMainSection("favorite");
              }}
            >
              お気に入り
            </a>
          </li>
          <li
              
            
            >
              <button onClick={() => {
                handleClick(true);
              }}> ネットワーク</button>
            
          </li>
          <li>
            <a href="#Home"
            onClick={() => {
              onChangeMainSection("account");
            }}>アカウント</a>
          </li>
          <li>
            {/* <img src={HomeIcone} alt="" srcset="" /> */}
            {/* <Link>Home</Link> */}
          </li>
        </ul>
        {/* <Outlet/> */}
      </div>
      <ShoModal isOpen={Open} modalhandle={handleClose}></ShoModal>
    </>
  );
};
export default Nabvar;
