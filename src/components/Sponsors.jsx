import sponsors from "../data/sponsors.json";
import Sponsor from "./Sponsor";

export default function Sponsors() {
  return (
    <>
      {/* PLATINUM */}
      {sponsors?.Platinum ? <><h3 class="text-3xl text-gray-400 mt-10">Platinum Sponsor{sponsors?.Platinum?.length>1 ? "s" : ""}</h3>
      <div class="flex flex-row justify-center mt-8 gap-12 flex-wrap">
        {sponsors.Platinum.map((company, index) => (
          <Sponsor key={index} company={company} />
        ))}
      </div></> : ""}
      {/* GOLD */}
      {sponsors?.Gold ? <><h3 class="text-3xl text-gray-400 mt-10">Gold Sponsor{sponsors?.Gold?.length>1 ? "s" : ""}</h3>
      <div class="flex flex-row justify-center mt-8 gap-12 flex-wrap">
        {sponsors.Gold.map((company, index) => (
          <Sponsor key={index} company={company} />
        ))}
      </div></> : ""}
      {/* SILVER */}
      {sponsors?.Silver ? <><h3 class="text-3xl text-gray-400 mt-10">Silver Sponsor{sponsors?.Silver?.length>1 ? "s" : ""}</h3>
      <div class="flex flex-row justify-center mt-8 gap-12 flex-wrap">
        {sponsors.Silver.map((company, index) => (
          <Sponsor key={index} company={company} />
        ))}
      </div></> : ""}
      {/* BRONZE */}
      {sponsors?.Bronze ? <><h3 class="text-3xl text-gray-400 mt-10">Bronze Sponsor{sponsors?.Bronze?.length>1 ? "s" : ""}</h3>
      <div class="flex flex-row justify-center mt-8 gap-12 flex-wrap">
        {sponsors.Bronze.map((company, index) => (
          <Sponsor key={index} company={company} />
        ))}
      </div></> : ""}
    </>
  );
}
