import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-giest-mono)]">
      <main>
       <div className="bg-[url(/waves.jpg)] bg-cover bg-no-repeat bg-center w-screen h-96 flex items-center justify-center">
        <div className="text-4xl p-3 bg-black transition-shadow shadow-0 hover:shadow-10">Justin Ikenouye</div>
       </div>
       <div className="p-12">
        <h1 className="text-6xl">Justin Ikenoue</h1>
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
