import Footer from "@/components/footer";
import { HeadingText } from "@/components/headerText";
import NavBar from "@/components/navMenu";
import Image from "next/image";
import ResilientCitizen from "@/images/project/ResilientCitizen.png"
import CollaborationForCoronaCombat from "@/images/project/CollaborationForCoronaCombat.svg"
import S3 from "@/images/sdg/s3.svg"
import S4 from "@/images/sdg/s4.svg"
import S5 from "@/images/sdg/s5.svg"
import S6 from "@/images/sdg/s6.svg"
import S7 from "@/images/sdg/s7.svg"
import S8 from "@/images/sdg/s8.svg"
import S11 from "@/images/sdg/s11.svg"
import S13 from "@/images/sdg/s13.svg"
import S16 from "@/images/sdg/s16.svg"
import S17 from "@/images/sdg/s17.svg"
import ShapeGreen from "@/images/partner/ShapeGreen.svg"
import TheEarth from "@/images/partner/TheEarth.svg"
import Panda from "@/images/partner/Panda.svg"
import HumanitarianAid from "@/images/partner/HumanitarianAid.svg"
import RoadToHumanity from "@/images/partner/RoadToHumanity.svg"
import { RBLogo } from "@/images/logo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
  {
    image: ResilientCitizen,
    alt: "Resilient Citizen"
  },
  {
    image: CollaborationForCoronaCombat,
    alt: "Collaboration For Corona Combat"
  },
]

const reach = [
  {
    title: "School",
    count: 6
  },
  {
    title: "Children",
    count: 450
  },
  {
    title: "Project",
    count: 3
  },
]

const sdgs = [
  {
    image: S3,
    alt: "SDG-3"
  },
  {
    image: S4,
    alt: "SDG-4"
  },
  {
    image: S5,
    alt: "SDG-5"
  },
  {
    image: S6,
    alt: "SDG-6"
  },
  {
    image: S7,
    alt: "SDG-7"
  },
  {
    image: S8,
    alt: "SDG-8"
  },
  {
    image: S11,
    alt: "SDG-11"
  },
  {
    image: S13,
    alt: "SDG-13"
  },
  {
    image: S16,
    alt: "SDG-16"
  },
  {
    image: S17,
    alt: "SDG-17"
  },
]

const partners = [
  {
    image: ShapeGreen,
    alt: "Shape Green Logo"
  },
  {
    image: TheEarth,
    alt: "Shape Green Logo"
  },
  {
    image: Panda,
    alt: "Shape Green Logo"
  },
  {
    image: HumanitarianAid,
    alt: "Shape Green Logo"
  },
  {
    image: RoadToHumanity,
    alt: "Shape Green Logo"
  },
]

export default function HomePage() {
  return (
    <main>
      <NavBar/>
      <section className="flex items-center justify-center h-screen bg-fuchsia-900">
        <div className="flex-col text-center text-white">
            <RBLogo text={true} vertical={true} animate={true} className="max-w-[50%] w-48 mx-auto" textClass={["text-[2.25rem] leading-6", "text-[1.6rem] leading-6"]}/>
            <div className="mt-3 text-xl">
              Working towards providing the standard education options through activities for the children in urban places.
              <br/>
              We believe with 100% literate young generation can upbring our nation.
            </div>
        </div>
      </section>

      <section className="text-center bg-white py-12">
        <HeadingText
          title="Our Projects"
          subtitle="By focusing on the group of young generation to aware, we will be able to build a resilient future generation."
          underline={true}
          dark={true}
        />
        <div className="w-full max-w-7xl mx-auto pt-1 sm:mt-2 lg:pt-4 px-4 md:px-8 flex space-x-12 justify-center">
          {
            projects.map((items, index) =>
              <div key={index}>
                <Image
                  src={items.image}
                  className="aspect-square w-64"
                  alt={items.alt}
                  priority={false}
                />
              </div>
            )
          }
        </div>
      </section>

      <section className="text-center bg-fuchsia-900 py-12">
        <HeadingText
          title="Our Reach"
          underline={true}
          dark={false}
        />
        <div className="w-full max-w-7xl mx-auto pt-1 sm:mt-2 lg:pt-4 px-4 md:px-8 text-center flex justify-around">
          {
            reach.map((items, index) =>
              <Card key={index} className="bg-black/50 w-72 font-[Berlin] border-0">
                <CardHeader>
                  <CardTitle className="text-3xl">{items.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-5xl">{items.count}</p>
                </CardContent>
              </Card>
            )
          }
        </div>
      </section>

      <section className="text-center bg-white py-12">
        <HeadingText
          title="SDGs We Contribute"
          underline={true}
          dark={true}
        />
        <div className="w-full max-w-7xl mx-auto pt-1 sm:mt-2 lg:pt-4 px-4 md:px-8 text-center flex space-x-12">
          <div className="w-1/2">
            <HeadingText
              title="What are SDGs?"
              underline={true}
              dark={true}
              textSize={2}
            />
            <p className="text-black text-justify">
              The <b>Sustainable Development Goals (SDGs)</b> or Global Goals are a collection of 17 interlinked global goals designed to be a &quot;blueprint to achieve a better and more sustainable future for all&quot;. The SDGs were set up in 2015 by the United Nations General Assembly and are intended to be achieved by the year 2030. They are included in a UN Resolution called the 2030 Agenda or what is colloquially known as Agenda 2030. The SDGs were developed in the Post-2015 Development Agenda as the future global development framework to succeed the Millennium Development Goals which ended in 2015.
              <br/>
              <small>Source: Wikipedia</small>
            </p>
          </div>
          <div className="w-1/2 grid gap-1 grid-cols-1 sm:grid-cols-3 lg:grid-cols-5">
            {
              sdgs.map((items, index) =>
                <div key={index} className="mx-auto">
                  <Image
                    src={items.image}
                    className="aspect-square min-w-16 w-32 rounded-lg"
                    alt={items.alt}
                    priority={false}
                  />
                </div>
              )
            }
          </div>
        </div>
      </section>

      <section className="text-center bg-fuchsia-900 py-12">
        <HeadingText
          title="Newsletter"
          underline={true}
          dark={false}
        />
        <div className="w-full max-w-7xl mx-auto pt-1 sm:mt-2 lg:pt-4 px-4 md:px-8 text-center">
          <a href="mailto:resilientbd20@gmail.com?subject=Newsletter Subscription"><Button>Subscribe to our Newletter</Button></a>
        </div>
      </section>
      
      <section className="text-center bg-white py-12">
        <HeadingText
          title="Our Partners"
          underline={true}
          dark={true}
        />
        <div className="w-full max-w-7xl mx-auto pt-1 sm:mt-2 lg:pt-4 px-4 md:px-8 text-center grid gap-4 lg:gap-16 grid-cols-1 sm:grid-cols-3 lg:grid-cols-5">
          {
            partners.map((items, index) =>
              <div key={index} className="mx-auto">
                <Image
                  src={items.image}
                  className="aspect-square w-48 sm:w-full"
                  alt={items.alt}
                  priority={false}
                  />
              </div>
            )
          }
        </div>
      </section>
      <Footer/>
    </main>
  )
}
