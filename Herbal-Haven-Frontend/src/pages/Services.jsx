

const services = [
  {
    title: 'Web Development',
    description: 'We build responsive and high-performing websites using the latest technologies.',
    icon: '🌐',
  },
  {
    title: 'Mobile App Development',
    description: 'We create mobile apps that provide a seamless experience across different devices.',
    icon: '📱',
  },
  {
    title: 'UI/UX Design',
    description: 'Our design team ensures a great user experience with intuitive and engaging interfaces.',
    icon: '🎨',
  },
  {
    title: 'SEO Optimization',
    description: 'Boost your site traffic and ranking with our SEO services tailored for your needs.',
    icon: '📈',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-dark-blue py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold text-white sm:text-4xl">
            What We Offer
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            We provide a range of services to help your business succeed in the digital world.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <div className="text-5xl text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="mt-4 text-base text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
