import Link from "next/link";
import {LuLayoutDashboard} from "react-icons/lu";
import {RiGroupLine} from "react-icons/ri";
import {VscGraph} from "react-icons/vsc";
import {FiFilm} from "react-icons/fi";
import {IoSettingsOutline} from "react-icons/io5";
import {BiUserCircle} from "react-icons/bi";
import {SlLock} from "react-icons/sl";

export function SideBar({open, onClose}) {
    return (
        <div
            className={`fixed inset-0 z-40 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center ${
                open ? "translate-x-0" : "-translate-x-96"
            } `}
        >
          <span
              className="absolute top-4 right-4 block cursor-pointer xl:hidden"
              onClick={onClose}
          >
       X
      </span>

            <div className={`mx-[56px] mt-[50px] flex items-center`}>
                <div
                    className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
                    boong <span class="font-medium">setha</span>
                </div>
            </div>
            <div class="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30"/>
            {/* Nav item */}

            <ul className="mb-auto pt-1">
                <Link href="#">
                    <li className='mb-[34px] hover:bg-gray-500  px-2 rounded-[16px] hover:text-blue-300 mr-2'>
                        <span className='inline-block mr-6 text-[26px]'><LuLayoutDashboard/></span>
                        Dashboard
                    </li>
                </Link>
                <Link href="#">
                    <li className='mb-[34px] hover:bg-gray-500  px-2 rounded-[16px] hover:text-blue-300 mr-2'>
                        <span className='inline-block mr-6 text-[26px]'><RiGroupLine/></span>
                        User management
                    </li>
                </Link>
                <Link href="#">
                    <li className='mb-[34px] hover:bg-gray-500  px-2 rounded-[16px] hover:text-blue-300 mr-2 '>
                        <span className='inline-block mr-6 text-[26px]'><VscGraph/></span>
                        Reporting and statistic
                    </li>
                </Link>
                <Link href="#">
                    <li className='mb-[34px] hover:bg-gray-500  px-2 rounded-[16px] hover:text-blue-300 mr-2'>
                        <span className='inline-block mr-6 text-[26px]'><FiFilm/></span>
                        Toturial Management
                    </li>
                </Link>
                <a href="#">
                    <details className="collapse">
                        <summary className="hover:bg-gray-500 py-3 px-1 rounded-xl hover:text-blue-300 mr-2"><span
                            className='inline-block mr-6 text-[26px] '><IoSettingsOutline/></span>Setting
                        </summary>
                        <div className="collapse-content mt-[25px] ml-[25px]">
                            <li className='hover:bg-gray-500 py-3 px-1 rounded-xl hover:text-blue-300 mr-2 '><span
                                className='inline-block mr-[18px] text-[25px]'><BiUserCircle/></span> profile
                            </li>
                            <li className='hover:bg-gray-500 py-3 px-1 rounded-xl hover:text-blue-300 mr-2'><span
                                className='inline-block mr-[18px] text-[25px]'><SlLock/></span>change password
                            </li>
                        </div>
                    </details>
                </a>
            </ul>


        </div>
    )
}