const Profile = ({ data, setData, errors }) => {
  const { name, age, email } = data;

  const handleDataChange = (e, item) => {
    setData((prevData) => {
      return { ...prevData, [item]: e.target.value };
    });
  };

  return (
    <div className="profile-container">
      <div className="profile-fields">
        {" "}
        <label>
          Name :{" "}
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => handleDataChange(e, "name")}
          />
        </label>
        {errors.name && <div className="errors">{errors.name}</div>}
      </div>
      <div className="profile-fields">
        {" "}
        <label>
          Age :{" "}
          <input
            name="name"
            type="number"
            value={age}
            onChange={(e) => handleDataChange(e, "age")}
          />
        </label>
        {errors.age && <div className="errors">{errors.age}</div>}
      </div>
      <div className="profile-fields">
        {" "}
        <label>
          Email :{" "}
          <input
            name="name"
            type="email"
            value={email}
            onChange={(e) => handleDataChange(e, "email")}
          />
        </label>
        {errors.email && <div className="errors">{errors.email}</div>}
      </div>
    </div>
  );
};
export default Profile;
