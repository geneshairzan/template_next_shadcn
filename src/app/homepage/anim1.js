import UI from "@ui";
import styles from "./style.module.css";

export default function App(props) {
  let lights = new Array(5).fill().map((_, ix) => `x${(ix + 1) * 2}`);
  return (
    <UI.Col
      className="relative w-screen h-[100dvh]  min-h-[720px] flex-shrink-0 justify-center bg-[radial-gradient(#184b8b,#01060a)] "
      // sx={{
      //   bgcolor: "primary.main",
      //   width: "100vw",
      //   height: "100dvh",
      //   minHeight: 720,
      //   background: "radial-gradient(#184b8b,#01060a)",
      //   position: "relative",
      //   flexShrink: 0,
      //   justifyContent: "center",
      // }}
      center
    >
      {lights.map((d, ix) => (
        <div key={ix} className={`${styles.light} ${styles[d]}`} />
      ))}
      <UI.Img
        src="/assets/img/server-room.webp"
        alt=""
        width={1920}
        height={720}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          objectFit: "cover",
          opacity: 0.2,
          height: "100%",
          width: "100%",
          filter: "blur(6px)",
        }}
      />
      <UI.Col className="h-dvh" center>
        <UI.Text variant="hero" className={"text-white [text-shadow:0px_0px_8px_rgba(255,255,255,0.5)]"} align="center">
          TECHNOLOGY PARTNER TO BUILD SUSTAINABLE, <br />
          INNOVATIVE AND RESULT-ORIENTED
          <br /> END-TO-END DIGITAL SOLUTION
        </UI.Text>
      </UI.Col>
    </UI.Col>
  );
}
