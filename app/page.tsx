import AwesomeButton from "@components/button/awesome_button";
import Image from "next/image";
import Link from 'next/link';

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-between p-8">
        <h1>
          J-planner Home
        </h1>
        <div className="p-8 border-solid border-2">
          <Link href={"calender"}>
            <Image
                src="/example/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
                />
            <AwesomeButton 
              text="달력"
            />
          </Link>
        </div>
    </main>
  );
}

