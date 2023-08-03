import CustomBtn from "@/components/util/ButtonRed";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardTutorial = ({ uuid, slug, name, thumbnail, description ,flex}) => {

  return (
    <Link href={`/tutorial/${uuid}/${slug}`}>

      <div className= {`flex gap-3   ${flex}`}>
        <div className="md:w-1/2 w-[90%] rounded-main max-sm:w-full ">
          <img
            className="rounded-[16px] max-sm:mb-[18px] max-sm:h-[200px] h-full"
            src={thumbnail}
          ></img>
        </div>
        <div className="md:w-1/2 w-[90%] max-sm:w-full p-10 bg-[#e9e8e8] rounded-[16px]  max-sm:p-4">
          <h2 className="text-3xl text-[#111] font-bold max-sm:text-[20px]  max-sm:text-center max-sm:leading-[25px]">
            {name}
          </h2>
          <p className="py-10 text-[#333] max-sm:pt-[15px] max-sm:text-[14px] max-sm:pb-[20px] ">
            {description}
          </p>
          {/* <button className="focus:outline-none text-white bg-[#E85854] hover:bg-red focus:ring-4 focus:ring-red rounded-[16px] text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red dark:hover:bg-red dark:focus:ring-red max-sm:text-[10px] max-sm:py-[5px] max-sm:px-[10px] max-sm:items-center max-sm:mb-0">
            Read more...
          </button> */}
          <CustomBtn title={"Read more..."}/>
        </div>
      </div>
    </Link>
  );
};

export default CardTutorial;
