import React, { useState, useEffect } from "react";
import ShareButton from "@/components/share/Button/Button";
import ShareInput from "@/components/share/Input/Input";
import { useFetch } from "@/hooks/useFetch";
import { useRouter } from "next/navigation";

interface Credentials {
  firstName: string;
  password: string;
  surename: string;
  email: string;
  secret: string;
}

const ThirdStep = (props: {
  setStatus: any;
  setFinalize: any;
  finalize: any;
}) => {
  const { useGet, usePost } = useFetch();

  const { data, isLoading, isError, mutate } = usePost("users/finalizesignup");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(credentials);
  };

  const router = useRouter();

  useEffect(() => {
    if (data == true) {
      router.push("/login");
    }
  }, [data]);

  const [credentials, setCredentials] = useState<Credentials>({
    firstName: "",
    surename: "",
    password: "",
    email: props.finalize.email,
    secret: props.finalize.secret,
  });
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className=" h-screen flex flex-col justify-center items-center text-4xl gap-y-2 w-full"
      >
        <div className="flex gap-x-1 justify-between items-center ">
          <ShareInput
            value={credentials.firstName}
            onChange={(e) =>
              setCredentials({ ...credentials, firstName: e.target.value })
            }
            className="rounded-lg text-center"
            placeholder="نام"
          />
        </div>
        <div className="flex gap-x-1 justify-between items-center">
          <ShareInput
            value={credentials.surename}
            onChange={(e) =>
              setCredentials({ ...credentials, surename: e.target.value })
            }
            className="rounded-lg text-center"
            placeholder="نام خانوادگی"
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
    </div>
  );
};

export default ThirdStep;
