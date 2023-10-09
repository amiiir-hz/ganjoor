import Link from "next/link";

export default function Home() {
  // console.log(data)
  return (
    <main className="flex min-h-screen p-24 justify-center items-center">
      <Link
        href="/poets"
        className="text-white bg-bg-300  border-bg-300 border-2 rounded-md p-16 hover:bg-bg-100 hover:text-text-100 transition duration-100 ease-in-out text-3xl"
      >
        مشاهده لیست شاعران
      </Link>
    </main>
  );
}
