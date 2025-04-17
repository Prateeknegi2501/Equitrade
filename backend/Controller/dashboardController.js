const HoldingModel = require("../models/HoldingModel");
const PositionModel = require("../models/PositionModel");
const OrderModel = require("../models/OrdersModel");

const allHolding = async (req, res) => {
  let allHoldings = await HoldingModel.find({});
  res.json(allHoldings);
};
const allPositions = async (req, res) => {
  let allPositions = await PositionModel.find({});
  res.json(allPositions);
};
const newOrder = async (req, res) => {
  const userId=req.user._id;
  try {
    let name = req.body.name;
    let newQty = Number(req.body.qty);
    let newPrice = Number(req.body.price);
    let mode = req.body.mode?.toUpperCase();

    let order = await OrderModel.findOne({ name: req.body.name, userId });
    if (!order) {
      if (mode === "SELL") {
        req.flash("error", "Cannot sell stock that is not owned");
        return res.send("Cannot sell stock that is not owned");
      }
      order = new OrderModel({
        name,
        qty: newQty,
        price: newPrice,
        mode,
        userId,
      });
    } else {
      let existingQty = order.qty;
      let existingPrice = order.price;
      if (mode === "BUY") {
        const totalprice =
          (existingQty * existingPrice + newQty * newPrice) /
          (newQty + existingQty);

        const totalQty = newQty + existingQty;
        order.qty = Number(totalQty);
        order.price = Number(totalprice.toFixed(2));
         req.flash(
           "success",
           `Order Buy successfully for ${qty} units of ${name} at ₹${price}`
         );
      } else if (mode == "SELL") {
        if (newQty > existingQty) {
          console.log("Not enough quantity to sell");

          return res.send("Not enough quantity to sell");
        }
        order.qty = existingQty - newQty;
        if (order.qty === 0) {
          await OrderModel.deleteOne({ name: order.name });
          console.log("Order fully sold and removed.");

          return res.send("Order fully sold and removed.");
        }
      }
    }

    await order.save();

    res.send("order saved");
  } catch (error) {
    console.log(error);
  }
};
const allOrders = async (req, res) => {
  const userId=req.user._id;
  let allOrders = await OrderModel.find({  userId });
  console.log(userId);
  
  res.json(allOrders);
};

module.exports = {
  allHolding,
  allPositions,
  newOrder,
  allOrders,
};
