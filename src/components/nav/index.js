"use client";
import React, { useEffect, useState } from "react";
import { BtnThemeToggle } from "../theme/BtnThemeToggle";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { LiaBarsSolid } from "react-icons/lia";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { logout, setCurrentUser } from "@/store/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserQuery } from "@/store/features/user/userApiSlice";
import {
  useGetAdminQuery,
  useGetTokenQuery,
} from "@/store/features/auth/authApiSlice";
import { toast } from "react-toastify";
import Unauthorized from "../util/Unauthorized";
import { nanoid } from "@reduxjs/toolkit";
import WatermarkNavItem from "./components/WatermarkNavItem";
import EditorNavSidebar from "./components/EditorNavSidebar";
import { useGetRoleQuery } from "@/store/features/role/roleApiSlice";
import { DarkModeSwitcher } from "@/app/DarkModeSwitcher";
import CustomBtn from "../util/ButtonRed";
import { Label } from "flowbite-react";

const NavBar = () => {
  const router = useRouter();

  const [name, setName] = useState();
  const [profileImg, setProfileImg] = useState();
  const [logIn, setLogIn] = useState(false);
  const [userImageUrl, setUserImageUrl] = useState("");
  const [userName, setUserName] = useState("");
  const { data: session } = useSession();
  const dispatch = useDispatch();
  // Get user information
  const { data: user, isSuccess } = useGetUserQuery();
  const { data: roles } = useGetRoleQuery();
  const {
    data: token,
    isFetching,
    isSuccess: tokenLoaded,
  } = useGetAdminQuery();
  const [uuid, setUuid] = useState("");

  const role = token?.data?.roles[0].name;
  // console.log(roles, "roles");
  // console.log(token, "user information");

  useEffect(() => {
    if (isSuccess && user) {
      setUuid(user?.data?.uuid);
      setLogIn(true);
      dispatch(setCurrentUser(user));
      const { avatarUrl, familyName, givenName, username } = user?.data;

      setUserImageUrl(avatarUrl);
      setUserName(username);
    } else if (session) {
      setLogIn(true);

      setUserImageUrl(session?.user?.image);
      setUserName(session?.user?.name);
    }
  }, [dispatch, isSuccess, user, session]);

  const logouts = async () => {
    dispatch(logout());
    await signOut({ redirect: false });
    // window.open("/login", "_self");
    // window.location.reload();
    // router.push("/");
    window.open("/", "_self");
  };

  // end of auth config
  const { theme, setTheme } = useTheme();

  const handleWatermarkClick = () => {
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

  //disable in auth part
  const pathName = usePathname();

  if (pathName.includes("/login")) return null;
  if (pathName.includes("/signup")) return null;
  if (pathName.includes("/sendemail")) return null;
  if (pathName.includes("/admin")) return null;
  if (pathName.includes("/dashboard")) return null;
  if (pathName.includes("/otp-verification")) return null;
  if (pathName.includes("/resetpassword")) return null;

  return (
    <div className="navbar navbar-no-boxShadow h-[80px] bg-white dark:bg-[#1e1e1e] sticky top-0 z-50 ">
      <div className="px-5 navbar navbar-no-boxShadow bg-white  sticky top-0 z-50 dark:bg-[#1e1e1e] w-full xl:w-[1290px] mx-auto max-sm:px-5">
        <div className="navbar-start">
          <Link href={"/"}>
            {theme === "dark" ? (
              <Image
                height={50}
                width={131}
                className="md:w-[131px] w-[100px]"
                src="/assets/image/mainlogov2.png"
                alt="logo img"
              />
            ) : (
              <Image
                height={50}
                width={131}
                className="md:w-[131px] w-[100px]"
                src="/assets/image/mainlogo-blackv2.png"
                alt="logo dark img"
              />
            )}
          </Link>
        </div>
        <div className="navbar-center hidden  gap-5 lg:flex">
          <Link
            href={"/"}
            className=" hover:text-black dark:hover:text-white text-black dark:text-white"
          >
            Home
          </Link>
          {/* route and attatched value to react js  */}
          {user || session ? (
            <Link href={"#"}>
              <span
                onClick={handleWatermarkClick}
                className=" hover:text-black dark:hover:text-white text-black dark:text-white"
              >
                Watermark
              </span>
            </Link>
          ) : (
            <WatermarkNavItem title={"Watermark"} />
          )}
          {user || session ? (
            <Link href={"#"}>
              <span
                onClick={handleCertificateClick}
                className=" hover:text-black dark:hover:text-white text-black dark:text-white"
              >
                Certificate
              </span>
            </Link>
          ) : (
            <WatermarkNavItem title={"Certificate"} />
          )}
          <Link
            href={"/tutorial"}
            className=" hover:text-black dark:hover:text-white text-black dark:text-white"
          >
            Tutorials
          </Link>

          <Link
            href={"/aboutus"}
            className=" hover:text-black dark:hover:text-white text-black dark:text-white whitespace-nowrap"
          >
            About Us
          </Link>
        </div>
        <div className="navbar-end gap-5">
          {/* <BtnThemeToggle /> */}
          <DarkModeSwitcher />

          {user || session ? (
            <>
              <div class="dropdown">
                {/* <label class="btn btn-solid-primary my-2" tabIndex="0">Click</label> */}
                <div
                  tabIndex="0"
                  className="md:w-10 md:h-10 cursor-pointer  w-7 h-7 avatar avatar-ring-primary"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={user?.data?.avatarUrl} alt={"profile picture"} />
                </div>
                <div class="dropdown-menu bg-white dark:bg-slate-900 dark:text-white text-black dropdown-menu-bottom-left">
                  <Link
                    href={"/profile/setting"}
                    className="dropdown-item text-sm rounded-main hover:text-black hover:bg-gray-300"
                  >
                    {user?.data?.username}
                  </Link>

                  {role !== "SUBSCRIBER" && role !== "GUEST" && role ? (
                    <Link
                      href={"/admin/dashboard"}
                      className="dropdown-item text-sm rounded-main hover:text-black hover:bg-gray-300"
                    >
                      Administator
                    </Link>
                  ) : null}

                  <button
                    className="py-2 bg-red mt-2 text-white rounded-main hover:bg-red dark:text-white"
                    onClick={() => {
                      logouts();
                    }}
                  >
                    Log out
                  </button>
                  {/* <Label onClick={() => logouts()}>
                    <CustomBtn btn={" w-full"} title={"Log Out"} />
                  </Label> */}
                </div>
              </div>
            </>
          ) : (
            <div className="space-x-2">
              <Link
                href={"/login"}
                className="text-[17px] h-10 bg-red rounded-main text-white  px-4 btn font-light max-md:hidden "
              >
                Log In
                
              </Link>
              <Link
                href={"/signup"}
                className="text-[17px] h-10 bg-red rounded-main text-white  px-4 btn font-light max-md:hidden "
              >
                Register
              </Link>
            </div>
          )}
        </div>

        {/* drobdown responsive */}
        <div className="dropdown block lg:hidden ml-3">
          <label tabIndex="0">
            <LiaBarsSolid className="text-black bg-white dark:bg-slate-900 dark:text-white text-xl " />
          </label>
          <div className="dropdown-menu dropdown-menu-bottom-left text-black bg-white dark:bg-slate-900 dark:text-white">
            {user || session ? (
              <Link
                href={"/profile/setting"}
                className="dropdown-item text-sm hover:text-black hover:bg-gray-300"
              >
                Profile
              </Link>
            ) : null}

            {role !== "SUBSCRIBER" && role !== "GUEST" && user ? (
              <Link
                href={"/admin/dashboard"}
                className="dropdown-item text-sm hover:text-black hover:bg-gray-300"
              >
                Dashboard
              </Link>
            ) : null}

            <Link
              href={"/"}
              tabIndex="-1"
              className="dropdown-item text-sm hover:text-black hover:bg-gray-300"
            >
              Home
            </Link>

            {user || session ? (
              <Link href={"#"}>
                <span
                  onClick={handleWatermarkClick}
                  className="dropdown-item text-sm hover:text-black hover:bg-gray-300"
                >
                  Watermark
                </span>
              </Link>
            ) : (
              <EditorNavSidebar title={"Watermark"} />
            )}
            {user || session ? (
              <Link href={"#"}>
                <span
                  onClick={handleCertificateClick}
                  className="dropdown-item text-sm hover:text-black hover:bg-gray-300"
                >
                  Certificate
                </span>
              </Link>
            ) : (
              <EditorNavSidebar title={"Certificate"} />
            )}
            <Link
              href={"/tutorial"}
              tabIndex="-1"
              className="dropdown-item text-sm hover:text-black hover:bg-gray-300"
            >
              Tutorials
            </Link>
            <Link
              href={"/aboutus"}
              tabIndex="-1"
              className="dropdown-item text-sm hover:text-black hover:bg-gray-300"
            >
              About Us
            </Link>

            <Link
              href={"/login"}
              tabIndex="-1"
              className={`dropdown-item text-sm hover:text-black hover:bg-gray-300 ${
                user ? "hidden" : ""
              }`}
            >
              Log In
            </Link>
            <Link
              href={"/signup"}
              tabIndex="-1"
              className={`dropdown-item text-sm hover:text-black hover:bg-gray-300 ${
                user ? "hidden" : ""
              }`}
            >
              Register
            </Link>

            {user || session ? (
              <Link
                href={"profile/setting"}
                tabIndex="-1"
                className="dropdown-item text-sm hover:text-black hover:bg-gray-300"
              >
                Setting
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
