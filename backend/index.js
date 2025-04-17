require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const authRouter = require("./Routes/authRouter");
const dashboardRouter = require("./Routes/dashboardRouter.js");
app.use(express.urlencoded({ extended: true }));
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3002;
const URL = process.env.MONGO_URL;
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://equitrade-dashboard.onrender.com",
];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(express.json());

const store = MongoStore.create({
  mongoUrl: URL,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});
store.on("error", (error) => {
  console.log("Error in mongo db store", error);
});
const sessionOptions = {
  store,
  secret: process.env.SECRET,
  saveUninitialized: false,
  resave: false,
  cookie: {
    expires: Date.now() + 24 * 60 * 60,
    maxAge: 24 * 60 * 60,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
app.use(flash());
app.use(cookieParser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.failure = req.flash("failure");
  next();
});

app.use("/auth", authRouter);
app.use("/", dashboardRouter);

app.listen(PORT, () => {
  console.log("app is listing to port 3002");
  mongoose.connect(URL);
  console.log("DB connected!");
});

// app.get("/addHoldings", (req, res) => {
//   let tempData = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];
//   tempData.forEach((holdings) => {
//     let newHolding = new HoldingModel({
//       name: holdings.name,
//       qty: holdings.qty,
//       avg: holdings.avg,
//       price: holdings.price,
//       net: holdings.net,
//       day: holdings.day,
//     });
//     newHolding.save()
//   });
//   res.send("Done")
// });

// app.get("/addPositions", (req, res) => {
//   const tempData = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];
//   tempData.forEach((position) => {
//     let newPosition = new PositionModel({
//       product: position.product,
//       name: position.name,
//       qty: position.qty,
//       avg: position.avg,
//       price: position.price,
//       net: position.net,
//       day: position.day,
//       isLoss: position.isLoss,
//     });
//     newPosition.save();
//   });
//   res.send("done");
// });

// app.get("/allHoldings", async (req, res) => {
//   let allHoldings = await HoldingModel.find({});
//   res.json(allHoldings);
// });

// app.get("/allPositions", async (req, res) => {
//   let allPositions = await PositionModel.find({});
//   res.json(allPositions);
// });
// app.post("/newOrder", async (req, res) => {
//   try {
//     let name = req.body.name;
//     let newQty = Number(req.body.qty);
//     let newPrice = Number(req.body.price);
//     let mode = req.body.mode?.toUpperCase();

//     let order = await OrderModel.findOne({ name: req.body.name });
//     if (!order) {
//       if (mode === "SELL") {
//         console.log("Cannot sell stock that is not owned");

//         return res.send("Cannot sell stock that is not owned");
//       }
//       order = new OrderModel({
//         name,
//         qty: newQty,
//         price: newPrice,
//         mode,
//       });
//     } else {
//       let existingQty = order.qty;
//       let existingPrice = order.price;
//       if (mode === "BUY") {
//         const totalprice =
//           (existingQty * existingPrice + newQty * newPrice) /
//           (newQty + existingQty);

//         const totalQty = newQty + existingQty;
//         order.qty = Number(totalQty);
//         order.price = Number(weightedPrice.toFixed(2));
//       } else if (mode == "SELL") {
//         if(newQty>existingQty){
//           console.log("Not enough quantity to sell");

//            return res.send("Not enough quantity to sell");
//         }
//         order.qty=existingQty-newQty;
//         if(order.qty===0){
//           await OrderModel.deleteOne({name:order.name});
//           console.log("Order fully sold and removed.");

//           return res.send("Order fully sold and removed.");
//         }
//       }
//     }

//     await order.save();

//     res.send("order saved");
//   } catch (error) {
//     console.log(error);
//   }
// });
// app.get("/allOrders", async (req, res) => {
//   let allOrders = await OrderModel.find();
//   res.json(allOrders);
// });
