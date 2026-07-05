const Intrests = ({ data, setData, errors }) => {
  const { intrests } = data;
  const handleDataChange = (e) => {
    const { name, checked } = e.target;
    setData((prevData) => {
      return {
        ...prevData,
        intrests: checked
          ? [...prevData.intrests, name]
          : prevData.intrests.filter((intrest) => {
              return intrest !== name;
            }),
      };
    });
  };
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="music"
          checked={intrests.includes("music")}
          onChange={handleDataChange}
        />
        Music
      </label>
      <label>
        <input
          type="checkbox"
          name="dance"
          checked={intrests.includes("dance")}
          onChange={handleDataChange}
        />
        Dance
      </label>
      <label>
        <input
          type="checkbox"
          name="painting"
          checked={intrests.includes("painting")}
          onChange={handleDataChange}
        />
        Painting
      </label>
      <label>
        <input
          type="checkbox"
          name="gardening"
          checked={intrests.includes("gardening")}
          onChange={handleDataChange}
        />
        Gardening
      </label>
      {errors.intrests && <div className="errors">{errors.intrests}</div>}
    </div>
  );
};
export default Intrests;
