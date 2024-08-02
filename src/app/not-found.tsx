import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div>
        <h1 className="pb-10">404 Page Not Found</h1>
        <Link href="/">
          <div className="w-[250px] h-[55px] shadow-xl mx-auto bg-secondary rounded-xl flex justify-center items-center hover:scale-110 transition-transform">
            <p className="text-light">Home</p>
            <svg
              className="w-[24px] h-[24px] ml-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.25 8.25L21 12M21 12L17.25 15.75M21 12H3"
                stroke="#EAF0FA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}
