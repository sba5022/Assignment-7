import React, { use } from 'react';
const friendsPromise= fetch('/FriendsData.json').then(res => res.json());
const AllFriends = () => {
    const friends =use(friendsPromise);
    console.log(friends,'friensdata');
    return (
        <div >
            <h2 className='font-bold text-3xl mx-42 my-10'>Your Friends</h2>
<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-4 px-30'>
{
    friends.map(friend => {
        return <div className="card bg-base-100 w-70 shadow-sm">
           
  <figure>
    <img
      src={friend.picture}
      alt="Shoes" className=' rounded-full h-[100px] w-[100px]' />
  </figure>
  <div className="card-body">
    <h2 className=" text-center">
     {friend.name}
     
    </h2>
   
    <div className=" flex flex-row items-center gap-2 flex-wrap">
      <div className="text-gray-400">{friend.days_since_contact}d ago</div>
     {friend.tags.map((tag) =>  (<div className="text-black bg-green-200 rounded-full w-[100px] text-center">{tag}</div>))}
       <div className={`badge ${
    friend.status === "On track"
      ?  "badge bg-green-900 text-white"
      : friend.status === "Overdue"
      ? "badge bg-red-600 text-white"
      : friend.status === "Almost due"
      ? "badge bg-yellow-500 text-white"
      : "badge bg-gray-500 text-white"
  }`}>{friend.status}</div>
    </div>
  </div>
</div>

    })
}
</div>
        </div>
    );
};

export default AllFriends;