"use client"

import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RBLogo } from "@/images/logo";

const Links = {
    explore : [
      {
          title: "Our Projects",
          link: "/projects",
      },
      {
          title: "Our Blogs",
          link: "/blogs",
      },
      {
          title: "Our Team",
          link: "/about",
      },
    ],
    others : [
      {
        title: "Newsletters",
        link: "/newsletters",
      },
      {
          title: "Publications",
          link: "/publications",
      },
    ]
}

export default function Footer() {
  return (
    <footer className="items-center justify-center">
      <hr className="bg-white w-full h-0.5" />
      <section className="bg-fuchsia-950/75 md:text-lg px-2">
        <div className="w-full max-w-7xl mx-auto pt-8 pb-2 flex flex-col text-center lg:flex-row lg:justify-around space-y-8">
          <div className="place-items-center">
            <RBLogo text={true} vertical={true} className="w-4/5 max-w-[120px] lg:w-full mb-2"/>
            <div className="font-[Berlin] font-semibold text-xl mt-4">Social Links</div>
            <div className="flex space-x-2 md:space-x-3">
              <a 
                className="bg-primary hover:bg-facebook text-primary-foreground hover:text-white rounded-full p-1.5 items-center transition-all duration-300"
                href="https://www.facebook.com/asianliftbangladesh"
                target="_blank">
                <FaFacebookF className="size-5"/>
              </a>
              <a 
                className="bg-primary hover:bg-linkedin text-primary-foreground hover:text-white rounded-full p-1.5 items-center transition-all duration-300"
                href="https://www.linkedin.com/company/asian-lift-bangladesh/"
                target="_blank">
                  <FaLinkedinIn className="size-5"/>
              </a>
            </div>
          </div>
          {
            Links.explore &&
              <div className="flex flex-col gap-y-3 md:gap-y-4 text-center md:text-lg">
                <div className="font-[Berlin] font-semibold text-2xl md:mb-1">Explore</div>
                  {
                    Links.explore.map((item) => (
                      <Link
                        key={item.title}
                        className="hover:underline underline-offset-4"
                        href={item.link}>
                          {item.title}
                        </Link>
                    ))
                  }
                </div>
          }
          {
            Links.others &&
              <div className="flex flex-col gap-y-3 md:gap-y-4 text-center md:text-lg">
                <div className="font-[Berlin] font-semibold text-2xl md:mb-1">Links</div>
                  {
                    Links.others.map((item) => (
                      <Link
                        key={item.title}
                        className="hover:underline underline-offset-4"
                        href={item.link}>
                          {item.title}
                        </Link>
                    ))
                  }
                </div>
          }
          <div className="flex flex-col gap-y-3 md:gap-y-4 mx-auto lg:mx-0">
            <div className="font-semibold text-xl mb-1">Contact Us</div>
            <a 
              className="flex gap-x-2 hover:text-fuchsia-200"
              href="https://maps.app.goo.gl/eACXfDupHH1zT9tt5"
              target="_blank">
              <FaMapLocationDot className="size-5 mt-1"/>
              <div className="text-left">
                House-24, Block-F, Road-8,
                <br/>
                Arambag Residential Area,
                <br/>
                Dhaka-1216, Bangladesh
              </div>
            </a>
            <a 
              className="flex gap-x-2 hover:text-fuchsia-200 items-center" 
              href="mailto:resilientbd20@gmail.com">
              <MdEmail className="size-5 mt-1"/>
              <div>resilientbd20@gmail.com</div>
            </a>
          </div>
        </div>
      </section>
      <hr className="bg-white w-full h-0.5" />
      <section className="bg-fuchsia-950/50 px-2 lg:px-6 md:text-lg">
        <div className="w-full max-w-7xl mx-auto py-4 flex flex-col text-center lg:flex-row lg:justify-between space-y-2">
          <div className="flex space-x-4 justify-center lg:text-left">
            <Link className="hover:underline underline-offset-4" href="/terms-of-use">Terms of Use</Link>
            <Link className="hover:underline underline-offset-4" href="/privacy-policy">Privacy Policy</Link>
          </div>
          <div>Copyright © 2021-{new Date().getFullYear()} Resilient Bangladesh</div>
        </div>
      </section>
    </footer>
  );
}