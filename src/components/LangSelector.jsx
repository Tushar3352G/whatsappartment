import { useState } from "react";

const LangSelector = () => {
  const lang = [
    { text: "English", code: "gb" },
    { text: "Spanish", code: "es" },
  ];

  const [language, setLanuage] = useState(lang[0]);
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="relative md:block hidden">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-center gap-5 border-[1px] cursor-pointer  border-zinc-400 rounded-lg py-1 px-3 w-40"
      >
        <span className="flex items-center gap-2">
          <img
            src={`https://flagcdn.com/${language.code}.svg`}
            width="30"
            alt="English"
            className="w-8 h-5 object-cover"
          />
          {language.text}
        </span>
        <i className="ri-arrow-down-s-line text-2xl"></i>
      </button>

      {isOpen && (
        <div className="absolute top-12 right-0 languagebox w-46 bg-white rounded-lg shadow-sm shadow-zinc-200n py-3">
          {lang.map((item) => (
            <button
              key={item.code}
              onClick={() =>(
                setLanuage(item),
                setOpen((prev) => !prev)
            )}
              className="flex items-center gap-5 py-1 cursor-pointer hover:bg-zinc-100 px-3 w-full"
            >
              <img
                src={`https://flagcdn.com/${item.code}.svg`}
                alt="English"
                className="w-8 h-5 object-cover"
              />
              {item.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LangSelector;
