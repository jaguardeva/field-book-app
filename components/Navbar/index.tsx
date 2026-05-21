import { auth, signIn } from "@/auth";
import Link from "next/link";
import { AvatarDropdown } from "./AvatarDropdown";
import { Button } from "../ui/button";
import { FaGoogle } from "react-icons/fa";
import Image from "next/image";
import Logo from "@/public/logo/logo.png";
import NavMenu from "./NavMenu";

export default async function Navbar() {
  const session = await auth();

  return (
    <div className="flex items-center w-full shadow-md sticky top-0 z-50 bg-white">
      <div className="w-full max-w-[1240px] justify-between px-4 md:px-0 mx-auto h-[70px] flex items-center">
        <div>
          <Link href={"/"} className="text-2xl font-bold">
            <div className="flex items-center overflow-hidden max-h-[70px]">
              <Image
                width={100}
                src={Logo}
                alt="sewa arena icon"
                className="mt-2"
              />
            </div>
          </Link>
        </div>
        <NavMenu />
        <div className="flex items-center">
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
