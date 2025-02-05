import { CircleIcon, PlusIcon, HeartIcon } from "lucide-react";

function Vision() {
  return (
    <section className="py-16 px-4 md:px-6 bg-gradient-to-b from-blue-50 to-blue-200">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-2">
        Our Vision
      </h2>
      <div className="h-1 w-16 bg-yellow-400 mx-auto mb-12" />

      <div className="grid gap-8 md:grid-cols-2">
        <div className="grid col-span-1 gap-5 animate-slide-in-left">
          <div className="border-l-4 bg-white shadow-lg border-l-blue-700 rounded-lg">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Illuminating Paths
              </h3>
              <p className="text-gray-600 leading-relaxed">
                At Umeed Kiran, we are envisioned to illuminate the path to a
                brighter tomorrow for specially-abled children. As a beacon of
                hope and transformation, we serve these remarkable individuals
                with dedication and purpose.
              </p>
            </div>
          </div>

          <div className="border-l-4 bg-white shadow-lg border-l-yellow-400 rounded-lg">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Beyond Rehabilitation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our commitment extends beyond mere rehabilitation; we strive
                to cultivate a paradigm shift in societal perspectives towards
                disability, fostering understanding and acceptance.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-5 animate-slide-in-right">
          <div className="p-6 grid gap-6">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-blue-50">
                <CircleIcon className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">
                  Empowerment
                </h4>
                <p className="text-gray-600 text-sm">
                  Instilling optimism and confidence in our students to
                  envision a future full of possibilities.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-yellow-50">
                <PlusIcon className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">
                  Inclusive Development
                </h4>
                <p className="text-gray-600 text-sm">
                  Creating an environment where every child can thrive and
                  contribute meaningfully to society.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-red-50">
                <HeartIcon className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">
                  Compassionate Care
                </h4>
                <p className="text-gray-600 text-sm">
                  Providing comprehensive professional assistance with heart
                  and dedication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Vision
