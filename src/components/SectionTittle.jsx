const SectionTittle = ({heading1,heading2, subHeading}) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-8">
      <p className="text-green-500 mb-2 text-bold">--- {subHeading} ---</p>
      <h3 className="font-bold text-3xl text-black uppercase">{heading1} <span className="text-green-500">{heading2}</span></h3>
    </div>
  );
};

export default SectionTittle;
