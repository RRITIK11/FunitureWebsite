import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialsDemo";

export default function AboutPage() {
    return (
      <div className="bg-gray-50">
        {/* Header Section */}
        <section className="py-16 sm:py-24 bg-gray-900 text-white text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            About Timeless Creations
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            At Timeless Creations, we believe that furniture should be more than just functional — it should tell a story. Our passion for crafting beautiful, durable, and custom pieces of furniture shines through in every project we undertake.
          </p>
        </section>
  
        {/* Mission Section */}
        <section className="py-16 sm:py-24 bg-white text-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We strive to transform your vision into reality with precision and creativity. Our mission is to provide you with high-quality, handcrafted furniture that adds beauty, functionality, and elegance to your space.
            </p>
          </div>
        </section>
  
        {/* Story Section */}
        <section className="py-16 sm:py-24 bg-blue-600 text-white text-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg text-gray-100 max-w-3xl mx-auto">
              Founded by a team of passionate craftsmen and designers, Timeless Creations started with a simple idea: to bring timeless beauty into homes and offices. From the first hand-crafted chair to the latest custom-designed tables, we have always believed in quality, craftsmanship, and dedication to our clients.
            </p>
          </div>
        </section>
  
        {/* Our Values Section */}
        {/* <section className="py-16 sm:py-24 bg-gray-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="bg-blue-600 text-white p-6 rounded-full mb-4">
                  <i className="fas fa-cogs text-3xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Craftsmanship</h3>
                <p className="text-gray-600">
                  We take pride in our skilled craftsmanship, ensuring every piece is built to last and looks beautiful in any setting.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white p-6 rounded-full mb-4">
                  <i className="fas fa-users text-3xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer-Centric</h3>
                <p className="text-gray-600">
                  Our customers are at the heart of everything we do. We collaborate closely with each client to ensure their vision comes to life.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white p-6 rounded-full mb-4">
                  <i className="fas fa-flag-checkered text-3xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality</h3>
                <p className="text-gray-600">
                  We only use the finest materials and techniques to ensure that every piece of furniture we create stands the test of time.
                </p>
              </div>
            </div>
          </div>
        </section> */}
  
        {/* Team Section */}
        <section className="py-16 sm:py-24 bg-white text-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Meet the Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Our team is made up of passionate designers, craftsmen, and experts who are committed to bringing your vision to life. Each member brings a unique set of skills to the table, ensuring that every project is completed with precision and care.
            </p>
            <AnimatedTestimonialsDemo/>
            
           

          </div>
        </section>
  
        {/* Call to Action Section */}
        <section className="py-16 sm:py-24 bg-blue-600 text-white text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Create Something Timeless?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Get in touch with us today to start your next project or to discuss any of our services. We are here to help you design the perfect piece for your home or office.
          </p>
          <div className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-8 rounded-md text-lg transition duration-300 cursor-pointer">
            Contact Us Today
          </div>
        </section>
  
      </div>
    );
  }
  

// team member

//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//   {/* Team Member 1 */}
//   <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//     <div className="h-40 bg-gray-300 rounded-lg mb-4"></div>
//     <h3 className="text-xl font-semibold text-gray-900">John Doe</h3>
//     <p className="text-gray-600">Lead Designer</p>
//   </div>

//   {/* Team Member 2 */}
//   <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//     <div className="h-40 bg-gray-300 rounded-lg mb-4"></div>
//     <h3 className="text-xl font-semibold text-gray-900">Jane Smith</h3>
//     <p className="text-gray-600">Head Craftsman</p>
//   </div>

//   {/* Team Member 3 */}
//   <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//     <div className="h-40 bg-gray-300 rounded-lg mb-4"></div>
//     <h3 className="text-xl font-semibold text-gray-900">Tom Brown</h3>
//     <p className="text-gray-600">Furniture Restoration Expert</p>
//   </div>
// </div>

  