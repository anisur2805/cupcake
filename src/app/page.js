import Banner from "@/components/Banner";
import Foods from "@/components/popular/Foods";
import PreviousPosts from "@/components/previous-posts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <Foods />
      <PreviousPosts />
    </main>
  );
}
