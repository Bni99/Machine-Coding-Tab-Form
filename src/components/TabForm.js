import Profile from "./Profile";
import Intrests from "./Intrests";
import Settings from "./Settings";
import { useState } from "react";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "",
    age: 0,
    email: "",
    intrests: [],
    theme: "dark",
  });
  const [errors, setErrors] = useState({});
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        let errors = {};
        if (data.name.length < 2) {
          errors.name = "Invalid Name";
        }
        if (+data.age < 18) {
          errors.age = "Invalid Age";
        }
        if (data.email < 2) {
          errors.email = "Invalid Email";
        }
        setErrors(errors);
        if (errors.name || errors.age || errors.email) return false;
        return true;
      },
    },
    {
      name: "Intrests",
      component: Intrests,
      validate: () => {
        let errors = {};
        if (data.intrests.length === 0) {
          errors.intrests = "Please enter atleast one intrest";
        }
        setErrors(errors);
        if (errors.intrests) {
          return false;
        }
        return true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const CurrentTab = tabs[activeTab].component;

  const handleFormSubmit = () => {
    console.log(data);
  };

  const handlePrev = () => {
    setActiveTab((prevVal) => {
      return prevVal - 1;
    });
  };

  const handleNext = () => {
    if (tabs[activeTab].validate())
      setActiveTab((prevVal) => {
        return prevVal + 1;
      });
  };

  return (
    <div className="tab-form-container">
      <div className="headings-container">
        {tabs.map((tab, index) => {
          return (
            <div
              key={index}
              className="headings"
              onClick={() => {
                setActiveTab(index);
              }}
            >
              {tab.name}
            </div>
          );
        })}
      </div>
      <div className="body">
        <CurrentTab data={data} setData={setData} errors={errors} />
      </div>
      {activeTab > 0 && <button onClick={handlePrev}>Prev</button>}
      {activeTab !== tabs.length - 1 && (
        <button onClick={handleNext}>Next</button>
      )}
      {activeTab === tabs.length - 1 && (
        <button onClick={handleFormSubmit}>Submit</button>
      )}
    </div>
  );
};
export default TabForm;
