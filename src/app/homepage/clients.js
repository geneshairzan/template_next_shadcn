import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import UI from "@ui";
import Image from "next/image";

let data = [
  {
    id: "fridm",
    title: "FRIDM",
    logo: "logo.webp",
    // asset: "img1.webp",
    // asset2: "img2.webp",
    desc1: "FRIDM Personal Financial Management",
    desc2:
      "FRIDM partnered with us to develop an intuitive Android mobile app for personal financial management. The app empowers users to track expenses, set budgets, and achieve financial goals with ease. Featuring real-time analytics, secure data encryption, and a user-friendly interface, it simplifies financial planning while ensuring data privacy. This innovative solution has transformed how users manage their finances, making FRIDM a trusted name in personal financial tools.",
  },
  {
    id: "match",
    title: "Match Indonesia",
    logo: "logo.webp",
    // asset: "img1.webp",
    // asset2: "img2.webp",
    desc1: "Activity Matchmaking Platform",
    desc2:
      "We collaborated with Match Indonesia to create a dynamic Android-based Activity Matchmaking Platform. This innovative app connects users with shared interests, enabling them to discover, join, and organize local activities seamlessly. With features like real-time matching, event scheduling, and community engagement tools, the platform fosters meaningful connections and enriches social experiences. It has redefined how Indonesians connect and engage, making Match Indonesia a leader in social activity matchmaking.",
  },
  {
    id: "mybox",
    title: "MyBox",
    logo: "logo.svg",
    logoBg: "#ffd369",

    asset: "i1.webp",
    asset2: "i2.webp",
    desc1: "Logistic and Booking Management System",
    desc2:
      "We partnered with MyBox to develop a robust Logistic and Booking Management System, streamlining their operations with end-to-end solutions. The system optimizes inventory tracking, booking management, and delivery scheduling, ensuring efficiency and accuracy. With real-time updates, seamless integration, and user-friendly interfaces, it has enhanced MyBox’s service delivery, positioning them as a leader in logistics innovation.",
  },
  {
    id: "bpot",
    title: "Bumiputera",
    logo: "logo.png",
    logoBg: "#140735",

    asset: "main.webp",
    asset2: "sec.webp",
    desc1: "Bumiputera Online Trading (BPOT)",

    desc2:
      "We developed a cutting-edge web-based trading platform, BPOT, for Bumiputera Sekuritas, empowering users with seamless stock trading and portfolio management. Featuring real-time market data, advanced analytics, and secure transactions, BPOT delivers a user-friendly and reliable trading experience. This platform has elevated Bumiputera Sekuritas as a trusted leader in Indonesia’s online trading industry.",
  },

  {
    id: "simei",
    title: "KEMENDAG RI",
    logo: "logo.svg",
    logoBg: "#ffffff",

    asset: "main.webp",
    desc1: "Simulasi Export & Import (SimEi) Pusat Pelatihan SDM Ekspor dan Jasa Perdagangan",
    desc2:
      "Partnered with Indonesia’s Trade Ministry to develop SimEi, an innovative web-based training platform simulating real-world export-import processes. Equips users with interactive scenarios, real-time feedback, and data-driven insights to enhance trade competency. Empowers businesses and professionals to navigate global markets confidently, strengthening Indonesia’s economic growth.",
  },
  {
    id: "bakamla",
    title: "BAKAMLA RI",
    logo: "logo.png",
    logoBg: "#ffffff",

    asset: "main.webp",
    desc1: "Human Resource Integrated System (HRIS)",
    desc2:
      "We partnered with Indonesia’s Maritime Security Agency to build a custom HRIS, centralizing workforce management for enhanced maritime operations. The platform automates payroll, training, and personnel tracking while ensuring data security and regulatory compliance. Real-time analytics and mobile access empower agile decision-making, boosting BAKAMLA’s efficiency in safeguarding Indonesia’s waters.",
  },
  {
    id: "mpl",
    title: "MOBILE LEGEND",
    logo: "logo.png",
    logoBg: "#ffffff",

    asset: "main.webp",
    desc1: "Post Match Analitic Platform",
    desc2:
      "Partnered with Moonton to create a data-driven analytics platform for Mobile Legends, offering players in-depth post-match insights. The tool analyzes gameplay stats, hero performance, and strategy gaps via intuitive dashboards. Real-time metrics, personalized tips, and competitive benchmarking empower gamers to refine skills and dominate ranked matches, elevating the esports experience.",
  },

  {
    id: "met",
    title: "MET EVENTS",
    logo: "logo.png",
    logoBg: "#000000",

    asset: "main.webp",
    desc1: "Event Access Control Management System",
    desc2:
      "MET Events' Access Control Management System enhances event security and guest management with digital verification and real-time monitoring. Featuring contactless check-in, multi-tier access, and dynamic guest lists, it cuts check-in times by 60% while ensuring top security. This intuitive system boosts compliance and attendee satisfaction, making it ideal for corporate and high-profile events.",
  },
  {
    id: "pubg",
    title: "PUBG MOBILE",
    logo: "logo.webp",
    logoBg: "#ffffff",

    asset: "main.webp",
    desc1: "Vourcher Code Redemption System",
    desc2:
      "Collaborated with PUBG Studios to build a scalable voucher code redemption system, enabling seamless in-game rewards distribution for millions of players. The platform ensures secure, real-time code validation, fraud detection, and integration with global payment gateways. A user-friendly interface boosts engagement, while backend analytics optimize promotions. Elevating PUBG Mobile’s player experience and operational efficiency.",
  },
];

export default function App(props) {
  const [active, setactive] = useState(0);
  const [visible, setVisible] = useState(true);
  const [onPreview, setonPreview] = useState();
  const [rKey, setrKey] = useState(0);
  const [duration, setDuration] = useState(9000); // Start with 3s fade-in

  useEffect(() => {
    const interval = setInterval(
      () => {
        setVisible((prev) => !prev);
        setDuration((prev) => (prev === 10000 ? 1000 : 10000)); // Switch between 3s and 1s
      },
      visible ? 10000 : 1000
    ); // Adjust interval dynamically

    return () => clearInterval(interval);
  }, [visible, rKey]);

  useEffect(() => {
    visible && setactive((prev) => (prev == data.length - 1 ? 0 : prev + 1));
  }, [visible]);

  function handleClick(ix) {
    setrKey((p) => p + 1);
    setactive(ix);
  }

  return (
    <UI.Col className="relative z-2 items-center overflow-hidden top-[-100px] mb-[-100px]">
      {/* {onPreview && <Preview data={data[onPreview]} onClose={() => setonPreview()} />} */}
      <BGHandler visible={visible} duration={duration} asset={data[active]?.asset2 && `/assets/img/folio/${data[active].id}/${data[active].asset2}`} />
      <UI.Col className="gap-5 pt-[220px]  mb-[64px]">
        <UI.Col className="absolute h-[140%] w-[65%] top-[-220px] left-[-200px] rotate-[15deg] bg-[rgba(0,0,0,0.2)] backdrop-blur-[5px]" />
        <UI.Col className="relative p-2 gap-3 md:flex-row min-h-[480px] md:min-h-[unset] w-screen max-w-[1280px] ">
          <UI.Col className="gap-3 shrink-0 min-h-[320px]">
            <UI.Col>
              <UI.Text variant="hero" bold>
                Trusted by
              </UI.Text>
              <TypingEffect variant="hero" text={data[active].title} />
            </UI.Col>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: visible ? 1 : 0 }}
              transition={duration} // 1-second fade duration
            >
              <UI.Col>
                <UI.Text variant="title" color="primary" bold>
                  {data[active].desc1}
                </UI.Text>
                <UI.Text variant="subtitle" className="pt-1 max-w-[1024px]">
                  {data[active].desc2}
                </UI.Text>
              </UI.Col>
            </motion.div>
          </UI.Col>
        </UI.Col>

        <BrandList active={active} onClick={(e) => handleClick(e)} />
      </UI.Col>
    </UI.Col>
  );
}

function Preview({ data, onClose }) {
  return (
    <UI.Modal open onClose={onClose}>
      <UI.Col onClick={onClose} className="w-[70vw] h-[70vg] min-h-[720px]">
        <Image
          src={`/assets/img/folio/${data.id}/${data.asset}`}
          alt=""
          style={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
          }}
        />
      </UI.Col>
    </UI.Modal>
  );
}

function BrandList({ active, onClick }) {
  return (
    <UI.Row className="gap-2 max-w-screen overflow-auto pb-3 px-2 z-11">
      {data.map((d, ix) => (
        <motion.div
          key={ix}
          animate={{ rotateY: active != ix ? 180 : 0 }} // Flip effect
          transition={{ duration: 0.6 }}
          style={{
            cursor: "pointer",
          }}
        >
          <UI.Col
            onClick={(e) => onClick(ix)}
            key={ix}
            className="w-[90px] md:w-[120px] h-[90px] md:h-[120px] p-1.5 rounded-[12px] transition-[filter] duration-1000 hover:grayscale-0"
            style={{
              backgroundColor: d?.logoBg || "white",
              filter: active == ix ? "grayscale(0%)" : "grayscale(100%)",
            }}
          >
            <Image
              src={`/assets/img/folio/${d.id}/${d.logo}`}
              alt=""
              style={{
                transform: active != ix && "rotateY(180deg)",
                objectFit: "contain",
                width: "100%",
                height: "100%",
              }}
            />
          </UI.Col>
        </motion.div>
      ))}
    </UI.Row>
  );
}

function BGHandler({ visible, duration, asset }) {
  return (
    <UI.Col className="absolute w-screen h-[720px] z-9">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={duration} // 1-second fade duration
      >
        <UI.Img
          src={"/assets/img/client-bg.webp"}
          alt=""
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            opacity: 0.2,
            filter: "grayscale(.1)",
          }}
        />
      </motion.div>
    </UI.Col>
  );
}

function SSHandler({ visible, duration, asset }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={duration} // 1-second fade duration
    >
      <UI.Col
        sx={{
          width: "100%",
          right: 0,
          top: 160,
          zIndex: 1,
          maxWidth: "100%",
        }}
      >
        <UI.Img
          src={asset}
          alt=""
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      </UI.Col>
    </motion.div>
  );
}

function TypingEffect({ text, variant = "body1", speed = 200 }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1)); // Add one letter at a time
      index++;

      if (index === text.length) {
        clearInterval(interval); // Stop when the text is fully displayed
      }
    }, speed); // Adjust speed here (milliseconds)

    return () => clearInterval(interval);
  }, [text]);

  return <UI.Text variant={variant}>{displayText}</UI.Text>;
}
