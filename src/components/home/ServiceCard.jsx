"use client";
import Image from "next/image";
import Link from "next/link";
import { use, useCallback, useEffect, useState } from "react";
import ButtonComponent from "@/components/button/ButtonComponent";
import FormREQ from "@/components/home/FormREQ";
import { motion } from "framer-motion";
import { useGetUserQuery } from "@/store/features/user/userApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setRoles } from "@/store/features/role/roleSlice";
import { useSession } from "next-auth/react";
import TutorialContent from "@/components/tutorialcontents";
import {
  setCredentials,
  setCurrentUser,
} from "@/store/features/auth/authSlice";
import {
  useLoginMutation,
  useRegisterWithGoogleMutation,
} from "@/store/features/auth/authApiSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SAMPLE_FAQ } from "@/components/util/SampleFaq";
import { useGetRoleQuery } from "@/store/features/role/roleApiSlice";
import RequestForm from "@/components/home/RequestTutorial";
import Head from "next/head";
import secureLocalStorage from "react-secure-storage";

const imageBanner = "/assets/image/home/home-banner.png";
const imageWatermark = "/assets/image/home/watermark-photo.png";
const imagecertificate = "/assets/image/home/certificate-photo.png";

//color bg
const darkBACKGROUND = " dark:bg-slate-950 ";
const lightBackground = " bg-white ";

//padding section
const paddingSection = " pb-20 ";
export default function ServiceCard() {
  //description Tutorials
  const [showMore, setShowMore] = useState(false);
  const [showMore_one, setShowMore_one] = useState(false);
  const dispatch = useDispatch();
  const [signIn, { isLoading, isSuccess: looginIn }] = useLoginMutation();
  const [registerWithGoogle] = useRegisterWithGoogleMutation();
  const { data: roles } = useGetRoleQuery();
  const [login] = useLoginMutation();
  const { data: user, isSuccess } = useGetUserQuery();
  const { data: session } = useSession();

  const toggleText = () => {
    setShowMore(!showMore);
  };
  const toggleText_one = () => {
    setShowMore_one(!showMore_one);
  };
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (looginIn) {
      toast.success("Login Success");
    }
  }, [looginIn]);

  useEffect(() => {
    if (user) {
      dispatch(setCurrentUser(user));
    }
  }, [user, dispatch]);

  return (
    <section
      class={
        paddingSection +
        lightBackground +
        darkBACKGROUND +
        "xl:w-[1290px] max-sm:px-5 sm:mt-0 px-5"
      }
    >
      <h1 className="text-center max-sm:text-[24px] pb-14 text-5xl font-bold  text-slate-950 dark:text-[#fff]">
        Tutorials
      </h1>

      <div className="flex gap-3 flex-wrap">
        <div className="flex gap-3  max-sm:flex-col">
          <motion.div
            initial={{ x: 23, opacity: 0, scale: 0.5 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 w-[90%] rounded-main max-sm:w-full "
          >
            <iframe
              className="rounded-[16px] max-sm:mb-[18px] max-sm:h-[200px]"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/QBLpBD1KKGk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </motion.div>
          <motion.div
            initial={{ x: 23, opacity: 0, scale: 0.5 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 w-[90%] max-sm:w-full p-10 bg-[#e9e8e8] rounded-[16px]  max-sm:p-4"
          >
            <h2 className="text-3xl text-[#111] font-bold max-sm:text-[20px]  max-sm:text-center max-sm:leading-[25px]">
              Add Custom Watermark to Photos in 9 minute
            </h2>
            <p className="py-10 text-[#333] max-sm:pt-[15px] max-sm:text-[14px] max-sm:pb-[20px] ">
              Watermark photos right in your browser. Add custom ​​watermarks
              with your logo and text. Make multi-part watermarks. Add
              transparent and opaque watermarks
              {showMore_one ? (
                <>
                  .Resize photos before publishing online. Import photos from
                  your computer, Google Drive or Dropbox. Instant uploads and
                  downloads. Watermark pictures without waiting in line. Use it
                  for free with optional paid options.
                </>
              ) : (
                <span id="dots">...</span>
              )}
            </p>
            <Link href={'/tutorial/31092f9f-1f65-4940-ac4f-46dad96a0daa/watermarking-your-images-is-an-important-step-in-protecting-your-intellectual-property-and-ensuring-that-your-images-are-not-used-without-your-permission-in-this-tutorial-well-show-you-how-to-add-a-watermark-to-your-images-using-photostad'}>
            <button
          
              className="focus:outline-none text-white bg-[#E85854] hover:bg-red focus:ring-4 focus:ring-red rounded-[16px] text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red dark:hover:bg-red dark:focus:ring-red max-sm:text-[10px] max-sm:py-[5px] max-sm:px-[10px] max-sm:items-center max-sm:mb-0"
            >
              Read More
            </button>
            </Link>
          </motion.div>
        </div>

        <div className="flex gap-3  max-sm:flex-col-reverse">
          <motion.div
            className="md:w-1/2 w-[90%] max-sm:w-full p-10 bg-[#e9e8e8] rounded-[16px]  max-sm:p-4"
            initial={{ x: 23, opacity: 0, scale: 0.5 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl text-[#111] font-bold max-sm:text-[20px]  max-sm:text-center max-sm:leading-[25px]">
              Generate Certificate in 10 minutes
            </h2>
            <p className="py-10 text-[#333] max-sm:pt-[15px] max-sm:text-[14px] max-sm:pb-[20px]">
              Start by designing a certificate template that includes relevant
              information such as the recipient name, the title of the
              certificate, the issuing organization name and logo
              {showMore ? (
                <>
                  , a description of the achievement, and any additional details
                  you want to include. This template can be created using
                  graphic design software or online certificate design tools.
                </>
              ) : (
                <span id="dots">...</span>
              )}
            </p>
            <Link href={'https://photostad.istad.co/tutorial/41426752-8b77-40aa-9871-a848f248dc0d/generate-certificate-in-10-minutes'} >
            <button
    
              className="focus:outline-none text-white bg-[#E85854] hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-[16px] text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 max-sm:text-[10px] max-sm:py-[5px] max-sm:px-[10px] max-sm:items-center max-sm:mb-0"
            >
             Read More
            </button>
            </Link>
          </motion.div>

          <motion.div
            className="md:w-1/2 w-[90%] rounded-main max-sm:w-full "
            initial={{ x: 23, opacity: 0, scale: 0.5 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              className="rounded-[16px] max-sm:mb-[18px] max-sm:h-[200px]"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/V8p0Cxz9v5Q?start=15"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
