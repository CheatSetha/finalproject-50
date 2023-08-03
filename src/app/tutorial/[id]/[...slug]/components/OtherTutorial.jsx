"use client";
import { useGetTutorialQuery } from "@/store/features/tutorial/tutorialApiSlice";
import { useState } from "react";
import CardOther from "./CardOther";

export default function OtherTutorial({ id }) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(2);
  const [previous, setPrevious] = useState(false);
  const [next, setNext] = useState(true);
  const {
    data: tutorials,
    isSuccess,
    isLoading,
    isError,
  } = useGetTutorialQuery({ page: page, perPage: limit, name: "" });

  return (
    <div>
      <h1 className="text-2xl font-semibold my-5">Other Tutorials</h1>
      <div className=" ">
        {tutorials &&  tutorials?.data?.list
          .filter((tutorial) => tutorial.uuid !== id)
          ?.map((tutorial, index) => (
            <>
              <CardOther
                slug={tutorial?.slug}
                uuid={tutorial?.uuid}
                title={tutorial?.name}
                thumbnail={`https://photostad-api.istad.co/files/${tutorial?.thumbnail?.name}`}
              />
            </>
          ))}
      </div>
    </div>
  );
}
