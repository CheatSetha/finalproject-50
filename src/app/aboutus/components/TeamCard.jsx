import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsGithub } from "react-icons/bs";

export default function TeamCard({img, name, position, quote , i}) {
const src = img || "/assets/image/mainlogov2.png"

  return (
    <div className="mt-[90px] md:flex flex-col md:space-x-5 md:flex-row  lg:flex-row">
    <div className="flex max-sm:justify-center max-sm:m-auto">
      <Image
        width={277}
        height={277}
        className="lg:w-[277px] lg:h-[277px] md:w-[270px] md:h-[250px] max-sm:w-[250px] max-sm:h-[250px]  object-cover  rounded-full  "
        src={src}
        alt="Modern building architecture"
        loading="lazy"
      />
    </div>
    <div className="max-sm:m-3 md:w-[70%] max-sm:flex max-sm:justify-center md:mx-auto md:rounded-l-none md:shadow-md md:max-w-2xl">
      <div className=" max-sm:shadow-md max-sm:overflow-hidden max-sm:max-w-2xl rounded-xl p-8">
        <h1 className=" tracking-wide font-bold text-black dark:text-white text-[23px] mb-2">
          {name}
        </h1>
        <p className="block mt-1  leading-tight font-light text-black dark:text-white text-[17px] mb-2">
          {position}
        </p>
        {/* <div className="mt-4">
          <div className=" bg-red-500 bg-red px-24 h-2 w-2 rounded-md mb-2"></div>
        </div> */}
        <div className="flex my-4 ">
          <Link
            href="https://www.facebook.com/cheachento"
            target="_blank"
            className="text-[30px] dark:text-white mr-5 md:text-[25px]"
          >
            <span className="">
              <BsFacebook className="text-black dark:text-white" />
            </span>
          </Link>
          <Link
            href="https://github.com/chento007"
            target="_blank"
            className="text-[30px] dark:text-white  mr-5 md:text-[25px]"
          >
            <span>
              <BsGithub className="text-black dark:text-white" />{" "}
            </span>
          </Link>
        </div>

        <p className="mt-10 dark:text-white text-slate-500 md:mt-2">
          {quote}
        </p>
      </div>
    </div>
  </div>
  )
}