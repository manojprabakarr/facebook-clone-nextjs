import Image from 'next/image';

import { Avatar } from '@material-ui/core';

function Status() {
    return (
        <div className="flex justify-center rounded-2xl bg-white  h-auto mb-8 mr-6  ">

        <div className="mt-6 ml-6  h-auto mb-6  "  >
         
       
         <Image  className="object-fill rounded-3xl  "
        src="https://www.filmibeat.com/ph-big/2020/02/v-2020_158253142110.jpg"
         width={200 } height={400}/>
         <div className="flex flex-col items-center -mt-20" >
        <Avatar   src="https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg" />

        <h1 className="">Manoj</h1></div>
        
        


        
        </div>

         <div className="mt-6 ml-6  h-auto mb-6  "  >
         
       
         <Image  className="object-fill rounded-3xl  "
        src="https://www.filmibeat.com/ph-big/2020/02/v-2020_158253142110.jpg"
         width={200 } height={400}/>
         <div className="flex flex-col items-center -mt-20" >
        <Avatar   src="https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg" />

        <h1 >Manoj</h1></div>
        
        


        
        </div>
         
      
       <div className="mt-6 ml-6  h-auto mb-6  "  >
         
       
         <Image  className="object-fill rounded-3xl  "
        src="https://www.filmibeat.com/ph-big/2020/02/v-2020_158253142110.jpg"
         width={200 } height={400}/>
         <div className="flex flex-col items-center -mt-20" >
        <Avatar   src="https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg" />

        <h1 className="">Manoj</h1></div>
        
        


        
        </div>
        
       


            
        </div>
    )
}

export default Status
