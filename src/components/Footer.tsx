import { LinkedinIcon } from "lucide-react";
import Link from "next/link";
import TwitterIcon from "./TwitterIcon";
import FacebookIcon from "./FacebookIcon";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full flex items-center h-16 px-4 border-t md:px-6 bg-indigo-500 text-white z-[3000]">
      <p>© 2024 Ajeet Upadhyay. All rights reserved.</p>
      <div className="ml-auto flex gap-4">
        <Link
          className="text-white hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-50"
          href="https://twitter.com/ajeetkrup401"
        >
          <TwitterIcon className="w-6 h-6" />
          <span className="sr-only">Twitter</span>
        </Link>
        <Link
          className="text-white hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-50"
          href="#"
        >
          <FacebookIcon className="w-6 h-6" />
          <span className="sr-only">Facebook</span>
        </Link>
        <Link
          className="text-white hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-50"
          href="#"
        >
          <LinkedinIcon className="w-6 h-6" />
          <span className="sr-only">LinkedIn</span>
        </Link>
      </div>
    </footer>
  );
}
