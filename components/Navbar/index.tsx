import { auth, signIn } from "@/auth";
import MENU_LIST from "@/utils/menu-list";
import Link from "next/link";
import { AvatarDropdown } from "./AvatarDropdown";
import { Button, buttonVariants } from "../ui/button";
import { FaGoogle } from "react-icons/fa";

export default async function Navbar() {
  const session = await auth();

  return (
    <div className="flex items-center w-full">
      <div className="w-full max-w-[1240px] justify-between px-4 md:px-0 mx-auto h-[70px] flex items-center">
        <div>
          <Link href={"/"} className="text-2xl font-bold">
            The Arena
          </Link>
        </div>
        <nav className="flex items-center gap-4">
          {MENU_LIST.map((item, index) => {
            return (
              <Link
                href={item.href}
                key={index}
                className="p-4 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div>
          {session ? (
            <AvatarDropdown
              imageUrl={session?.user?.image || ""}
              name={session?.user?.name || ""}
            />
          ) : (
            <div>
              <form
                action={async () => {
                  "use server";
                  await signIn("google", {
                    redirectTo: "/",
                  });
                }}
              >
                <Button type="submit" size={"lg"} variant={"outline"}>
                  <FaGoogle /> Masuk dengan Google
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
