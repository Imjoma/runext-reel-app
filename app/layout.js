import Topbar from "./components/Topbar";
import "./globals.css";

import IconContextProvider from "./context/IconContext";

export const metadata = {
  title: "RU:Next",
  description:
    "R U Next? (알 유 넥스트?) is an upcoming 2023 girl group reality survival show created by Belift Lab. It is scheduled to premiere on June 30, 2023 and broadcast every Friday at 8:50 p.m. KST on JTBC and will follow the process of creating a new girl group.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <IconContextProvider>
          <Topbar />
          {children}
        </IconContextProvider>
      </body>
    </html>
  );
}
