import Link from "next/link";

export default function CardOther({ thumbnail, title ,uuid,slug}) {
  const img = thumbnail || "https://source.unsplash.com/random/300x200";
  return (
    <Link href={`/tutorial/${uuid}/${slug}`}> 
    <div className="card card-image-cover max-sm:w-full grid grid-cols-2 mb-4 bg-white dark:bg-black">
      <img src={img} alt="thumbnail" />
      <p className="text-sm p-2 font-light line-clamp-3 dark:text-white text-black ">{title}</p>
    </div>
    </Link>
  );
}
