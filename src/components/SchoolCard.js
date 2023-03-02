function SchoolCard({ type, years, name }) {
  return (
    <div className="card flex text-2xl pb-9 pt-5">
      <div className="pr-6 pl-6 ">
        <p className="pb-5">{years}</p>
        <p>{type}</p>
      </div>
      <p>{name}</p>
    </div>
  );
}

export default SchoolCard;
