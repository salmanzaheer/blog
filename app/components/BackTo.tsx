import Link from "next/link";
import va from "@vercel/analytics";

export default function BackTo() {
  return (
    <Link href="https://salmanzaheer.com" target="_blank">
      <button
        onClick={() => {
          va.track("BackToPortfolio");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
      </button>
    </Link>
  );
}
