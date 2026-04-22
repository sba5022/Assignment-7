
import {  useContext } from 'react';
import { FaRegBell } from 'react-icons/fa';
import { FiInbox } from 'react-icons/fi';
import { IoVideocamOutline } from 'react-icons/io5';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineTextsms } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useLoaderData, useParams } from 'react-router';
import { TimelineContext } from '../context/TimelineContext';
import { toast } from 'react-toastify';
// const friendsPromise= fetch('/FriendsData.json').then(res => res.json());

const FriendsDetails = () => {
    const {id}= useParams();
    const {timelines,setTimelines}= useContext(TimelineContext)
    
    console.log(id,'para');

    // const friends =use(friendsPromise);
    const friends =useLoaderData();
        console.log(friends,'friensdata');
        const expectedFriend = friends.find(friend => friend.id == Number(id));
        console.log(expectedFriend,'expectedFriend');
      const handleTimeline = (type) => {
         if (type === "call") {
    toast("Calling now ");
  } else if (type === "text") {
    toast("Sending text ");
  } else if (type === "video") {
    toast("Starting video call ");
  }
  setTimelines((prev) => [
    ...prev,
    {
      name: expectedFriend.name,
      type,
      date: new Date().toLocaleString()
    }
  ]);
};
    return (
        <div className='grid grid-cols-2 container mx-auto py-10' >
            <div className='space-y-5'>
                <div  className="card bg-base-100 w-70 shadow-sm">
           
  <figure>
    <img
      src={expectedFriend.picture}
      alt="Shoes" className=' rounded-full h-[100px] w-[100px]' />
  </figure>
  <div className="card-body">
    <h2 className=" text-center">
     {expectedFriend.name}
     
    </h2>
   
    <div className=" flex flex-row items-center gap-2 flex-wrap">
      <div className="text-gray-400">{expectedFriend.bio}</div>
     {expectedFriend.tags.map((tag) =>  (<div className="text-black bg-green-200 rounded-full w-[100px] text-center">{tag}</div>))}
       <div className={`badge ${
    expectedFriend.status === "On track"
      ?  "badge bg-green-900 text-white"
      : expectedFriend.status === "Overdue"
      ? "badge bg-red-600 text-white"
      : expectedFriend.status === "Almost due"
      ? "badge bg-yellow-500 text-white"
      : "badge bg-gray-500 text-white"
  }`}>{expectedFriend.status}</div>
  <p className='text-gray-400'>Preferred: email</p>
    </div>
  </div>
</div>
<div className='space-y-5'>
    <div className=''><button className='btn w-70'><FaRegBell />Snooze 2 weeks</button></div>
<div><button className='btn w-70'><FiInbox />Archive</button></div>
<div><button className='btn w-70 text-red-700'><RiDeleteBin6Line />Delete</button></div>
</div>
            </div>


            <div>
                <div className='flex gap-2 mb-5'>
                    <div className='w-[230px] h-[135px] shadow-md text-center space-y-2'  >
                        <h2 className='font-bold  text-2xl '>{expectedFriend.days_since_contact}</h2>
                        <p className='text-[#64748B]'>Days Since Contact</p>
                    </div>
                    <div className='w-[230px] h-[135px] shadow-md text-center space-y-2' > <h2 className='font-bold  text-2xl '>{expectedFriend.goal}</h2>
                        <p className='text-[#64748B]'>Goal (Days)</p></div>
                    <div className='w-[230px] h-[135px] shadow-md text-center space-y-2' > <h2 className='font-bold  text-2xl '>{expectedFriend.next_due_date}</h2>
                        <p className='text-[#64748B]'>Next Due </p></div>
                </div>
                <div className='w-[640px] h-[120px] shadow-md rounded-md'>
                    <div className='flex gap-100'>
                        <h2 className='text-[#244D3F]'>Relationship Goal</h2>
                        <button className='btn'>Edit</button>
                    </div>
                    <p className='text-[#64748B]'>Connect every <span className='font-bold'>30 days</span></p>
                </div>
                <div className='w-[640px] h-[180px] shadow-md rounded-md space-y-4 p-5'>
                   
                        <h2 className='text-[#244D3F]'>Quick Check-In</h2>
                       <div className='flex  gap-2 justify-center'>
                        <div><button onClick={()=> handleTimeline('call')} className='btn h-[90px] w-[150px]'><LuPhoneCall />Call</button></div>
                        <div><button onClick={()=> handleTimeline('text')} className='btn h-[90px] w-[150px]'><MdOutlineTextsms />Text</button></div>
                        <div><button onClick={()=> handleTimeline('video')} className='btn h-[90px] w-[150px]'><IoVideocamOutline />Video</button></div>
                       </div>
                    
                   
                </div>
            </div>
        </div>
    );
};

export default FriendsDetails;