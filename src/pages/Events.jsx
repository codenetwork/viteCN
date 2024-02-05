import Page from "./../components/Page";
import { H1 } from "./../components/Text";
import Event from "./../components/Event";

import Graphic from "./../assets/images/Events-bro.png";

import events from "./../data/events.json"

export default function Events() {
  return (
    <Page>
      <div class="grid grid-cols-2 gap-24">
        <div>
          <H1>Events</H1>
          <img class="px-12 max-h-[60vh] mx-auto" src={Graphic} alt="" />
          <a href="https://storyset.com/event">Event illustrations by Storyset</a>
        </div>
        <ul class="flex flex-col gap-4">
          <h2>Upcoming Events</h2>
          {events.slice(0, 5).map((event, index) => (
            <Event key={index} event={event} />
          ))}
        </ul>
      </div>
    </Page>
  );
}
