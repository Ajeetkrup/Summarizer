import { BookAIcon } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full flex items-center h-16 px-4 border-b md:px-6 bg-sky-500 text-white z-[3000]">
      <Link
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
        href="#"
      >
        <BookAIcon className="w-6 h-6" />
        <span>Summarizer</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/summarizer"
        >
          Summary
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
