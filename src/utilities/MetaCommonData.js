import wifiList  from'../data/wifiList.json'
import {wifiJsonList} from '../URLlist/jsonLink'
import {setMainAppData} from '../lib/axiosLib'
// setLocalData
// console.log("dd",wifiList);
// firebaseにデータ存在する
export const setAppData = async(e) => {
    console.log("put");
    // データ存在しているか確認、なかった場合、設定すること
    const dataCheck = await getAppData()
    console.log(`dataCheck`, dataCheck);
    if (!dataCheck){
        console.log("Check", dataCheck);
        await setMainAppData(wifiJsonList, 'POST', wifiList)
    }
}

// firebaseからデータ取得する
export const getAppData = async (baseURL) => {
    const res = await fetch(baseURL)
    .then((res => res.json()))
    .then((data) => {
        if (data) {
            const getRcvData = Object.values(data)
            return getRcvData
        }
    })
    .catch((err) => console.log(err))
    return res
}



    
