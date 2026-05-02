import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const SignInButton = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  return (
    <div className="flex flex-wrap items-center justify-end gap-2 md:gap-3">
      <div className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-[#93c5fd]">
        <Image
          src="https://img.icons8.com/color/1200/user.jpg"
          alt="User avatar"
          className="h-full w-full object-cover"
          height={200}
          width={200}
        />
      </div>
      <div className="hidden md:block">
        <p className="font-medium text-[#0f3d66]">Wasif Hasan</p>
      </div>
      <Link
        href="/signin"
        className="rounded-md bg-[#1f5d99] px-3 py-2 text-sm text-[#eaf4ff] transition duration-300 hover:bg-[#0f3d66] active:bg-[#0b2d4d] md:px-4 md:text-base"
      >
        Sign In
      </Link>
      <button className="rounded-md border border-[#1f5d99] bg-transparent px-3 py-2 text-sm text-[#1f5d99] transition duration-300 hover:bg-[#93c5fd40] hover:text-[#0f3d66] active:bg-[#1f5d99] active:text-[#eaf4ff] md:px-4 md:text-base">
        Sign Out
      </button>
    </div>
  );
};

export default SignInButton;
