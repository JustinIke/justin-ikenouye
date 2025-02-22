import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-giest-mono)]">
      <main>
        {/* <Image className="absolute w-screen h-1/2 " src="/waves.jpg" width="256" height="171" unoptimized priority alt="Waves"></Image> */}
        <div className="mask-image absolute">
         <div className="bg-[url(/waves.jpg)] bg-cover bg-no-repeat bg-center w-screen h-96 flex items-center justify-center" />
        </div>
        <div className="w-screen p-3 flex items-center justify-between">
        <div className="text-2xl p-2 bg-black transition-shadow shadow-0 hover:shadow-10 z-[1]">Justin Ikenouye</div>

        <div className="z-[1]">
          <a
          href="https://github.com/JustinIke"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/github.png"
            alt="Github logomark"
            width={30}
            height={30}
          />
        </a>
        <a
          href="https://linkedin.com/in/justin-ikenouye"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/aawt0fw.png"
            alt="Linkedin logomark"
            width={30}
            height={30}
          />
        </a>
        </div>
      </div>
       <div className="w-screen h-96 flex items-center justify-center">
        <div className="text-4xl p-3 bg-black transition-shadow shadow-0 hover:shadow-10 z-[1]">Hey I'm Justin - Software Developer</div>
       </div>
       
       
       <div className="p-12">
        <h1 className="text-6xl">Justin Ikenoue</h1>
        <h2 className="text-3xl">Software Developer</h2>
       </div>
       {/* <div className="flex w-full">
        <div className="w-3/5 h-96 bg-[var(--tigers-eye)]">
          asdfasdf
        </div>
        <div className="w-2/5 h-80 mt-16 bg-[var(--earth-yellow)]">
         asdfasdf
        </div>
       </div> */}
       <div className="w-full h-96 bg-[--slate-gray]">
        <div className="flex items-center justify-center h-full">
          <div className="text-3xl text-white">About Me</div>
        </div>
       </div>
       <div className="mask-image-reverse absolute">
        <div className="bg-[url(/rocks.jpg)] bg-cover bg-no-repeat bg-center w-screen h-96 flex items-center justify-center" />
      </div>
      <div className="w-screen h-96 flex items-center justify-center">
        <div className="text-1xl p-3 bg-black transition-shadow shadow-0 hover:shadow-10 z-[1]">Photos by me :)</div>
       </div>
      </main>
    </div>
  );
}
