import { Link } from "@mui/material";

export default function Footer() {
  return (
    <footer class="bg-dark text-white h-max py-8 px-8 text-center md:text-left">
      <div class="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-6 ">
        <div class="flex flex-col md:col-span-4">
          <Link underline="hover" color="secondary" href="mailto:hello@codenetwork.co">hello@codenetwork.co</Link>
          <span class='text-gray-400 my-1'>&copy; {new Date().getFullYear().toString()} Code Network</span>
        </div>
        <div class="flex flex-col md:flex-row justify-end md:col-span-2">
          <Link underline="hover" color="secondary" href="/helloworld">Developers</Link>
        </div>
      </div>
    </footer>
  );
}
