let axios = require("axios");
const coinModel= require("../model/coinModel");

//class 1st api:-
let getCoins = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://api.coincap.io/v2/assets',
            headers: {Authorization: "Bearer 8c208546-3bb7-4bb3-a725-86a25fe629be "},
        }
        let result = await axios(options);
        
    
        let data = result.data.data.sort((a,b) => {return a.changeParcentHr - b.changeParcentHr})
        await coinModel.deleteMany()
        let  arr= [];
        for(let i=0;i<data.length;i++){
           // let unique = await coinModel.find({symbol:data[i].symbol,name:data[i].name})
            //if(unique.length == 0){
                
                let object = {}
                object.symbol = data[i].symbol,
                object.name = data[i].name,
                object.marketCapUsd = data[i].marketCapUsd,
                object.priceUsd = data[i].priceUsd,  
                arr.push(object)
        }
        await coinModel.insertMany(arr)
        return res.status(200).send({msg:data,status:true})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getCoins = getCoins