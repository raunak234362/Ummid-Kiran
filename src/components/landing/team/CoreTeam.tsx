import ChiefSecy from "@/components/about/ChiefSecy";
import Secy from "@/components/about/Secy";
import MemberOne from "@/components/about/MemberOne";
import MemberTwo from "@/components/about/MemberTwo";

const CoreTeam = () => {
  return (
    <>
    <div className="text-center">

     <h2 className="text-4xl font-bold text-blue-600 mb-2">Our Core Members</h2>
     <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
    </div>
    <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-2">
        <ChiefSecy />
        <Secy />
        <MemberOne />
        <MemberTwo />
      </div>
      </>
  )
}

export default CoreTeam
