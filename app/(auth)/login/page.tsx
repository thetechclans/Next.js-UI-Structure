"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import "@/styles/globals.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import { apiService } from "@/services/api.service";
import { Form } from "@/components/ui-components/form";
import { Card } from "@/components/ui/card";
import Spinner from "@/components/ui/spinner";
import { Label } from "@/components/ui/label";

export default function Login2Template() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   try {
  //     const response = await apiService.AuthLogin({
  //       endpoint: "login/", // Replace with your actual login endpoint
  //       body: { username, password },
  //     });

  //     if (response.success) {
  //       toast({
  //         title: "Login successful",
  //         description: "You are being redirected to the dashboard.",
  //         variant: "default",
  //       });
  //       router.push("/home");
  //     } else {
  //       toast({
  //         title: "Login failed",
  //         description: response.error || "Invalid credentials",
  //         variant: "destructive",
  //       });
  //     }
  //   } catch (error: any) {
  //     toast({
  //       title: "Error",
  //       description: error.message || "An unexpected error occurred.",
  //       variant: "destructive",
  //     });
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const STATIC_CREDENTIALS = [
    { username: "admin", password: "admin123", role: "Admin" },
    { username: "member", password: "member123", role: "Member" },
    {
      username: "beneficiary",
      password: "beneficiary123",
      role: "Beneficiary",
    },
  ] as const;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate loading

    const user = STATIC_CREDENTIALS.find(
      (cred) => cred.username === username && cred.password === password
    );

    if (user && user.role) {
      localStorage.setItem("userRole", user.role);

      if (user.role === "Admin") {
        router.push("/adminDashboard");
      } else if (user.role === "Member") {
        router.push("/MemberDashboard");
      } else if (user.role === "Beneficiary") {
        router.push("/Benificiaryhome");
      } else {
        toast({
          title: "Login failed",
          description: "Unknown user role",
          variant: "destructive",
        });
      }
    }

    setIsLoading(false);
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-primary textstyle">
      {/* Left side - Image/Branding */}
      <div className="relative flex w-full items-center justify-center ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="p-12 text-center text-white text-nowrap mx-6"
        >
          <h1 className="mb-6 text-4xl font-bold wrap text-nowrap">
            Welcome to Our Platform
          </h1>
          <p className="mb-8 text-lg ">
            Manage your business with our powerful dashboard
          </p>
        </motion.div>
        {/* </div> */}

         {/* Right side - Login form */}
        <div className="relative flex w-1/2 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeIn", delay: 0.2 }}
            className="relative w-full max-w-md p-8 px-10"
          >
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-200 opacity-50 mt-3 ml-3 rounded-tl-lg"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-purple-200 opacity-50 mb-3 mr-3 rounded-br-lg"></div>
            
            <Card className="w-full space-y-8 backdrop-blur-sm bg-white/90 border border-white/20 rounded-2xl shadow-xl p-8">
              <div className="space-y-3 text-center">
                <h2 className="text-3xl font-bold">Sign in to your account</h2>
                <p className="text-muted-foreground">
                  Enter your credentials to access your account
                </p>
              </div>

              <Form onSubmit={handleSubmit} className="space-y-6">
                {/* Username */}
                <div className="space-y-2">
                  <Label htmlFor="username">UserName</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="username"
                      placeholder="name"
                      type="text"
                      className="h-12 pl-12"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="password"
                      placeholder="password"
                      type={showPassword ? "text" : "password"}
                      className="h-12 px-12"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <Button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 h-5 w-5 bg-transparent text-muted-foreground"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <EyeOff className="h-9 w-9" />
                      ) : (
                        <Eye className="h-9 w-9" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Forgot Password */}
                <Link href="/templates/auth/forgot-password" className="text-sm text-textprimary mt-5">
                  Forgot password?
                </Link>

                {/* Submit Button */}
                <Button className="h-12 w-full text-base" type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Spinner />
                      Signing in...
                    </>
                  ) : (
                    "Sign in"
                  )}
                </Button>

                {/* Sign Up Link */}
                <p className="text-center text-sm text-muted-foreground">
                  Don&apos;t have an account?{" "}
                  <Link href="/register" className="text-primary underline-offset-4 hover:underline">
                    Sign up
                  </Link>
                </p>
              </Form>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
 
