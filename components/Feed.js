import {
  useRef,
  useState,
} from 'react';

import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';

import { Avatar } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PostAddIcon from '@material-ui/icons/PostAdd';

import {
  auth,
  db,
  storage,
} from '../firebase';
import Post from './Post';
import Status from './Status';

function Feed({posts}) {
    const [realTimePosts] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );
     
   const [user]=useAuthState(auth);
     const [imagepost, setimagepost] = useState(null);
       
 
      const inputRef = useRef(null);


   const  Addimagepost=(e)=>{
     const reader = new FileReader();
     if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setimagepost(readerEvent.target.result);
    };  

   }
   

   const Removeimage=()=>{
     setimagepost(null);
   }
   



    const Senddata = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: user.displayName,
       
        profile: user.photoURL,
        
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imagepost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imagepost, "data_url");
          Removeimage();
          uploadTask.on(
            "state",
            null,
            (err) => console.log(err),
            () => {
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });
    inputRef.current.value = "";
  };


 
    return (
      
        <div className="lg:flex flex-col  mt-2  w-6/12 h-screen mr-4 overflow-x-hidden scrollbar-hide">

        <div className="rounded-2xl mt-10 bg-white mr-4 ">

          <div className="flex items-center  mt-6 ml-6 space-x-2" >
           <PostAddIcon className="text-blue-500"/>
          <h2 className="text-gray-500">create post</h2>
          
          </div>

          <div className="flex flex-col  mt-6 ml-6 p-10 space-x-4 border mr-6 rounded-full ">
          <div className="flex ml-16 mb-6">
            <Avatar src={user.photoURL}/>
            <input    ref={inputRef} type="text" className="outline-none hidden flex-shrink w-full  md:inline-flex placeholder-gray-500 ml-2  items-center bg-transparent" placeholder="write your post"/>
          </div>
          <div onClick={Removeimage}>
            <input  type="file" id="file-upload"   onChange={Addimagepost} hidden placeholder="Gallery"/>

             <img src={imagepost} alt="" className="ml-20 w-80 object-contain" />
          </div>
           
          
          </div>
         

        

         

          <div className="flex justify-evenly p-8">
         
           <button onClick={Senddata}  className="bg-blue-200 p-2 w-32 rounded-full">Post</button>
          
          

          
            <button   className="bg-red-200 p-2 w-32 rounded-full">Tag Friends</button>
          
         

         
           
           <label for="file-upload" className="bg-yellow-200 p-2 w-32 rounded-full text-center" >Gallery</label>
         

          <div className="bg-gray-200 p-2 w-10  rounded-full">
          <MoreVertIcon/>
          
          </div>


          </div>
          
          </div>

          <div className="hover:opacity-75  mt-10">
          <Status/>
          
          </div>

          <div className="mt-10 flex flex-col mb-20 ">
           {realTimePosts
        ? realTimePosts?.docs.map((post) => (
            <Post
              key={post.id || post.message}
              name={post.data().name}
              message={post.data().message}
             
              timestamp={post.data().timestamp}
              profile={post.data().profile}
              postdata={post.data().postImage}
            />
          ))
        : posts.map((post) => (
            <Post
              key={post.id || post.message}
              name={post.name}
              message={post.message}
             
              timestamp={post.timestamp}
              profile={post.profile}
              postdata={post.postImage}
            />
          ))}


          

          </div>
            
        </div>
       
    )
}

export default Feed


