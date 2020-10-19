import React, { useState } from "react";
import Options from "./Options";
export default function App() {
  const [options, setOptions] = useState([
    { id: 1, title: "Budget" },
    { id: 2, title: "Food allergies" },
    { id: 3, title: "Number of people" },
    { id: 4, title: "Special restrictions" },
  ]);

  const handleClick = (option) => {
    let _options = [...options];
    let getOptionIndex = _options.findIndex((o) => o.id === option.id);
    _options.splice(getOptionIndex, 1);
    _options.splice(getOptionIndex, 0, { ...option, check: !option.check });
    setOptions(_options);
  };

  const renderItem = (option, index) => {
    return (
      <div key={index} onClick={() => handleClick(option)}>
        <Options title={option.title} check={option.check} />
      </div>
    );
  };

  return (
    <div className="select">
      <input className="searchInput" placeholder="Search questions" />
      <div className="separateLine" />
      {options.map(renderItem)}
    </div>
  );
}
