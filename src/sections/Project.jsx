
const imageDetails=[
    {path:'src/assets/1.jpg',header:'Liquid Transportation',subHeader:'Premium Tankers'},
    {path:'src/assets/2.jpg',header:'Packaging Solutions',subHeader:"Warehouse Management"},
    {path:'src/assets/3.jpg',header:'Contract-logistics',subHeader:'Road Transportation'},
    {path:'src/assets/4.jpg',header:'Contract-logistics',subHeader:'Road Transportation'},
    {path:'src/assets/5.jpg',header:'Specialized Transport',subHeader:'Ocean Transports'}
]



const Project = () => {
  return (
    
<section>

<div className="grid justify-center mb-5">
<p className='text-4xl font-extrabold flex justify-center'>Transporting Across The World</p>
</div>

<div className="h-auto">
<div className="bg-white grid justify-center md:flex gap-4">


{imageDetails.map((image)=>(
   <div>
    <img src={image.path}/>
</div>
))}



</div>

<div className="bg-orange-300 h-auto md:h-[96px] mb-20 flex justify-center justify-items-center p-36">
<button className="h-[60px] w-[194px] bg-blue-900 text-white font-bold">More Work</button>
</div>

</div>


</section>
  )
}

export default Project
