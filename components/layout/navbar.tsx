"use client";

import { useLocale } from "@/components/locale/locale-provider";
import { Button } from "@/components/ui/button";
import { Bell, Globe, Home, Star, User, Users } from "lucide-react";
import Link from "next/link";
import { ProfileDropdown } from "../ui/profileCardDropDown";
import PopModal from "../ui-components/popModal";
import { FormField } from "../ui-components/form-field";
import { useState } from "react";

export function Navbar() {
  const { t, locale, setLocale } = useLocale();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleLocale = () => {
    setLocale(locale === "en" ? "ar" : "en");
  };

  return (
    <section className="flex w-full flex-col items-center align-middle">
      <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-background px-4 shadow-sm">
        <div className="flex items-center"></div>
        <div className="flex items-center gap-4">
          <Bell />
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLocale}
            className="flex items-center gap-2"
          >
            <Globe className="h-4 w-4" />
            {locale === "en" ? t("arabic") : t("english")}
          </Button>
          <ProfileDropdown
            menuItems={[
              {
                label: "Home Page",
                icon: <Home className="h-4 w-4" />,
                onClick: () => {},
              },
              {
                label: "Profile",
                icon: <Users className="h-4 w-4" />,
                onClick() {
                  setIsModalOpen(true);                },
              },
            ]}
            showMenuItems={true}
          />
          <PopModal
            showProfileImage={true}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Profile Details"
          >
            {/* Your modal content here */}
            <>
            <FormField
            label="Name"
            placeholder="Change your name"/>
            <FormField
            label="Email"
            placeholder="Change your Email"
            />
          <Button size={"lg"} color={"transparent"} onClick={() => setIsModalOpen(false)} 
          >cancel</Button>
          <Button size={"lg"}>Save</Button>

            </>
          </PopModal>
        </div>
      </header>
    </section>
  );
}
