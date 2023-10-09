"use client";

import ShareTable from "@/components/share/ShareTable/ShareTable";
import { useFetch } from "@/hooks/useFetch";

export default function Poets() {
  const { useGet } = useFetch();
  const { data, isLoading, isError } = useGet(`ganjoor/poets`);

  if (isLoading) {
    return (
      <span className="text-5xl text-center mt-12 inline-block w-full">
        لطفا کمی صبر کنید...
      </span>
    );
  }
  return (
    <main className="flex min-h-screen p-24 justify-center">
      <ShareTable data={data ? data : undefined} columns={columns} />
    </main>
  );
}

const columns = [
  {
    header: "آیدی",
    accessorKey: "id",
  },
  {
    header: "نام",
    accessorKey: "name",
  },
  {
    header: "لقب",
    accessorKey: "nickname",
  },
  {
    header: "تاریخ تولد",
    accessorKey: "birthYearInLHijri",
  },
  {
    header: "تاریخ مرگ",
    accessorKey: "deathYearInLHijri",
  },
  {
    header: "محل تولد",
    accessorKey: "birthPlace",
  },
  {
    header: "محل مرگ",
    accessorKey: "deathPlace",
  },
];
