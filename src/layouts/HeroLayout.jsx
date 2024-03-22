import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function HeroLayout() {
  return (
    <section class="bg-dark h-full text-white">
      <Header />
      <Outlet />
    </section>
  );
}
