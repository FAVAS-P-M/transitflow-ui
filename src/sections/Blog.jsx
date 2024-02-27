import { SlCalender } from "react-icons/sl";

const Blog = () => {
  return (
<section className=''>

<div className="grid md:grid-cols-1">
<div className="flex flex-col  justify-center">

<div className="flex  justify-center">
<p className="text-4xl font-extrabold">Our latest News</p>
<hr className="border-t border-gray-700" />
</div>





  {/*===========1st started==========*/}
<div className='flex justify-evenly'>

<div className=''>
<img src='src/assets/blog1.jpg' alt='blog-image'/>
</div>

<div className="p-16">
<SlCalender className="h-20 w-20 p-5" />
<div>

<div className="p-1">
<p className="text-4xl font-extrabold">08</p>
<p className="text-gray-700">September</p>
</div>

</div>
</div>

<div className="p-16">
<p className="text-xl font-medium">Inland freight a worthy<br/> solution for your business</p>
<p className="text-gray-700">We are dedicated in creating added value <br/> for our customers by implementing modern <br/> technology in our work.</p>
<p className=" text-lg font-medium">Urgent transportsolutions<br/>  Reliable & experienced staffs<br/>  Urgent transport solutions <br/> Reliable & experienced staffs</p>
</div>
</div>

 {/*===========1st ended==========*/}

  {/*===========2nd started==========*/}
  <div className='flex justify-evenly '>

<div className=''>
<img src='src/assets/blog2.jpg' alt='blog-image'/>
</div>

<div className="p-16">
<SlCalender className="h-20 w-20 p-5" />
<div>

<div className="p-1">
<p className="text-4xl font-extrabold">12</p>
<p className="text-gray-700">September</p>
</div>

</div>
</div>

<div className="p-16">
<p className="text-xl font-medium text-orange-400">How technology can help <br/> redraw the supply chain map</p>
<p className="text-gray-700">We are dedicated in creating added value <br/> for our customers by implementing modern <br/> technology in our work.</p>
<p className=" text-lg font-medium">Urgent transportsolutions<br/>  Reliable & experienced staffs<br/>  Urgent transport solutions <br/> Reliable & experienced staffs</p>
</div>
</div>
 {/*===========2nd ended==========*/}

   {/*===========3rd started==========*/}
   <div className='flex justify-evenly '>

   <div className=''>
   <img src='src/assets/blog3.jpg' alt='blog-image'/>
   </div>
   
   <div className="p-16">
   <SlCalender className="h-20 w-20 p-5" />
   <div>
   
   <div className="p-1">
   <p className="text-4xl font-extrabold">25</p>
   <p className="text-gray-700">September</p>
   </div>
   
   </div>
   </div>
   
   <div className="p-16">
   <p className="text-xl font-medium text-orange-400">How technology can help <br/> redraw the supply chain map</p>
   <p className="text-gray-700">We are dedicated in creating added value <br/> for our customers by implementing modern <br/> technology in our work.</p>
   <p className=" text-lg font-medium">Urgent transportsolutions<br/>  Reliable & experienced staffs<br/>  Urgent transport solutions <br/> Reliable & experienced staffs</p>
   </div>
   </div>
    {/*===========3rd ended==========*/}


<div className="flex justify-center">
<button className="h-[52px] w-60 bg-blue-900 text-white">More Blog</button>
</div>







    </div> 
    </div>
</section>
  )
}

export default Blog
