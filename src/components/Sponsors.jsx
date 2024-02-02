import sponsors from "../data/sponsors.json";
import Sponsor from "./Sponsor";

export default function Sponsors() {
  return (
    <>
      <h3 class="text-3xl text-gray-400">Platinum Sponsor{sponsors?.Platinum?.length>1 ? "s" : ""}</h3>
      <div class="flex flex-row justify-center mt-8 gap-12 flex-wrap">
        {sponsors.Platinum.map((company, index) => (
          <Sponsor key={index} company={company} />
        ))}
      </div>
      <h3 class="text-3xl text-gray-400 mt-10">Gold Sponsor{sponsors?.Gold?.length>1 ? "s" : ""}</h3>
      <div class="flex flex-row justify-center mt-8 gap-12 flex-wrap">
        {sponsors.Gold.map((company, index) => (
          <Sponsor key={index} company={company} />
        ))}
      </div>
    </>
  );
}
