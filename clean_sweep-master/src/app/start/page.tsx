import Image from "next/image";
import Navbar from "../Navbar/page";

import img from "../../../public/toilet.png"
import img1 from "../../../public/toilet-side-view-icon.webp"
import img2 from "../../../public/sink-with-drain-icon.webp"
import img3 from "../../../public/toilet-icon.webp"
import Footer from "../footer/page";
import Link from "next/link";
export default function Start() {
  //<Image className="rounded-lg shadow-lg " src={logo} width={80} height={50} alt="" />
  return (
    <>
    <Navbar/>
    <div className="my-40 mx-2">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
  <div className="px-10 object-cover">
  <Image className="rounded-lg" src="https://www.cleanlink.com/resources/editorial/2022/28937-toilet-sstock-726939124.jpg" width={500} height={400} style={{objectFit:"cover"}} alt="" />
   
  </div>
  
  <div className="mx-2 text-wrap">
    <h1 className="text-red-500 text-4xl font-extrabold p-4">Our Clean &
Care System</h1>
<p className="text-2xl justify-center p-3">Whether you’re cleaning your toilet for the first time, embarking on a regular routine, dealing with limescale or mould, or giving your surroundings a deep clean,<span className="text-red-500 blod"> Clean Sweep </span> has got everything to get your spaces sparkling and keep you and your family safe and well.</p>

<Link href="/product"> 
<button  className="w- bg-red-800 text-white px-6 py-3 mx-9 font-xl my-5 rounded-md sm:mb-0">View Our Products</button>
</Link>
<Link href="/contact"> 
<button  className="w- bg-red-800 text-white px-6 py-3 mx-9 my-5 font-xl rounded-md sm:mb-0">Contact Us</button>
</Link>
  </div>
</div >
   <h1 className="text-red-500 text-3xl text-center mt-10 pt-40">How can we help you?</h1>
   <h3 className="text-red-500 text-2xl mt-4 text-center mb-5">Clean Sweep can help find solutions to all your toilet & bathroom questions or problems.</h3>
<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 bg-red-600 py-5 px-3">
 <div className="">
  <Image className="rounded-lg " src={img1} width={300} height={400} style={{objectFit:"cover"}} alt="" />
  <h2 className="text-white text-3xl text-center font-bold p-2">Toilet</h2>
  <h3 className="text-white text-xl text-center ">Clean Sweep can help you find solutions to all your toilet problems and questions…</h3>
  </div>
 <div><Image className="rounded-lg" src={img2} width={300} height={400} style={{objectFit:"cover"}} alt="" />
 <h2 className="text-white text-3xl text-center font-bold p-2">Bathroom</h2>
  <h3 className="text-white text-xl text-center ">Clean Sweep can help you find solutions to all your bathroom problems and questions…</h3>
 </div>
 <div><Image className="rounded-lg" src={img3} width={300} height={400} style={{objectFit:"cover"}} alt="" />
 <h2 className="text-white text-3xl text-center font-bold p-2">Your Problems</h2>
  <h3 className="text-white text-xl text-center ">Want to tackle specific challenges such as mould or limescale? Clean Sweep can help you find solutions.</h3>
 </div>
  </div>
   
    </div>
    <Footer/>
    </>
  );
}
