import Footer from "@/components/home/footer";
import Header from "@/components/home/header";
import Landing from "@/components/home/landing";

export default function Home() {
  return (
    <article className="relative w-full h-screen">
      <Header />
      <Landing />
      <Footer />
    </article>
  );
}
