import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import UpdateProfile from "../update-profile/page";
import { PencilToSquare } from "@gravity-ui/icons";

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/signin");
  }

  const user = session.user;
  const memberSinceRaw = session?.session?.createdAt || user?.createdAt;
  const memberSince = memberSinceRaw
    ? new Date(memberSinceRaw).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : "Recently joined";

  const profileImage =
    user.image || "https://img.icons8.com/color/1200/user.jpg";

  return (
    <section className="mx-auto w-full max-w-10/12 py-8 md:py-10 lg:py-14">
      <div className="relative overflow-hidden rounded-3xl border border-[#9ac5ee] bg-[#f8fbff]/90 shadow-xl shadow-[#1f5d9920]">
        <div className="grid gap-6 p-5 sm:p-6 md:gap-8 md:p-8 lg:grid-cols-[300px_1fr] lg:p-10">
          <aside className="rounded-2xl border border-[#b7d9f6] bg-[#ffffffbc] p-5 sm:p-6">
            <div className="mx-auto h-24 w-24 overflow-hidden rounded-full ring-4 ring-[#c8e2fa] sm:h-28 sm:w-28">
              <Image
                src={profileImage}
                alt={`${user.name || "User"} avatar`}
                className="h-full w-full object-cover"
                height={500}
                width={500}
              />
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#1f5d99]">
                Member Profile
              </p>
              <h1 className="mt-2 text-2xl font-extrabold text-[#0f3d66] wrap-break-word sm:text-3xl uppercase">
                {user.name || "Library Member"}
              </h1>
              <p className="mt-1 text-sm text-[#1a4f80] break-all">
                {user.email}
              </p>
            </div>

            <div className="mt-5 space-y-2 text-sm">
              <div className="rounded-xl border border-[#c8e2fa] bg-[#edf5ff] px-3 py-2 text-[#0f3d66]">
                <span className="font-semibold">Member Since:</span>{" "}
                {memberSince}
              </div>
              <div className="rounded-xl border border-[#c8e2fa] bg-[#edf5ff] px-3 py-2 text-[#0f3d66]">
                <span className="font-semibold">Account Status:</span> Active
              </div>
            </div>
            <div>
              <Link href={'/update-profile'} className="mt-5 h-11 w-full flex items-center justify-center gap-1.5 rounded-xl border-[#1f5d99] bg-transparent font-semibold text-[#1f5d99] transition hover:bg-[#93c5fd33] hover:text-[#0f3d66]">
                <PencilToSquare className="size-4" />
                Edit Profile
              </Link>
            </div>
          </aside>

          <div className="space-y-5 sm:space-y-6">
            <header>
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#0f3d66] sm:text-sm">
                Dashboard
              </p>
              <h2 className="mt-2 text-2xl font-extrabold leading-tight text-[#1f5d99] sm:text-3xl lg:text-4xl">
                Welcome back, {user.name?.split(" ")[0] || "Reader"}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#1a4f80] sm:text-base">
                Keep your reading journey organized. Track borrowed books,
                update your details, and explore your next favorite title.
              </p>
            </header>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#b7d9f6] bg-[#ffffffbc] px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1f5d99]">
                  Borrowed Books
                </p>
                <p className="mt-2 text-3xl font-extrabold text-[#0f3d66]">0</p>
                <p className="mt-1 text-sm text-[#1a4f80]">
                  No active borrow right now
                </p>
              </div>
              <div className="rounded-2xl border border-[#b7d9f6] bg-[#ffffffbc] px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1f5d99]">
                  Saved Favorites
                </p>
                <p className="mt-2 text-3xl font-extrabold text-[#0f3d66]">0</p>
                <p className="mt-1 text-sm text-[#1a4f80]">
                  Start building your reading list
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#b7d9f6] bg-[#ffffffbc] p-4 sm:p-5">
              <h3 className="text-lg font-bold text-[#0f3d66] sm:text-xl">
                Borrow Activity
              </h3>
              <p className="mt-2 text-sm text-[#1a4f80] sm:text-base">
                You have no active borrow transactions yet. Browse the complete
                collection and borrow your first book.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/all-books"
                className="inline-flex items-center justify-center rounded-xl bg-[#1f5d99] px-5 py-2.5 text-sm font-bold text-[#eaf4ff] transition hover:bg-[#0f3d66]"
              >
                Explore Books
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl border border-[#1f5d99] bg-transparent px-5 py-2.5 text-sm font-semibold text-[#1f5d99] transition hover:bg-[#93c5fd40] hover:text-[#0f3d66]"
              >
                Back To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
