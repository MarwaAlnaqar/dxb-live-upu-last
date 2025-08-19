import React from 'react';
import './QuestionsItemstyle.css';

export default function CountryOptions({ options = [],isSliced=true, offset = 0,numberOfCol=3 }) {
  console.log(options.length)
  console.log(isSliced)
const countries =options.slice(0,198);
  console.log(countries.length)

  // const countries = isSliced ? options.slice(0, 100):options.slice(50, 290); // Keep this if you want max 100 per call, or remove if already sliced
    // console.log(countries)
  const colors = [        '#22ad22',   // Yes
          'red',   // No
          'yellow',   // Abstain
          "#ffff", "#ffff"]; // light red, light green, light yellow

  const getRandomColor = () => {
  
  const index = Math.floor(Math.random() * colors.length); // 0, 1, or 2
  // console.log(index)
  // console.log(colors[index])

  return colors[index];
    // return colors[Math.floor(Math.random() * colors.length)];
  };
  // Group countries into rows of 3
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