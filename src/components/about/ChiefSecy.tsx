
import Image from "next/image";

const imageUrl =
  "https://cloud.appwrite.io/v1/storage/buckets/67b32324003c26622b3f/files/67c04826003d2bcd0c26/view?project=67b32231001f01be8e49&mode=admin";

function ChiefSecy() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
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

           
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChiefSecy;
