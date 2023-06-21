import "./styles.css";
import { Tilt } from "react-tilt";
import { AnimationOptions } from "./components/animationOption.js";
import imagePrison from "../public/image/prison_break.png";
export default function App() {
  const { defaultOption } = AnimationOptions(
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
        className="
      rounded-lg
      drop-shadow-lg 
      bg-stone-200
      mx-auto my-[25%]
       h-[400px] w-[200px] "
      >
        <div
          style={{ backgroundImage: `url(${imagePrison})` }}
          className="
         bg-cover
         bg-center
         bg-no-repeat 
          h-full w-full 
         border-1 "
        >
          <span></span>
        </div>
      </Tilt>
    </div>
  );
}
