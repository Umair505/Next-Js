"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// Custom nprogress style
NProgress.configure({ showSpinner: false, speed: 500, trickleSpeed: 200 });

export default function RouteProgressProvider() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.start();
    NProgress.done();
  }, [pathname]);

  return null;
}
