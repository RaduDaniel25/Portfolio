function CertificateCard({ name, certificate, date, platform }) {
  const stil = { width: "60%" };
  return (
    <div
      style={stil}
      className="card flex flex-row justify-between items-center pb-9 pt-5"
    >
      <div>
        <p className="text-3xl pb-6">{name}</p>
        <p className="text-xl">{platform}</p>
      </div>

      <div>
        <p className="text-3xl pb-6">{date}</p>
        <a href={certificate} className="text-blue-400 text-xl">
          View Certificate
        </a>
      </div>
    </div>
  );
}

export default CertificateCard;
