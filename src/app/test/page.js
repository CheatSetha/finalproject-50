"use client";

import { useGetUserQuery } from "@/store/features/user/userApiSlice";
import { data } from "autoprefixer";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Page() {
  const { data: session } = useSession();
  const { data:user } = useGetUserQuery();
  const [name, setName] = useState();
  const [profileImg, setProfileImg] = useState();
  // console.log(data,'user data ');
  useEffect(() => {
    if (user) {
      if (user?.data?.username === "NO_NAME" || user?.data?.username === "NO_NAME_NO_NAME") {
        setName(session?.user?.name);
      } else {
        setName(user?.data?.username);
      }

      if(user?.data?.avatarUrl === 'https://photostad-api.istad.co/files/photo-user.jpg'){
        setProfileImg(session?.user?.image);
      }else {
        setProfileImg(user?.data?.avatarUrl);
      }
    }
  }, [session, user]);
  // https://photostad-api.istad.co/files/photo-user.jpg

  return (
    <div>
      <h1 className="text-center text-5xl text-blue-700">{name}</h1>

      <h1 className="text-center text-5xl text-blue-700">
        {session && session.user.name}
      </h1>
      <h1 className="text-center text-5xl text-blue-700">
        {user && user?.data?.username}
      </h1>
      {session && session.user.image}
      <img src={profileImg} alt="profioe"/>
      <img src={session?.user?.image} alt="profioe"/>
      <img src={user?.data?.avatarUrl} alt="profioe"/>
    </div>
  );
}
