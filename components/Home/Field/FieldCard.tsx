import Image from "next/image";
import photo from "@/public/banner/banner1.png";
import { Badge } from "@/components/ui/badge";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

export default function FieldCard() {
  return (
    <Link href={"/"}>
      <div className="border overflow-hidden rounded-xl">
        <Image src={photo} alt="foto lapangan" />
      </div>
      <div className="mt-2 text-lg">Lorem ipsum dolor sit amet.</div>
      <Badge className="bg-orange-200 text-orange-700 mt-4">Badminton</Badge>
      <div className="mt-2 flex items-center justify-between">
        <h3 className="font-semibold text-xl">Rp. 120.000</h3>
      </div>
      <div className="mt-2 flex items-center text-gray-500 font-semibold">
        {Array.from({ length: 5 }, (_, index) => (
          <FaStar key={index} className="size-4 text-yellow-400" />
        ))}
      </div>
    </Link>
  );
}
