import { FaStar } from "react-icons/fa6";


const Testimonial = () => {
  return (
 <section id='Pages' className="">
 <div className=" p-3 gap-4">
 <span className="bg-gray-200">Testimonial</span>
 <p className="text-4xl font-extrabold">What Our Customer Say</p>
 </div>


 <div className='grid  md:grid-cols-2 justify-center'>
{/*=======person 1 staRT===========*/}
 <div className='bg-gray-300'>
 <div className="flex md:flex-row justify-between p-12">
 <div className='flex md:flex '>
 <img src='src/assets/user1.jpg' className='w-30 h-30 rounded-full'/>
 <div className="flex-col p-5">
 <p className="text-xl font-bold">kathleen Smith</p>
 <p className="font-semibold">Fuel Company</p>
 </div>
 </div>
 <div className="flex md:flex align-middle  justify-end ml-60">
<button className='bg-orange-400 rounded-full w-[75px] h-[75px] md:flex justify-center p-7 mr-14'>
<img className='bg-orange-400' src='src/assets/Symbol.jpg' alt='symbol'/>
</button>
</div>
 </div>
<div className="flex md:flex p-12">
 <p>Leverage agile frameworks to provide a robust synopsis for<br/> strategy foster collaborative thinking to further the overall<br/> value proposition. Organically grow the holistic world view<br/> of disruptive innovation via workplace diversity and<br/> empowerment.</p>
</div>
<div className="flex md:flex p-12 gap-4 ">
<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>
</div>

 </div>
{/*=======person 1 END===========*/}

{/*=======person 2 staRT===========*/}
<div className='bg-blue-900'>
 <div className="flex  md:flex-row  justify-center p- p-12">
 <div className='flex md:flex '>
 <img src='src/assets/user2.jpg' className='w-30 h-30 rounded-full'/>
 <div className="flex-col p-5">
 <p className="text-xl font-bold">John Martin</p>
 <p className="font-semibold">Restoration Company</p>
 </div>
 </div>
 <div className="flex md:flex align-middle  justify-end ml-60">
<button className='bg-orange-400 rounded-full w-[75px] h-[75px] md:flex justify-center p-7 mr-14'>
<img className='bg-orange-400' src='src/assets/Symbol.jpg' alt='symbol'/>
</button>
</div>
 </div>
<div className="flex md:flex p-12">
 <p>Leverage agile frameworks to provide a robust synopsis for<br/> strategy foster collaborative thinking to further the overall<br/> value proposition. Organically grow the holistic world view<br/> of disruptive innovation via workplace diversity and<br/> empowerment.</p>
</div>
<div className="flex md:flex p-12 gap-4 ">
<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>
</div>

 </div>
{/*=======person 2 END===========*/}

 
 </div>
 
 
 </section>
  )
}

export default Testimonial
