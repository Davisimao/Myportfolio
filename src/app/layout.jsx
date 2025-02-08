import "./globals.css";
import { Provider } from "./provider";

export const metadata = {
  title: "Davi Simão",
  description: "Feito por davi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
