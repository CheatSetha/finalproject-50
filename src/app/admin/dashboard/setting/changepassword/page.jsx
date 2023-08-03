"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";

//import toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "@/lib/baseUrl";
import { useGetAdminQuery } from "@/store/features/auth/authApiSlice";
import { useChnagePasswordAdminyIdMutation } from "@/store/features/user/userApiSlice";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import { useState } from "react";
import { PiFloppyDiskLight } from "react-icons/pi";

export default function ChangePassword() {
  const { data: token } = useGetAdminQuery();
  const [updatePasswordAdminById, { isSuccess }] =
    useChnagePasswordAdminyIdMutation();
  const USER_ID = token?.data?.id;
  const [showPassword, setShowPassword] = useState(false);
  const [showNP, setShowNP] = useState(false);
  const [showRNP, setShowRNP] = useState(false);
  const [showConfirmPw, setShowConfirmPw] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowNP = () => setShowNP(!showNP);
  const toggleShowRNP = () => setShowRNP(!showRNP);
  const toglleShowConfirmPw = () => setShowConfirmPw(!showConfirmPw);

  const validationShcema = Yup.object().shape({
    // validate old password
    old_password: Yup.string().required("Old password is required"),
    // validate password
    new_password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
      ),
    // validate repeat new password
    repeat_new_password: Yup.string()
      .required("Repeat new password is required")
      .oneOf([Yup.ref("new_password"), null], "Passwords must match"),
  });

  const initialValues = {
    old_password: "",
    new_password: "",
    repeat_new_password: "",
  };

  let setSubmitting = false;
  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    // console.log("values of password", values);
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      oldPassword: values.old_password,
      newPassword: values.new_password,
      confirmedPassword: values.repeat_new_password,
    });
    // console.log("data", raw);
    let requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  };
  return (
    <section className="h-screen p-5 max-sm:px-5 db-bg dark:bg-primary max-md:px-5 ">
      <div className="sticky top-20 z-30 db-bg dark:bg-primary">
        <h1 className="text-[32px] text-light dark:text-white font-semibold ">
          Change Password
        </h1>

        <div className="text-sm breadcrumbs p-0 pt-1 pb-5">
          <ul className="font-extralight text-light dark:text-white">
            <li>
              <Link
                className="text-black dark:text-white"
                href="/admin/dashboard"
              >
                Admin
              </Link>
            </li>
            <li>
              <Link
                className="text-black dark:text-white"
                href={"/admin/dashboard/setting/profile"}
              >
                Setting
              </Link>
            </li>
            <li>
              <Link
                className="text-black dark:text-white"
                href={"/admin/dashboard/setting/changepassword"}
              >
                Change Password
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="xl:w-[1000px]">
        <Formik
          initialValues={initialValues}
          validationSchema={validationShcema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              var raw = JSON.stringify({
                oldPassword: values.old_password,
                newPassword: values.new_password,
                confirmedPassword: values.repeat_new_password,
              });

              const response = await updatePasswordAdminById({
                id: USER_ID,
                data: raw,
              });
              // console.log("respone : ", response);
              setTimeout(() => {
                if (response?.data) {
                  toast.success(response?.data?.message, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                }

                if (response?.error) {

                  toast.error(response.error.data.message, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });

                  toast.error(response.error.data.errors, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });

                }
              }, 100);
            } catch (error) {
              console.error(error?.error?.data?.errors);
            }
            setSubmitting(false);
            resetForm();
          }}
        >
          <Form>
            <div>
              {/*old password*/}
              <div className="pb-5">
                <label
                  htmlFor="old_password"
                  className="block mb-2 text-sm      text-gray-500 dark:text-white"
                >
                  Old Password
                </label>
                <Field
                  type={showPassword ? "text" : "password"}
                  id="old_password"
                  name="old_password"
                  className="w-full inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-main focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Old Password"
                  required
                />
                <span
                  className="inline absolute -ml-8 mt-3 cursor-pointer"
                  type="button"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? <RiEyeCloseLine /> : <RiEyeLine />}
                </span>
                <ErrorMessage
                  name="old_password"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/*new password*/}
              <div className="pb-5">
                <label
                  htmlFor="new_password"
                  className="block mb-2 text-sm      text-gray-500 dark:text-white"
                >
                  New Password
                </label>
                <Field
                  type={showNP ? "text" : "password"}
                  id="new_password"
                  name="new_password"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-main inline focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="New Password"
                  required
                />
                <span
                  className="inline absolute -ml-8 mt-3 cursor-pointer"
                  type="button"
                  onClick={toggleShowNP}
                >
                  {showNP ? <RiEyeCloseLine /> : <RiEyeLine />}
                </span>
                <ErrorMessage
                  name="new_password"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {/*repeat new password*/}
              <div className="pb-5">
                <label
                  htmlFor="repeat_new_password"
                  className="block mb-2 text-sm      text-gray-500 dark:text-white"
                >
                  Repeat New Password
                </label>
                <Field
                  type={showConfirmPw ? "text" : "password"}
                  id="repeat_new_password"
                  name="repeat_new_password"
                  className="w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-main inline focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Repeat New Password"
                  required
                />
                <span
                  className="inline absolute -ml-8 mt-3 cursor-pointer"
                  type="button"
                  onClick={toglleShowConfirmPw}
                >
                  {showConfirmPw ? <RiEyeCloseLine /> : <RiEyeLine />}
                </span>
                <ErrorMessage
                  name="repeat_new_password"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="flex ">
                <button
                  type="submit"
                  className="rounded-main px-5 btn w-full  md:w-fit  bg-black text-white "
                >
                  <PiFloppyDiskLight className="inline text-xl text-white font-black mr-1.5 " />{" "}
                  <span>Save</span>
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
}
