import Image from "next/image";

const Banner = () => {
  return (
    <div className="container border-b-[1px] border-b-zinc-500">
      <Image
            className="w-full h-full group-hover:scale-110 duration-300"
            src={require("/Images/mainback.jpg")}
            alt="blogImage"
          />
    <div className="banner flex flex-col gap-8 items-center py-28">
      <p className="text-7xl font-titleFont">Dogs lives are too short , their fault only</p>
      <h1>
          <span className="text-7xl font-medium ">REALLY?</span>  
        </h1>
      
    </div>
    </div>
  );
};

export default Banner;