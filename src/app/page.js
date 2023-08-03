import Link from "next/link";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SAMPLE_FAQ } from "@/components/util/SampleFaq";
import RequestForm from "@/components/home/RequestTutorial";
import ServiceCard from "@/components/home/ServiceCard";
import OurService from "@/components/home/OurService";
import Banner from "@/components/home/Banner";
const imageBanner = "/assets/image/home/home-banner.png";
const logo = "/assets/image/mainlogo-blackv2.png";

//color bg
const darkBACKGROUND = " dark:bg-slate-950 ";
const lightBackground = " bg-white ";

//padding section
const paddingSection = " pb-20 ";

export const metadata = {
  title: "Home - PhotoSTAD ",
  description:
    "PhotoSTAD is one of the final project that was build by a group of ISTAD student. PhotoSTAD is a cutting-edge print shop that offers a state-of-the-art watermark maker,enabling photographers to protect their valuable images from unauthorized use.Additionally PhotoSTAD provides a powerful certificate generator,allowing professionals to create authentic certificates for their artwork and  establish credibility in the industry",
  images: { logo },
  openGraph: {
    title: "About us - PhotoSTAD ",
    description:
      "PhotoSTAD is one of the final project that was build by a group of ISTAD student. PhotoSTAD is a cutting-edge print shop that offers a state-of-the-art watermark maker,enabling photographers to protect their valuable images from unauthorized use.Additionally PhotoSTAD provides a powerful certificate generator,allowing professionals to create authentic certificates for their artwork and  establish credibility in the industry",
    url: "https://photostad.istad.co/",
    images: { logo },
  },
};
export default function Home() {
  // set credentials to google user

  return (
    <main
      className={
        darkBACKGROUND + lightBackground + "flex flex-col items-center"
      }
    >
      <Banner />
      <OurService />
      <ServiceCard />

      <section
        className={
          paddingSection + lightBackground + darkBACKGROUND + "xl:w-[1290px] "
        }
      >
        <h1 className="text-center pb-14 max-sm:text-[24px] text-5xl font-bold  dark:text-white text-slate-950">
          FAQ
        </h1>

        <nav className="menu  rounded-main w-[90%] md:w-full mx-auto">
          <section className="menu-section rounded-main">
            <ul className="menu-items">
              {SAMPLE_FAQ.map((q, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    id={`menu-${index + 2}`}
                    className="menu-toggle"
                  />
                  <label
                    className="menu-item   py-4 rounded-main hover:bg-gray-300 dark:bg-slate-900"
                    htmlFor={`menu-${index + 2}`}
                  >
                    <span className="menu-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        className="w-4 h-4 stroke-content3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </span>
                    <span className="text-black md:text-md dark:text-white ">
                      {q.question}
                    </span>
                  </label>

                  <div className="menu-item-collapse">
                    <div className="min-h-0">
                      <label className="menu-item md:text-md text-black dark:text-white hover:bg-gray-300 ms-6  py-4 rounded-main dark:hover:bg-slate-900">
                        {q.answer}
                      </label>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </nav>
      </section>

      
    </main>
  );
}
