import { ThemeProvider } from "../contexts/theme-context";
import "./globals.css";

export const metadata = {
  title: "Uttam Sharma - Portfolio",
  description: "Full Stack Software Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#171d29] text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
