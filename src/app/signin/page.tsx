"use client";

import FirstStep from "@/components/layout/signin/FirstStep";
import SecondStep from "@/components/layout/signin/SecondStep";
import ThirdStep from "@/components/layout/signin/ThirdStep";

import React, { useState, useEffect } from "react";

const SignInForm = () => {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState(0);
  const [finalize, setFinalize] = useState({
    email: "",
    secret: "",
    password: "",
    firstName: "",
    sureName: "",
  });

  return status === 0 ? (
    <FirstStep
      setStatus={setStatus}
      setFinalize={setFinalize}
      finalize={finalize}
    />
  ) : status === 1 ? (
    <SecondStep
      setStatus={setStatus}
      setFinalize={setFinalize}
      finalize={finalize}
    />
  ) : status === 2 ? (
    <ThirdStep
      setStatus={setStatus}
      setFinalize={setFinalize}
      finalize={finalize}
    />
  ) : (
    <></>
  );
};

export default SignInForm;
