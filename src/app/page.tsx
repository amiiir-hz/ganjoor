import Link from "next/link";

export default function Home() {
  // console.log(data)
  return (
    <main className="flex min-h-screen p-24">
      <Link href="/poets">شاعران</Link>
    </main>
  );
}
