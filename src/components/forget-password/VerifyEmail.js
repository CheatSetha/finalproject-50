"use client";
import {
  selectIsFromForgetPw,
  setEmail,
  setIsFormForgetPw,
} from "@/store/features/anonymous/anonymousSlice";
import { useVerifyForgotPasswordMutation } from "@/store/features/auth/authApiSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import ButtonRed from "../util/ButtonRed";
import CustomBtn from "../util/ButtonRed";
import { TbSend } from "react-icons/ti";
import Image from "next/image";
import { useTheme } from "next-themes";
import Loading from "@/app/loading";
import ButtonBlack from "../util/ButtonBlack";
export default function VerifyEmail() {
  const [verifyForgotPassword, { isLoading }] =
    useVerifyForgotPasswordMutation();
  const { theme } = useTheme();
  const [email, setEmails] = useState("");
  const [isAnimating, setIsAnimating] = useState(false); // State for animation
  const dispatch = useDispatch();
  const router = useRouter();
  const handleInputChange = (event) => {
    setEmails(event.target.value);
  };
  const iconSend = " Send <TbSend />";

  const handleSubmit = async () => {
    dispatch(setEmail(email));
    try {
      dispatch(setIsFormForgetPw(true));
      setIsAnimating(true);
      const respone = await verifyForgotPassword(email).unwrap();
      // console.log("verifyEmail : ",respone);
      setTimeout(() => {
        toast.success(respone?.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }, 100);
      router.push("/otp-verification");
    } catch (err) {
      toast.error(err?.data?.errors, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log("error verifyEmail", err);
    } finally {
      setIsAnimating(false); // Stop animation
    }
  };

  return (
    <div className="py-10 w-full h-screen flex justify-center items-center bg-[whitesmoke] dark:bg-slate-950">
      <div className="md:w-[700px] w-full shadow-md mx-auto bg-white dark:bg-black rounded-main p-5">
        <Image
          className="mx-auto pt-5 pb-10 max-sm:pb-6"
          width={170}
          height={100}
          src={`/assets/image/${
            theme === "dark" ? "mainlogov2" : "mainlogo-blackv2"
          }.png`}
          alt="logo photo"
        />

        <h1 className="dark:text-white font-bold text-2xl pb-3">
          Tell us your Email
        </h1>
        <hr className="pb-2" />
        <p className="dark:text-white mb-3">
          Please enter your email to reset your account&#39;s password.
        </p>
        <div className="mb-5">
          <label
            htmlFor="default-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="text"
            id="default-input"
            className="bg-gray-50 border rounded-main border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="flex justify-end gap-3">
          <ButtonBlack title={"Cancel"} bg={"bg-black"} />
          <label onClick={handleSubmit}>
            <CustomBtn isLoading={isAnimating} title={"Send Email"} />
          </label>
        </div>

       
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </div>
  );
}
