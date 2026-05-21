import Image from "next/image";
import photo from "@/public/banner/banner1.png";
import { Badge } from "@/components/ui/badge";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

export default function FieldCard() {
  return (
    <Link
      href={"/"}
      className="overflow-hidden transition-all ease-in-out bg-white shadow-sm group hover:shadow-xl rounded-xl"
    >
      <div className="overflow-hidden h-[150px]">
        <Image
          src={photo}
          alt="foto lapangan"
          className="transition-all duration-300 ease-in-out group-hover:scale-120"
        />
      </div>
      <div className="p-4">
        <div className="text-lg font-semibold">Lorem ipsum dolor sit amet.</div>
        <Badge className="mt-2 text-orange-700 bg-orange-200">Badminton</Badge>
        <div className="flex items-center justify-between mt-4">
          <h3 className="text-xl font-semibold">Rp. 120.000</h3>
        </div>
        <div className="flex items-center mt-4 font-semibold text-gray-500">
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar key={index} className="text-yellow-400 size-4" />
          ))}
        </div>
      </div>
    </Link>
  );
}
