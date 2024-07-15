const SideGroupList = (props) => {
  const { genre, onSeletGenre, textProperty, valueProperty, selectedGenre } =
    props;
  // console.log("sdg", genre);
  /* const isActive = genre.selected ? "active" : ""; */
  return (
    <ul className="list-group" key={1}>
      {genre.map((genre) => (
        <li
          key={genre[valueProperty]}
          className={`list-group-item list-group-item-action position-relative ${
            genre === selectedGenre ? "active" : ""
          }`}
          onClick={() => onSeletGenre(genre)}
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

SideGroupList.defualtProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default SideGroupList;
