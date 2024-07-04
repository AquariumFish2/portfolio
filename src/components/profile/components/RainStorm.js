import Cloud from "../../cloud";
import Rain from "../../rain";

function RainStorm() {
  return (
    <>
      <Rain />
      <Rain />
      <Rain />
      <Rain />
      <Rain />
      <Rain />
      <Rain />
      <Rain />
      <Rain />
      <Rain />
      <Cloud top="20px" movingRight={false}></Cloud>
      <Cloud top="50px" movingRight={true}></Cloud>
    </>
  );
}

export default RainStorm;
