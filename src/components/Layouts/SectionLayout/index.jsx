const SectionLayout = ({ children }) => {
  return (
    <section className="relative w-full text-white bg-black">
      <div className="grid items-center justify-center gap-16 px-8 py-16 mx-auto text-center max-w-7xl sm:grid-cols-2 sm:text-left">
        {children}
      </div>
      <div className="absolute top-0 left-0 w-full h-2 bg-stone-900"></div>
    </section>
  );
};

export default SectionLayout;
