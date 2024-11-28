export default function ServicePage() {
    return (
      <div className="bg-gray-50">
        {/* Header Section */}
        <section className="py-16 sm:py-24 bg-gray-900 text-white text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            At Timeless Creations, we offer a wide range of high-quality, custom-made furniture services designed to elevate your space. Whether you’re looking for bespoke pieces or furniture restoration, we have the expertise to bring your vision to life.
          </p>
        </section>
  
        {/* Service Options Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Custom Furniture Design Service */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition duration-300">
                <div className="relative">
                  <img
                    src="/path/to/service-image1.jpg"
                    alt="Custom Furniture"
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Furniture Design</h3>
                  <p className="text-gray-600">Work with our expert designers to create unique, personalized furniture pieces that match your style and needs.</p>
                </div>
              </div>
  
              {/* Furniture Restoration Service */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition duration-300">
                <div className="relative">
                  <img
                    src="/path/to/service-image2.jpg"
                    alt="Furniture Restoration"
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Furniture Restoration</h3>
                  <p className="text-gray-600">Bring new life to your old furniture with our restoration services. We repair, refinish, and reupholster your beloved pieces.</p>
                </div>
              </div>
  
              {/* Furniture Assembly Service */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition duration-300">
                <div className="relative">
                  <img
                    src="/path/to/service-image3.jpg"
                    alt="Furniture Assembly"
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Furniture Assembly</h3>
                  <p className="text-gray-600">We offer expert furniture assembly services to save you time and effort, ensuring your pieces are set up correctly and securely.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Why Choose Us Section */}
        <section className="py-16 sm:py-24 bg-blue-600 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose Timeless Creations?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Our passion for quality craftsmanship, attention to detail, and commitment to customer satisfaction sets us apart. We pride ourselves on delivering personalized service for every project, no matter the size or complexity.
          </p>
          <div className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-8 rounded-md text-lg transition duration-300 cursor-pointer">
            Get Started with Us
          </div>
        </section>
  
        {/* Call to Action Section */}
        <section className="py-16 sm:py-24 bg-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Contact us today to discuss your custom furniture needs, get a quote, or schedule a consultation. We’re here to make your vision a reality.
          </p>
          <div className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md text-lg transition duration-300 cursor-pointer">
            Contact Us Now
          </div>
        </section>
  
        
      </div>
    );
  }
  