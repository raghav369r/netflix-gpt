import { useState } from "react";

function VideoCard(Movie) {
  const [showPara, setShowPara] = useState(true);

  if (!Movie.movie) return null;
  const { title, overview } = Movie?.movie;
  return (
    <div className="hidden w-full pl-20 aspect-video pt-[15%] absolute text-white md:block">
      <h1
        onMouseEnter={() => setShowPara(true)}
        onMouseLeave={() => setShowPara(true)}
        className="pb-4 font-bold text-3xl"
      >
        {title}
      </h1>
      {showPara && <p className="hidden w-1/3 md:block">{overview}</p>}
      <button className="mt-4 py-2 px-8 bg-white text-black rounded-sm hover:bg-opacity-40">
        Play
      </button>
      <button className="mt-4 py-2 px-8 mx-3 bg-gray-500 rounded-sm bg-opacity-50 ">
        More info
      </button>
    </div>
  );
}

export default VideoCard;
