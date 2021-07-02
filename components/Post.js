import { Avatar } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';

function Post({message,timestamp,name,postdata,profile}) {
    return (
        
        <div className="flex flex-col justify-center rounded-2xl bg-white  h-auto mb-8 mr-6 ">
         
        <div className="m-8">
        <div className="flex">
        <Avatar src={profile}/>
        <div className="flex-col ml-2 ">
        <h1 className="text-xl">{name}</h1>
        <h3 className="text-gray-500 text-sm mb-6"> {new Date(timestamp?.toDate()).toLocaleString()}</h3></div></div>
          <h4 className="text-xl font-mono mb-2 ml-4">{message}</h4>
         <img className="object-fill rounded-3xl" src={postdata} />
        
        <div className="flex mt-4 justify-evenly text-gray-500">
        <FavoriteBorderIcon className="hover:text-red-200" />
        <CommentIcon className="hover:text-gray-200" />
        <ShareIcon className="hover:text-green-200" />

        
        </div></div>

         

          
         
                  
        </div>
    )
}

export default Post
