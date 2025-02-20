import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main>
       <div className="p-12">
        <h1 className="text-6xl">Justin Ikenouye</h1>
        <h2 className="text-3xl">Software Developer</h2>
       </div>
       <div className="flex w-full">
        <div className="w-3/5 h-96 bg-[var(--tigers-eye)]">
          asdfasdf
        </div>
        <div className="w-2/5 h-80 mt-16 bg-[var(--earth-yellow)]">
         asdfasdf
        </div>
       </div>
       
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Justin Ikenouye
      </footer>
    </div>
  );
}
