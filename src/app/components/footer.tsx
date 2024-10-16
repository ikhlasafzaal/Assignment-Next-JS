import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-auto">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
          </p>
          <ul className="flex justify-center gap-6 mt-4">
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
  