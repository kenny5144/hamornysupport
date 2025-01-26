import Image from "next/image";
import About from "./component/About";
import Contact from "./component/Contact";
import Hero from "./component/Hero";
import Service from "./component/Service";
import Navbar from "./component/Navbar";
export default function Home() {
  return (
    <>
    <Navbar/>
   <Hero/>
   <About/>
   <Service/>
   <Contact/>
   <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto px-4 text-center">
      <p>&copy; {new Date().getFullYear()} Harmony Support LLC. All rights reserved.</p>
    </div>
  </footer>
    </>
  );
}
