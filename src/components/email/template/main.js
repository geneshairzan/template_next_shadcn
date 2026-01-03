import { Html } from "@react-email/html";

import { Text, Section, Button, Container } from "@react-email/components";

// https://demo.react.email/preview/stripe-welcome

export default function WelcomeEmail(props) {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Text style={heading}>Hi there!</Text>
          {typeof props.msg == "string" && <Text style={paragraph}>{props.msg}</Text>}
          {typeof props.msg != "string" &&
            props.msg.map((d, ix) => (
              <Text key={ix} style={paragraph}>
                {d}
              </Text>
            ))}
          {props?.code && <Text style={code}>{props.code}</Text>}
          {props?.action && (
            <Button
              className="box-border w-full rounded-[8px] bg-indigo-600 px-[12px] py-[12px] text-center font-semibold text-white"
              href={props?.action?.link}
              style={{ backgroundColor: "#3955a3", color: "white", padding: "10px 20px" }}
            >
              {props?.action?.label}
            </Button>
          )}
        </Container>
      </Section>
    </Html>
  );
}

// Styles for the email template
const main = {
  backgroundColor: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};

const code = {
  fontSize: "20px",
  lineHeight: "1.4",
  color: "#484848",
  fontWeight: "bold",
};
