import jwt from 'jsonwebtoken'
export const checkToken = (req,res,next)=>{

    try {

     //console.log(req);
     

        const token = req.headers.authorization
        

        if(!token){
            return res.status(401).json({msg:"Invalid Token"})
        }

        const checkjwt = jwt.verify(token,process.env.JWT_SECURE)

        //console.log('error',checkjwt);
        
        
        req.users = checkjwt

        next()
        
    } catch (error) {

        console.log('error',error);
        res.status(404).json({msg:"Your Token is broken kindly login again"})
        
    }





}