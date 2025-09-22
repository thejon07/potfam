
import "../../../src/app/globals.css"
import Navbar from "../../components/ui/navbar";
import Footer from "../../components/ui/footer"
import { auth } from "../../auth";

export const metadata = {
  title:{
    default:"PotFam | This is PotFam"
  }
}
export default async function RootLayout({ children }) {
  const session = await auth()
  console.log(session)
  return (
    <html lang="en">
      <body>
        <Navbar authorize={session}/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
