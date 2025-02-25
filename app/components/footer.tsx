import rocks from "../../public/rocks.jpg";

export default function Footer() {
  return (
    <>
      <div className="mask-image-reverse absolute" style={{ backgroundImage: `url(${rocks.src})` }}>
        <div className="bg-[url(/rocks.jpg)] bg-cover bg-no-repeat bg-center w-screen h-[50rem]" />
      </div>
      <div className="w-screen h-[50rem] flex items-end justify-center pb-6">
        <div className="text-1xl p-3 bg-black transition-shadow shadow-0 hover:shadow-5 z-[1]">Photos by me :)</div>
      </div>
    </>
  )
}
