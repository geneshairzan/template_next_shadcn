import React from "react";
import UI from "@ui";
// import IconButton from "@mui/material/IconButton";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import XIcon from "@mui/icons-material/X";
// import FacebookIcon from "@mui/icons-material/Facebook";

export default function App() {
  return (
    <UI.Col alignItems="center" className="w-screen py-5 bg-primary items-center">
      <UI.Col className="w-screen max-w-[1280px] p-2">
        <UI.Row className="justify-between w-screen max-w-[1280px] items-center gap-2">
          <UI.Col>
            <UI.Text variant="title" bold color="white" className="border-b-2 border-[gold] mb-2">
              Company
            </UI.Text>
            <UI.Col className="gap-2">
              <UI.Row className="gap-2 items-center">
                <UI.Icon name="mail" color="white" />
                <UI.Text variant="body1" color="white">
                  smartitechnology.id@gmail.com
                </UI.Text>
              </UI.Row>

              <UI.Row className="gap-2 items-center">
                <UI.Icon name="phone" color="white" />
                <UI.Text variant="body1" color="white">
                  +6221 509 55 654
                </UI.Text>
              </UI.Row>
            </UI.Col>

            <UI.Text variant="body" className="pt-5 text-white">
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                PT. Smarti Sinergi Teknologi
              </span>
              <br />
              Pondok Indah Office Tower 2 <br />
              15th Floor Jl. Sultan Iskandar Muda Kav. V-TA <br />
              Pondok Indah, Kec. Kby. Lama, Kota Jakarta Selatan <br />
              Daerah Khusus Ibukota Jakarta 12310
              <br />
              Jakarta Indonesia 12310 Indonesia
            </UI.Text>
          </UI.Col>
        </UI.Row>
        <UI.Col className="pt-5">
          <UI.Text variant="body" align="left" color="white">
            © {new Date().getFullYear()} | SMARTI adalah merek milik PT. Smarti Sinergi Teknologi. Terdaftar pada Direktorat Jendral Kekayaan Intelektual
            Republik Indonesia.
          </UI.Text>
        </UI.Col>
      </UI.Col>
    </UI.Col>
  );
}
