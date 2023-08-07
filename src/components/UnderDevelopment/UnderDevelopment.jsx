import { useEffect } from "react";

export default function UnderDevelopment() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  });

  return (
    <div className="flex justify-center items-center text-center text-4xl h-screen w-auto bg-gradient-to-b from-neutral-900 to-sky-950">
      <h1>COMING SOON!</h1>
    </div>
  );
}
