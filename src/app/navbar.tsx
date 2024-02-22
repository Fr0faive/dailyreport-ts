import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="flex items-center justify-between gap-6 py-3 px-11">
        <h1 className="text-base font-bold text-center">Daily Report - Logo</h1>
        <ul className="flex gap-4">
          <Link href={"/"}>
            <li className="hover:text-blue-500">Home</li>
          </Link>
          <Link href={"/report"}>
            <li>Report</li>
          </Link>
          <Link href={"/about"}>
            <li>About</li>
          </Link>
        </ul>
        <Link href={"/auth/login"}>Login</Link>
      </div>
    </nav>
  );
}
