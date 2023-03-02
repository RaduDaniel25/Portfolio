import CertificateCard from "./CertificateCard";

function Certificates() {
  const bgClr = { background: "rgb(24,24,24)" };
  return (
    <div style={bgClr} className="text-white pl-9 pb-9">
      <p className="text-4xl pb-8 ">Certificates</p>
      <div className="flex flex-col justify-center items-center">
        <CertificateCard
          name="Modern React with Redux [2023 Update]"
          platform="Udemy"
          date="01/03/2023"
          certificate="https://www.udemy.com/certificate/UC-a828ad74-9ae0-478e-a323-7b5449151f8a/"
          className="flex justify-center items-center"
        />
        <CertificateCard
          name="The Complete JavaScript Course 2022: From Zero to Expert!"
          platform="Udemy"
          date="06/10/22"
          certificate="https://www.udemy.com/certificate/UC-c32a3b12-915b-476e-a6cd-342f6556291e/"
        />
      </div>
    </div>
  );
}

export default Certificates;
