import React, { useState } from "react";
import {IState as Props} from '../App'

interface IProps {
    people: Props["people"],
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({ people, setPeople}) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
      if(
          !input.name ||
          !input.age ||
          !input.img
      ) {
          return
      }
      setPeople([
          ...people,
          {
              name: input.name,
              age: parseInt(input.age),
              url: input.img,
              note: input.note
          }
      ])
      setInput({
        name: "",
        age: "",
        note: "",
        img: "",          
      })
  }

  return (
    <div className="AddToList">
      <input
        name="name"
        onChange={handleChange}
        value={input.name}
        type="text"
        placeholder="Name"
        className="AddToList-input"
      />
      <input
        name="age"
        onChange={handleChange}
        value={input.age}
        type="text"
        placeholder="Age"
        className="AddToList-input"
      />
      <input
        name="img"
        onChange={handleChange}
        value={input.img}
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
      />
      <textarea
        name="note"
        onChange={handleChange}
        value={input.note}
        placeholder="Notes"
        className="AddToList-input"
      />
      <button
        className="AddToList-btn"
        onClick={handleClick}
      >
          Add to List
      </button>
    </div>
  );
};

export default AddToList;
