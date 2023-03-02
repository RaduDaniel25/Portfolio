import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiTailwindcss,
  SiBulma,
  SiCss3,
} from "react-icons/si";
const stil = { width: "65%", paddingBottom: "32px" };
const bgClr = { background: "rgb(24,24,24)" };
function Aboutme() {
  return (
    <div style={bgClr} className=" text-white  pb-8 pt-8  ">
      <div className=" flex  flex-col justify-center   text-4xl mb-6 pl-10  ">
        <p style={stil} className=" pt-6 ">
          Hi there! 👋🏻
        </p>
        <p style={stil}>
          I'm a Junior Front-End Developer oriented on Javascript.
        </p>
        <p style={stil}>
          My biggest ability is that i'm a self-learner. I give every project I
          work on my all. And always relish a worthwhile and fresh task.
        </p>
        <p style={stil}>The technologies I work with are: React JS Redux.</p>
        <p style={stil}>
          If you're interested to know more about it, drop a message and let's
          talk!
        </p>
      </div>
      <div className="flex justify-center pt-4 pb-8 text-6xl  ">
        <SiJavascript className="mr-4 " />
        <SiReact className="mr-4 " />
        <SiHtml5 className="mr-4" />
        <SiTailwindcss className="mr-4" />
        <SiBulma className="mr-4 " />
        <SiCss3 className="mr-4" />
      </div>
    </div>
  );
}
export default Aboutme;
