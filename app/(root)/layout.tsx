import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const loggedIn = { firstName: "Maximus", lastName: "Rayvego" };

  return (
    <main className={"flex font-inter w-full h-screen"}>
      <Sidebar user={loggedIn} />
      <div className={"flex flex-col size-full"}>
        <div className={"root-layout"}>
          <Image src={"/icons/logo.svg"} width={30} height={30} alt={"logo"} />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}