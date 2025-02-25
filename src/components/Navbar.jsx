import LangSelector from "./LangSelector";

const Navbar = () => {
  return (
    <div className="w-full z-30 flex items-center justify-between px-5 py-2 sticky top-0 bg-white">
      <img src="/images/logo.svg" alt="logo" className="h-auto w-56" />
      <div className="flex items-center gap-5">
        <span className="border-[1px] border-zinc border-zinc-400 px-4 py-1 rounded-lg">
          <i className="ri-menu-line text-xl cursor-pointer"></i>
        </span>
        <LangSelector />
      </div>
    </div>
  );
};

export default Navbar;
