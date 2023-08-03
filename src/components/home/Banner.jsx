"use client";
import { useGetUserQuery } from "@/store/features/user/userApiSlice";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Link from "next/link";
const imageBanner = "/assets/image/home/home-banner.png";
//color bg
const darkBACKGROUND = " dark:bg-slate-950 ";
const lightBackground = " bg-white ";

//padding section
const paddingSection = " pb-20 ";
export default function Banner() {
  const {data:session} = useSession()
  const {data:user } = useGetUserQuery()
  return (
    <section
      id="home-banner"
      className={
        paddingSection +
        lightBackground +
        darkBACKGROUND +
        "xl:w-[1290px] max-md:pt-5 flex flex-col-reverse md:flex-row justify-between pt-14 max-sm:px-5 max-sm:pt-7 md:px-5 max-md:px-5 "
      }
    >
      <div className="lg:pt-16 md:pt-5   max-sm:pt-4">
        <motion.h3
          className="font-bold hover:text-[#E85854]  leading-relaxed tracking-wider  text-[#222] dark:text-[#ffff] pb-5 max-sm:hidden max-sm:pb-5"
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          GET YOUR DESIGNS NOW
        </motion.h3>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          // className="pb-5 font-extrabold text-5xl leading-11 max-sm:leading-normal text-[#222] dark:text-[#ffff]   max-sm:pb-5 max-md:text-[30px] md:text-[40px] "
          className="text-3xl xl:text-4xl max-sm:text-center  mb-5 md:font-bold font-medium text-black dark:text-white leading-10"
         
        >
          Brand your pictures with the free watermark and generate your
          documents with the better solution.
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          className="pb-5 text-lg md:text-base text-[#222] dark:text-[#fff] max-sm:hidden max-md:hidden"
        >
          Level up your content with customizable watermarks and create stunning{" "}
          <br /> certificates effortlessly on our website.
        </motion.p>
        <motion.div
          initial={{ x: -100, opacity: 0, scale: 0.5 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link href="#ourservice" className="">
            <button
              type="button"
              class={
                " focus:outline-none max-sm:hidden text-white bg-red hover:bg-red focus:ring-4 focus:ring-red-300 rounded-[16px] text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red dark:hover:bg-red dark:focus:ring-red-900 max-sm:text-[10px] max-sm:py-[5px] max-sm:px-[10px] max-sm:w-full"
              }
            >
              <p className="mx-5 text-lg">Get Started</p>
            </button>
          </Link>
        </motion.div>
      </div>
      <motion.img
        alt="banner"
        id="img-banner"
        src={imageBanner}
        // width={586}
        // height={484}
        className="w-full md:w-[300px]  lg:w-[450px] xl:w-[530px] p-2.5 mt-4"
        initial={{ x: 23, opacity: 0, scale: 0.5 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      />
    </section>
  );
}
