import { Order } from "../models/ordermodel.js";
import express from 'express';
const router=express.Router();
router.post("/",async(request,response)=>{
try{
    console.log(request.body);
  if(!request.body.fname ||!request.body.sname ||!request.body.contact ||!request.body.postalcode)
  {
  return response.status(400).json("All fields are required");
}
const neworder={
  fname:request.body.fname,
  sname:request.body.sname,
  contact:request.body.contact,
  address:request.body.address,
  postalcode:request.body.postalcode,
  nearestplace:request.body.nearestplace,
}
const neworder1=await Order.create(neworder);
response.status(201).json(neworder1);
} catch (error) {
  console.error("Error while placing order:", error.message);
  return response.status(400).json({ error: error.message });
}

});
export default router;