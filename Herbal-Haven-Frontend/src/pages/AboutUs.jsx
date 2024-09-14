
function AboutUs() {
  return (
    <div className="bg-dark-blue text-white min-h-screen py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-8">
          We are a passionate team committed to delivering the best products and services to our clients. Our journey began with a mission to make a positive impact in the industry through innovation and dedication.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-dark-blue-light rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
          <p>
            To empower businesses with cutting-edge technology solutions that drive growth and success.
          </p>
        </div>
        <div className="bg-dark-blue-light rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Our Vision</h2>
          <p>
            To be the leading provider of innovative and reliable solutions that transform the way businesses operate.
          </p>
        </div>
        <div className="bg-dark-blue-light rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Our Values</h2>
          <p>
            Integrity, Innovation, and Customer Success are at the core of everything we do.
          </p>
        </div>
      </div>
    </div>
  </div>

  )
}

export default AboutUs