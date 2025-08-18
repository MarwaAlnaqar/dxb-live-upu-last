import React from 'react';
import './QuestionsItemstyle.css';

export default function CountryOptions({ options = [],isSliced=true, offset = 0,numberOfCol=3,isSlider=false }) {
  console.log(options.length)
  console.log(isSliced)

  const countries = isSliced ? options.slice(0, 100):options.slice(50, 290); // Keep this if you want max 100 per call, or remove if already sliced
    // console.log(countries)
  const colors = [        '#22ad22',   // Yes
        
          "#ffff", "#ffff"]; // light red, light green, light yellow

  const getRandomColor = () => {
  
  const index = Math.floor(Math.random() * colors.length); // 0, 1, or 2
  // console.log(index)
  // console.log(colors[index])

  return colors[index];
    // return colors[Math.floor(Math.random() * colors.length)];
  };
  // Group countries into rows of 3
  const rows = [];
  for (let i = 0; i < countries.length; i += 5) {
    rows.push(countries.slice(i, i + 5));
  }

  return (
    <table className="country-table">
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((country, colIndex) => {
              // Calculate continuous index:
              const index = offset + rowIndex * 5 + colIndex + 1;
            
              return (
                
                <td  style={{ backgroundColor: getRandomColor() }} key={colIndex}>
                  {/* <span className="country-index">{index}.</span>  */}
                  {country}
                </td>
              );
            })}
            {row.length < 4 &&
              Array.from({ length: 5 - row.length }).map((_, i) => (
                <td   key={`empty-${i}`} />
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
