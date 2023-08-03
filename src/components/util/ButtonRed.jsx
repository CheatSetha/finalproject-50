export default function CustomBtn({title, bg, isLoading , btn}) {
    const label = title || "Save Changes";
    const background = bg || "bg-red";
    const button = btn || "btn";
  
  
  return (
    <button
      type="submit"
      className={`text-[17px]  h-12  ${background} ${isLoading ? "btn-loading": " "} rounded-main text-white p-2.5 px-4 ${button} font-light`}
    >
      {label}
    </button>
  );
}
