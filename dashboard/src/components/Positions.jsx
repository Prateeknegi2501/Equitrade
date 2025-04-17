import React, { useEffect, useState } from "react";
import { positions } from "../data/data";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("http://localhost:3002/allPositions", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });
        setAllPositions(res.data);
      } catch (error) {
        console.error(
          "Error fetching holdings:",
          error.response?.data || error.message
        );
      }
    };
    fetchPositions();
  }, []);
   const labels = allPositions.map((subArray) => subArray["name"]);

   const data = {
     labels,
     datasets: [
       {
         label: "StockName",
         data: allPositions.map((stock) => stock.avg),
         backgroundColor: "rgba(255, 99, 132, 0.8)",
       },
     ],
   };

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          {allPositions.map((stock, index) => {
            const CurrValue = stock.price * stock.qty;
            const isProfit = CurrValue - stock.avg * stock.qty >= 0.0;
            const profitClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";
            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td> {stock.qty} </td>
                <td> {stock.avg.toFixed(2)} </td>
                <td> {stock.price.toFixed(2)} </td>
                <td className={profitClass}>
                  {(CurrValue - stock.avg * stock.qty).toFixed(2)}{" "}
                </td>
                <td className={dayClass}> {stock.day} </td>
              </tr>
            );
          })}
        </table>
      </div>
      <VerticalGraph data={data}/>
    </>
  );
};

export default Positions;
