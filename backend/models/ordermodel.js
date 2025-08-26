import mongoose from "mongoose";
const orderschema= new mongoose.Schema({
    fname:{
        type:String,
        required:true,
    },
        sname:{
        type:String,
        required:true,
    },
        address:{
        type:String,
        required:true,
    },
        contact:{
        type:String,
        required:false,
    },
       nearestplace:{
        type:String,
        required:true,
    },
        postalcode:{
        type:String,
        required:true,
    },
},
   { timestamps:true }
);
export const Order=new mongoose.model("Order",orderschema);