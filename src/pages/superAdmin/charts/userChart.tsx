import React from 'react'
import { BarChart, XAxis, YAxis,Label, Bar, Tooltip, Legend, ResponsiveContainer} from "recharts";

    
  
function UserChart() {
    const data = [
        {
            name: "Jan",
            high: 80
        },
        {
            name: "Feb",
            high: 10

        },
        {
            name: "Mar",
            high: 30

        },
        {
            name: "Apr",
            high: 20

        },
        {
            name: "May",
            high: 70

        },
        {
            name: "Jun",
            high: 60

        },
        {
            name: "Jul",
            high: 50

        },
        {
            name: "Aug",
            high: 50

        },
        {
            name: "Sept",
            high: 50

        },
        {
            name: "Oct",
            high: 50

        },
        {
            name: "Nov",
            high: 50

        },
        {
            name: "Dec",
            high: 50
        },
      ];
  return (
    <ResponsiveContainer width="100%" height="90%">
    <BarChart width={730} height={200} data={data}>
      <XAxis dataKey="name" />
      <YAxis tickFormatter={(value) => `${value}%`}>
        <Label value="Users" angle={-45} position="top" style={{ textAnchor: "middle" }} />
      </YAxis>
      <Tooltip />
      <Legend />
      <Bar dataKey="high" fill="#039BE5" />
    </BarChart>
  </ResponsiveContainer>
  )
}

export default UserChart