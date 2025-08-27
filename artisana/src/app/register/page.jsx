import Image from "next/image";

import React from "react";
import RegisterForm from "./components/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-2">Register</h1>
      <section className="container mx-auto grid grid-cols-12">
        {/* Left Section */}
        <div className="col-span-12 md:col-span-6 flex justify-center items-center">
          <Image
            className="hidden md:block"
            src={"/assets/images/signup.svg"}
            width={460}
            height={500}
            alt={"Authentication Image"}
          />
        </div>

        {/* Right Section */}
        <div className="col-span-12 md:col-span-6 flex justify-center items-center">
          <RegisterForm />
        </div>
      </section>
    </div>
  );
}
