"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui-components/form";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import { Search } from "@/components/ui-components/search";
import { Pagination } from "@/components/ui-components/pagination";
import { Notification } from "@/components/ui-components/notification";
import { OtpInput } from "@/components/ui-components/otp-input";
import { useLocale } from "@/components/locale/locale-provider";
import { Users, HomeIcon, Settings } from "lucide-react";
import { FormField } from "@/components/ui-components/form-field";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  const { t, dir } = useLocale();
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState<
    "success" | "error" | "info" | "warning"
  >("info");
  const [otpValue, setOtpValue] = useState("");

  const handleShowNotification = (
    type: "success" | "error" | "info" | "warning"
  ) => {
    setNotificationType(type);
    setShowNotification(true);
  };

  return (
      <main className="container mx-auto p-4 space-y-8" dir={dir}>
        <h1 className="text-3xl font-bold text-center">
          {t("ui_components_demo")}
        </h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{t("buttons")}</h2>
          <div className="flex flex-wrap gap-4">
            <Button>{t("submit")}</Button>
            <Button variant="destructive">{t("error")}</Button>
            <Button variant="outline">{t("cancel")}</Button>
            <Button variant="secondary">{t("next")}</Button>
            <Button variant="ghost">{t("close")}</Button>
            <Button variant="link">{t("info")}</Button>
            <Button size="sm">{t("submit")}</Button>
            <Button size="lg">{t("submit")}</Button>
            <Button isLoading>{t("submit")}</Button>
          </div>
        </section>

        {/* <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{t("search_component")}</h2>
          <Card>
            <CardContent className="pt-6">
              <Search
                placeholder={t("search_placeholder")}
                value={searchValue}
                onChange={setSearchValue}
                onSearch={(value) => alert(`Searching for: ${value}`)}
                onClear={() => setSearchValue("")}
              />
            </CardContent>
          </Card>
        </section> */}

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            {t("pagination_component")}
          </h2>
          <Card>
            <CardContent className="pt-6">
              <Pagination
                currentPage={currentPage}
                totalPages={10}
                onPageChange={setCurrentPage}
                siblingCount={1}
              />
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            {t("notification_component")}
          </h2>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={() => handleShowNotification("success")}
                  variant="outline"
                >
                  {t("success")}
                </Button>
                <Button
                  onClick={() => handleShowNotification("error")}
                  variant="outline"
                >
                  {t("error")}
                </Button>
                <Button
                  onClick={() => handleShowNotification("info")}
                  variant="outline"
                >
                  {t("info")}
                </Button>
                <Button
                  onClick={() => handleShowNotification("warning")}
                  variant="outline"
                >
                  {t("warning")}
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{t("otp_component")}</h2>
          <Card>
            <CardHeader>
              <CardTitle>{t("enter_otp")}</CardTitle>
            </CardHeader>
            <CardContent>
              <OtpInput
                value={otpValue}
                onChange={setOtpValue}
                length={6}
                error={
                  otpValue.length > 0 && otpValue.length < 4
                    ? t("invalid_otp")
                    : undefined
                }
              />
            </CardContent>
            <CardFooter className="justify-end">
              <Button disabled={otpValue.length !== 4}>{t("submit")}</Button>
            </CardFooter>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{t("cards")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card   >
              <CardHeader>
                <CardTitle>{t("notification_title")}</CardTitle>
                <CardDescription>{t("notification_message")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{t("notification_message")}</p>
              </CardContent>
              <CardFooter>
                <Button>{t("submit")}</Button>
              </CardFooter>
            </Card>

            <Card variant="bordered">
              <CardHeader>
                <CardTitle>{t("notification_title")}</CardTitle>
                <CardDescription>{t("notification_message")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{t("notification_message")}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">{t("cancel")}</Button>
                <Button className="ml-2">{t("submit")}</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{t("forms")}</h2>
          <Card>
            <CardHeader>
              <CardTitle>{t("registration_form")}</CardTitle>
              <CardDescription>{t("enter_details")}</CardDescription>
            </CardHeader>
            <CardContent>
              <Form>
                <FormField
                  label={t("full_name")}
                  placeholder="John Doe"
                  required
                />
                <FormField
                  label={t("email")}
                  type="email"
                  placeholder="john@example.com"
                  required
                  helperText={t("email_privacy")}
                />
                <FormField
                  label={t("password")}
                  type="password"
                  placeholder="********"
                  required
                />
                <FormField
                  label={t("confirm_password")}
                  type="password"
                  placeholder="********"
                  required
                  error={t("passwords_not_match")}
                />
                <Button type="submit" className="w-full">
                  {t("register")}
                </Button>
              </Form>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{t("tables")}</h2>
          <Card>
            <CardContent>
              <Table>
                <TableCaption>{t("invoices")}</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>{t("status")}</TableHead>
                    <TableHead>{t("method")}</TableHead>
                    <TableHead
                      className={dir === "rtl" ? "text-left" : "text-right"}
                    >
                      {t("amount")}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>{t("paid")}</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell
                      className={dir === "rtl" ? "text-left" : "text-right"}
                    >
                      $250.00
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV002</TableCell>
                    <TableCell>{t("pending")}</TableCell>
                    <TableCell>PayPal</TableCell>
                    <TableCell
                      className={dir === "rtl" ? "text-left" : "text-right"}
                    >
                      $125.00
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV003</TableCell>
                    <TableCell>{t("unpaid")}</TableCell>
                    <TableCell>Bank Transfer</TableCell>
                    <TableCell
                      className={dir === "rtl" ? "text-left" : "text-right"}
                    >
                      $350.00
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {showNotification && (
          <Notification
            type={notificationType}
            title={t(`${notificationType}`)}
            message={t("notification_message")}
            onClose={() => setShowNotification(false)}
          />
        )}

        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{t("dashboard")}</h1>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {t("total_users")}
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">120</div>
                <p className="text-xs text-muted-foreground">
                  +10% {t("from_last_month")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {t("active_users")}
                </CardTitle>
                <HomeIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">98</div>
                <p className="text-xs text-muted-foreground">
                  +5% {t("from_last_month")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {t("system_status")}
                </CardTitle>
                <Settings className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{t("online")}</div>
                <p className="text-xs text-muted-foreground">
                  {t("all_systems_operational")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
  );
}
