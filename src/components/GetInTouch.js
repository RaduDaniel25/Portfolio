function Getintouch() {
  const stil = {
    width: "43%",
    paddingBottom: "32px",
    marginLeft: "12%",
  };

  const bgClr = {
    background: "rgb(24,24,24)",
    paddingTop: "10%",
    paddingBottom: "8%",
  };
  return (
    <div
      style={bgClr}
      className="  bg-gray-700 text-white  pb-8 pt-8 text-4xl mb-6 pl-10   "
    >
      <h1 style={stil} className="pl-10">
        Get in touch
      </h1>
      <p style={stil} className="pl-10">
        If you wanna get in touch, talk to me about a project collaboration or
        just say hi, just send an email to{" "}
        <strong className="text-blue-500 underline underline-offset-1">
          radu.ungureanu99@yahoo.com
        </strong>
      </p>
    </div>
  );
}
export default Getintouch;
