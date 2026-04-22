import React, { Suspense } from 'react';
import { HiPlusSmall } from 'react-icons/hi2';
import Banner from './Banner';
import AllFriends from '../friens/AllFriends';
import { DiVim } from 'react-icons/di';


const Home = () => {
    return (<>
       <Banner/>

      <Suspense fallback={ <span className="loading loading-spinner loading-xl mx-150"></span>}> <AllFriends/></Suspense>
     
     
        </>
    );
   
};
<AllFriends/>

export default Home;