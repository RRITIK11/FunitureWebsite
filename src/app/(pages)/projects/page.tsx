import { LayoutGridDemo } from "@/components/LayoutGridDemo";

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
        <LayoutGridDemo/>
  
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
  