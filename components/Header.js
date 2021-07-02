import Image from 'next/image';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Avatar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FlagIcon from '@material-ui/icons/Flag';
import ForumIcon from '@material-ui/icons/Forum';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SearchIcon from '@material-ui/icons/Search';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SubscriptionsOutlinedIcon
  from '@material-ui/icons/SubscriptionsOutlined';
import SupervisedUserCirceIcon from '@material-ui/icons/SupervisedUserCircle';

import { auth } from '../firebase';

function Header() {
  const [user]=useAuthState(auth);
 
    return (
        <div className="flex items-center sticky h-16 w-full p-6 bg-white justify-between ">

         <div className=" flex items-center">
        <Image onClick={()=>auth.signOut()} className="object-contain "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
          width={50} height={50}
        />
        <div className=" flex ml-6 items-center  rounded-full bg-gray-100 p-2">
          <SearchIcon  className="text-gray-500"/>
          <input className="outline-none hidden flex-shrink  md:inline-flex placeholder-gray-500 ml-2 items-center bg-transparent" placeholder="Search Facebook" type="text" />
        </div>
      </div>
      <div className="ml-6  flex items-center justify-center space-x-12 text-gray-500 ">
       
          <HomeIcon fontSize="large" />
        
       
          <FlagIcon fontSize="large" />
        
          <SubscriptionsOutlinedIcon fontSize="large" />
       
          <StorefrontOutlinedIcon fontSize="large" />
        
          <SupervisedUserCirceIcon fontSize="large" />
        
      </div>
      
        <div className="flex items-center space-x-8 text-gray-500  ">
          <Avatar src={user.photoURL}/>
          <h4>{user.displayName}</h4>
          <AddIcon fontSize="large" />
          <ForumIcon fontSize="large"/>
           <NotificationsActiveIcon fontSize="large"/>
            <ExpandMoreIcon fontSize="large"/>
        </div>
       
    
    </div>

            
        
    )
}

export default Header
