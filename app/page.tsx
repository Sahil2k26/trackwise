import { HeroSection } from "@/components/hero";
import { Card, CardContent } from "@/components/ui/card";
import { featuresData, howItWorksData, statsData } from "@/data/landing";

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
    </div>

  );
}
