import { useSelector } from "react-redux";

function VodeoBg() {
  const trailer=useSelector(store=>store.movies.trailer);
  if(!trailer) return null;
  const {key}=trailer;
  return (    
    <div className="w-ful">
      <iframe
        className="w-full aspect-video"
        src={"https://www.youtube.com/embed/"+ key +"?&autoplay=1&mute=1"}
        title="player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen></iframe>
    </div>
  );
}

export default VodeoBg;
