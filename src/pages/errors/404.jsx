import Page from "../../components/Page";
import { H1 } from "../../components/Text";
import Wrapper from "../../components/Wrapper";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Home } from "@mui/icons-material";

import ErrorGraphic from "./../../assets/404Graphic.svg";
import { Link } from "@mui/material";

export default function Error404() {
  return (
    <Page noborder title="404">
      <div class="flex flex-col items-center gap-7 text-center">
        <H1>Sorry! We can't find the page that you requested!</H1>
        <p>
          Please consider returning{" "}
          <Link className="text-primary" href="/">
            Home
          </Link>{" "}
          to find what you are looking for.
        </p>
        <img class="h-full max-h-64" src={ErrorGraphic} alt="" />
        <Link href="https://storyset.com/online" >Online illustrations by Storyset</Link>
        <Button href="/" variant="outlined" color="primary" startIcon={<Home />}>Go Home</Button>
      </div>
    </Page>
  );
}
