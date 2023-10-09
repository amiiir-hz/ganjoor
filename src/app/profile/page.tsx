"use client";

import { useFetch } from "@/hooks/useFetch";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import ShareButton from "@/components/share/Button/Button";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

const Profile: React.FC = () => {
  const { useGet } = useFetch();

  const { data, isLoading, isError } = useGet(
    `ganjoor/user/profile/${Cookies.get("token")}`
  );

  const { loginDispatch, isLogin } = useAuth();
  const handleLogOut = () => {
    loginDispatch({ type: "LOGOUT" });
    router.push("/");
  };
  const router = useRouter();

  return (
    <div className=" h-screen flex flex-col justify-center items-center text-4xl gap-y-2 w-full">
      <span> نام: {data?.nickName}</span>
      <span> بیوگرافی: {data?.bio}</span>
      <span> وبسایت: {data?.website}</span>
      <ShareButton text="خروج" className="mt-8" onClick={handleLogOut} />
    </div>
  );
};

export default Profile;
