/* eslint-disable react-refresh/only-export-components */
import React, { Children, createContext, useState } from 'react';
export const TimelineContext = createContext();

const TimelineProvider = ({children}) => {
    const [timeline, setTimeline] = useState([]);
    return (
      <TimelineContext value={{timeline,setTimeline}}>{children}</TimelineContext>
    );
};

export default TimelineProvider;