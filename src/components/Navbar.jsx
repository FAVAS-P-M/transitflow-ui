import { Link } from "react-router-dom";
import hamburger from '../assets/hamburger.svg'
import { CiInstagram } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
const Navbar = () => {

	const navLinks = [
		{ href: "#Home", label: "Home" },
		{ href: "#About", label: "About" },
		{ href: "#Pages", label: "Pages"},
		{ href: "#Product",label: "Product"},
		{ href: "#Contact", label: "Contact"},
	];
	return (
		// <section className="bg-yellow-300 w-full h-[30px]">
		// <div className="z-[2] w-full my-auto mx-0 h-16 md:px-[200px] px-8 py-10 flex items-center justify-between absolute top-[20px]">
		// 	<div className="md:flex hidden items-center gap-7">
		// 		{navLinks.map((navLink) => {
		// 			return (
		// 				<Link
		// 					to={navLink.path}
		// 					key={navLink.title}
		// 				>
		// 					<span
		// 						className={`font-medium ${navLink.active ? "text-white underline" : "text-white"}`}
		// 					>
		// 						{navLink.title}
		// 					</span>
		// 				</Link>
		// 			);
		// 		})}
		//  <button>Request Quote</button>
		// 	</div>
		// 	<div className="cursor-pointer md:hidden block">
				
		// 	</div>
		// </div>
		// </section>

		<header className='padding-x py-8 absolute z-10 w-full'>
		<nav className='flex justify-between items-center max-container'>
		<a href='/'>
		</a>
	
		<div>
		<ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden text-white font-extrabold'>
		{navLinks.map((item)=>(
		  <li key={item.label}>
		  <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
		  {item.label}
		  </a>
		  </li>
		))}
		</ul>
		</div>


		<div className="sm:flex hidden">

		<div className="flex gap-12 justify-center">
		<CiInstagram className="bg-white rounded-full"/>
		<FaFacebook className="rounded-full bg-white"/>
		<CiTwitter className="rounded-full bg-white"/>
		<FaLinkedin className="rounded-full bg-white"/>
		<div>
		<button className="bg-white  h-[52px] w-[212px] ">Request Quote</button>
		</div>
		
		</div>


		</div>
		
		
		
		
		<div className='hidden max-lg:block'>
		<img src={hamburger} alt='Hamburger' width={25} height={25} />
		</div>
		</nav>
		</header>

	);
};

export default Navbar;

      
      
      
      
      
