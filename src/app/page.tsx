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

{
  /* <section className="bg-yellow-400 absolute bottom-2 left-0 right-0 h-8 w-full flex justify-around">
<div className="bg-red-500 flex flex-col items-center relative">
  <span className="bg-yellow-400 w-10 after:absolute after:w-5 after:h-5 after:-right-[19px] after:top-[3px] after:shadow-[-7px_7px_yellow] after:bg-transparent after:rounded-full   h-10 absolute -top-[70%] before:absolute before:w-5 before:h-5 before:bg-yellow-600 before:-left-[19px] before:top-[3px] before:shadow-[7px_7px_yellow] before:bg-transparent before:rounded-full grid place-content-center rounded-full">
    <TiHome />
  </span>
  <span>Home</span>
</div>
<div className="bg-yellow-500 flex flex-col items-center">
  <span>
    <TiHome />
  </span>
  <span>Home</span>
</div>
<div className="bg-blue-500 flex flex-col items-center">
  <span>
    <TiHome />
  </span>
  <span>Home</span>
</div>
<div className="bg-gray-500 flex flex-col items-center">
  <span>
    <TiHome />
  </span>
  <span>Home</span>
</div>
<div className="bg-slate-500 flex flex-col items-center">
  <span>
    <TiHome />
  </span>
  <span>Home</span>
</div>
</section> */
}
