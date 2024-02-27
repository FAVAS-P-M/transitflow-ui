import React from 'react'

const Footer = () => {
  return (
  <section className='bg-blue-950 h-auto'>
  <img src='src/assets/footer.jpg' alt=''/>
  
  <div className='grid md:grid-cols-4 h-auto justify-center'>
 <div className='w-1/4 bg-blue-950 h-20 p-5 text-white text-2xl font-extrabold'>TransitFlow</div>
  <div className='w-1/4 bg-blue-950 h-20 p-5 text-white text-2xl font-extrabold'>Pages</div>
  <div className='w-1/4 bg-blue-950 h-20 p-5 text-white text-2xl font-extrabold'>Utility</div>
  <div className='w-1/4 bg-blue-950 h-20 p-5 text-white text-2xl font-extrabold'>Subscribe</div>
  </div>

  <div className='grid md:grid-cols-4 h-auto justify-center'>
  {/*=========first section start=========*/}
  <div className='p-5'>
  <p className='text-white'>Leverage agile frameworks to provide a <br/>robust synopsis for strategy collaborative<br/> thinking to further the overall value<br/> proposition.</p>
  <span className='text-white'>Email</span>
  <p className='text-white'>contact@logistics.com</p>
  <span className='text-white'>Call Us</span>
  <p className='text-white'>(00)112 365 489</p>
  </div>
  {/*=========firsst section end=========*/}

    {/*=========second section start =========*/}
    <div className='text-white'>
    <p>About Us</p>
    <p>Our Team</p>
    <p>Our Project</p>
    <p>Pricing</p>
    <p>Contact</p>
    </div>
    {/*=========second section end=========*/}

      {/*=========third section start=========*/}
      <div className='text-white'>
      <p>Style Guide</p>
      <p>Change Log</p>
      <p>Licences</p>
      <p>Protected</p>
      <p>Not Found</p>
      </div>
      {/*=========third section end=========*/}

        {/*=========fourth section start =========*/}
    <div className='grid md:grid-cols-1'>
    <input
    type='email'
    placeholder='Email here*'
    className='bg-blue-950 h-14  border border-white m-5'
    />
    <button className='text-white bg-yellow-600 h-[60px] w-[120px] m-4'>Send Now</button>
    
    </div>
    {/*=========fourth section end=========*/}
  

  
  
  
  
  </div>
  
  
  </section>
  )
}

export default Footer
