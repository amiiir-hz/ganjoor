"use client";
import Link from "next/link";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useFetch } from "@/hooks/useFetch";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { useGet } = useFetch();
  const { data, isLoading, isError } = useGet(
    `ganjoor/user/profile/${Cookies.get("token")}`
  );

  useEffect(() => {
    setIsLoggedIn(Cookies.get("token"));
  }, [Cookies.get("token")]);

  return (
    <nav className="bg-bg-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"} className="text-white text-5xl font-bold">
          Logo
        </Link>

        <div className="space-x-4">
          {isLoggedIn ? (
            <>
              <Link
                href={"/profile"}
                className="text-white text-2xl border border-white rounded-md py-2 px-4 hover:bg-bg-100 hover:text-text-100 transition duration-300 ease-in-out cursor-pointer"
                suppressHydrationWarning
              >
                {data?.nickName ? data?.nickName : "loading..."}
              </Link>
            </>
          ) : (
            <>
              <Link
                href={"/login"}
                className="text-white bg-transparent border border-white rounded-md py-2 px-4 hover:bg-bg-100 hover:text-text-100 transition duration-300 ease-in-out text-3xl ml-2"
                suppressHydrationWarning
              >
                ورود
              </Link>
              <Link
                href={"/signin"}
                className="text-white bg-transparent border border-white rounded-md py-2 px-4 hover:bg-bg-100 hover:text-text-100 transition duration-300 ease-in-out text-3xl"
                suppressHydrationWarning
              >
                ثبت نام
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
