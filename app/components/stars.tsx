import { FaStar } from "react-icons/fa";

export default function StarRating({ rating }:any) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          size={22}
          className={i < rating ? "text-yellow-400" : "text-gray-400"}
        />
      ))}
    </div>
  );
}
