import Banner from "@/components/home/Banner";
import NavList from "@/components/NavList";
import ProductsBox from "@/components/home/ProductsBox";
import ProductionHighlight from "@/components/ProductionHighlight";
import { useRouter } from 'next/router'

export default function Home() {
  return (
    <main className="">
      <Banner></Banner>
      <NavList />
      <ProductsBox></ProductsBox>
      <ProductionHighlight />
      <div className="h-20"></div>
    </main>
  );
}
