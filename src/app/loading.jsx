export default function Loading() {
  return (
    <>
      <div
        className={`fixed  inset-0 flex items-center justify-center bg-[#f4f7fc]  duration-1000 transition z-50 `}
      >
        <span className={`font-extrabold text-center items-center gap-3 md:text-5xl text-4xl animate-bounce flex flex-col lg:flex-row justify-center  `}>
          Bienvenue à
          <span className=" text-[#0276FF]   ">
            EcoTech Dépannage
          </span>
        </span>
      </div>
    </>
  );
}
