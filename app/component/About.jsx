import Image from "next/image"

import Link from"next/image"
const About = () => {
  return (
    <section  className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-black text-center mb-12">About Us</h2>
      
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <Image 
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=80" 
          alt="Team members discussing care plans" 
          className="rounded-xl "
          width={500}
          height={33}
        />
        <div>
          <h3 className="text-xl text-black font-semibold mb-3">Our Mission</h3>
          <p className="text-gray-600 mb-4">
            Harmony Support LLC is a dedicated organization empowering individuals with disabilities to achieve greater independence, dignity, and a sense of belonging. We provide personalized services tailored to each client's unique needs, fostering their overall well-being and connection to the community.
          </p>
          <p className="text-gray-600">
            We proudly serve a diverse clientele across New Jersey, striving to make a lasting positive impact through our comprehensive support services and dedicated team of professionals.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h3 className="text-xl font-semibold text-black mb-3">Our Vision</h3>
          <p className="text-gray-600 mb-4">
            Harmony Support LLC envisions itself as a leading provider of innovative and inclusive support services. We are committed to creating a community where individuals with disabilities are valued, respected, and fully integrated into society, enabling them to reach their full potential and contribute meaningfully.
          </p>
          <p className="text-gray-600">
            Through continuous improvement and adaptation to the evolving needs of our clients, we aim to set new standards in disability support services.
          </p>
        </div>
        <Image 
          src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&auto=format&fit=crop&q=80" 
          alt="Team planning session" 
          className="rounded-lg shadow-md"
          width={533}
          height={20}
        />
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h3 className="text-xl font-semibold text-black mb-3">Our Core Values</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-medium text-primary mb-2">Respect</h4>
            <p className="text-gray-600">We treat every individual with dignity and respect, recognizing their unique worth and potential.</p>
          </div>
          <div>
            <h4 className="font-medium text-primary mb-2">Empowerment</h4>
            <p className="text-gray-600">We believe in enabling individuals to make their own choices and live life on their own terms.</p>
          </div>
          <div>
            <h4 className="font-medium text-primary mb-2">Excellence</h4>
            <p className="text-gray-600">We strive for the highest standards in all aspects of our service delivery.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default About