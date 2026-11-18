import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/cormorant-garamond/500-italic.css";
import "@fontsource/mulish/300.css";
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/600.css";
import "./_styles/globals.css";
import Backdrop from "./_components/Backdrop";
import Nav from "./_components/Nav";
import Footer from "./_components/Footer";

export const metadata = {
  title: "Lark & Lace Wedding Photography",
  description: "A fictitious demo wedding photography studio website.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      style={{
        "--font-cormorant": "'Cormorant Garamond'",
        "--font-mulish": "'Mulish'",
      }}
    >
      <body className='font-body text-ink min-h-screen flex flex-col overflow-x-clip'>
        <Backdrop />
        <Nav />
        <main className='flex-1 lg:pl-[17rem]'>{children}</main>
        <div className='lg:pl-[17rem]'>
          <Footer />
        </div>
      </body>
    </html>
  );
}
