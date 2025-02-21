import Image from "next/image";
import About from "./component/About";
import Contact from "./component/Contact";
import Hero from "./component/Hero";
import Service from "./component/Service";
import Navbar from "./component/Navbar";
import  motion from 'framer-motion';
const   Home=()=> {
  return (
    <>
    {/* <Navbar/>
   <Hero/>
   <About/>
   <Service/>
   <Contact/>
   <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto px-4 text-center">
      <p>&copy; {new Date().getFullYear()} Harmony Support LLC. All rights reserved.</p>
    </div>
  </footer> */}
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-500 to-indigo-600">
            <div className="text-center p-10 bg-white rounded-2xl shadow-2xl max-w-lg">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Coming Soon</h1>
                <p className="text-gray-700 mb-8 text-lg">Our website is under construction. We’ll be here soon with our new awesome site. Stay tuned!</p>
                
            </div>
        </div>
            </>
  );
}
export default  Home

