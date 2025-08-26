"use client";
import { FaGoogle } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function SocialLogin() {
  const router = useRouter();
  const session = useSession();

  const handleGoogleLogin = () => {
    signIn("google");
  };

  useEffect(() => {
    if (session?.status == "authenticated") {
      router.push("/");
      toast.success("Successfully Logged In");
    }
  }, [session?.status, router]);

  return (
    <div className="flex justify-center">
      <button
        onClick={handleGoogleLogin}
        className="flex items-center justify-center w-full max-w-xs py-3 px-6 bg-white border border-amber-200 rounded-lg text-amber-700 hover:bg-amber-50 transition-colors shadow-sm gap-3"
        aria-label="Sign in with Google"
      >
        <FaGoogle className="text-lg" />
        <span className="font-medium">Continue with Google</span>
      </button>
    </div>
  );
}