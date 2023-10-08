import Link from "next/link";

export default function Home() {
  // console.log(data)
  return (
    <main className="flex min-h-screen p-24 justify-center items-center">
      <Link href="/poets" className="p-12 bg-bg-300 rounded-md text-xl">
        شاعران
      </Link>
    </main>
  );
}
