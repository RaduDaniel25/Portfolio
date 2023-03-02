import PortofolioCard from "../components/PortofolioCard";
import imgTictac from "../photos/tictactoe.png";
import imgStopwatch from "../photos/stopwatch.png";
import imgLogin from "../photos/login.png";
import imgSitecrypto from "../photos/sitecrypto.png";
function PortofolioPage() {
  const bgClr = { background: "rgb(24,24,24)" };
  return (
    <div style={bgClr}>
      <div className="flex flex-col justify-center items-center py-9">
        <PortofolioCard
          photo={imgTictac}
          title="Tic Tac Toe"
          description="Tic Tac Toe Game, u can play against PC or a Friend"
        />
        <PortofolioCard
          photo={imgStopwatch}
          title="StopWatch"
          description="This is a functional StopWatch, you can test it yourself."
        />
        <PortofolioCard
          photo={imgLogin}
          title="LogIn"
          description="This is a login page built in CSS.  "
        />
        <PortofolioCard
          photo={imgSitecrypto}
          title="Crypto Site"
          description="This is my first site built with JS.
           "
        />
      </div>
    </div>
  );
}

export default PortofolioPage;
