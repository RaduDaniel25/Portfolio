import {
  FaGithubSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Footerhome() {
  return (
    <div className="mt-9 mb-9">
      <div className="flex justify-center pt-7 pb-8 mb-9 text-7xl  ">
        <a href="https://github.com/RaduDaniel25">
          <FaGithubSquare className="mr-6" />
        </a>
        <a href="https://www.facebook.com/raducu.radu.585">
          <FaFacebookSquare className="mr-6" />
        </a>
        <a href="https://twitter.com/RaduUng13613580">
          <FaTwitterSquare className="mr-6" />
        </a>

        <a href="https://www.instagram.com/radu.ungureanu25/?hl=ro">
          <FaInstagram className="mr-6" />
        </a>
        <a href="https://www.linkedin.com/in/radu-ungureanu-a34a71252/">
          <FaLinkedin />
        </a>
      </div>
      <div className="flex justify-center pt-4 pb-8 text-3xl  ">
        &copy; 2022-2025. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footerhome;
