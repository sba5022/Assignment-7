import React, { useContext } from 'react';
import { TimelineContext } from "../context/TimelineContext";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from "recharts";
const Stats = () => {
    const { timelines } = useContext(TimelineContext);

  const callCount = timelines.filter(t => t.type === "call").length;
  const textCount = timelines.filter(t => t.type === "text").length;
  const videoCount = timelines.filter(t => t.type === "video").length;

  const data = [
    { name: "Call", value: callCount },
    { name: "Text", value: textCount },
    { name: "Video", value: videoCount }
  ];
    const COLORS = ["#22c55e", "#3b82f6", "#ef4444"];
    return (
        <div>
      
     
         <div className="container mx-auto">
      <h2 className="font-bold text-2xl mb-5">
        Friendship Analytics
      </h2>

      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  
       
        </div>
    );
};

export default Stats;