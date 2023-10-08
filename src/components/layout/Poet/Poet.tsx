"use client";
import React from "react";
import { useQuery } from "react-query";
import Image from "next/image";

interface ModalData {
  poet: {
    name: string;
    imageUrl: string;
    description: string;
  };
}

const Poet = (props: { modalData: ModalData }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="border border-accent-100 p-12 rounded-lg bg-bg-200 w-full flex flex-col justify-center items-center gap-y-4">
        <span className="text-center text-4xl font-bold w-full inline-block text-text-100">
          {props.modalData?.poet?.name}
        </span>
        {props.modalData?.poet?.imageUrl && (
          <Image
            src={`https://api.ganjoor.net${props.modalData?.poet?.imageUrl}`}
            alt="image of the poet"
            width={100}
            height={100}
            className=""
          />
        )}
        <p className="text-xl text-text-200">
          {props.modalData?.poet?.description}
        </p>
      </div>
    </div>
  );
};

export default Poet;
