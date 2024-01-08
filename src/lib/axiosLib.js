
export const setMainAppData = async(baseURL, methodType, bodyData) => {
    await fetch(`${baseURL}` , {
        method: methodType,
        headers: {
            'Conytent-Type':'application/json'
        },
        body:JSON.stringify(bodyData)
    })
}

