import { useState } from "react";
import { FetchStockData } from "./api/route";

export default async function Page() {
  const stockData = await FetchStockData();

  const metaData = stockData["Meta Data"];
  const timeSeries = stockData["Time Series (5min)"];

  // Convert time series data to an array
  const stockArray = Object.entries(timeSeries).map(([timestamp, values]) => ({
    timestamp,
    open: parseFloat(values["1. open"]),
    high: parseFloat(values["2. high"]),
    low: parseFloat(values["3. low"]),
    close: parseFloat(values["4. close"]),
    volume: parseInt(values["5. volume"], 10),
  }));

  return (
    <div>
      <div>
        <form>
          <label htmlFor="functions">Function</label>
          <select id="functions" name="functions">
            <option value="TIME_SERIES_INTRADAY">Time Series IntraDay</option>
            <option value="TIME_SERIES_DAILY">Time Series Daily</option>
            <option value="TIME_SERIES_DAILY_ADJUSTED">
              Time Series Daily Adjusted
            </option>
            <option value="TIME_SERIES_WEEKLY">Time Series Weekly</option>
            <option value="TIME_SERIES_WEEKLY_ADJUSTED">
              Time Series Weekly Adjusted
            </option>
            <option value="TIME_SERIES_MONTHLY">Time Series Monthly</option>
            <option value="TIME_SERIES_MONTHLY_ADJUSTED">
              Monthly Adjusted
            </option>
          </select>

          <label htmlFor="cars">Choose a car:</label>
          <select id="cars" name="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
        </form>
      </div>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">
          Stock Data for {metaData["2. Symbol"]}
        </h1>
        <p className="mb-4 text-gray-600">
          Last Updated: {metaData["3. Last Refreshed"]}
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200 shadow-md">
            <thead className="bg-gray-100 text-black">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left ">
                  Timestamp
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right">
                  Open
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right">
                  High
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right">
                  Low
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right">
                  Close
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right">
                  Volume
                </th>
              </tr>
            </thead>
            <tbody>
              {stockArray.map((entry, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    {entry.timestamp}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {entry.open}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {entry.high}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {entry.low}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {entry.close}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {entry.volume}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
