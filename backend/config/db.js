import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://amandajeganathan:Kimtaehyung2003@cluster0.bfjmzf6.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));

}