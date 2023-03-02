function PortofolioCard({ photo, title, description, link }) {
  const stil = { width: "50%" };
  return (
    <div
      style={stil}
      className="card flex flex-row justify-between items-center pb-9 pt-5 text-white text-xl "
    >
      <div>
        <img width="400" height="350" src={photo} alt="Tic Tac Toe Game" />
      </div>
      <div>
        <p className="text-xl pb-6">{title}</p>
        <p className="text-xl pb-6">{description}</p>
        <a href={link} className="text-blue-400 text-xl pb-6">
          View More
        </a>
      </div>
    </div>
  );
}
export default PortofolioCard;
