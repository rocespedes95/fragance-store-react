import stock from "../apidata/apimanual.json"

export const pedirDatos=()=>{
    return new Promise ((resolve ,reject)=>{
        setTimeout(() => {
                resolve(stock)
        }, 1000);    

    })
}

export const pedirItemPorId = (id)=>{
    return new Promise ((resolve ,reject)=>{
        setTimeout(()=>
        {
            const item = stock.find((el)=>el.id ===id)
            
                resolve(item)
        },1000
        )
    })
}