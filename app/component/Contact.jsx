import React from 'react'
import Image from "next/image"

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl text-black font-bold text-center mb-12">Contact Us</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl text-black font-semibold mb-4">Get in Touch</h3>
              <p className="text-gray-600">
                Ready to learn more about our services? Contact us today for a free consultation. Our team is here to answer your questions and help you get started.
              </p>
            </div>
  
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-black mb-2">Phone</h4>
                  <p className="text-primary">(555) 123-4567</p>
                  <p className="text-sm text-gray-500">Available Monday-Friday, 9am-5pm EST</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-black mb-2">Email</h4>
                  <p className="text-primary">info@harmonysupport.com</p>
                  <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                </div>
  
                <div>
                  <h4 className="font-medium text-black mb-2">Address</h4>
                  <p className="text-gray-600">123 Main Street<br/>Newark, NJ 07102</p>
                  <p className="text-sm text-gray-500">Serving all of New Jersey</p>
                </div>
              </div>
            </div>
  
            <div className="bg-primary/5 p-6 rounded-lg">
              <h4 className="font-medium mb-2">Service Areas</h4>
              <p className="text-gray-600">
                We provide services throughout New Jersey, including Newark, Jersey City, Paterson, Elizabeth, Edison, and surrounding areas. Contact us to check availability in your area.
              </p>
            </div>
          </div>
  
          <div>
            <Image 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=80" 
              alt="Our friendly support team" 
              width={533}
              height={20}
              className="rounded-lg shadow-md mb-6"
            />
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-medium text-black mb-2">Why Choose Us?</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Licensed and certified professionals</li>
                <li>• Personalized care plans</li>
                <li>• Flexible scheduling options</li>
                <li>• Comprehensive support services</li>
                <li>• Years of experience in disability support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact