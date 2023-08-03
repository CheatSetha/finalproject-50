"use client";
import { BASE_URL } from "@/lib/baseUrl";
import { useGetUserByIdQuery } from "@/store/features/user/userApiSlice";
import moment from "moment";
import { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { CiCalendarDate } from "react-icons/ci";
import { useSelector } from "react-redux";

export default function MiniHeader({ createdBy, view, createdAt, uuid }) {

  const state = useSelector((state) => state);
  const token = state?.auth?.accessToken;
  const [viewCount, setViewCount] = useState(view);
  const [user, setUser] = useState(null);


  const getUserById = async (id) => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${token}`
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`https://photostad-api.istad.co/api/v1/users/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log( 'result');
        setUser(result?.data);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getUserById(createdBy);
    const updateTutorialView = async (uuid) => {
      var requestOptions = {
        method: 'PUT',
        redirect: 'follow'
      };
      const res = await fetch(`${BASE_URL}/tutorials/update-view-count/${uuid}`,
        requestOptions);
      const data = await res.json();
      setViewCount(data.data);
    }
    updateTutorialView(uuid);
  }, []);

  return (
    <ul className="flex gap-5 text-sm font-extralight mb-4">
      <li>
        <AiOutlineEye className="inline" /> {viewCount}
      </li>
      <li>
        {" "}
        <CiCalendarDate className="inline" />{" "}
        {moment(createdAt).format("DD/MM/YYYY")}
      </li>
      <li>
        {" "}
        <BiUser className="inline" /> Admin
      </li>
    </ul>
  );
}

