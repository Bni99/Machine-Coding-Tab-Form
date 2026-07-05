const Settings = ({ data, setData }) => {
  const { theme } = data;

  const handleDataChange = (e) => {
    setData((prevData) => {
      return {
        ...prevData,
        theme: e.target.name,
      };
    });
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          name="dark"
          checked={theme === "dark"}
          onChange={handleDataChange}
        />
        Dark
      </label>
      <label>
        <input
          type="radio"
          name="light"
          checked={theme === "light"}
          onChange={handleDataChange}
        />
        Light
      </label>
    </div>
  );
};
export default Settings;
