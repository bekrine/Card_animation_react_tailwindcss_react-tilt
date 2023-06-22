export const AnimationOptions = (
  reverse:boolean,
  max:number,
  perspective:number,
  scale:number,
  speed:number,
  transition:boolean,
  axis:null|"Y"|'X',
  reset:boolean,
  easing:string
): animationOptions => {
  const defaultOption = {
    reverse: reverse, // reverse the tilt direction
    max: max, // max tilt rotation (degrees)
    perspective: perspective, // Transform perspective, the lower the more extreme the tilt gets.
    scale: scale, // 2 = 200%, 1.5 = 150%, etc..
    speed: speed, // Speed of the enter/exit transition
    transition: transition, // Set a transition on enter/exit.
    axis: axis, // What axis should be disabled. Can be X or Y.
    reset: reset, // If the tilt effect has to be reset on exit.
    easing: easing
  };

  return defaultOption;
};


type animationOptions = {
  reverse:boolean,
max:number,
perspective:number,
scale:number,
speed:number,
transition:boolean,
axis:null|"Y"|'X',
reset:boolean,
easing:string
}
