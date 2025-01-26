import Image from "next/image"
import Link from "next/link"
const Hero = () => {
  return (
    <section className="pt-24 pb-12 bg-gray-50 bg-gradient-to-br from-primary/5 to-secondary/5">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Your Path to Empowered Living
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          We provide compassionate, person-centered support services to individuals with disabilities in New Jersey.
        </p>
        <div className="mb-8">
          <Image 
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&auto=format&fit=crop&q=80" 
            alt="Caregiver supporting an individual with daily activities" 
            className="rounded-lg shadow-lg mx-auto"
            width={533}
            height={200}

          />
        </div>
        <div className="flex gap-4 justify-center">
          <Link 
            href="#contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get Started Today
          </Link>
          <Link 
            href="#services"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors border border-primary"
          >
            View Our Services
            </Link>

        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero