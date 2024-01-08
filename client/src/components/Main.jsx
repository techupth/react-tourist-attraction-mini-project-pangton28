import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Main() {
  const [textSearch, setTextSearch] = useState("");
  const [dataBlogPost, setDataBlogPost] = useState([]);

  const getTextSerch = async () => {
    const result = await axios.get(
      `http://localhost:4002/trips?keywords=${textSearch}`
    );
    setDataBlogPost(result.data.data);
  };

  useEffect(() => {
    getTextSerch();
  }, [textSearch]);
  return (
    <div>
      {dataBlogPost.map((item, index) => (
        <div className=" m-[50px] flex justify-center " key={index}>
          <div className=" bg-slate-500 w-[300px] h-[300px] rounded-2xl object-cover">
            <img
              src={item.photos[0]}
              className="w-[300px] h-[300px] rounded-2xl object-cover"
            />
          </div>
          <div className="ml-[30px]">
            <div className=" w-[50vw] text-wrap">
              <h1 className=" text-[25px]">{item.title}</h1>
              <p className="mt-[10px] truncate">{item.description}</p>
              <a
                href={item.url}
                target="_blank"
                className="text-blue-500 underline hover:text-red-500 "
              >
                อ่านต่อ
              </a>
              <div className="flex mt-[10px] gap-3">
                <p className="">หมวด</p>
                <div className="flex gap-3 underline">
                  {item.tags.map((tag, index) => (
                    <div key={index} className="flex">
                      <button>{tag}</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex mt-[20px] gap-6">
              <div className=" bg-slate-500 w-[100px] h-[100px] rounded-lg">
                <img
                  src={item.photos[1]}
                  className="w-[100px] h-[100px] rounded-lg"
                />
              </div>
              <div className=" bg-slate-500 w-[100px] h-[100px] rounded-lg">
                <img
                  src={item.photos[2]}
                  className="w-[100px] h-[100px] rounded-lg"
                />
              </div>
              <div className=" bg-slate-500 w-[100px] h-[100px] rounded-lg">
                <img
                  src={item.photos[3]}
                  className="w-[100px] h-[100px] rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Main;
