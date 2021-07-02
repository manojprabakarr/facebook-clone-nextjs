

function Sidebar() {
   
    return (
       
        <div className="hidden lg:flex flex-col w-60 p-2 mt-12 rounded-2xl mt-10 bg-white mr-8 h-3/4 ml-10    text-gray-400">


       <div className="flex flex-col p-3 cursor-pointer items-center leading-10">
       <h1 className="pr-20 text-xl font-bold">Shortcuts</h1>

       <h3 classsName=" hover:text-gray-900">Message</h3>

       <h3 className="hover:text-gray-900">NewsFeed</h3>

       <h3 className="hover:text-gray-900">Watch Live</h3>
       
       </div>

       <div className="flex flex-col items-center p-3 cursor-pointer leading-10">
       <h1  className="pr-20  text-xl font-bold">Explore</h1>

       <h3 className="hover:text-gray-900">Groups</h3>

       <h3 className="hover:text-gray-900">Events</h3>

       <h3 className="hover:text-gray-900">Pages</h3>
       
       </div>
            
        </div>

        
     
    )
}

export default Sidebar
