import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Event({ event }) {
  return (
    <li class="bg-gray-100 rounded  w-full h-fit shadow hover:shadow-primary hover:scale-105 transition">
      <a href="" class="grid grid-cols-[5fr_1fr]">
        <div class="p-6 ">
          <p class="text-xl mb-1">{event.name}</p>
          <p class="text-sm m-0">
            {event.date}, {event.time.start} - {event.time.end}
          </p>
        </div>
        <div class="w-full h-full grid justify-center items-center">
          <KeyboardArrowRightIcon />
        </div>
      </a>
    </li>
  );
}
