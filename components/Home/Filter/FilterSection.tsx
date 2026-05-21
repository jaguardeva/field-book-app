import { SearchIcon } from "lucide-react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

const Categories: {
  name: string;
}[] = [
  {
    name: "Badminton",
  },
  {
    name: "Futsal",
  },
  {
    name: "Padel",
  },
  {
    name: "Tenis",
  },
];

export default function FilterSection() {
  return (
    <div className="w-full mt-6">
      <div className="w-full max-w-[1240px] mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {Categories.map((item, index) => {
              return (
                <Button key={index} variant={"outline"}>
                  {item.name}
                </Button>
              );
            })}
          </div>
          <form action="" className="w-full max-w-md">
            <div className="relative">
              <Input type="text" placeholder="Cari" className="pr-7" />
              <SearchIcon className="size-4 absolute right-3 top-1/2 -translate-y-1/2" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
