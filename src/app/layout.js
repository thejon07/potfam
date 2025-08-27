
import "./globals.css";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer"

export const metadata = {
  title:{
    default:"PotFam | This is PotFam"
  }
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
