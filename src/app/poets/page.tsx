"use client";
import Image from "next/image";
import { useQuery } from "react-query";

export default function Poets() {
  const { isLoading, error, data } = useQuery("myData", () =>
    fetch("https://api.ganjoor.net/api/ganjoor/poets").then((res) => res.json())
  );

  // console.log(data)
  return (
    <main className="flex min-h-screen p-24">
      {data?.map((d: { name: string }) => d.name)}
    </main>
  );
}
