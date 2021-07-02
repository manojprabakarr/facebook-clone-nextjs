import Image from 'next/image';

import {
  auth,
  provider,
} from '../firebase';

function Login() {

  const Signin=()=> {
    auth.signInWithPopup(provider).catch(alert)
  }
    return (

        <div className="grid place-items-center mt-28 ">
          <div className=" border rounded-xl w-2/6 flex flex-col">
        <Image  className="object-contain"
        src="https://links.papareact.com/t4i"
         width={100} height={100}/>

         <h2 className="text-center text-xl mt-4">Signup with facebook</h2>

         <button  onClick={Signin} className="border  mt-4 ml-14  rounded-full w-9/12 h-14 bg-blue-500 bg-opacity-100 text-white text-lg mb-6 hover:border-blue-600  "  >SignIn</button>
         </div>
        
        
        
        </div>
    )
}

export default Login
