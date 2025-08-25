"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 py-6 bg-[#040C15] h-screen flex flex-col items-center">
      <nav className="flex flex-col gap-12">
        {/* Home */}
        <Link
          href="/"
          className={`flex items-center text-xl gap-2 ${
            pathname === "/" ? "text-red-500" : "text-white"
          } hover:text-red-500`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20.625"
            height="20.437"
            viewBox="0 0 20.625 20.437"
            className="w-5 h-5"
          >
            <path
              d="M6.169,18.937v-7.4A1.851,1.851,0,0,1,8.021,9.683h3.392a1.851,1.851,0,0,1,1.851,1.851v7.4h3.394a2.468,2.468,0,0,0,2.467-2.468V9.208a3.713,3.713,0,0,0-1.271-2.79L11.182.606a2.468,2.468,0,0,0-3.24,0L1.271,6.417A3.713,3.713,0,0,0,0,9.208v7.261a2.468,2.468,0,0,0,2.468,2.468h10.8"
              transform="translate(0.75 0.75)"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
          Home
        </Link>

        {/* Tournaments */}
        <Link
          href="/tournaments"
          className={`flex items-center text-xl gap-2 ${
            pathname === "/tournaments" ? "text-red-500" : "text-white"
          } hover:text-red-500`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15.623"
            height="15.623"
            viewBox="0 0 15.623 15.623"
            className="w-5 h-5"
          >
            <g transform="translate(-2.031 -2.031)">
              <path
                d="M8.437,17.154h5.624m-2.812,0v-4.5m4.5-3.937c0-1.78,0-4.732,0-5.624a.562.562,0,0,0-.562-.562L7.315,2.54a.562.562,0,0,0-.562.561c0,1.075,0,4.54,0,5.617,0,2.259,2.917,3.937,4.5,3.937S15.748,10.977,15.748,8.718Z"
                transform="translate(-1.406)"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
              />
              <path
                d="M5.343,5.063H2.531v.562c0,1.941,1.179,3.937,2.812,3.937m9-4.5h2.812v.562c0,1.941-1.179,3.937-2.812,3.937"
                transform="translate(0 -0.844)"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
              />
            </g>
          </svg>
          Tournaments
        </Link>
           <Link
          href="/teams"
          className={`flex items-center text-xl gap-2 ${
            pathname === "/teams" ? "text-red-500" : "text-white"
          } hover:text-red-500`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15.623"
            height="15.623"
            viewBox="0 0 15.623 15.623"
            className="w-5 h-5"
          >
            <g transform="translate(-2.031 -2.031)">
              <path
                d="M8.437,17.154h5.624m-2.812,0v-4.5m4.5-3.937c0-1.78,0-4.732,0-5.624a.562.562,0,0,0-.562-.562L7.315,2.54a.562.562,0,0,0-.562.561c0,1.075,0,4.54,0,5.617,0,2.259,2.917,3.937,4.5,3.937S15.748,10.977,15.748,8.718Z"
                transform="translate(-1.406)"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
              />
              <path
                d="M5.343,5.063H2.531v.562c0,1.941,1.179,3.937,2.812,3.937m9-4.5h2.812v.562c0,1.941-1.179,3.937-2.812,3.937"
                transform="translate(0 -0.844)"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
              />
            </g>
          </svg>
          Teams
        </Link>
      </nav>
    </div>
  );
}
