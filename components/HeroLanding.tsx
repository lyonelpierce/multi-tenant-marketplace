import WidthWrapper from "@/components/WidthWrapper";
import HeroSearch from "./HeroSearch";

const HeroLanding = () => {
  return (
    <div className="h-2/3 bg-zinc-900">
      <WidthWrapper>
        <div className="flex flex-col justify-center h-full text-white gap-1">
          <h2 className="text-5xl font-light uppercase">
            Mercado <span className="font-bold">en línea</span>
          </h2>
          <p className="uppercase font-medium">+1000 Articulos</p>
          <HeroSearch />
        </div>
      </WidthWrapper>
    </div>
  );
};

export default HeroLanding;
