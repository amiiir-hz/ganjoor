"use client";

import ShareButton from "@/components/share/Button/Button";
import ShareInput from "@/components/share/Input/Input";
import React, { useState } from "react";
import { useMutation } from "react-query";

interface Credentials {
  username: string;
  password: string;
  clientAppName: string;
  language: string;
}

const loginUser = async (credentials: Credentials) => {
  const response = await fetch("https://api.ganjoor.net/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json();
};

const LoginForm: React.FC = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
    clientAppName: "string",
    language: "ir-fa",
  });
  const [loginResponse, setLoginResponse] = useState<any>(null);

  const { mutate, isLoading } = useMutation(loginUser, {
    onSettled: (data) => {
      setLoginResponse(data.token);
      console.log(data);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(credentials);
  };

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
