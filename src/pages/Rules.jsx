import Page from "../components/Page";
import { useState } from "react";

import GeneralRules from "./rules/General";
import Conduct from "./rules/Conduct";
import SafeSpace from "./rules/SafeSpace";
import Constitution from "./rules/Constitution";

export function Tab(props) {
  return (
    <li>
      <input type="radio" id={props.id} name="rules" value={props.value} className="hidden peer" />
      <label
        for={props.for}
        className="inline-flex items-center justify-between w-full pb-1 transition cursor-pointer border-2 py-1 px-3  peer-checked:border-b-2 peer-checked:border-primary ">
        <div className="w-full text-lg">{props.children}</div>
      </label>
    </li>
  );
}

export default function Rules() {
  const [selected, setSelected] = useState("");

  return (
    <Page title="Rules">
      <h1 className="text-2xl pb-4">Our Rules</h1>
      <form onChange={(e)=>setSelected(e.target.value)}>
        <ul className="flex flex-row flex-wrap gap-4 py-2">
          <Tab id="general" for="general" value="general" callback={setSelected}>
            General Rules
          </Tab>
          <Tab id="coc" for="coc" value="coc">
            Code of Conduct
          </Tab>
          <Tab id="ssp" for="ssp" value="ssp">
            Safe Space Policy
          </Tab>
          <Tab id="constitution" for="constitution" value="constitution">
            Constitution
          </Tab>
        </ul>
      </form>
      <div className="pt-6">
        {selected == "general" ? <GeneralRules /> : ""}
        {selected == "" ? <GeneralRules /> : ""}
        {selected == "coc" ? <Conduct /> : ""}
        {selected == "ssp" ? <SafeSpace /> : ""}
        {selected == "constitution" ? <Constitution /> : ""}
      </div>
    </Page>
  );
}
