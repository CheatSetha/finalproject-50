import Image from "next/image";
import React from "react";
export default function Custom() {
  return (
    <main className="flex  items-center justify-evenly p-24">
      <div className="grid grid-cols-1 gap-32 max-sm:hidden">
        <div>
          <Image
            width={250}
            height={200}
            alt="logo"
            src="/assets/image/mainlogo-blackv2.png"
            className="w-[200px]"
          ></Image>
        </div>
        <div>
          <h2 className="font-black mt-[-60px] text-red-500">
            {" "}
            404 Error: Page Not Found
            
          </h2>
          <p className="font-medium mt-3 lg:w-[500px]">
          Sorry, the page you are looking for can not be found. Please check the URL, use the navigation menu or search bar, or contact us for assistance.<br />
          
            <a href="/">
              <button type="button" class="text-red-400 btn rounded-main hover:text-red-500 ">
                back home page
              </button>
            </a>{" "}
          </p>
        </div>
      </div>
      <div>
        <Image
          width={400}
          height={300}
          alt="404 image"
          src="/assets/image/404Error.gif"
          className="w-[400px]"
        />
        <a className=" hidden w-full max-sm:flex justify-center max-sm:mt-5 " href="/">
              <button type="button" class="text-red-400 btn rounded-main  hover:text-red-500 ">
                back home page
              </button>
            </a>{" "}
      </div>
    </main>
  );
}
