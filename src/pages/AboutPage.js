import Aboutme from "../components/Aboutme";
import Certificates from "../components/Certificates";
import Education from "../components/Education";

function AboutPage() {
  return (
    <div>
      <Aboutme />
      <div>
        <Education />
        <Certificates />
      </div>
    </div>
  );
}
export default AboutPage;
