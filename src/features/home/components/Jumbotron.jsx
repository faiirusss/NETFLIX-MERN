import { Button } from "@/components/ui/button";

const Jumbotron = () => {
  return (
    <>
      <img
        src="/thumbnail.jpg"
        width={"100%"}
        height={"900px"}
        alt="thumbnail"
        className="object-cover w-full h-full rounded-xl"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-xl"></div>

      <div className="absolute left-0 z-10 w-full text-white -translate-y-1/2 top-1/2">
        <div className="max-w-xl px-8 space-y-2">
          <h1 className="text-6xl font-bold">American Sniper</h1>
          <p className="text-md">
            13+ <span>2024</span>
          </p>
          <p className="text-xl">
            An origin story of Optimus Prime and Megatron who were once comrades
            who later fell out.
          </p>
          <Button>Open Film</Button>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
