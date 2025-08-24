import "./globals.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0f0f0f] text-white flex h-[100vh] overflow-hidden">
        <div className="bg-[#040C15] fixed top-0 left-0 right-0 z-50 h-[174px]">
          <Navbar />
        </div>
        <div className="w-full mt-[174px]">
          <div className="w-64 bg-[#141414] fixed top-[174px] bottom-0">
            <Sidebar />
          </div>
          <main className="ml-64 overflow-y-auto top-[174px] h-[calc(100vh-174px)]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
