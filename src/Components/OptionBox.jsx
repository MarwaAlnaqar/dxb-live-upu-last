import React from "react";

export default function  OptionBox  ({ label, count }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: '200px',
        borderRadius: 5,
        border: "1px solid #004067",
        overflow: "hidden", // keeps inner divs contained
      }}
    >
      <h3 style={{ padding: "0 12px", margin: 0,color:'#004067' ,fontSize:'1rem' }}>{label}</h3>
      <div
        style={{
          borderLeft: "1px solid #004067",
          padding: "12px 19px",
          fontWeight: "bold"
          ,color:'#004067',fontSize:'1rem'
        }}
      >
        {count}
      </div>
    </div>
  );
};
