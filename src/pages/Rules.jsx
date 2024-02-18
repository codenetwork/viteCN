import { Button, Link, Stack } from "@mui/material";
import Page from "../components/Page";
import { H1 } from "../components/Text";
import BasicTabs from "../components/RulesTabs"

export default function Rules() {
  return (
    <Page title="Rules">  
      {/* <H1>Code Network Rules and Policies</H1>
      <p>Code Network aims to provide a safe, educational and fun environment for all its members.</p> */}
      {/* <p>To achieve this we ask that the following rules be applied when engaging with the club or its members.</p>
      <div class="my-6 flex flex-row gap-4 flex-wrap">
        <Button variant="outlined" color="primary" href="/rules/general">
          General Rules
        </Button>
        <Button variant="outlined" color="primary" href="/rules/conduct">
          Code of Conduct
        </Button>
        <Button variant="outlined" color="primary" href="/rules/safespace">
          Safe Space Policy
        </Button>
        <Button variant="outlined" color="primary" href="/constitution">
          Constitution
        </Button>
      </div> */}

      <BasicTabs />
    </Page>
  );
}
