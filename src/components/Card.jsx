import React from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"

function Card({ data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={1} className=" relative w-52 h-60 rounded-[20px] bg-zinc-700 p-5 text-white overflow-hidden">
      <FaRegFileLines />
      <p className="text-sm leading-tight mt-5 font-regular">{data.desc}</p>
      <div className=" absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between mb-3 px-6 py-3">
          <h4>{data.filesize}</h4>
          <span className="w-5 h-5 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoMdCloseCircle />
            ) : (
              <FaDownload size=".7rem" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isopen && (
          <div className={`w-full py-3 ${data.tag.tagColor==="blue"?"bg-blue-600" :"bg-green-600"} flex items-center justify-center`}>
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
