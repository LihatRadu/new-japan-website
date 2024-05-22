import Footer from "@/components/Footer";
import NavMenu from "@/components/NavMenu";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavMenu />
      <Footer />
    </main>
  );
}
