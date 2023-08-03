'use client'
import { useRouter } from "next/navigation";

export default function ButtonBlack({title, bg}) {
  const label = title || "Cancel";
  const background = bg || "bg-black";
  const router = useRouter

  const backHome =()=>{
    router.push("/")
  }

return (
  <button
  onClick={backHome}
    type="submit"
    className={`text-[17px]  h-10 mt-6 ${background} rounded-main text-white p-2.5 px-4 btn font-light`}
  >
    {label}
  </button>
);
}
