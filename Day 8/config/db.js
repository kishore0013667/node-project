import mangose from "mangose";
const connectDb = async () => {
    
    try{
        const conn = await mangose.connect(process.env.MANGO_URI)
        console.log ('Database Connected Succesfully ${conn.Connection.host}');
    }
    catch(error)
    {
        console.log('ERROR',error);
    }
}
