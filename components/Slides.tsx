import Image from "next/image";
import { TbArrowDownRight } from "react-icons/tb";

const Slides = () => {
    return(
        <div>
            <div className="contact text-4xl font-medium text-black flex flex-col items-center gap-2">
        <h1>"Dogs leave PAWPRINTS in our Hearts"</h1> 
        <a href = "mailto: manasvisrivastava21@gmail.com">
        <button className="w-52 h-12 font-medium text-xl uppercase bg-transparent flex items-center justify-center gap-1 hover:bg-black hover:text-white mt-6 border border-black rounded-full group">
          Contact
          <div className="w-5 h-5 relative overflow-hidden">
            <TbArrowDownRight className="text-2xl -mt-[1px] absolute top-0 -translate-x-5 -translate-y-5 text-white group-hover:translate-x-0 group-hover:translate-y-0 duration-300" />
            <TbArrowDownRight className="text-2xl -mt-[1px] absolute top-0 translate-x-0 translate-y-0 text-black group-hover:translate-x-5 group-hover:translate-y-5 duration-300" />
          </div>
        </button>
        </a>
      </div>
    <div className="rt-container">
    	<div className="col-rt-12">
          <div id="slider">
            <div className="slides">
              <div className="slider">
                <div className="legend"></div>
                <div className="content">
                  <div className="content-txt">
                    <h2>Weight</h2>
                    <p>The average male dog weighs 15 to 35 kg and the female weighs 15 to 25 kg and the same goes with their height. Male dogs are taller than females..</p>
                  </div>
                </div>
                <div className="image">
                <Image
                src={require("/Images/slide5.jpg")}
                alt="Picture of the author"
                /> 
                </div>
              </div>
              <div className="slider">
                <div className="legend"></div>
                <div className="content">
                  <div className="content-txt">
                    <h2> Stray dogs are healthier than many other breeds</h2>
                    <p>Even though they do not get nutritious food, Indian stray dogs are tough pups. They can brave the harsh climate whether it's winter or summer in our country. If you want to adopt one, then this is one aspect you do not have to worry about..</p>
                  </div>
                </div>
                <div className="image">  
                <Image
                src={require("/Images/slide1.jpg")}
                alt="Picture of the author"
                /> 
                </div>
              </div>
              <div className="slider">
                <div className="legend"></div>
                <div className="content">
                  <div className="content-txt">
                    <h2>Easy to train</h2>
                    <p>Some of us think that only pet or expensive breed dogs can be trained, but this is a major myth as Indian stray dogs can be trained too. They are very smart and they learn commands like all other dog breeds..</p>
                  </div>
                </div>
                <div className="image"> 
                <Image
                src={require("/Images/slide2.jpg")}
                alt="Picture of the author"
                /> 
                 </div>
              </div>
              <div className="slider">
                <div className="legend"></div>
                <div className="content">
                  <div className="content-txt">
                    <h2>Notched ears</h2>
                    <p> You can identify whether a dog is a sterilized stray or not by noticing the ears. They will have a cut on their ears. So when you approach them to feed, keep an eye on their ears..</p>
                    
                  </div>
                </div>
                <div className="image"> 
                <Image
                src={require("/Images/slide3.jpg")}
                alt="Picture of the author"
                /> 
                </div>
              </div>
            </div>
            <div className="switch">
              <ul>
                <li>
                  <div className="on"></div>
                </li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
         </div> 
	 </div>  
     
     </div>        
    )
    
}

export default Slides;