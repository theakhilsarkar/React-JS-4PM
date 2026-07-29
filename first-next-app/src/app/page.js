import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <Link href="/profile">profile</Link>
      <h1>Home Page</h1>
    </>
  );
}

// JS
