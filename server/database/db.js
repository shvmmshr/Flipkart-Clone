import mongoose from "mongoose";



export const Connection =async(username,password) => {
    const URL =`mongodb+srv://${username}:${password}@ecommerce-web.wpn2c7s.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL,{useUnifiedTopology: true ,useNewUrlParser: true});
        console.log('Database Connected Successfully')    
    } catch (error) {
        console.log('Error while connecting with the database',error.message)
    }
}

export default Connection;