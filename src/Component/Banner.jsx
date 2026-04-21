import React from 'react';
import { HiPlusSmall } from 'react-icons/hi2';

const Banner = () => {
    return (
      <div>
          <div className='py-10 text-center space-y-5 '>
            <h2 className='text-3xl font-semibold '>Friends to keep close in your life</h2>
            <p className=' text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.</p>
  <button className='btn btn-success items-center'><HiPlusSmall />Add Friend</button>
          </div>
        
        <div className='grid grid-cols-1 md:grid-cols-4  container mx-auto'>
              <div className='w-[260px] h-[130px] shadow-md rounded-lg  flex flex-col items-center justify-center gap-2 '>
            <h2>10</h2>
            <p className='text-[#64748B]'>Total Friends</p>
          </div>
          <div className='w-[260px] h-[130px] shadow-md rounded-lg flex flex-col items-center justify-center gap-2 '>
            <h2>3</h2>
            <p className='text-[#64748B]'>On Track</p>
          </div>
          <div className='w-[260px] h-[130px] shadow-md rounded-lg  flex flex-col items-center justify-center gap-2 '>
            <h2>6</h2>
            <p className='text-[#64748B]'>Need Attention</p>
          </div>
          <div className='w-[260px] h-[130px] shadow-md rounded-lg  flex flex-col items-center justify-center gap-2 '>
            <h2>12</h2>
            <p className='text-[#64748B]'>Interactions This Month</p>
          </div>
        </div>
        
        <br />
        <hr className='container mx-auto text-gray-200'/>
        </div>
        
    );
};

export default Banner;