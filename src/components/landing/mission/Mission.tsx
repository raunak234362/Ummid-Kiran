import { Heart, Users2, HandHeart } from "lucide-react";


function Mission() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-2">
          Our Mission
        </h2>
        <div className="h-1 w-16 bg-yellow-400 mx-auto mb-12" />

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-[#f8fbff] border-none shadow-sm">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                  Empowering Special Lives
                </h3>
                <p className="text-gray-600 mb-8">
                  Our mission at Umeed Kiran is to empower specially-abled
                  children with the tools, support, and opportunities they need
                  to unlock their full potential. We focus on holistic
                  development of specially abled children.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-none bg-white">
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-[#fff5e6] rounded-lg">
                          <Heart className="w-6 h-6 text-[#ffa500]" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">
                            Comprehensive Care
                          </h4>
                          <p className="text-sm text-gray-600">
                            Providing nurturing care and rehabilitation services
                            with dedication
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-none bg-white">
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-[#f0f7ff] rounded-lg">
                          <Users2 className="w-6 h-6 text-[#1e51c9]" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">
                            Community Engagement
                          </h4>
                          <p className="text-sm text-gray-600">
                            Fostering inclusive communities through active
                            participation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-[#fff9f5] border-none shadow-sm">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#1e51c9] mb-6">
                  Our Principles
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-[#fff5e6] rounded-lg">
                      <Heart className="w-5 h-5 text-[#ffa500]" />
                    </div>
                    <span className="font-medium">Compassion</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-[#f0f7ff] rounded-lg">
                      <Users2 className="w-5 h-5 text-[#1e51c9]" />
                    </div>
                    <span className="font-medium">Inclusivity</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-[#fff0f0] rounded-lg">
                      <HandHeart className="w-5 h-5 text-[#ff4d4d]" />
                    </div>
                    <span className="font-medium">Respect</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission
