import React from 'react'
import Image from "next/image"

const Service = () => {
  return (
    <section id="services" className="py-16 bg-gradient-to-br bg-white from-primary/5 to-secondary/5">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-black mb-12">DDD Approved Provider Services</h2>
      
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="grid md:grid-cols-2 gap-8">
            <Image 
            width={100}
            height={100}
              src="https://images.unsplash.com/photo-1598257006626-48b0c252070d?w=600&auto=format&fit=crop&q=80" 
              alt="Person with disability engaging in community activities" 
              className="rounded-lg w-full h-64 object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Community-Based Support</h3>
              <p className="text-gray-600">
                We offer comprehensive direct support services both in and out of the participant's home, aimed at enhancing independence, productivity, and family dynamics while promoting community inclusion. Our services are designed to assist individuals in achieving the goals set in their Service Plans.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Guidance for community-based activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Training for self-care tasks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Social skills development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
  
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Respite Care</h3>
              <p className="text-gray-600">
                We offer compassionate respite care services designed to provide temporary relief for primary caregivers while ensuring the continued well-being of individuals with disabilities. Our trained professionals offer in-home or out-of-home care, allowing caregivers the opportunity to rest and recharge.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Personalized support services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Assistance with daily living tasks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Engaging social activities</span>
                </li>
              </ul>
            </div>
            <Image 
            width={100}
            height={100}
              src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=600&auto=format&fit=crop&q=80" 
              alt="Support worker assisting person with disability" 
              className="rounded-lg w-full h-64 object-cover"
            />
          </div>
        </div>
  
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="grid md:grid-cols-2 gap-8">
            <Image 
            width={100}
            height={100}
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&auto=format&fit=crop&q=80" 
              alt="Person with disability receiving support at home" 
              className="rounded-lg w-full h-64 object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Live-In Home Care</h3>
              <p className="text-gray-600">
                Our live-in home care services ensure peace of mind, knowing your loved one's essential health and wellness needs are met. Our dedicated live-in care professionals provide compassionate support, assisting clients with their daily living activities while promoting comfort, independence, and dignity.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>24/7 personalized care</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Comprehensive support services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Promoting independence</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Service