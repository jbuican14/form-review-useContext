import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

export default function RatingSelect({ select }) {
  const { feedbackEdit } = useContext(FeedbackContext);

  const [selected, setSelected] = useState(10);

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };

  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit.item.rating]);

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating=${i + 1}`}>
          <input
            type="radio"
            id={`num${i + 1}`}
            value={i + 1}
            checked={selected === i + 1}
            onChange={handleChange}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1} </label>
        </li>
      ))}
    </ul>
  );
}
