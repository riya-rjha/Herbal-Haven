/* eslint-disable react/prop-types */


function Plant({title, description, imageUrl }) {
    return (
        <div className="min-h-screen flex">
          {/* Left Section: Image and Title */}
          <div className="w-1/2 bg-dark-blue text-white flex flex-col items-center justify-center p-8">
            <img
              src={imageUrl}
              alt={title}
              className="size-96 rounded-lg"
            />
            <h1 className="text-3xl font-bold mt-6">{title}</h1>
          </div>
    
          {/* Right Section: Information */}
          <div className="w-1/2 bg-dark-blue-light text-white flex items-center justify-center p-12">
            <p className="text-lg leading-relaxed">
              {description}
            </p>
          </div>
        </div>
    )
}

export default Plant