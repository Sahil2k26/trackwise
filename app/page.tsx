import { HeroSection } from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { featuresData, howItWorksData, statsData, testimonialsData } from "@/data/landing";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section className="py-20 bg-blue-50 ">
        <div className="container mx-auto px-4 ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((s, i) => {
              return <div key={i} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{s.value}</div>
                <div className="text-gray-600">{s.label}</div>
              </div>
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need to manage your finances
          </h2>
          <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((data, i) => {
              return (
                <Card key={i} className="p-6">
                  <CardContent className="space-y-4 pt-4">
                    {<data.icon className="h-8 w-8 text-blue-600" />}
                    <h3 className="text-xl font-semibold">{data.title}</h3>
                    <p className="text-gray-600">
                      {data.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>


      </section>

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            How it works
          </h2>
          <div className="grid grid-1 md:grid-cols-3 gap-8">
            {howItWorksData.map((data, i) => {
              return (
                <div key={i} className="text-center" >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    {<data.icon className="h-8 w-8 text-blue-600" />}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{data.title}</h3>
                  <p className="text-gray-600">{data.description}</p>
                </div>

              )
            })}
          </div>
        </div>


      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What our users say?
          </h2>
          <div className="grid grid-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((data, i) => {
              return (
                <Card key={i} className="p-6">
                  <CardContent className="space-y-4 pt-4">
                    <div className="flex justify-start items-center gap-2">
                      <Image
                        src={data.image}
                        alt="User image"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="flex flex-col items-start justify-center pl-2">
                        <h3 className="text-xl font-semibold">{data.name}</h3>
                        <p className="text-sm ">{data.role}</p>
                      </div>

                    </div>
                    <p className="text-gray-600">
                      {data.quote}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>


      </section>

      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">
            Ready to Track Your Finances Wisely 🧠?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their finances
            Wisely with TrackWise
          </p>
          <Link href={"/dashboard"}>
            <Button
              size={"lg"}
              className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>


      </section>


    </div>

  );
}
