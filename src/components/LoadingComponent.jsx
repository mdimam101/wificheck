import React from 'react'
import ReactLoading from 'react-loading';

export default function LoadingComponent(props) {
  return (
    <div style={{ textAlign: "center", padding:"20% 0% 0% 40%"}}>
        <ReactLoading type={props.type}  height={'150px'} width={'150px'} />
      </div>
       
  )
}
