function Widgets() {
    return (
        <div className="hidden lg:flex flex-col  p-6 mt-12 rounded-2xl mt-10 bg-white mr-4" style={{height:"550px"}} >

         <iframe  className="h-screen w-full"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCodingTreeFoundation&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
         style={{ border: 'none',overflow:'hidden' }}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      />
            
            
        </div>
    )
}

export default Widgets
