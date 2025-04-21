"use client";

import { useLocale } from "@/components/locale/locale-provider";
import { Form } from "@/components/ui-components/form";
import { FormField } from "@/components/ui-components/form-field";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { API_PATHS } from "@/services/api-endpoints";
import { apiService } from "@/services/api.service";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const { t, dir } = useLocale();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const redirectTo = searchParams?.get("redirectTo") || "/referenceData";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage("Username and password are required");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    const params = {
      username,
      password,
    };

    try {
      const response = await apiService.create({
        endpoint: API_PATHS.LOGIN,
        body: params,
      });

      if (response.success) {
        setSuccessMessage(response.message || "Login successful!");
        router.push(redirectTo);
      } else {
        setErrorMessage(response.message || "Login failed. Please try again.");
      }
    } catch (error: any) {
      setErrorMessage(error.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[500px] mx-auto shadow-lg">
        <CardHeader>
          <CardTitle>{t("login")}</CardTitle>
          <CardDescription>{t("login_to_continue")}</CardDescription>
        </CardHeader>
        <CardContent>
          <Form onSubmit={handleSubmit}>
            <FormField
              label={t("username")}
              type="name"
              placeholder="Super Admin"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <FormField
              label={t("password")}
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {errorMessage && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                {errorMessage}
              </div>
            )}

            {successMessage && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                {successMessage}
              </div>
            )}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? t("loading") : t("login")}
            </Button>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
