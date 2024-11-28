export default function ProjectsPage() {
    return (
      <div className="bg-gray-50">
        {/* Header Section */}
        <section className="py-16 sm:py-24 bg-gray-900 text-white text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            Our Projects
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            Explore our range of bespoke furniture pieces, each crafted with precision and care. From modern to rustic, each creation is a testament to the artistry and durability that defines Timeless Creations.
          </p>
        </section>
  
        {/* Featured Projects Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer">
                <div className="relative">
                  <img
                    src="/path/to/project-image1.jpg"
                    alt="Project 1"
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Modern Sofa Set</h3>
                  <p className="text-gray-600">A sleek and stylish sofa set designed for modern living rooms.</p>
                </div>
              </div>
  
              <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer">
                <div className="relative">
                  <img
                    src="/path/to/project-image2.jpg"
                    alt="Project 2"
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Rustic Dining Table</h3>
                  <p className="text-gray-600">A handcrafted dining table made with reclaimed wood for a rustic charm.</p>
                </div>
              </div>
  
              <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer">
                <div className="relative">
                  <img
                    src="/path/to/project-image3.jpg"
                    alt="Project 3"
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Bookshelf</h3>
                  <p className="text-gray-600">A unique and personalized bookshelf built to fit any space perfectly.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Call to Action Section */}
        <section className="py-16 sm:py-24 bg-blue-600 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Get Started with Your Custom Project</h2>
          <p className="text-lg mb-6">
            Let's bring your vision to life. Contact us today to discuss your custom furniture ideas.
          </p>
          <div className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-8 rounded-md text-lg transition duration-300 cursor-pointer">
            Contact Us
          </div>
        </section>
  
        
      </div>
    );
  }
  