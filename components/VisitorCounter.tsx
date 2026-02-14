import { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/rohit-portfolio-2026/visits")
      .then((res) => res.json())
      .then((data) => {
        setCount(data.value);
      })
      .catch((err) => console.error("Error fetching visitor count:", err));
  }, []);

  return (
    <div className="text-center mt-6 text-slate-600 text-lg">
      👀 Visitors: {count !== null ? count : "Loading..."}
    </div>
  );
};

export default VisitorCounter;
