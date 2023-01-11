import stock from "../apidata/apimanual.json"

export const pedirDatos=()=>{
    return new Promise ((resolve ,reject)=>{
        setTimeout(() => {
                resolve(stock)
        }, 1000);    

    })
}