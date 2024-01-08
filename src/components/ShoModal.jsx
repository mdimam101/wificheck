import React from 'react'
import Modal from 'react-modal'
// import ButtonComponent from './ButtonComponent';
import '../style/Modal.css'
// import {Link} from 'react-router-dom'

const modalStyle = {
    overlay:{
    background: '#404040',
    opacity:'0.9'
},
content:{
    width:'400px',
    height:'350',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
}}

export default function ShoModal(props) {
    // popup 閉じるの場合、「isopen = false」
    // const [loading, setLoading] = useState(false)
    if (!props.isOpen) return null;

    // 有線ページ作成してないので、modal そのまま閉じる
    const clickHandle = () => {
        props.modalhandle(false)
    }

  return (
    <div>
        <Modal style={modalStyle} isOpen={props.isOpen}>
        <h2>ネットワーク接続方法を<br/>選択してください。</h2>
        <div style={{textAlign:'center' }}>
        {/* <ButtonComponent onClick={() => {clickHandle()}}>有線</ButtonComponent>
        <ButtonComponent>無線</ButtonComponent> */}

        <button className='button' onClick={() => {clickHandle()}}>有線</button>
        <button  className='button'><a href='/wifilist'>無線</a></button>
        </div>
    </Modal>
    </div>
  )
}
