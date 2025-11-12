import UI from "@ui";
import Logo from "@/public/assets/img/logo-black.svg";
import Image from "next/image";
let data = [
  {
    label: "Bespoke Software Development",
    desc: "Bring your unique vision to life. We specialise in the execution of your digital journey at each step of the process, from the design and development to the implementation of integrated bespoke software tailored to your organisation’s needs.",
  },
  {
    label: "Digital Transformation & Advisory",
    desc: "We will help you understand where your business is today and where your digital business is heading. Our guidance is designed to help you think differently, do more and do it better, faster and more effectively with technology",
  },
  {
    label: "Artificial Intelligence Technology Integration",
    desc: "Unlock the full potential of your business with our AI technology integration services. We specialize in seamlessly incorporating cutting-edge AI solutions into your existing processes, helping you boost efficiency, drive innovation, and stay ahead of the competition.",
  },
];

export default function App(props) {
  return (
    <UI.Col className="min-h-[360px] px-2 md:px-[5%]" center>
      <UI.Col className="w-screen max-w-[1280px] gap-[100px] gap-5 py-[120px] ">
        <UI.Row className="flex-1 gap-2 justify-between flex-col md:flex-row w-full ">
          <UI.Col className="flex-1 w-[100%] md:w-[100%] pt-3">
            <UI.Img
              src="/assets/img/logo-black.svg"
              alt=""
              width={300}
              height={1}
              className="fill-[#0a213d]"
              style={{
                marginRight: "32px",
                maxWidth: 300,
                filter: "invert(17%) sepia(18%) saturate(3576%) hue-rotate(199deg) brightness(95%) contrast(90%)",
              }}
            />
          </UI.Col>

          <UI.Col className="flex-2">
            <UI.Text variant="title24">
              We offer a wide range of digital solutions and best-in-class platforms to deliver meaningful outcomes, enhance customer experiences, and transform
              industries at scale and with unparalleled speed.
            </UI.Text>
          </UI.Col>
        </UI.Row>

        <UI.Col className="flex md:flex-row gap-3 md:gap-5">
          {data.map((d, ix) => (
            <Card key={ix} label={d.label} desc={d.desc} />
          ))}
        </UI.Col>
      </UI.Col>
    </UI.Col>
  );
}

function Card(props) {
  return (
    <UI.Col className="gap-1 flex-1">
      <UI.Text variant="title" color="grey" bold className="max-w-[300px]">
        {props.label}
      </UI.Text>
      <UI.Text variant="body1">{props.desc}</UI.Text>
    </UI.Col>
  );
}
