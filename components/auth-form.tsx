"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { authFormSchema } from "@/lib/utils";
import { Form } from "./ui/form";
import { Button } from "./ui/button";
import CustomInput from "./custom-input";
import { Loader2 } from "lucide-react";

const AuthForm = ({ type }: { type: string }) => {
  const formSchema = authFormSchema(type);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    console.log(values);
    setLoading(false);
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href={"/"} className=" cursor-pointer flex gap-1 items-center">
          <Image src={"/icons/logo.svg"} width={34} height={34} alt="Logo" />
          <h1 className="text-26 font-ibm-plex-serif text-black-1 font-bold">
            Bankify
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link your account to get started"
                : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4"></div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "sign-up" && (
                <>
                  <div className="flex gap-4">
                    <CustomInput
                      name="firstName"
                      label="First Name"
                      placeholder="John"
                      control={form.control}
                    />

                    <CustomInput
                      name="lastName"
                      label="Last Name"
                      placeholder="Doe"
                      control={form.control}
                    />
                  </div>

                  <CustomInput
                    name="address"
                    label="Address"
                    placeholder="Enter your specific address"
                    control={form.control}
                  />
                  <div className="flex gap-4">
                    <CustomInput
                      name="state"
                      label="State"
                      placeholder="ex: SINDH"
                      control={form.control}
                    />

                    <CustomInput
                      name="postalCode"
                      label="Postal Code"
                      placeholder="ex: 75730"
                      control={form.control}
                    />
                  </div>
                  <div className="flex gap-4">
                    <CustomInput
                      name="dateOfBirth"
                      label="Date Of Birth"
                      placeholder="YYYY-MM-DD"
                      control={form.control}
                    />
                    <CustomInput
                      name="phoneNumber"
                      label="Phone Number"
                      placeholder="+92-3**-*******"
                      control={form.control}
                    />
                  </div>
                </>
              )}

              <CustomInput
                name="email"
                label="Email"
                placeholder="Enter your email"
                control={form.control}
              />

              <CustomInput
                name="password"
                label="Password"
                placeholder="Enter your password"
                control={form.control}
              />
              <div className="flex flex-col gap-4">
                <Button className="form-btn" type="submit" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" /> &nbsp; Loading...
                    </>
                  ) : type === "sign-in" ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type == "sign-in"
                ? "Don't Have an account?"
                : "Already have an account"}
            </p>
            <Link
              className="form-link"
              href={type === "sign-in" ? "/sign-up" : "/sign-in"}
            >
              {type === "sign-in" ? "Sign Up" : "Sign In"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
