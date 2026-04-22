/* eslint-disable react-refresh/only-export-components */
import React, { Children, createContext, useState } from 'react';
export const TimelineContext = createContext();

const TimelineProvider = ({children}) => {
    const [timelines, setTimelines] = useState([]);
    return (
      <TimelineContext value={{timelines,setTimelines}}>{children}</TimelineContext>
    );
};

export default TimelineProvider;