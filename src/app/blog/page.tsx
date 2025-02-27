"use client";

function page() {
  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/api/blogs");
    const data = await res.json();
    console.log(data);
  };
  fetchData();
  return <div>Hey Blog</div>;
}

export default page;
