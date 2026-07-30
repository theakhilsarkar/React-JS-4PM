import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center">
      <div className="flex p-5 justify-between container">
        <div>Logo</div>
        <div className="flex gap-4">
          <Link href={"/"}>Home</Link>
          <Link href={"/form"}>Form</Link>
          <Link href={"/user"}>User</Link>
        </div>
      </div>
    </nav>
  );
}
