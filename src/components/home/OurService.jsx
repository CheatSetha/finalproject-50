"use client";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SAMPLE_FAQ } from "@/components/util/SampleFaq";
import RequestForm from "@/components/home/RequestTutorial";
import ServiceCard from "@/components/home/ServiceCard";
import { useGetUserQuery } from "@/store/features/user/userApiSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";

const imageBanner = "/assets/image/home/home-banner.png";
const imageWatermark = "/assets/image/home/watermark-photo.png";
const imagecertificate = "/assets/image/home/certificate-photo.png";

//color bg
const darkBACKGROUND = " dark:bg-slate-950 ";
const lightBackground = " bg-white ";

//padding section
const paddingSection = " pb-20 ";
export default function OurService() {
  const [uuid, setUuid] = useState();
  const { data: user, isSuccess } = useGetUserQuery();
  const { data: session } = useSession();
  useEffect(() => {
    if (user) {
      setUuid(user?.data?.uuid);
    }
  }, [user]);
  const da = useSelector((state) => state);
  const handleWatermarkClick = () => {
    // router.push({ pathname: 'https://photostad-editor.vercel.app/watermark', query: { uuid } });
    window.open(
      `https://photostad-editor.vercel.app/?watermark?${uuid}`,
      "_self"
    );
  };
  const handleCertificateClick = () => {
    window.open(
      `https://photostad-editor.vercel.app/?certificate?${uuid}`,
      "_self"
    );
  };

  return (
    <section
      class={
        paddingSection +
        lightBackground +
        darkBACKGROUND +
        "xl:w-[1290px] w-full  max-sm:px-5 px-5  "
      }
    >
      <div id="ourservice" className=" max-sm:p-0">
        <h1 className="text-center max-sm:text-[24px] pb-14 text-5xl font-bold dark:text-white text-slate-950 ">
          Our Services
        </h1>
        <div className="flex flex-wrap  max-sm:flex-col justify-between">
          <motion.div
            initial={{ x: 23, opacity: 0, scale: 0.5 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="lg:w-[49%] w-[90%] p-10 watermark   flex max-sm:w-full max-sm:p-4 mb-[18px] md:w-full max-md:w-full "
          >
            <div className="">
              <h2 className="text-3xl text-[#222] dark:text-white font-bold max-sm:text-[20px] ">
                Watermark
              </h2>
              <p className=" py-10 max-sm:text-[14px] max-sm: dark:text-white max-sm:py-0 max-sm:pb-[15px]">
                A watermark is a special mark on a picture or document to show
                who made it and protect it from being copied without permission.
                It is like a signature to keep things safe and give credit to
                the original creator.
              </p>
              {user || session ? (
                <button
                  className="text-[17px] h-10 bg-red rounded-main text-white  px-4 btn font-light"
                  onClick={handleWatermarkClick}
                >
                  Edit Watermark
                </button>
              ) : null}
            </div>
            <Image
              alt="water mark"
              src={imageWatermark}
              width={200}
              height={200}
              className="max-sm:w-[150px]  max-sm:h-[150px]  md:w-[250px] md:h-[250px] max-md:w-[250px] max-md:h-[250px]"
            />
          </motion.div>

          <motion.div
            initial={{ x: 23, opacity: 0, scale: 0.5 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="lg:w-[49%] w-[90%]  certificate p-10 flex max-sm:w-full max-sm:p-4 mb-[18px] md:w-full max-md:w-full  "
          >
            <div className="">
              <h2 className="text-3xl text-[#222] dark:text-white font-bold  max-sm:text-[20px]">
                Certificate
              </h2>
              <p className="dark:text-white py-10 max-sm:text-[14px]  max-sm:py-0 max-sm:pb-[15px]">
                Certificates are official papers that prove achievements, like
                completing a course or reaching a special goal. They celebrate
                hard work and success, with names, titles, and signatures making
                them official.
              </p>
              {user || session ? (
                <button
                  className="text-[17px] h-10 bg-red rounded-main text-white  px-4 btn font-light"
                  onClick={handleCertificateClick}
                >
                  Edit Certificate
                </button>
              ) : null}
            </div>
            <Image
              alt="certificate"
              src={imagecertificate}
              width={200}
              height={200}
              className="max-sm:w-[150px]  max-sm:h-[150px] md:w-[250px] md:h-[250px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
