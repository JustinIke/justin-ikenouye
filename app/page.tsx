import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-cutive-mono)]">
      <main>
        <div className="mask-image absolute">
         <div className="bg-[url(/waves.jpg)] bg-cover bg-no-repeat bg-center w-screen h-[50rem] flex items-center justify-center" />
        </div>
        <div className="w-screen p-6 flex items-center justify-between gap-6">
          <div className="text-2xl p-2 bg-black transition-shadow shadow-0 hover:shadow-5 z-[1]">Justin Ikenouye</div>
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
        <div className="text-4xl mx-6 p-3 bg-black transition-shadow shadow-0 hover:shadow-5 z-[1] text-center">Hey, I'm Justin - Software Developer</div>
       </div>
       
       <div className="flex flex-col md:flex-row justify-center mx-6 gap-3">
        <div className="md:w-3/5 lg:w-1/3 z-[1]">
          <div className="text-2xl p-3 bg-black transition-shadow shadow-0 hover:shadow-5">
            I'm passionate about creating smooth user experiences alongside compelling interfaces.
          </div>
        </div>
        <div className="md:w-2/5 lg:w-1/5 z-[1]">
          <div className="text-2xl p-3 bg-black transition-shadow shadow-0 hover:shadow-5 flex flex-col gap-3">
            Core Skills
            <div className="flex items-center gap-3">
              <Image
                src="/React-icon.png"
                alt="React logo"
                width={30}
                height={30}
              />
              React
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/Typescript.png"
                alt="TypeScript logo"
                width={30}
                height={30}
              />
              TypeScript
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/django.svg"
                alt="Django logo"
                width={30}
                height={30}
              />
              Django
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/mui.svg"
                alt="MUI logo"
                width={30}
                height={30}
              />
              MUI
            </div>
          </div>
        </div>
       </div>
       <div className="my-24 mx-6 lg:mx-auto max-w-[1000px]">
        <div className="text-3xl text-center">My Work</div>
          <div className="border p-6 mt-9">
            <div className="text-2xl">
              BMO Radicle
            </div>
            <div className="mt-3">
              Over nearly 5 years, I worked with Radicle, eventually acquired by BMO, crafting ghg accounting SaaS.
              I worked on a variety of projects and technologies, including React, Django, Ruby on Rails, Angular, .NET, and more.
              Here are a couple highlights from my time there:
            </div>
            <div className="border-t mt-6" />
            <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">
              <div>
                Data visualization: Using MUI charts and datagrid components, I created a dashboard to display data from the Django API. 
                Care was taken to ensure performance with large datasets by reducing hooks and optimizing the API.
                The chart was made dynamic, allowing users to select the data they wanted to see by interacting with the table.
                Multiple tabs were added to allow users to view data in different ways.
              </div>
              <Image
                src="/climatesmart-reports.jpeg"
                alt="Climate Smart Reports"
                width={400}
                height={385}
              />
            </div>
            <div className="border-t mt-6" />
            <div className="mt-6">
              <div>
                Rebrands: given a minimal design system, I redid the styling across the application, creating new components and expanding on the designs.
                I put priority on using css variables and reusable components to maintain consistency and ease of use.
                I enjoyed the challenge of translating the application's nature from a small business to a startup feel, 
                then into a more professional look post BMO acquisition.
              </div>
              <div className="flex flex-row flex-wrap justify-center gap-6 mt-6">
                <Image
                  src="/climatesmart-old.jpeg"
                  alt="Climate Smart Old"
                  width={300}
                  height={557}
                />
                <Image
                  src="/climatesmart-rebrand1.png"
                  alt="Climate Smart Rebrand 1"
                  width={300}
                  height={557}
                />
                <Image
                  src="/climatesmart-rebrand2.png"
                  alt="Climate Smart Rebrand 2"
                  width={300}
                  height={557}
                />
              </div>
            </div>
          </div>
          <div className="border p-6 mt-9">
            <div className="text-2xl">
              Justin Ikenouye Portfolio Site
            </div>
            <div className="flex justify-center gap-6 mt-3">
              <div>
                Using Next.js and Tailwind CSS, I created this personal website to showcase my work.
                I wanted to have a simple yet playful design, using label maker-like containers with monospaced fonts
                contrasted against oceanic imagary to maintain readability with visual intrigue.
              </div>
            </div>
          </div>
          <div className="border p-6 mt-9">
            <div className="text-2xl">
              BesTeas2Me
            </div>
            <div className="flex justify-center gap-6 mt-3">
              <div>
                Using Ruby with Jekyll, I designed and developed a bubble tea blog according to a client's needs. 
                I enabled Netlify CMS to allow the client to easily update the blog without needing to know how to code.
              </div>
            </div>
          </div>
       </div>
       <div className="mask-image-reverse absolute">
        <div className="bg-[url(/rocks.jpg)] bg-cover bg-no-repeat bg-center w-screen h-[50rem]" />
      </div>
      <div className="w-screen h-[50rem] flex items-end justify-center pb-6">
        <div className="text-1xl p-3 bg-black transition-shadow shadow-0 hover:shadow-5 z-[1]">Photos by me :)</div>
       </div>
      </main>
    </div>
  );
}
