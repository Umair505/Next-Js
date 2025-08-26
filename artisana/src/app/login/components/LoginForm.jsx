"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SocialLogin from "./SocialLogin";
import { toast } from "react-toastify";

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      });

      if (response.ok) {
        toast.success("Logged in successfully");
        router.push("/");
        form.reset();
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }

    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-xl border border-amber-100">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-amber-900">Welcome Back</h2>
        <p className="text-amber-600 mt-2 text-sm">Login to continue</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-amber-800 mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors outline-none"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-amber-800 mb-2"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors outline-none"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-3 px-4 rounded-xl font-semibold text-white shadow-sm transition-all ${
            isLoading
              ? "bg-amber-400 cursor-not-allowed"
              : "bg-amber-600 hover:bg-amber-700 hover:shadow-md"
          }`}
        >
          {isLoading ? "Signing In..." : "Sign In"}
        </button>
      </form>

      {/* Divider */}
      <div className="my-8 flex items-center">
        <div className="flex-grow border-t border-amber-200"></div>
        <span className="mx-4 text-amber-500 text-sm">Or continue with</span>
        <div className="flex-grow border-t border-amber-200"></div>
      </div>

      {/* Social Login */}
      <div className="mb-6">
        <SocialLogin />
      </div>

      {/* Footer */}
      <p className="text-center text-amber-700 text-sm">
        Don’t have an account?{" "}
        <Link
          href="/register"
          className="text-amber-800 font-semibold hover:underline"
        >
          Register
        </Link>
      </p>
    </div>
  );
}
