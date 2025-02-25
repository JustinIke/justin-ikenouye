export default function Footer() {
  return (
    <>
      <div className="mask-image-reverse absolute z-[-1]">
        <div className="bg-[url(/rocks.jpg)] bg-cover bg-no-repeat bg-center w-screen h-[50rem]" />
      </div>
      <div className="w-screen h-[50rem] flex items-end justify-center pb-6">
        <div className="text-1xl p-3 bg-black transition-shadow shadow-0 hover:shadow-5">Photos by me :)</div>
      </div>
    </>
  )
}
