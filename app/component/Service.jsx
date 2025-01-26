import React from 'react'
import Image from "next/image"

const Service = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-black text-center mb-12">Our Services</h2>
    
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <h3 className="text-xl text-black font-semibold mb-6">DDD/Medicaid Approved Services</h3>
        <ul className="space-y-8 text-gray-600 mb-6">
          <li>
            <Image 
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&auto=format&fit=crop&q=80" 
              alt="Individual support planning session" 
              className="rounded-lg mb-4 w-full h-48 object-cover"
              width={533}
              height={40}

            />
            <div className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <strong>Individualized Support Planning</strong>
                <p className="mt-1">Customized care plans tailored to each individual's unique needs and goals, ensuring personalized attention and progress tracking.</p>
              </div>
            </div>
          </li>
          <li>
            <Image 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80" 
              alt="Community integration activities" 
              className="rounded-lg mb-4 w-full h-48 object-cover"
              width={533}
              height={40}

            />
            <div className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <strong>Community Integration</strong>
                <p className="mt-1">Support in participating in community activities, building social connections, and engaging in meaningful local events and programs.</p>
              </div>
            </div>
          </li>
          <li>
            <Image 
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&auto=format&fit=crop&q=80" 
              alt="Daily living skills support" 
              className="rounded-lg mb-4 w-full h-48 object-cover"
              width={533}
              height={40}

            />
            <div className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <strong>Daily Living Skills</strong>
                <p className="mt-1">Assistance with personal care, household management, and life skills development for greater independence.</p>
              </div>
            </div>
          </li>
          <li>
            <Image 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80" 
              alt="Employment support and job coaching" 
              className="rounded-lg mb-4 w-full h-48 object-cover"
              width={533}
              height={40}

            />
            <div className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <strong>Employment Support</strong>
                <p className="mt-1">Job coaching, workplace adaptation, and career development assistance to help achieve professional goals.</p>
              </div>
            </div>
          </li>
        </ul>
        <a 
          href="#contact" 
          className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Learn More →
        </a>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-sm">
        <h3 className="text-xl text-black font-semibold mb-6">Private Pay Services</h3>
        <ul className="space-y-8 text-gray-600 mb-6">
          <li>
            <Image 
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&auto=format&fit=crop&q=80" 
              alt="Personalized care planning session" 
              className="rounded-lg mb-4 w-full h-48 object-cover"
              width={533}
              height={40}

            />
            <div className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <strong>Personalized Care Plans</strong>
                <p className="mt-1">Flexible support options designed around your specific preferences and schedule, with regular adjustments based on progress.</p>
              </div>
            </div>
          </li>
          <li>
            <Image 
              src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&auto=format&fit=crop&q=80" 
              alt="Respite care support" 
              className="rounded-lg mb-4 w-full h-48 object-cover"
              width={533}
              height={40}

            />
            <div className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <strong>Respite Care</strong>
                <p className="mt-1">Short-term relief for family caregivers with professional support services, providing peace of mind and quality care.</p>
              </div>
            </div>
          </li>
          <li>
            <Image 
              src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=600&auto=format&fit=crop&q=80" 
              alt="Social skills development session" 
              className="rounded-lg mb-4 w-full h-48 object-cover"
              width={533}
              height={40}

            />
            <div className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <strong>Social Skills Development</strong>
                <p className="mt-1">Programs to enhance communication and social interaction abilities through structured activities and practice.</p>
              </div>
            </div>
          </li>
          <li>
            <Image 
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&auto=format&fit=crop&q=80" 
              alt="Transportation assistance" 
              className="rounded-lg mb-4 w-full h-48 object-cover"
              width={533}
              height={40}

            />
            <div className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <strong>Transportation Assistance</strong>
                <p className="mt-1">Safe and reliable transportation to appointments, activities, and community events with professional support.</p>
              </div>
            </div>
          </li>
        </ul>
        <a 
          href="#contact" 
          className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Learn More →
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Service