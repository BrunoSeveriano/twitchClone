import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-4 hover:opacity-75 transition">
        <div className="bg-white rounded-full p-1 mr-8 shrink-0 lg:mr-0 lg:shrink">
          <Image
            src="/logo-bruno_final.png"
            width={32}
            height={32}
            alt="Logo"
          />
        </div>
        <div className={cn("hidden lg:block", font.className)}>
          <p className="text-lg font-semibold">Let&apos;s</p>
          <p className="text-xs text-muted-foreground">Play Games</p>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
