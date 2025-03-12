"use client";

import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { MdMenu } from "react-icons/md"
import { RBLogo } from "@/images/logo"
import { useEffect, useState } from "react"

const navData : {title:string, url:string, prefetch:boolean}[] = [
  {
    title: "Home",
    url: "/",
    prefetch: false
  },
  {
    title: "Projects",
    url: "/projects",
    prefetch: false
  },
  {
    title: "Blogs",
    url: "/blogs",
    prefetch: false
  },
  {
    title: "About",
    url: "/about",
    prefetch: false
  },
  {
    title: "Contact",
    url: "/contact",
    prefetch: false
  },
]

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed z-50 top-0 flex h-20 w-full items-center backdrop-blur-md transition-all duration-300 ${
      isScrolled ? `bg-black/60 shadow-lg` : "bg-transparent"
      }`}>
      <div className="mx-auto max-w-7xl flex w-full items-center px-4 md:px-6 justify-between">
        <Link href="/" className="mr-6 flex items-center" prefetch={false}>
          <RBLogo text={true} className="w-38" textClass={["text-[1.4rem]", "text-[1rem]"]}/>
          <span className="sr-only">Resilient Bangladesh</span>
        </Link>
        <nav className="hidden lg:flex lg:text-lg items-center space-x-10">
          {
            navData!.map((item) =>
              <Link href={item.url} className="font-[Berlin] text-xl hover:underline underline-offset-4" prefetch={item.prefetch} key={item.title}>{item.title}</Link>
            )
          }
        </nav>
        <div className="flex items-center space-x-4">
          <Link
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            Donate
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden bg-white text-black">
                <MdMenu className="size-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-fuchsia-950">
              <SheetHeader>
                <SheetTitle>
                  <RBLogo text={true} className="w-38"/>
                </SheetTitle>
                <SheetDescription>
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 pl-6">
                {
                  navData!.map((item) =>
                    <Link href={item.url} className="text-lg font-[Berlin] hover:underline underline-offset-4" prefetch={item.prefetch} key={item.title}>{item.title}</Link>
                  )
                }
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}