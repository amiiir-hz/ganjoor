"use client";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState, useEffect, useMemo } from "react";
import ShareInput from "../Input/Input";
import { useRouter } from "next/navigation";
import ShareButton from "../Button/Button";
import ShareModal from "../Modal/Modal";
import Poet from "@/components/layout/Poet/Poet";
import { useQuery } from "react-query";
import { useFetch } from "@/hooks/useFetch";

export default function ShareTable(props: {
  data: [];
  columns: { header: string; accessorKey: string }[];
}) {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [modal, setModal] = useState(false);
  const [modalId, setModalId] = useState<number>();
  const router = useRouter();

  // const {
  //   isLoading,
  //   error,
  //   data: modalData,
  //   refetch,
  // } = useQuery(
  //   "myData",
  //   () =>
  //     fetch(`https://api.ganjoor.net/api/ganjoor/poet/${modalId}`).then((res) =>
  //       res.json()
  //     ),
  //   {
  //     enabled: false,
  //   }
  // );

  const { useGet } = useFetch();
  const {
    data: modalData,
    isLoading,
    isError,
    refetch,
  } = useGet(`ganjoor/poet/${modalId}`, false);

  const data = [
    {
      id: 148,
      name: "آذر بیگدلی",
      description: null,
      fullUrl: "/azar",
      rootCatId: 2738,
      nickname: "آذر بیگدلی",
      published: true,
      imageUrl: "/api/ganjoor/poet/image/azar.gif",
      birthYearInLHijri: 1134,
      validBirthDate: true,
      deathYearInLHijri: 1195,
      validDeathDate: true,
      pinOrder: 0,
      birthPlace: "اصفهان",
      birthPlaceLatitude: 32.6539,
      birthPlaceLongitude: 51.666,
      deathPlace: "قم",
      deathPlaceLatitude: 34.6416,
      deathPlaceLongitude: 50.8746,
    },
  ];

  const handleSorter = (e: any) => {
    setSorting(e);
  };
  const handleModal = (i: number) => {
    setModal(true);
    setModalId(i);
  };
  const handleModalClose = () => {
    setModal(false);
  };

  useEffect(() => {
    modalId && refetch();
  }, [modalId]);

  const memoData = useMemo(() => props?.data, []);

  const table = useReactTable({
    data: memoData,
    columns: props.columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: handleSorter,
    onGlobalFilterChange: setFiltering,
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFiltering(e.target.value);
  };

  type SortDirection = "asc" | "desc" | false;

  return (
    <div className="self-center text-2xl text-text-200">
      <ShareInput
        value={filtering}
        onChange={handleSearch}
        className="w-full rounded-t-md"
        placeholder="جستجو"
      />
      {table && (
        <table className="border-collapse border border-text-200 !rounded-3xl">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="border border-text-200 !rounded-3xl p-2"
                  >
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {/* {
                          { asc: "🔼", desc: "🔽" }[
                            header.column.getIsSorted() ?? null
                          ]
                        } */}
                        {((header.column.getIsSorted() as SortDirection) ??
                          null) &&
                        header.column.getIsSorted() === "asc" ? (
                          <span className="mx-1">⇧</span>
                        ) : header.column.getIsSorted() === "desc" ? (
                          <span className="mx-1">⇩</span>
                        ) : (
                          ""
                        )}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          {
            <tbody>
              {table.getRowModel().rows.map((row: any) => (
                <tr
                  key={row.id}
                  className="cursor-pointer"
                  onClick={() => handleModal(row?.original.id)}
                >
                  {row.getVisibleCells().map((cell: any) => (
                    <td
                      key={cell.id}
                      className="border border-text-200 !rounded-3xl p-2"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          }
        </table>
      )}
      <div className="flex flex-row justify-around gap-x-2 mt-3">
        <ShareButton
          onClick={() => table.setPageIndex(0)}
          text="صفحه اول"
          className=""
        />
        <ShareButton
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
          text="صفحه قبل"
        />
        <ShareButton
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
          text="صفحه بعد"
        />

        <ShareButton
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          text="صفحه آخر"
          className=""
        />
      </div>
      <ShareModal isOpen={modal} onClose={handleModalClose}>
        <Poet modalData={modalData} />
      </ShareModal>
    </div>
  );
}
