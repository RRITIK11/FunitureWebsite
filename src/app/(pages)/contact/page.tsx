export default function ContactPage() {
    return (
      <div className="bg-gray-50">
        {/* Header Section */}
        <section className="py-16 sm:py-24 bg-gray-900 text-white text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            Get in Touch with Timeless Creations
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            We would love to hear from you! Whether you're interested in a custom piece, have questions, or want to discuss a project, our team is here to help.
          </p>
        </section>
  
        {/* Contact Form Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">Contact Us</h2>
  
            <div className="lg:grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Send Us a Message</h3>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600"
                      placeholder="Your Name"
                    />
                  </div>
  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600"
                      placeholder="Your Email"
                    />
                  </div>
  
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
  
              {/* Contact Info Section */}
              <div className="text-gray-900">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <p className="text-lg mb-4">
                  Have a question or want to discuss a potential project? Feel free to reach out to us directly.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <i className="fas fa-map-marker-alt text-blue-600 mr-3"></i>
                    <span>1234 Furniture St, Woodbridge, NY</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-phone-alt text-blue-600 mr-3"></i>
                    <span>(123) 456-7890</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-envelope text-blue-600 mr-3"></i>
                    <span>info@timelesscreations.com</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fab fa-facebook-f text-blue-600 mr-3"></i>
                    <span>facebook.com/timelesscreations</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fab fa-instagram text-blue-600 mr-3"></i>
                    <span>instagram.com/timelesscreations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  
        {/* Map Section */}
        <section className="py-16 sm:py-24 bg-gray-200">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">Visit Us</h2>
            <div className="relative w-full h-64 sm:h-80 bg-gray-300 rounded-lg overflow-hidden">
              {/* You can replace the iframe with an actual Google Maps embed */}
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.285376035569!2d-77.03456298468593!3d38.89767657957092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b5d3b9a14d39%3A0x7f3da31ef5a07d77!2sWhite%20House!5e0!3m2!1sen!2sus!4v1619768300076!5m2!1sen!2sus"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </section>
  
        {/* Footer Section */}
        <footer className="bg-gray-900 text-white py-6">
          <div className="text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Timeless Creations. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    );
  }
  