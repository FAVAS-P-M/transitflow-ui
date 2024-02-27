import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";

const Contact = () => {
  return (
<section id='Contact' className='bg-blue-950 p-20'>



<div className='grid md:grid-cols-2'>
<div className='w-1/3'>
<div className='flex-col' >
<p className='text-white'>contact</p>
<p className='text-4xl text-white font-extrabold'>Get in touch with us</p>
<p className='text-white font-bold'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value.</p>
</div>

<div>

<div className="flex">
<button className='w-20 h-20 rounded-full bg-blue-600 flex justify-center justify-items-center align-middle p-7'><MdEmail/></button>
<div className="p-5">
<p className='text-white'>Email</p>
<p className='text-white'>contact@logistics.com</p>
</div>
</div>

<div className="flex">
<button className='w-20 h-20 rounded-full bg-blue-600 flex justify-center justify-items-center align-middle p-7'><FaPhoneAlt/></button>

<div className="p-5">
<p className='text-white '>Call Us</p>
<p className='text-white'>00 1123456576</p>
</div>
</div>

<div className="flex">
<button className='w-20 h-20 rounded-full bg-blue-600 flex justify-center justify-items-center align-middle p-7'><CiClock2/></button>
<div className="p-5">
<p className='text-white'>Mon-sat</p>
<p className='text-white'>Sunday Closed</p>
</div>
</div>
</div>
</div>

<div className='w-2/3'>
<form className="">



<div className='grid md:grid-cols-2 gap-4'>

<div className='gap-4 m-5'>
<input
    className="bg-blue-950 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
    id="username"
    type="text"
    placeholder=" your name*"
  />
  </div>
  
  <div className='gap-4 m-5'>
  <input
    className=" bg-blue-950 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="username"
    type="text"
    placeholder=" Email*"
  />
  </div>
</div>

<div className='grid md:grid-cols-2 gap-4'>
<div className='gap-4 m-5'>
<input
    className=" bg-blue-950 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="username"
    type="text"
    placeholder=" Phone Number*"
  />
  </div>
  
  <div className='gap-4 m-5'>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-blue-950"
    id="username"
    type="text"
    placeholder=" City*"
  />
</div>
</div>

<div className='gap-4 m-5'>
<textarea className='w-full h-[120px] bg-blue-950 border border-white'placeholder='Your Message'/>
</div>








<div className='gap-4 m-5'>
  <button
    className="bg-yellow-900 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-16"
    type="button"
  >
    Submit Message
  </button>
  </div>

</form>
</div>


</div>








<div className="flex flex-wrap justify-center">
<img className="w-80 h-80" src='src/assets/Contact1.jpg' alt='1st-image'/>
<img className="w-80 h-80" src='src/assets/Contact2.jpg' alt='2nd-image'/>
<img className="w-80 h-80" src='src/assets/Contact3.jpg' alt='3rd-image'/>
<img className="w-80 h-80" src='src/assets/Contact4.jpg' alt='4th-image'/>
</div>

</section>
  )
}

export default Contact
