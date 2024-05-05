import mongoose from "mongoose";

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ak3898237:Jang12345@cluster0.v0lnucy.mongodb.net/food_delv').then(()=>console.log("DB Connected"));
}