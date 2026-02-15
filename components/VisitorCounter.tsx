import { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [count, setCount] = useState<string>("Loading...");

  useEffect(() => {
    fetch("https://api.visitorbadge.io/api/visitors?path=rohit-chavan-portfolio")
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
    <div className="text-center mt-6 text-slate-600 text-lg">
      👀 Visitors: {count}
    </div>
  );
};

export default VisitorCounter;
