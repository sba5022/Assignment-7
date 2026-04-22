import React, { use } from 'react';
import { TimelineContext } from '../context/TimelineContext';

const Timeline = () => {
     const {timeline}= use(TimelineContext);
     console.log(timeline)
    return (
        <div>
           <div className='container mx-auto'>
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
           </div>
        </div>
    );
};

export default Timeline;