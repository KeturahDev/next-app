import { getServerSession } from "next-auth";
import { AuthOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import catpic from "@/public/images/tender_teddy.jpg";

export default async function Home() {
  const session = await getServerSession(AuthOptions);

  return (
    <main className="relative">
      <h1>Hello {session?.user?.name ? session?.user?.name : "World"}</h1>
      <div className="flex flex-column relative gap-1">
        <Image
          src="https://bit.ly/react-cover"
          alt="catpic"
          fill
          // style={{ objectFit: "cover" }}
          className="object-contain relative"
          // sizes="(max-with: 480px) 100vw, (max-width: 768px): 50vw, 33vw" //for columns
          sizes="100vw" //for columns
          quality={100}
          priority
        />
        <Image src={catpic} alt="catpic" />
      </div>
    </main>
  );
}
