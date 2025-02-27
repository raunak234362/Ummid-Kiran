import { Instagram, Phone, LinkIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const imageUrl =
  "https://cloud.appwrite.io/v1/storage/buckets/67b32324003c26622b3f/files/67c04826003d2bcd0c26/view?project=67b32231001f01be8e49&mode=admin";

function ChiefSecy() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-2">
            Chief Secretary
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div>
          {/* Founder Card */}
          <div className="bg-blue-50 rounded-lg p-8 flex flex-col items-center text-center mx-auto w-96">
            {/* <div className=" bg-blue-600 rounded-full flex items-center justify-center mb-4"> */}
            <Image
              src={imageUrl}
              alt="Rinkoo Srivastava"
              width={128}
              height={128}
              className="rounded-full"
            />
            {/* </div> */}
            <h3 className="text-2xl font-bold text-blue-600 mb-2">
              Rinkoo Srivastava
            </h3>
            <p className="text-gray-600 mb-4">
              Chief Secretary, Umeed Kiran Jan Kalyan Samiti
            </p>

            <Link
              href="https://instagram.com"
              className="text-blue-600 hover:text-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6" />
            </Link>
            <div className="mt-4 text-gray-600 text-start">
              <p className="my-2">• Husband's Name: Group Captain Rosha</p>
              <p className="mb-2">• Education: MA, MPhil</p>
            </div>
          </div>

          {/* Information Sections */}
          {/* <div className="space-y-6"> */}
          {/* Leadership & Vision */}
          {/* <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-400">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">
                Leadership & Vision
              </h4>
              <p className="text-gray-600">
                Under the visionary leadership of Archana Srivastava, Umeed
                Kiran has grown from its humble beginnings in 2014 to become a
                beacon of hope for specially-abled children and their families.
              </p>
            </div> */}

          {/* Achievements */}
          {/* <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-400">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">
                Achievements
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Established Umeed Kiran Jan Kalyaan Samiti</li>
                <li>• Registered under PWD act, 12A and 80G</li>
                <li>• Created comprehensive rehabilitation programs</li>
                <li>• Developed innovative therapy solutions</li>
              </ul>
            </div> */}

          {/* Contact Information */}
          {/* <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-400">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">
                Contact Information
              </h4>
              <div className="space-y-2">
                <a
                  href="tel:+917398282238"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +91 73982 82238
                </a>
                <a
                  href="#"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <LinkIcon className="w-5 h-5 mr-2" />
                  @umeedkiran_
                </a>
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}

export default ChiefSecy;
