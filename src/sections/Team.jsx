const teamDetails=[
    {path:'src/assets/team1.jpg',name:'Jessca Arrow',designation:'Designer'},
    {path:'src/assets/team2.jpg',name:'Packaging Solutions',designation:"Designer"},
    {path:'src/assets/team3.jpg',name:'Contract-logistics',designation:'Designer'},

]


const Team = () => {
  return (
<section className="">
<div className="grid md:grid-cols-3 justify-center">
<div className="">
<span className="font-medium bg-gray-300 ">The Transporters</span>
<p className="text-3xl font-extrabold pt-10">Meet Expert Team</p>
</div>

</div>

<div className="p-10">
<div className="grid md:grid-cols-3 justify-center">

{teamDetails.map((team)=>(
    <div className=" grid md:grid-rows-3">
    <img src={team.path} alt='team-details'/>
    
    <div className="">
  <p className="text-xl text-bold">{team.name}</p>
  <p>{team.designation}</p>
 
  </div>
   </div>

 
))}
</div>
</div>




</section>
  )
}

export default Team
