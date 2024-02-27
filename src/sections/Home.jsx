


import Navbar from '../components/Navbar'
import LogoHeader from '../components/LogoHeader'


const Home = () => {
  return (
    <section id='Home'>

    <div>
    <LogoHeader/>
    </div>
    <div className='bg-blue-700 h-24'>
    <Navbar/>
   </div>

<div className='background-image'>
<div className='  w-1/2 p-20'>
<div className='py-12'>
<h6 className='text-white'>Logistics and supply chain solutions</h6>
<p className='text-white font-extrabold text-5xl'>Your Gateway <br/>To any Destination in the<br/> World</p>
<br/>
<span className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</span>
<br/>
<div>
<button className='w-60 h-20 bg-yellow-500 mt-5'>Explore more</button>
</div>
</div>
</div>
</div> 
<div className='w-1/2'></div>
 

</section>
  )

  }
export default Home
