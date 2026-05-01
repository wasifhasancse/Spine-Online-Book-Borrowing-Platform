import Image from "next/image";

const page = () => {
  return (
    <div className="mx-auto max-w-10/12 flex min-h-screen flex-col items-center justify-center space-y-10 py-14">
      <div className="relative h-30 w-30 overflow-hidden rounded-full ring-2 ring-[#93c5fd]">
        <Image
          src="https://img.icons8.com/color/1200/user.jpg"
          alt="User avatar"
          className="h-full w-full object-cover"
          height={500}
          width={500}
        />
      </div>
      <div>
        <h1 className="text-4xl font-bold text-[#0f3d66]">Wasif Hasan</h1>
        <p className="text-lg text-[#1f5d99]">wasif.hasan@example.com</p>
        <p className="text-lg text-[#1f5d99]">Member since: January 2023</p>
        <h3 className="mt-4 text-xl font-bold text-[#0f3d66]">
          Borrowed Books:
        </h3>
      </div>

      <div className="flex gap-3">
        <button className="rounded-md bg-[#1f5d99] px-4 py-2 text-[#eaf4ff] transition hover:bg-[#0f3d66] active:bg-[#0b2d4d]">
          Update Profile
        </button>
        <button className="rounded-md border border-[#1f5d99] bg-transparent px-4 py-2 text-[#1f5d99] transition hover:bg-[#93c5fd40] hover:text-[#0f3d66] active:bg-[#1f5d99] active:text-[#eaf4ff]">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default page;
