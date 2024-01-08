import React from "react";
import { useState } from "react";

function SearchBar() {
  const [textSearch, setTextSearch] = useState("");
  return (
    <div className=" ml-[150px] mr-[150px] mt-[50px] ">
      <h1 className="text-[50px] text-[#2E9BDB] text-center">เที่ยวไหนดี</h1>
      <p>ค้นหาที่เที่ยว</p>
      <input
        type="text"
        placeholder="หาที่เที่ยวแล้วไปกัน ..."
        className="w-[100%] text-center border-b-2 outline-none"
        onChange={(e) => {
          setTextSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchBar;
