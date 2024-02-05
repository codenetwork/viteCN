import { GitHub, Image, OpenInNew } from "@mui/icons-material";
import Page from "../components/Page";
import { useContext } from "react";
import { Button, ButtonBase, IconButton } from "@mui/material";
import { H1 } from "../components/Text";
import SpecialIconButton from "../components/FrontPageIconButton";

import { Link } from "@mui/material";
import bgImage from "./../assets/bg.png";
import Sponsors from "../components/Sponsors";
import Spinner from "../components/Spinner";

import events from "./../data/events.json";
import Event from "../components/Event";

export default function Hero() {
  return (
    <>
      <Page>
        <div class="flex flex-col gap-12 items-center">
          <img class="max-w-[400px] w-[16vw] mx-auto z-10" src="/logo.png" alt="" />
          <h1 class="text-center text-3xl sm:text-5xl">Join the community</h1>
          <ButtonBase href="https://qutcode.getqpay.com/" class="bg-gray-100 text-black py-3 sm:py-4 px-8 sm:px-16 text-md sm:text-lg flex gap-4 w-max transition hover:scale-105 hover:shadow-lg hover:shadow-primary">
            Sign Up <OpenInNew sx={{ height: "100%" }} />
          </ButtonBase>
          <div class="flex flex-row flex-wrap gap-x-8 gap-y-4 justify-center">
            {/* #TODO fix hover effect styling for these buttons, consider a better way to do this (custom css?) */}
            <SpecialIconButton
              href="https://github.com/codenetwork/viteCN"
              icon={<GitHub sx={{ height: "100%", width: "100%", borderRadius: "100px", scale: "110%" }} />}
            />
            <SpecialIconButton href="https://discordapp.com/invite/f6VRUW9" icon={<img src="/discord.svg" />} />
            <SpecialIconButton href="https://facebook.com/groups/WeCodeALot" icon={<img src="/facebook.svg" />} />
          </div>
        </div>
        {/* floating graphic */}
        <span class="hidden lg:block absolute bottom-4 opacity-80 -right-12 h-3/4 -z-10">
          <img class="h-full w-full object-contain" src={bgImage} />
        </span>
      </Page>
      <Page noborder>
        <section class="mb-12">
          <h2 class="mb-5 text-2xl">Join us for one of our upcoming events!</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-black list-none">
            {events.slice(0, 3).map((event, index) => (
              <Event key={index} event={event} />
            ))}
          </div>
        </section>
        <div class="text-center">
          <h2 class="text-3xl md:text-5xl mb-8">Would you like to support us in 2024?</h2>
          <p>We are proud to be sponsored by some amazing companies!</p>
          <p class="mb-8">
            You could be one of them - reach out to us at{" "}
            <Link color="primary" underline="hover" href="mailto:industry@codenetwork.co">
              industry@codenetwork.co
            </Link>
          </p>
          <ButtonBase class="bg-gray-100 text-black mx-auto py-3 sm:py-4 px-8 sm:px-16 text-md sm:text-lg flex gap-4 w-max transition hover:scale-105 hover:shadow-lg hover:shadow-primary">
            Read our Prospectus
          </ButtonBase>
        </div>
        <div className="text-center mt-16">
          <h2 class="text-3xl md:text-4xl mb-8">Thank you to our 2024 Sponsors!</h2>
          <Sponsors />
        </div>
      </Page>
    </>
  );
}
