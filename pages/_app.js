import '../styles/globals.css';

import { useEffect } from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';

import {
  auth,
  db,
} from '../firebase';
import Login from './Login';

function MyApp({ Component, pageProps }) {
  const[user]=useAuthState(auth);
  
  useEffect(()=> {
    if(user){
      db.collection('users').doc(user.uid).set(
        {
         
            
				   username:user.displayName,
					photoURL: user.photoURL,
        },
        {merge:true}
     
      )
    }

  },[user])
   
  if(!user) return <Login/>

  return <Component {...pageProps} />
}

export default MyApp
