import React from "react";

const name = "Ergin";
const age = 41;

const isLoggedIn = true

function MyHeader() {
  return (
    <div>
      <div>Header</div>
      <p>{isLoggedIn ? ` Adı : ${name} Yaşı: ${age} ` : "Giriş yapılmadı"}</p>
    </div>  
  );
}
export default MyHeader;