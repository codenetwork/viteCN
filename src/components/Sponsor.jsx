import { Tooltip } from "@mui/material";

export default function Sponsor({ company }) {
  return (
    <a href={company.url}
      class={`bg-white text-black py-6 px-8 w-full h-full hover:shadow-primary hover:scale-105 transition border-2 border-transparent hover:border-primary hover:border-2 ${
        company.level === "Platinum" ? "max-w-[360px]" : "max-w-[280px]"
      }`}>
      <img class="w-full h-full min-h-12 min-w-12 aspect-[16/8] object-contain" src={company.image} alt="" />
    </a>
  );
}
