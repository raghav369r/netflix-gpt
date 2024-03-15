import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Home() {
  const navigate=useNavigate();
  return (
    <div className="w-full">
      <Header />
      <img
        className="fixed w-screen h-screen object-cover"
        alt="background"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
      />
      <div className="w-full flex justify-center">
      <div className="mt-[15%] absolute text-white ">
        <h1 className="text-xl md:text-3xl font-semibold m-auto px-2">The Biggest Indian Hits Ready to watch here. From 149 </h1>
        <p className="text-sm md:text-xl mx-auto px-2 ">Join us today cancel anytime.</p>
        <p className="text-sm md:text-xl mx-auto px-2 ">Ready to watch? Get started to create or restate your membership.</p>
        <button onClick={()=>navigate('/browse')} className="m-2 px-4 py-2 bg-red-900 ">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
