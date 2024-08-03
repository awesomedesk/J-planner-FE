import Image from "next/image";
import Link from 'next/link';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>
          J-planner Home
        </h1>
        <Link href={"calender"}>
        <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          <button>달력</button>
        </Link>
    </main>
  );
}

