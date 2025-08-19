import React from "react";

export default function  OptionBox  ({ label, count,isWhite=false }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: '200px',
        borderRadius: 5,
        border: "1px solid rgb(255, 255, 255)",
        overflow: "hidden", // keeps inner divs contained
      }}
    >
      <h3 style={{ padding: "0 12px", margin: 0,color:'#fff' ,fontSize:'1rem',letterSpacing:1 }}>{label}</h3>
      <div
        style={{
          borderLeft:  "1px solid rgb(255, 255, 255)",
          padding: "12px 19px",
          fontWeight: "bold"
          ,color:'#fff',fontSize:'1rem'
        }}
      >
        {count}
      </div>
    </div>
  );
};
