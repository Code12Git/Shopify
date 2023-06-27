import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Charts({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <h3 className=" rounded-md text-2xl font-PlayFair  bg-white p-3">
        {title}
      </h3>
      <ResponsiveContainer width="100%" aspect={4 / 1} className="bg-white">
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
