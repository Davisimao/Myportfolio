import { Provider } from "@/store/components/ui/provider";
import "./globals.css";

export const metadata = {
  title: "Davi Simão",
  description: "Feito por davi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="bg-slate-200 text-black" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
