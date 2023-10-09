import React, { useState, useEffect } from "react";
import ShareButton from "@/components/share/Button/Button";
import ShareInput from "@/components/share/Input/Input";
import { useFetch } from "@/hooks/useFetch";

interface Credentials {
  verify: string;
}

const SecondStep = (props: {
  setStatus: any;
  setFinalize: any;
  finalize: any;
}) => {
  const { useGet, usePost } = useFetch();
  const [credentials, setCredentials] = useState<Credentials>({
    verify: "",
  });

  const { data, isLoading, refetch } = useGet(
    `users/verify?type=0&secret=${credentials.verify}`,
    false
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    refetch();
  };

  useEffect(() => {
    if (data === props.finalize.email) {
      props.setStatus(2);
      props.setFinalize({ ...props.finalize, secret: credentials.verify });
    }
  }, [data]);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className=" h-screen flex flex-col justify-center items-center text-4xl gap-y-2 w-full"
      >
        <div className="flex gap-x-1 justify-between items-center ">
          <ShareInput
            value={credentials.verify}
            onChange={(e) =>
              setCredentials({ ...credentials, verify: e.target.value })
            }
            className="rounded-lg text-center"
            placeholder="ایمیل"
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

export default SecondStep;
