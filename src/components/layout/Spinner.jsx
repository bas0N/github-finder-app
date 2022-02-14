import spinner from "./assets/Rhombus.gif";
function Spinner() {
  return (
    <div className="w-100">
      <img
        width={180}
        className="text-center mx-auto"
        src={spinner}
        alt="Loading..."
      ></img>
    </div>
  );
}

export default Spinner;
