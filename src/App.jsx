
import About from "./sections/About";
import Project from "./sections/Project";


import Footer from "./sections/Footer";

import Services from "./sections/Services";
import Testimonial from "./sections/Testimonial";
import ChooseUs from "./sections/ChooseUs";
import Team from "./sections/Team";
import Contact from "./sections/Contact";
import Blog from "./sections/Blog";
import Home from "./sections/Home";

const App=()=>(

  <main className="relative">

 {/*==========


<section className="xl:padding-l wide:padding-r padding-b">
<Home/>
</section>
===============*/} 
<section className="xl:padding wide:padding-r padding-b">
<Home/>
</section>


<section className="padding">
<Services/>
</section>

<section className="padding">
<About/>
</section>

<section className="padding-x py-10">
<Project/>
</section>

<section className="padding">
<Testimonial/>
</section>

<section className="bg-pale-blue padding">
<ChooseUs/>
</section>

<section className="padding-x sm:py-32 py-16 w-full">
<Team/>
</section>

<section className="padding">
<Contact/>
</section>

<section className="padding-x sm:py-32 py-16 w-full">
<Blog/>
</section>

<section className=" padding-x padding-t pb-8">
<Footer/>
</section>

  </main>
)
export default App;
