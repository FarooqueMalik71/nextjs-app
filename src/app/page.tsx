'use client'
import Click from "@/components/Click";

import Image from "next/image";

export default function Home() {


  const handleClick = ()=> {


    alert('💕')
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Click />
        <button  onClick={handleClick}>Click me</button>


        {/* <div className=" rounded-sm text-black h-24 w-14 bg-slate-300 "><h1>h1</h1></div>

        <Image src={'/public/IMG_20230824_075009'} alt="profile image"></Image> */}

      </main>


    </div>


  );
}
