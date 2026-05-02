"use client";

import { authClient } from "@/lib/auth-client";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";

export default function SignIn() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  const handleForgotPassword = async () => {
    const emailInput = document.querySelector('input[name="email"]');
    const email = emailInput?.value?.trim();

    if (!email) {
      alert("Please enter your email first, then click Forgot Password.");
      return;
    }

    const { data, error } = await authClient.requestPasswordReset({
      email,
      redirectTo: "/signin",
    });

    console.log("requestPasswordReset", { data, error });

    if (!error) {
      alert("Password reset link sent. Please check your email.");
    }
  };

  return (
    <section className="mx-auto w-full max-w-10/12 py-8 md:py-12 lg:py-14">
      <div className="relative overflow-hidden rounded-3xl border border-[#9ac5ee] bg-[#f8fbff]/90 shadow-xl shadow-[#1f5d9920]">
        <div className="absolute left-0 top-0 -z-10 h-full w-full bg-linear-to-br from-[#eff7ff] via-[#e4f2ff] to-[#d8ebff]" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr]">
          <div className="relative border-b border-[#c6def7] p-6 md:p-8 lg:border-b-0 lg:border-r lg:border-[#c6def7] lg:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#0f3d66] md:text-sm">
              Welcome Back
            </p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-[#1f5d99] md:text-4xl lg:text-5xl">
              Sign In To Continue
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#1a4f80] md:text-base">
              Access your borrowed books, due dates, favorites, and personal
              profile from one clean dashboard.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#b8d8f6] bg-[#ffffffb0] px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1f5d99]">
                  Your Dashboard
                </p>
                <p className="mt-1 text-sm text-[#0f3d66]">
                  Track active borrows and returns
                </p>
              </div>
              <div className="rounded-2xl border border-[#b8d8f6] bg-[#ffffffb0] px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1f5d99]">
                  Reading Progress
                </p>
                <p className="mt-1 text-sm text-[#0f3d66]">
                  Keep your library goals in sync
                </p>
              </div>
            </div>

            <p className="mt-7 text-sm text-[#1a4f80]">
              No membership yet?{" "}
              <Link
                href="/signup"
                className="font-bold text-[#1f5d99] underline decoration-[#1f5d9940] underline-offset-4 transition hover:text-[#0f3d66]"
              >
                Sign Up
              </Link>
            </p>
          </div>

          <div className="p-6 md:p-8 lg:p-10">
            <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
              <Button
                type="button"
                onPress={handleGoogleSignIn}
                variant="bordered"
                className="h-11 w-full rounded-xl border-[#1f5d99] bg-[#ffffffd4] text-sm font-semibold text-[#0f3d66] hover:bg-[#edf5ff] md:h-12"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    fill="#FFC107"
                    d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"
                  />
                  <path
                    fill="#FF3D00"
                    d="M6.3 14.7l6.6 4.8C14.7 15.1 18.9 12 24 12c3 0 5.8 1.1 8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24 44c5.2 0 10-2 13.6-5.3l-6.3-5.2C29.2 35 26.7 36 24 36c-5.3 0-9.7-3.3-11.4-8l-6.6 5.1C9.3 39.6 16.1 44 24 44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.6 20.5H42V20H24v8h11.3c-.8 2.4-2.4 4.4-4.7 5.8l.1-.1 6.3 5.2C36.6 39.1 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"
                  />
                </svg>
                Continue with Google
              </Button>

              <div className="flex items-center gap-3 py-1">
                <div className="h-px w-full bg-[#b9d9f5]" />
                <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-[#1f5d99]">
                  or
                </span>
                <div className="h-px w-full bg-[#b9d9f5]" />
              </div>

              <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    return "Please enter a valid email address";
                  }

                  return null;
                }}
              >
                <Label className="text-[#0f3d66]">Email</Label>
                <Input
                  placeholder="you@example.com"
                  className="rounded-xl border border-[#9ac5ee] bg-[#edf5ff]"
                />
                <FieldError />
              </TextField>

              <TextField isRequired name="password" type="password">
                <Label className="text-[#0f3d66]">Password</Label>
                <Input
                  placeholder="Enter your password"
                  className="rounded-xl border border-[#9ac5ee] bg-[#edf5ff]"
                />
                <Description className="text-[#1f5d99]">
                  Use your account password to sign in securely.
                </Description>
                <FieldError />
              </TextField>

              <Link href="/forgot-password" className="self-start">
                <button
                type="button"
                onClick={handleForgotPassword}
                className="self-start text-sm font-semibold text-[#1f5d99] underline decoration-[#1f5d9940] underline-offset-4 transition hover:text-[#0f3d66]"
              >
                Forgot Password?
              </button>
              </Link>

              <Button
                type="submit"
                className="mt-1 h-11 w-full rounded-xl bg-[#1f5d99] text-sm font-bold text-[#eaf4ff] hover:bg-[#0f3d66] md:h-12"
              >
                Sign In
              </Button>

              <p className="pt-1 text-center text-sm text-[#1a4f80]">
                Have no membership?{" "}
                <Link
                  href="/signup"
                  className="font-bold text-[#1f5d99] underline decoration-[#1f5d9940] underline-offset-4 transition hover:text-[#0f3d66]"
                >
                  Sign Up
                </Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
