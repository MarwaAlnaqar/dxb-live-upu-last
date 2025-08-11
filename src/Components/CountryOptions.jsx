import React from 'react';
import './QuestionsItemstyle.css';

export default function CountryOptions({ options = [], offset = 0 }) {
  const countries = options.slice(0, 100); // Keep this if you want max 100 per call, or remove if already sliced
  const colors = [        '#22ad22',   // Yes
          'red',   // No
          'yellow',   // Absent
          "#ffffff", "#ffffff"]; // light red, light green, light yellow

  const getRandomColor = () => {
  
  const index = Math.floor(Math.random() * colors.length); // 0, 1, or 2
  console.log(index)
  console.log(colors[index])

  return colors[index];
    // return colors[Math.floor(Math.random() * colors.length)];
  };
  // Group countries into rows of 3
  const rows = [];
  for (let i = 0; i < countries.length; i += 3) {
    rows.push(countries.slice(i, i + 3));
  }

  return (
    <table className="country-table">
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((country, colIndex) => {
              // Calculate continuous index:
              const index = offset + rowIndex * 3 + colIndex + 1;
              return (
                <td  style={{ backgroundColor: getRandomColor() }} key={colIndex}>
                  <span className="country-index">{index}.</span> {country}
                </td>
              );
            })}
            {row.length < 3 &&
              Array.from({ length: 3 - row.length }).map((_, i) => (
                <td   key={`empty-${i}`} />
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
