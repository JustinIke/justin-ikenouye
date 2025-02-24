import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-cutive-mono)]">
      <main>
        <div className="mask-image absolute">
         <div className="bg-[url(/waves.jpg)] bg-cover bg-no-repeat bg-center w-screen h-96 flex items-center justify-center" />
        </div>
        <div className="w-screen p-3 flex items-center justify-between gap-3">
          <div className="text-2xl p-2 bg-black transition-shadow shadow-0 hover:shadow-10 z-[1]">Justin Ikenouye</div>
          <div className="z-[1] flex gap-3">
            <a
              href="https://github.com/JustinIke"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github.png"
                alt="Github logomark"
                width={50}
                height={50}
              />
            </a>
            <a
              href="https://linkedin.com/in/justin-ikenouye"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin.png"
                alt="Linkedin logomark"
                width={50}
                height={50}
                className="filter brightness-0"
              />
            </a>
          </div>
        </div>
       <div className="w-screen h-80 flex items-center justify-center">
        <div className="text-4xl mx-3 p-3 bg-black transition-shadow shadow-0 hover:shadow-10 z-[1] text-center">Hey I'm Justin - Software Developer</div>
       </div>
       
       <div className="flex mx-3 gap-3 w-2/3">
       <div className="w-3/5 h-80">
          <div className="text-2xl p-3 bg-black transition-shadow shadow-0 hover:shadow-10">
            I'm passionate about creating smooth user experiences alongside compelling interfaces.
          </div>
        </div>
        <div className="w-2/5 h-96 ">
          <div className="text-2xl p-3 bg-black transition-shadow shadow-0 hover:shadow-10">
            Skills:

            <div className="flex">
              <Image
                src="/react.png"
                alt="React logo"
                width={50}
                height={50}
              />
              React
            </div>
            <div className="flex">
              <Image
                src="/next.png"
                alt="Next.js logo"
                width={50}
                height={50}
              />
              Next.js
            </div>
          </div>
        </div>
        
       </div>
       <div className="w-full h-96">
        <div className="flex items-center justify-center h-full">
          <div className="text-3xl text-white">Skills</div>
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
