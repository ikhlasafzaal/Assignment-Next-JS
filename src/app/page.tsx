export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <div className="w-fit h-[250px] m-[40px] text-[80px] font-black">
          Hey,
          <br />
          My Name is <span className="pinkColor">Ikhlas</span>
          <br />I am Software Developer
        </div>
        {/* <div className="w-[250px] h-[250px] relative m-[40px]">
          <Image
           src="/images/profilee.jpg"
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
          />
        </div> */}
      </div>

    
    </div>
  );
}
