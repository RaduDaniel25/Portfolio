import imageSrc from "../photos/radu.jpg";
function Namephoto() {
  return (
    <div className="flex justify-between items-center pl-9 bg-black h-screen">
      <div className=" text-white text-5xl ml-5">
        <h1 className="flex justify-center font-mono  italic">
          Ungureanu Radu
        </h1>
        <h2 className="flex justify-center font-sans ">Front-End Developer</h2>
      </div>
      <img
        src={imageSrc}
        alt="radu"
        className="rounded-full  mr-10 mt-3 mb-3"
      />
    </div>
  );
}
export default Namephoto;
