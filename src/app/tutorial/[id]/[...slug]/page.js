import { BASE_URL } from "@/lib/baseUrl";
import moment from "moment";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { CiCalendarDate } from "react-icons/ci";
import secureLocalStorage from "react-secure-storage";
import MiniHeader from "./components/MiniHeader";
import Ads from "./components/Ads";
import OtherTutorial from "./components/OtherTutorial";

export async function GetTuttorialByUUID(id) {
  const res = await fetch(`${BASE_URL}/tutorials/front/${id}`, {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
}

export async function generateMetadata({ params }) {
  const id = params.id;
  const tutorial = await GetTuttorialByUUID(id);
  const title = tutorial?.data?.name;
  const description = tutorial?.data?.description;
  const image = tutorial?.data?.thumbnail;
  return {
    title,
    description,
    image,
    openGraph: {
      title,
      description,
      image,
      type: "article",
      url: `${BASE_URL}/tutorials/front/${id}`,
    },
  };
}

const Page = async ({ params }) => {
  const { id } = params;
  const token = secureLocalStorage.getItem("token");
  const data = await GetTuttorialByUUID(id);

  const title = data?.data?.name;
  const view = data?.data?.viewCount;
  const createdAt = data?.data?.createdAt;
  const createdBy = data?.data?.createdBy;
  const content = data?.data?.htmlContent;
  console.log(content, "content");
  return (
    <div className="xl:w-[1290px] w-full p-5 mx-auto">
      <h1 id="html-content" className="text-3xl mb-6 font-semibold">
        {title}
      </h1>
      <MiniHeader
        createdAt={createdAt}
        createdBy={createdBy}
        view={view}
        uuid={id}
      />

      <div className="flex gap-10 max-sm:flex-wrap">
        <div
          className="w-full md:w-9/12"
          id="html-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="md:w-3/12 w-full top-20">
          <div className="sticky top-20">
            <Ads />
            <OtherTutorial id={id}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
