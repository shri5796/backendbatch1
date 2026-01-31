// way 1
let countries={
    india:{
        states:28,
        capital:"New Delhi",
        PM:"Sri Narendra Modi"
    },
    china:{
        states:10,
        capital:"xyz",
        President:"deewas"
    },
    nepal:{
        states:13,
        capital:"idk",
        pm:"Abhijit"
    }
}

function getCountry (req,res){
    let {country}=req.params;
    let {minState, maxState}=req.query;
    let result=[];
    for(let key of Object.keys(countries)){
            if(countries[key].states>minState&&countries[key].states<maxState){
                result.push(countries[key]);
            }
    }
    res.send({message:"succuessful",data:countries[country], result})
}
const addCountry=(req,res)=>{
    let data=req.body;
    countries[data.name]=data;
    res.send({message:"successful",data:countries})
}

export {getCountry,addCountry}