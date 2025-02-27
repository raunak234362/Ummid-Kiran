"use client";

function page() {
  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/api/blogs");
    const data = await res.json();
    console.log(data);
  };
  fetchData();
  return (<div className="bg-blue-400 h-screen w-full flex justify-center items-center">
    <div className="bg-blue-500 h-1/4 w-1/3 rounded-lg shadow-xl border-2 border-blue-600 text-white text-4xl text-center flex justify-center items-center">
      Comming Soon
    </div>
  </div>);
}

export default page;
