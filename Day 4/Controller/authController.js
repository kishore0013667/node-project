export const authData = (res,req)=>{

    console.log(req);

const {name,subject,datas} = req.body

//if(name === "React"){
//   res.status(200).json({msg:"data good"})
//   }
//  else{
//      res.ststus(400).json({msg:"not good"})
//   }
}

export const getparams = (req,res)=>{
    
    console.log(req);

    const {userid} = req.params

//    if(userid===1000){
//        res.status(200).json({msg:"Done"})
//    }
//    else{
//        res.status(500).json({msg:"not Done"})
    }


export const quaryData = (req,res)=>{
    
    console.log(req);

    const {userid} = req.params

    if(userid===1000){
        res.status(200).json({msg:"Done"})
    }
    else{
        res.status(500).json({msg:"not Done"})
    }
}
export const headers = (req,res)=>{
    
    console.log(req);
}
