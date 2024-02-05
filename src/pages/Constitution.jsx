import Page from "../components/Page"
import { H1 } from "../components/Text"
export default function Constitution() {
  return (
    <Page title="Constitution">
      <H1>Code Network Constitution</H1>
      <p>This version was adopted at the 2023 Annual General Meeting of Code Network. Future revisions will appear here.</p>
      <object
        type="application/pdf"
        data="/constitution_2023.pdf" // be sure to update this
        width="100%"
        height="600"
      />
    </Page>
  )
}