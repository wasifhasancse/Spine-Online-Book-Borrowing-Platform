import Image from "next/image";

const SignInButton = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-[#93c5fd]">
        <Image
          src="https://img.icons8.com/color/1200/user.jpg"
          alt="User avatar"
          className="h-full w-full object-cover"
          height={200}
          width={200}
        />
      </div>
      <div className="hidden sm:block">
        <p className="font-medium text-[#0f3d66]">Wasif Hasan</p>
      </div>
      <button className="rounded-md bg-[#1f5d99] px-4 py-2 text-[#eaf4ff] transition duration-300 hover:bg-[#0f3d66] active:bg-[#0b2d4d]">
        Sign In
      </button>
      <button className="rounded-md border border-[#1f5d99] bg-transparent px-4 py-2 text-[#1f5d99] transition duration-300 hover:bg-[#93c5fd40] hover:text-[#0f3d66] active:bg-[#1f5d99] active:text-[#eaf4ff]">
        Sign Out
      </button>
    </div>
  );
};

export default SignInButton;
