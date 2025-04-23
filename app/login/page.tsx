// "use client";

// import { useLocale } from "@/components/locale/locale-provider";
// import { Form } from "@/components/ui-components/form";
// import { FormField } from "@/components/ui-components/form-field";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { API_PATHS } from "@/services/api-endpoints";
// import { apiService } from "@/services/api.service";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useState } from "react";

// export default function Login() {
//   const { t, dir } = useLocale();
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const redirectTo = searchParams?.get("redirectTo") || "/referenceData";

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!username || !password) {
//       setErrorMessage("Username and password are required");
//       return;
//     }

//     setIsLoading(true);
//     setErrorMessage("");
//     setSuccessMessage("");

//     const params = {
//       username,
//       password,
//     };

//     try {
//       const response = await apiService.create({
//         endpoint: API_PATHS.LOGIN,
//         body: params,
//       });

//       if (response.success) {
//         setSuccessMessage(response.message || "Login successful!");
//         router.push(redirectTo);
//       } else {
//         setErrorMessage(response.message || "Login failed. Please try again.");
//       }
//     } catch (error: any) {
//       setErrorMessage(error.message || "An unexpected error occurred.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <Card className="w-[500px] mx-auto shadow-lg">
//         <CardHeader>
//           <CardTitle>{t("login")}</CardTitle>
//           <CardDescription>{t("login_to_continue")}</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <Form onSubmit={handleSubmit}>
//             <FormField
//               label={t("username")}
//               type="name"
//               placeholder="Super Admin"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//             <FormField
//               label={t("password")}
//               type="password"
//               placeholder="********"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />

//             {errorMessage && (
//               <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
//                 {errorMessage}
//               </div>
//             )}

//             {successMessage && (
//               <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
//                 {successMessage}
//               </div>
//             )}

//             <Button type="submit" className="w-full" disabled={isLoading}>
//               {isLoading ? t("loading") : t("login")}
//             </Button>
//           </Form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }


"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import { apiService } from "@/services/api.service";

export default function Login2Template() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await apiService.AuthLogin({
        endpoint: "login/", // Replace with your actual login endpoint
        body: { username, password },
      });

      if (response.success) {
        toast({
          title: "Login successful",
          description: "You are being redirected to the dashboard.",
          variant: "default",
        });
        router.push("/referenceData");
      } else {
        toast({
          title: "Login failed",
          description: response.error || "Invalid credentials",
          variant: "destructive",
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left side - Image/Branding */}
      <div className="relative flex w-full items-center justify-center bg-primary md:w-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="p-8 text-center text-white"
        >
          <h1 className="mb-6 text-4xl font-bold">Welcome to Our Platform</h1>
          <p className="mb-8 text-lg">Manage your business with our powerful dashboard</p>
          <div className="mx-auto max-w-md">
            <img
              src="/interconnected-data-flow.png"
              alt="Dashboard illustration"
              className="mx-auto rounded-lg shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Right side - Login form */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex w-full items-center justify-center bg-background p-8 md:w-1/2"
      >
        <div className="mx-auto w-full max-w-md space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Sign in to your account</h2>
            <p className="text-muted-foreground">Enter your credentials to access your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">UserName</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="username"
                    placeholder="name"
                    type="text"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    className="h-12 pl-12"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/templates/auth/forgot-password"
                    className="text-sm text-primary underline-offset-4 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="h-12 pl-12 pr-12"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 h-5 w-5 text-muted-foreground"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>

            <Button className="h-12 w-full text-base" type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <svg
                    className="mr-2 h-4 w-4 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </Button>

            <div className="relative flex items-center justify-center">
              <Separator className="w-full" />
              <span className="absolute bg-background px-2 text-xs text-muted-foreground">OR CONTINUE WITH</span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <Button variant="outline" className="h-12">
                {/* Add social login icons */}
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link href="/templates/auth/register2" className="text-primary underline-offset-4 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
}