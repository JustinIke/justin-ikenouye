import Image from "next/image";


export default function Header() {
  return (
    <>
      <div className="mask-image absolute z-[-1]">
          <div className="bg-[url(/waves.jpg)] bg-cover bg-no-repeat bg-center w-screen h-[50rem] flex items-center justify-center" />
        </div>
        <div className="w-screen p-6 flex items-center justify-between gap-6">
          <div className="text-2xl p-2 bg-black transition-shadow shadow-0 hover:shadow-5">Justin Ikenouye</div>
          <div className="flex gap-3">
            <a
              href="https://github.com/JustinIke"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="./github.png"
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
                src="./linkedin.png"
                alt="Linkedin logomark"
                width={50}
                height={50}
                className="filter brightness-0"
              />
            </a>
          </div>
        </div>
        <div className="w-screen h-80 flex items-center justify-center">
          <div className="text-4xl mx-6 p-3 bg-black transition-shadow shadow-0 hover:shadow-5 text-center">Hey, I'm Justin - Software Developer</div>
        </div>

        <div className="flex flex-col md:flex-row justify-center mx-6 gap-3">
          <div className="md:w-3/5 lg:w-1/3">
            <div className="text-2xl p-3 bg-black transition-shadow shadow-0 hover:shadow-5">
              I'm passionate about creating smooth user experiences alongside compelling interfaces.
            </div>
          </div>
          <div className="md:w-2/5 lg:w-1/5">
            <div className="text-2xl p-3 bg-black transition-shadow shadow-0 hover:shadow-5 flex flex-col gap-3">
              Core Skills
              <div className="flex items-center gap-3">
                <Image
                  src="./React.png"
                  alt="React logo"
                  width={30}
                  height={30}
                />
                React
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="./Typescript.png"
                  alt="TypeScript logo"
                  width={30}
                  height={30}
                />
                TypeScript
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="./django.svg"
                  alt="Django logo"
                  width={30}
                  height={30}
                />
                Django
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="./mui.svg"
                  alt="MUI logo"
                  width={30}
                  height={30}
                />
                MUI
              </div>
            </div>
          </div>
        </div>
    </>
  )
}