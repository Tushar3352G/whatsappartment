const Buttonoutline = ({ text, colors }) => {
  return (
    <button
      className={`cursor-pointer w-fit font-bold text-lg border-[1px] ${
        colors ? colors : "text-blue-500 border-blue-500"
      } px-8 py-3.5 rounded-lg`}
    >
      {text}
    </button>
  );
};

export default Buttonoutline;
