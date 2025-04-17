const mongoose=require("mongoose")

const OrdersSchema = mongoose.Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
}); 

module.exports=mongoose.model("orders",OrdersSchema)