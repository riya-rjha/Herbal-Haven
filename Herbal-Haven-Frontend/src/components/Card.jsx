/* eslint-disable react/prop-types */

function Card({ titles }) {
  return (
    <>
      <div className="p-5 w-full rounded overflow-hidden shadow-lg mt-4 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
        <img
          className="w-full size-72"
          src="https://images.pexels.com/photos/28281605/pexels-photo-28281605/free-photo-of-a-red-staircase-leading-to-a-jungle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{titles}</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </>
  );
}

export default Card;
