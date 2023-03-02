import Link from "./Link";

function Sidebar() {
  const links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/aboutme" },
    { label: "Portofolio", path: "/portofolio" },
    { label: "Contact", path: "/contact" },
  ];
  const renderLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="mb-4 mr-6 text-white text-3xl"
        activeClassName={
          "font-bold border-l-4 border-blue-500 pl-2 text-blue-400"
        }
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex justify-end bg-black  ">
      {renderLinks}
    </div>
  );
}

export default Sidebar;
