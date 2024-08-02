"use client";

import Link from "next/link";
import { useState } from "react";

export default function Theme() {
  const [theme, setTheme] = useState("dark");

  return (
    <div
      className={`${theme} w-full flex justify-end pt-3 sm:pt-5 pr-5 sm:pr-10 absolute z-50`}
    >
      <Link href="/" className="mr-auto pl-5">
        <svg
          fill="none"
          strokeWidth={1.5}
          className="stroke-dark dark:stroke-light h-6 sm:h-10 hover:scale-110 transition-transform"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </Link>
      <div
        className="w-10 h-5 sm:w-20 sm:h-10 rounded-full bg-light border-2 sm:border-4 border-secondary cursor-pointer flex items-center"
        onClick={() => {
          document.documentElement.classList.toggle("dark");
          if (theme === "dark") setTheme("");
          else setTheme("dark");
        }}
      >
        <div className="h-[0.875rem] w-[0.875rem] sm:h-7 sm:w-7 rounded-full bg-primary mx-[0.125rem] sm:mx-1 transition-transform transform translate-x-[1.125rem] sm:translate-x-9 dark:translate-x-0 shadow-lg"></div>
      </div>
      <div className="absolute w-10 h-5 sm:w-20 sm:h-10 flex items-center justify-center">
        <div
          className="flex w-[1.875rem] sm:w-15 justify-between cursor-pointer"
          onClick={() => {
            document.documentElement.classList.toggle("dark");
            if (theme === "dark") setTheme("");
            else setTheme("dark");
          }}
        >
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 sm:w-6"
          >
            <path
              className="fill-dark dark:fill-light"
              d="M21.0672 11.8568L20.4253 11.469L21.0672 11.8568ZM12.1432 2.93276L11.7553 2.29085V2.29085L12.1432 2.93276ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM12 21.25C6.89137 21.25 2.75 17.1086 2.75 12H1.25C1.25 17.9371 6.06294 22.75 12 22.75V21.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75V1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75ZM15.5 14.25C12.3244 14.25 9.75 11.6756 9.75 8.5H8.25C8.25 12.5041 11.4959 15.75 15.5 15.75V14.25ZM20.4253 11.469C19.4172 13.1373 17.5882 14.25 15.5 14.25V15.75C18.1349 15.75 20.4407 14.3439 21.7092 12.2447L20.4253 11.469ZM9.75 8.5C9.75 6.41182 10.8627 4.5828 12.531 3.57467L11.7553 2.29085C9.65609 3.5593 8.25 5.86509 8.25 8.5H9.75ZM12 2.75C11.9115 2.75 11.8077 2.71008 11.7324 2.63168C11.6686 2.56527 11.6538 2.50244 11.6503 2.47703C11.6461 2.44587 11.6482 2.35557 11.7553 2.29085L12.531 3.57467C13.0342 3.27065 13.196 2.71398 13.1368 2.27627C13.0754 1.82126 12.7166 1.25 12 1.25V2.75ZM21.7092 12.2447C21.6444 12.3518 21.5541 12.3539 21.523 12.3497C21.4976 12.3462 21.4347 12.3314 21.3683 12.2676C21.2899 12.1923 21.25 12.0885 21.25 12H22.75C22.75 11.2834 22.1787 10.9246 21.7237 10.8632C21.286 10.804 20.7293 10.9658 20.4253 11.469L21.7092 12.2447Z"
            />
          </svg>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 sm:w-6"
          >
            <circle
              cx="12"
              cy="12"
              r="5"
              className="stroke-light dark:stroke-dark"
              strokeWidth="1.5"
            />
            <path
              d="M12 2V4"
              className="stroke-light dark:stroke-dark"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M12 20V22"
              className="stroke-light dark:stroke-dark"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M4 12L2 12"
              className="stroke-light dark:stroke-dark"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M22 12L20 12"
              className="stroke-light dark:stroke-dark"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M19.7778 4.22266L17.5558 6.25424"
              className="stroke-light dark:stroke-dark"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M4.22217 4.22266L6.44418 6.25424"
              className="stroke-light dark:stroke-dark"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M6.44434 17.5557L4.22211 19.7779"
              className="stroke-light dark:stroke-dark"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M19.7778 19.7773L17.5558 17.5551"
              className="stroke-light dark:stroke-dark"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
