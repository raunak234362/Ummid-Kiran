
import Image from "next/image";

const imageUrl =
  "https://cloud.appwrite.io/v1/storage/buckets/67b32324003c26622b3f/files/67c89c2400188be49ca7/view?project=67b32231001f01be8e49&mode=admin";

function ChiefSecy() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">Secretary</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div>
          {/* Founder Card */}
          <div className="bg-blue-50 rounded-lg p-8 flex flex-col items-center text-center mx-auto w-64">
            {/* <div className=" bg-blue-600 rounded-full flex items-center justify-center mb-4"> */}
            <Image
              src={imageUrl}
              alt="Bal Govind Singh"
              width={135}
              height={135}
              className="rounded-full"
            />
            {/* </div> */}
            <h3 className="text-2xl font-bold text-blue-600 mb-2">
              Bal Govind Singh
            </h3>
            <p className="text-gray-600 mb-4">
              Secretary, Umeed Kiran Jan Kalyan Samiti Barabanki
            </p>

            {/* <Link
              href="https://instagram.com"
              className="text-blue-600 hover:text-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6" />
            </Link>
            <div className="mt-4 text-gray-600 text-start">
              <p className="my-2">• Husband&apos;s Name: Group Captain Rosha</p>
              <p className="mb-2">• Education: MA, MPhil</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChiefSecy;
