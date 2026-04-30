import Image from "next/image";

const SignInButton = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-indigo-200">
        <Image
          src="https://img.icons8.com/color/1200/user.jpg"
          alt="User avatar"
          className="h-full w-full object-cover"
          height={200}
          width={200}
        />
      </div>
      <div>
        <p>Wasif Hasan</p>
      </div>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
        Sign In
      </button>
      <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300">
        Sign Out
      </button>
    </div>
  );
};

export default SignInButton;
