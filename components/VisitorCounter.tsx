import { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [count, setCount] = useState<string>("Loading...");

  useEffect(() => {
    fetch("https://api.visitorbadge.io/api/visitors?path=rohit-chavan-portfolio.vercel.app")
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
    <div className="text-center mt-6 text-gray-500 text-sm tracking-wide">
      👀 Total Visitors: <span className="font-semibold">{count}</span>
    </div>
  );
};

export default VisitorCounter;
