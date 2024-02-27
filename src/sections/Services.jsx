import { LuShip } from "react-icons/lu";
import { FaPlaneDeparture } from "react-icons/fa";
import { TbBuildingWarehouse } from "react-icons/tb";
import { FaTruckMoving } from "react-icons/fa";

const Services = () => {
  return (
    <section id='Product' className="flex justify-wrap items-center max-xl:flex-col-reverse gpa-10 max-container">
    <div className='flex-col-reverse'>
      <div className='grid md:grid-cols-3  h-auto gap-8 w-full justify-items-center '>
      
{/*====first 1/3====*/}
      <div className='1/3'>
      <p>what we do?</p>
     <h1 className='text-4xl font-extrabold'>Safe and Reliable<br/> Cargo Solutions</h1>
      </div>


{/*====second 1/3====*/}
     
      <div className='flex-col'>
      
      <div className="flex justify-between gap-4">
      <LuShip className="h-20 w-20" />
      <div>
      <h1 className='text-2xl'>Sea Transport Services</h1>
      <p className='text-gray-500'>Following the quality of our service thus having gained trust of our many clients.</p>
      </div>
      </div>

      <div className="flex justify-between gap-4">
      <FaPlaneDeparture className="h-20 w-20"/>
      <div>
      <h1 className='text-2xl'>Air Fright Services</h1>
      <p className='text-gray-500'>Following the quality of our service thus having gained trust of our many clients.</p>
      </div>
      </div>
      
      
      </div>


{/*====third 1/3====*/}
    <div className='grid'>

      <div className="flex justify-between gap-4">
<TbBuildingWarehouse className="w-20 h-20"/>
<div className="">
      <h1 className="text-2xl">Ware Housing Services</h1>
      <p className='text-gray-500'>Following the quality of our service thus having gained trust of our many clients.</p>
     </div>
     </div>
     
     <div className="flex justify-between gap-4">
     <FaTruckMoving className="h-20 w-20"/>
     <div>
      <h1 className="text-2xl">Local Shipping Services</h1>
      <p className='text-gray-500'>Following the quality of our service thus having gained trust of our many clients.</p>
      </div>
      </div>
  </div>
      
      </div>
     
      
      </div>
      </section>
  
  )
}

export default Services

