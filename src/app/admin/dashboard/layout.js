"use client";
import { DarkModeSwitcher } from "@/app/DarkModeSwitcher";
import AsideBar from "@/components/admin-dashboard/AsideBar";
import Skeleton from "@/components/loading/Skeleton";
import { BtnThemeToggle } from "@/components/theme/BtnThemeToggle";
import CustomBtn from "@/components/util/ButtonRed";
import Forbidden from "@/components/util/Forbidden";
import Unauthorized from "@/components/util/Unauthorized";
import { useGetAdminQuery } from "@/store/features/auth/authApiSlice";
import { logout } from "@/store/features/auth/authSlice";
import {
  useGetUserByIdQuery,
  useGetUserQuery,
} from "@/store/features/user/userApiSlice";
import { Label } from "flowbite-react";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }) {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { data: token, isSuccess } = useGetAdminQuery();
  const { data: user, isFetching } = useGetUserQuery();
  const { data: session } = useSession();
  const role = token?.data?.roles[0].name;
  const adminId = token?.data?.id;
  const dispatch = useDispatch();
  const router = useRouter();
  const { data, isLoading, error } = useGetUserByIdQuery(adminId);
  const userToken = data?.data;
  const prefixImg = "https://photostad-api.istad.co/files/";

  const logouts = async () => {
    dispatch(logout());
    await signOut({ redirect: false });
    window.open("/", "_self");
  };
  const handleSidebarOpen = () => {
    setIsOpen(!isOpen);
  };

  // handle click anywhere beside sidebar area set isOpen to false
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        document.getElementById("default-sidebar") &&
        !document.getElementById("default-sidebar").contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // check on user if user is not found return forbidden and will be redirect to home page in 5 seconds
  // check if have session but no token return unauthorized and will be redirect to home page in 5 seconds
  if (session && !user) {
    signOut({ redirect: false });
  }

  if (isLoading) return <Skeleton />;
  setTimeout(() => {
    if (!user) return <Unauthorized />;
  }, 3000);

  if (role === "SUBSCRIBER" || role === undefined) {
    return <Forbidden />;
  } else {
    return (
      <div>
        {/* side bar */}
        <aside
          id="default-sidebar"
          className={`fixed   top-0 left-0 z-50  bg-black dark:bg-secondary  h-screen transition-transform ${
            isOpen ? "" : "-translate-x-full"
          } sm:translate-x-0`}
          aria-label="Sidebar"
        >
          <div className="h-full w-full ">
            <AsideBar />
          </div>
        </aside>
        <ToastContainer />

        {/* end of side bar */}
        {/* nav bar */}

        <nav className="sticky  top-0 z-40 ">
          <div className="flex bg-white dark:bg-secondary items-center justify-between h-16 px-6 py-10   border-gray-200  ">
            <div className="flex items-center">
              <button
                className="text-gray-500 rounded-md dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 lg:hidden"
                onClick={handleSidebarOpen}
              >
                <span className="sr-only">Open sidebar</span>
                <CgMenuLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="flex items-center space-x-3">
              {/* <BtnThemeToggle /> */}
              <DarkModeSwitcher />

              <div class="dropdown">
                <label tabindex="0">
                  <div className="flex">
                    <img
                      className="avatar-ring-primary cursor-pointer h-10 w-10 rounded-full "
                      src={
                        prefixImg + userToken?.avatar?.name ||
                        "/assets/icons/profile-2user.svg"
                      }
                      alt="element icon"
                    />
                    <h1 className="dark:text-white p-1.5">
                      {userToken ? userToken?.username : "not found"}
                    </h1>
                  </div>
                </label>
                <div class="dropdown-menu bg-white dark:bg-primary dark:text-white text-black dropdown-menu-bottom-left">
                  <Link
                    className="dropdown-item text-sm rounded-main hover:text-white hover:bg-secondary"
                    href={"/profile/setting"}
                    tabindex="-1"
                  >
                    {userToken?.username}
                  </Link>
                  <Link
                    className="dropdown-item mb-2 text-sm rounded-main hover:text-white hover:bg-secondary"
                    href={"/admin/dashboard/setting/profile"}
                    tabindex="-1"
                  >
                    Account settings
                  </Link>
                  {/* <button
                    className="py-2 bg-red mt-2 text-white rounded-main hover:bg-red dark:text-white"
                    onClick={() => {
                      logouts();
                    }}
                  >
                    Log out
                  </button> */}
                  <Label onClick={() => logouts()}>
                    <CustomBtn btn={" w-full"} title={"Log Out"} />
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* children display */}

        <div className="ml-[288px] max-sm:ml-0  dark:bg-primary">
          {children}
        </div>
      </div>
    );
  }
}
