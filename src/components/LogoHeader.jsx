import { CiTimer } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const LogoHeader = () => {
  return (
   <section className='grid bg-blue-950 h-[160px] p-12'>
    <div className='flex justify-between ' >
    
    <div>
    <p className=' font-semibold text-white h-[36px] w-[173px] text-3xl'>TransitFlow</p>
    </div>

{/*========timer section start==========*/}

<div className="flex gap-x-10">

<div className=" hidden sm:flex gap-8">
<button className="rounded-full h-20 w-20 bg-blue-800 justify-center items-center flex"><CiTimer/></button>
<div className="flex-col">
<p className="text-white">mon-sat 9:00 to 18:00</p>
<p className="text-white">Sunday Closed</p>
</div>
</div>


<div className=" hidden sm:flex gap-8  ">
<button className="rounded-full h-20 w-20 bg-blue-800 justify-center items-center flex"><MdOutlineEmail /></button>
<div className="flex-col">
<p className="text-white">Email</p>
<p className="text-white">Contact@logistics.com</p>
</div>
</div>


<div className="hidden sm:flex gap-8 ">
<button className="rounded-full h-20 w-20 bg-blue-800 justify-center items-center flex"><FaPhone/></button>
<div className="flex-col">
<p className="text-white">Call us</p>
<p className="text-white">(00)112 365 489</p>
</div>
</div>

</div>


{/*========timer section end==========*/}















</div>
  
    </section>
  )
}

export default LogoHeader
