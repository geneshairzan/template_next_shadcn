import { Html } from "@react-email/html";
import { Text, Section, Button, Container, Img } from "@react-email/components";
import QRCode from "qrcode";

// https://demo.react.email/preview/stripe-welcome

const style = {
  main: {
    backgroundColor: "#ffffff",
  },

  container: {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "580px",
  },

  heading: {
    fontSize: "32px",
    lineHeight: "1.3",
    fontWeight: "700",
    color: "#484848",
  },

  p: {
    fontSize: "18px",
    lineHeight: "1.4",
    color: "#484848",
  },

  code: {
    fontSize: "20px",
    lineHeight: "1.4",
    color: "#484848",
    fontWeight: "bold",
  },
};

export default async function BookingEmail({ booking_id, user, event }) {
  return (
    <Html>
      <Section style={style.main}>
        <Container style={style.container}>
          <Text style={style.heading}>Hi there!</Text>
          <Text style={style.p}>Your booking has been confirmed.</Text>
          <Text style={style.p}>Show this QR code on checkin</Text>
          <Img
            src={`https://ems.genesha.dev/api/v2/qr/${booking_id}.png`}
            alt="QR Code"
            width="150"
            height="150"
            style={{ margin: "20px auto", display: "block" }}
          />

          <Text style={style.p}>Booking Detail</Text>
          <Text style={style.p}>{`#${booking_id}`}</Text>
          <Text style={style.p}>{event.name}</Text>
          <Text style={style.p}>{event.data_start}</Text>
          <Text style={style.p}>Customer Detail</Text>
          <Text style={style.p}>Name : {user.name}</Text>
          <Text style={style.p}>Email : {user.email}</Text>
        </Container>
      </Section>
    </Html>
  );
}

// Styles for the email template
