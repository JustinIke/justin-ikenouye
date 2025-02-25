import Header from "./components/header";
import Work from "./components/work";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-cutive-mono)]">
      <main>
        <Header />
        <Work />
        <Footer />
      </main>
    </div>
  );
}
