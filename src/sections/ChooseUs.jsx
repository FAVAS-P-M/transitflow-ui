import { BsBoxSeamFill } from "react-icons/bs";
import { IoIosGlobe } from "react-icons/io";
import { CiTimer } from "react-icons/ci";
import { TbShip } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { HiOutlineCubeTransparent } from "react-icons/hi";

const ChooseUs = () => {
  return (
<section className='grid md:grid-cols-2 justify-center '>
<div className=' bg-blue-950'>
<img className="mx-40 hidden md:block md:p-36 " src='src/assets/TestPic.jpg' alt='plane-image'/>
</div>


{/*======2nd section start=======*/}
<div className=' bg-blue-200 p-12 py-8'>
<p>why choose</p>
<p className="text-3xl font-extrabold">We create opportunity to<br/> reach potential</p>
<p className="text-gray-700">Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.</p>

<div className="grid  md:grid-cols-2 gap-12">
<div className="flex md:flex-col gap-12">
<span className="text-xl font-semibold "><button className='rounded-full h-20 w-20 bg-orange-300 md:flex-wrap align-middle '><BsBoxSeamFill className="m-7"/></button>Safe Package</span>
<span className="text-xl font-semibold"><button className='rounded-full h-20 w-20 bg-orange-300 md:flex-wrap align-middle'><IoIosGlobe className="m-7" /></button>Global Tracking</span>
<span className="text-xl font-semibold"><button className='rounded-full h-20 w-20 bg-orange-300 md:flex-wrap align-middle'><CiTimer className="m-7" /></button>In-Time Delivery</span>
</div>

<div className="flex md:flex-col gap-12">
<span className="text-xl font-semibold"><button className='rounded-full h-20 w-20 bg-orange-300 md:flex-wrap align-middle'><TbShip className="m-7" /></button>Ship EveryWhere</span>
<span className="text-xl font-semibold"><button className='rounded-full h-20 w-20 bg-orange-300 md:flex-wrap align-middle'><BiSupport className="m-7" /></button>24/7 Support</span>
<span className="text-xl font-semibold"><button className='rounded-full h-20 w-20 bg-orange-300 md:flex-wrap align-middle'><HiOutlineCubeTransparent className="m-7" /></button>Transparent Price</span>
</div>
</div>
</div>



{/*======2nd section end=======*/}

</section>
  )
}

export default ChooseUs
