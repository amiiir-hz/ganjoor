"use client";

import ShareButton from "@/components/share/Button/Button";
import ShareInput from "@/components/share/Input/Input";
import { useAuth } from "@/contexts/AuthContext";
import { useFetch } from "@/hooks/useFetch";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Credentials {
  username: string;
  password: string;
  clientAppName: string;
  language: string;
}

const LoginForm: React.FC = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
    clientAppName: "string",
    language: "ir-fa",
  });
  const [loginResponse, setLoginResponse] = useState<any>(null);

  const { loginDispatch, isLogin } = useAuth();

  const { usePost } = useFetch();

  const { data, isLoading, isError, mutate } = usePost("users/login");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(credentials);
  };

  useEffect(() => {
    if (data) {
      setLoginResponse(data.token);
      loginDispatch({ type: "LOGIN", id: data.user.id });
      router.push("/");
    }
  }, [data]);
  const router = useRouter();

  return (
    <form
      onSubmit={handleSubmit}
      className=" h-screen flex flex-col justify-center items-center text-4xl gap-y-2 w-full"
    >
      <div className="flex gap-x-1 justify-between items-center ">
        <ShareInput
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
          className="rounded-lg text-center"
          placeholder="یوزرنیم"
        />
      </div>
      <div className="flex gap-x-1 justify-between items-center">
        <ShareInput
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          className="rounded-lg text-center"
          placeholder="رمز عبور"
        />
      </div>
      <ShareButton
        text={isLoading ? "صبر کنید..." : "ورود"}
        type="submit"
        disabled={isLoading}
        className="mt-4 w-1/12"
      />
    </form>
  );
};

export default LoginForm;
