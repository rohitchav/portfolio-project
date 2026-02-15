import { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [count, setCount] = useState<string>("Loading...");

  useEffect(() => {
    fetch("https://api.visitorbadge.io/api/combined?path=rohit-chavan-portfolio.vercel.app")
      .then(res => res.json())
      .then(data => {
        setCount(data.total);
      })
      .catch(err => {
        console.error("Visitor error:", err);
        setCount("0");
      });
  }, []);

 return (
  <div className="flex justify-center mt-8">
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-5 py-2 rounded-full shadow-md text-sm text-gray-700 flex items-center gap-2 transition hover:scale-105">
      <span>👀</span>
      <span className="font-medium">Total Visitors</span>
      <span className="font-bold text-blue-600">{count}</span>
    </div>
  </div>
);

};

export default VisitorCounter;
