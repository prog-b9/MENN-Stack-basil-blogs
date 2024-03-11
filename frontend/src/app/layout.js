import "./globals.css";
import Navbar from "@/components/home/layout/Navbar";
import Footer from "@/components/home/layout/Footer";
import ProviderMaterialTailwind from "@/providers/ProviderMaterialTailwind";

export const metadata = {
  title: "انفوا للتقنية",
  description: "InfoTech",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProviderMaterialTailwind>
          <Navbar />
          {children}
          <Footer />
        </ProviderMaterialTailwind>
      </body>
    </html>
  );
}
