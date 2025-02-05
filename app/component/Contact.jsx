import React from 'react'
import Image from "next/image"

const Contact = () => {
  return (
<section id="contact" className="py-16 text-black bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-gradient-to-br from-secondary/5 to-primary/5 p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
          <form className="space-y-6">
            <div>
              <label for="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
            </div>
            <div>
              <label for="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
            </div>
            <div>
              <label for="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
            </div>
            <div>
              <label for="service" className="block text-sm font-medium text-gray-700 mb-1">I am interested in</label>
              <select
                id="service"
                name="service"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
              >
                <option value="">Select a service</option>
                <option value="community">Community-Based Support</option>
                <option value="respite">Respite Care</option>
                <option value="live-in">Live-In Home Care</option>
              </select>
            </div>
            <div>
              <label for="source" className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us?</label>
              <select
                id="source"
                name="source"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
              >
                <option value="">Select an option</option>
                <option value="search">Search Engine</option>
                <option value="referral">Professional Referral</option>
                <option value="social">Social Media</option>
                <option value="friend">Friend/Family</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label for="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-secondary mb-2">Address</h4>
                <p className="text-gray-600">
                  123 Main Street<br/>
                  Newark, NJ 07102
                </p>
              </div>
              <div>
                <h4 className="font-medium text-secondary mb-2">Phone</h4>
                <p className="text-gray-600">(555) 123-4567</p>
                <p className="text-sm text-gray-500">Available Monday-Friday, 9am-5pm EST</p>
              </div>
              <div>
                <h4 className="font-medium text-secondary mb-2">Email</h4>
                <p className="text-gray-600">info@harmonysupport.com</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h4 className="font-medium text-secondary mb-4">Why Choose Us?</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>Licensed and certified professionals</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>Personalized care plans</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>24/7 support available</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>Years of experience in disability support</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>Comprehensive support services</span>
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

export default Contact