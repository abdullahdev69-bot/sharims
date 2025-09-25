import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main style={{ paddingTop: "var(--navbar-height)" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

// bg-gradient-to-b from-gray-900 to-black
