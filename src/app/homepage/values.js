import UI from "@ui";

export default function App(props) {
  return (
    <UI.Col className="relative w-screen z-10 ">
      <UI.Col className="h-[90px] flex-shrink-0 bg-white [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
      <UI.Col className="px-2 md:px-[5%] py-10 item-center bg-white">
        <Content />
      </UI.Col>
      <UI.Col className="h-[90px] flex-shrink-0 bg-white [clip-path:polygon(0_0,100%_0,0_100%)]" />
    </UI.Col>
  );
}
function Content(props) {
  return (
    <UI.Col className="max-w-[1280px] gap-5 md:flex-row w-screen justify-between">
      <V1 />
      <V2 />
    </UI.Col>
  );
}

function V1() {
  return (
    <UI.Text variant="hero" bold>
      SMARTI WAY
    </UI.Text>
  );
}

function V2() {
  return (
    <UI.Col gap={3} flex={1} className="gap-3 max-w-[640px]">
      <UI.Text variant="body1">
        SMARTI move along the intersection of business strategy and technology to drive value for our clients and their customers. We couple business expertise
        with deep technology know-how.
        <br />
        <br />
        We use our deep digital and industry experience to help develop and foster new digital capabilities for our clients’ businesses, and help them rethink
        their digital experiences.
      </UI.Text>
    </UI.Col>
  );
}
