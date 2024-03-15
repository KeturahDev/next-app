import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { AuthOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(AuthOptions);

  return (
    <main>
      <h1>hello {session?.user?.name ? session?.user?.name : "wurld"}</h1>
      <Link href="/users">users</Link>
      <ProductCard />
    </main>
  );
}
