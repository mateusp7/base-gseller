"use client";

import { sidebarOptions } from "@/lib/site-config";
import { cn } from "@/lib/utils";

import { crumbsToTranslate } from "@/utils/objects-data/crumbs-to-translate";
import { listOfUniquesPages } from "@/utils/objects-data/list-of-uniques-pages";
import { BreadCrumbs } from "@gseller-monorepo/breadcrumbs";
import { Shell } from "@gseller-monorepo/shell";
import { Sidebar, useSidebar } from "@gseller-monorepo/sidebar";
import { useRouter } from "next/navigation";
import HeaderComponent from "../components/header";
import useAdministrator from "../hooks/administrator";
import { useAuthContext } from "../hooks/auth";
import useChannel from "../hooks/channel";

export default function DashboardLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  const router = useRouter();
  const { isOpen } = useSidebar();
  const { logout } = useAuthContext();
  const { refetch } = useAdministrator();
  const { setChannelSelected } = useChannel();

  const logoutUser = () => {
    logout();
    refetch();
    setChannelSelected("");
    router.push("/login");
  };

  return (
    <div className="flex flex-row">
      <Sidebar
        onLogout={logoutUser}
        sidebarOptions={sidebarOptions}
        src="/gseller_logo_full.png"
      />
      <div
        className={cn(
          "flex flex-col w-full transition-all duration-300 ease-linear",
          isOpen ? "lg:ml-[260px]" : "lg:ml-[0px]"
        )}
      >
        <HeaderComponent />
        <Shell>
          <div className="w-full min-h-screen mt-6 bg-background-light dark:bg-background-dark">
            <BreadCrumbs
              homeLink="/sales/dashboard"
              crumbsToTranslate={crumbsToTranslate}
              listOfUniquesPages={listOfUniquesPages}
            />
            <div className="mt-4">{children}</div>
          </div>
        </Shell>
      </div>
    </div>
  );
}
