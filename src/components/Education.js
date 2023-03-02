import SchoolCard from "./SchoolCard";

function Education() {
  const bgClr = { background: "rgb(24,24,24)" };
  return (
    <div style={bgClr} className="text-white pl-9 pb-9">
      <p className="text-4xl pb-8 ">Education</p>

      <SchoolCard
        type="High School"
        years="2015-2018"
        name="Liceul Tehnologic Economic “VIRGIL MADGEARU” IAȘI"
      />
      <SchoolCard
        type="Collage"
        years="2019-2023"
        name="The Faculty of Mathematics"
      />
    </div>
  );
}

export default Education;
