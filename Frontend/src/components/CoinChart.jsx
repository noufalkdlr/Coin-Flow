import React, { useContext, useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { CoinContext } from "../Context/CoinContext";




const CoinChart = ({ historicalData, coinData}) => {

    const options = {
        title: `${coinData.name} Price Chart`,
        hAxis: { title: "Time" },
        vAxis: { title: "Price" },
        legend: "none",
      };

  const [data, setData] = useState([["date", "prices"]]);

  useEffect(() => {
    let dataCopy = [["date", "prices"]];
    if (historicalData?.prices) {
      historicalData.prices.forEach((item) => {
        const date = new Date(item[0]).toLocaleDateString().slice(0, -5);
        const price = item[1];
        dataCopy.push([date, price]);
      });
    }
    setData(dataCopy);
  }, [historicalData]);

  return (
    <div className="rounded-lg overflow-hidden">
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default CoinChart;
