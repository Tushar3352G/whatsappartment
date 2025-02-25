const SectionHeading = ({text,color}) => {
  return (
    <h2 className={`font-semibold text-2xl  md:text-[44px] lg:text-5xl text-center ${color ? color : ''}`}>
      {text}
    </h2>
  );
};

export default SectionHeading;
