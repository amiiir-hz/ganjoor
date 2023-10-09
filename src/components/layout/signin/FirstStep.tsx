import React, { useState, useEffect } from "react";
import ShareButton from "@/components/share/Button/Button";
import ShareInput from "@/components/share/Input/Input";
import { useFetch } from "@/hooks/useFetch";

interface Credentials {
  email: string;
  captchaImageId: string;
  clientAppName: string;
  language: string;
  captchaValue: string;
}

const FirstStep = (props: {
  setStatus: any;
  setFinalize: any;
  finalize: any;
}) => {
  const { useGet, usePost } = useFetch();

  const { data, isLoading, isError, mutate } = usePost("users/signup");

  const { data: captchaId, isLoading: captchaIdLoading } =
    useGet("users/captchaimage");
  const {
    data: capthca,
    isLoading: captchaLoading,
    refetch: captchaRefetch,
  } = useGet(`rimages/${captchaId}.${captchaId}`, false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(credentials);
  };

  useEffect(() => {
    if (captchaId) {
      captchaRefetch();
      setCredentials({ ...credentials, captchaImageId: captchaId });
    }
  }, [captchaId]);

  useEffect(() => {
    if (data === "verify") {
      props.setStatus(1);
      props.setFinalize({ ...props.finalize, email: credentials.email });
    }
  }, [data]);

  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    captchaImageId: "",
    clientAppName: "string",
    language: "ir-fa",
    captchaValue: "",
  });
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className=" h-screen flex flex-col justify-center items-center text-4xl gap-y-2 w-full"
      >
        <div className="flex gap-x-1 justify-between items-center ">
          <ShareInput
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            className="rounded-lg text-center"
            placeholder="ایمیل"
          />
        </div>
        <div className="flex gap-x-1 justify-between items-center">
          <ShareInput
            value={credentials.captchaValue}
            onChange={(e) =>
              setCredentials({ ...credentials, captchaValue: e.target.value })
            }
            className="rounded-lg text-center"
            placeholder="کد"
          />
        </div>

        <img
          src={`https://api.ganjoor.net/api/rimages/${captchaId}.${captchaId}`}
          alt="Base64 Image"
        />

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

export default FirstStep;
