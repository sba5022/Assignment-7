import React, {  useContext, useEffect, useState } from 'react';
import { TimelineContext } from '../context/TimelineContext';

const Timeline = () => {
  const [sortingType, setSortingType] = useState("");
  console.log(sortingType,'sorted')
     const {timelines}= useContext(TimelineContext);
     console.log(timelines)
     const actionImages = {
  call: "/src/assets/call.png",
  text: "/src/assets/text.png",
  video: "/src/assets/video.png"
};
// useEffect(()=> {
//   if(sortingType){
//     if(sortingType === 'call'){

//     }
//     else if(sortingType ==='text'){

//     }
//     else if(sortingType ==='video'){

//     }
//   }
// })
const filteredTimelines =
  sortingType
    ? timelines.filter((t) => t.type === sortingType)
    : timelines;
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
    <li onClick={()=> setSortingType('call')}><a>Call</a></li>
     <li onClick={()=> setSortingType('text')}><a>Text</a></li>
    <li onClick={()=> setSortingType('video')}><a>Video</a></li>
  </ul>
</div>
           </div >
           <div className='container mx-auto'>
            {
              filteredTimelines.map((timeline,index ) => {
                return   <div key={index} className="p-3 shadow rounded-md">
           <div className='flex gap-2'> <img
    src={actionImages[timeline.type]}
    alt=""
    className="w-8 h-8"
  />       
      <p className="font-semibold">
        {timeline.name} {timeline.type ===  "call" && "called you"}
        {timeline.type === "text" && "texted you"}
        {timeline.type === "video" && "Video called you"}
      </p></div> 
      <p className="text-sm text-gray-500">{timeline.date}</p>

    </div>
              })
            }
           </div>
        </div>
    );
};

export default Timeline;