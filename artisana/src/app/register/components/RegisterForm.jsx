"use client";
import React, { useState } from "react";
import Link from "next/link";
import { registerUser } from "@/app/actions/auth/registerUser";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import SocialLogin from "@/app/login/components/SocialLogin";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const res = await registerUser({ name, email, password });
    setIsLoading(false);

    if (res) {
      router.push("/login");
    } else {
      alert("User already exists or something went wrong!");
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-xl border border-amber-100">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-amber-900">Create Account</h2>
        <p className="text-amber-600 mt-2 text-sm">
          Join our community of art lovers
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-amber-800 mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors outline-none"
            required
          />
        </div>

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
            id="email"
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
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors outline-none pr-12"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-amber-500 hover:text-amber-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-3 px-4 rounded-xl font-semibold text-white shadow-sm transition-all ${
            isLoading
              ? "bg-amber-400 cursor-not-allowed"
              : "bg-amber-600 hover:bg-amber-700 hover:shadow-md"
          }`}
        >
          {isLoading ? "Creating Account..." : "Sign Up"}
        </button>
      </form>

      {/* Divider */}
      <div className="my-8 flex items-center">
        <div className="flex-grow border-t border-amber-200"></div>
        <span className="mx-4 text-amber-500 text-sm">Or continue with</span>
        <div className="flex-grow border-t border-amber-200"></div>
      </div>

      {/* Social Logins */}
      <div className="mb-6">
        <SocialLogin />
      </div>

      {/* Footer */}
      <p className="text-center text-amber-700 text-sm">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-amber-800 font-semibold hover:underline"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
