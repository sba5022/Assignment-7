import React, {  useContext } from 'react';
import { TimelineContext } from '../context/TimelineContext';

const Timeline = () => {
     const {timelines}= useContext(TimelineContext);
     console.log(timelines)
    return (
        <div>
           <div className='container mx-auto mb-10'>
            <h2 className='font font-semibold text-2xl'>Timeline</h2>
            <div className="dropdown dropdown-center">
  <input
        type="text"
        readOnly
        
        placeholder="Filter timeline"
        tabIndex={0}
        className="input input-bordered w-full cursor-pointer"
      />
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
           </div >
           <div className='container mx-auto'>
            {
              timelines.map((timeline,index ) => {
                return   <div key={index} className="p-3 shadow rounded-md">
      <p className="font-semibold">
        {timeline.name} {timeline.type === "call" && "called you"}
        {timeline.type === "text" && "texted you"}
        {timeline.type === "video" && "video called you"}
      </p>
      <p className="text-sm text-gray-500">{timeline.date}</p>
      
    </div>
              })
            }
           </div>
        </div>
    );
};

export default Timeline;