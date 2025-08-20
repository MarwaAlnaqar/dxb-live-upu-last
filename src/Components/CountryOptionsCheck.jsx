import React from 'react';
import './QuestionsItemstyle.css';

export default function CountryOptions({
  options = [],
  isSliced = true,
  offset = 0,
  numberOfCol = 5,
  isSlider = false
}) {


  // ✅ Step 1: sort alphabetically
  let countries = [...options].sort((a, b) => a.localeCompare(b));


   countries =  countries.slice(0, 200);


  const colors = ["#22ad22", "#ffff", "#ffff"];

  const getRandomColor = () => {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  };

  // ✅ Step 3: Split into columns instead of rows
  const numRows = Math.ceil(countries.length / numberOfCol);

  // Create a matrix [rows][columns], filling column by column
  const rows = Array.from({ length: numRows }, (_, rowIndex) =>
    Array.from({ length: numberOfCol }, (_, colIndex) => {
      const index = colIndex * numRows + rowIndex; // column-major order
      return countries[index] || "";
    })
  );

  return (
    <table className="country-table">
      <tbody>
         {rows.map((row, rowIndex) => (
    <tr key={rowIndex}>
      {row.map((country, colIndex) =>
        country ? (
          <td
            style={{ backgroundColor: getRandomColor() }}
            key={colIndex}
          >
            {country}
          </td>
        ) : null
      )}
    </tr>
  ))}
      </tbody>
    </table>
  );
}
