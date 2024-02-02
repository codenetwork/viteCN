import { Outlet } from "react-router-dom";

export default function HeroLayout() {
  return (
    <section class="bg-dark h-full text-white">
      <Outlet />
    </section>
  );
}
