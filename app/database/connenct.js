import mongoose from "mongoose"

export default async function(){
  try{
    return await mongoose.connect('mongodb://127.0.0.1:27017/students');

  }catch(error){
        throw new Error("database connection failed")
  }
}