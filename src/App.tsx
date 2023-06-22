import "./styles.css";
import {useState} from 'react'
import { Tilt } from "react-tilt";
import { AnimationOptions } from "./components/animationOption.tsx";
const imagePrison=require( "./image/prison_break.png");

export default function App() {

const [value,setValue]=useState(0)
  
  const  defaultOption   = AnimationOptions(
    false,
    20,
    1000,
    1.2,
    1000,
    true,
    null,
    true,
    "cubic-bezier(.03,.98,.52,.99)"
  );

  return (
    <div className="h-screen w-screen">
      <Tilt
        options={defaultOption}
        onMouseEnter={()=>setValue(0)}
        onMouseLeave={()=>setValue(100)}
        className="
      rounded-lg
      drop-shadow-lg 
      bg-stone-200
      mx-auto my-[10%]
       h-[400px] w-[200px] "
      >
        <div
        
          style={{ backgroundImage: `url(${imagePrison})` }}
          className="
          overflow-hidden 
         relative
         bg-cover
         bg-center
         bg-no-repeat 
          h-full w-full 
         border-1 "
        >
          <span className={`absolute
                          bottom-0
                          transition-transform duration-500 ease-in-out
                          translate-y-[${value}%]
                           flex flex-col items-center
                            p-2 
                            bg-sky-300 
                            rounded-t-lg
                            
                            `}>
            <h1 className='font-mono text-red-500 text-xl'>Prison Break</h1>
            <h2 className='p-1'>desription :</h2>
            <p className="m-1 ">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam.
            </p>
          </span>
        </div>
      </Tilt>
    </div>
  );
}
