"use client";
import { useReactTable } from "@tanstack/react-table";
import Image from "next/image";
import { useQuery } from "react-query";

export default function Poets() {
  const { isLoading, error, data } = useQuery("myData", () =>
    fetch("https://api.ganjoor.net/api/ganjoor/poets").then((res) => res.json())
  );

  const table = useReactTable({
    data,
    columns: COLOUMN,
  });

  // console.log(data)
  return (
    <main className="flex min-h-screen p-24">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr>
              {headerGroup.headers.map((header) => (
                <th>{header.renderHeader()}</th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr>
              {row.getVisibleCells().map((cell) => (
                <td>{cell.renderCell()}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

const COLOUMN = [
  {
    Header: "نام",
    accessor: "name",
    id: "name",
  },
  {
    Header: "لقب",
    accessor: "nickname",
    id: "nickname",
  },
  {
    Header: "تولد",
    accessor: "birthYearInLHijri",
    id: "birthYearInLHijri",
  },
  {
    Header: "وفات",
    accessor: "deathYearInLHijri",
    id: "deathYearInLHijri",
  },
  {
    Header: "محل تولد",
    accessor: "birthPlace",
    id: "birthPlace",
  },
  {
    Header: "محل مرگ",
    accessor: "deathPlace",
    id: "deathPlace",
  },
  {
    Header: "تصویر",
    accessor: "imageUrl",
    id: "imageUrl",
  },
];
