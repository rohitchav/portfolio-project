import { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const namespace = "rohit-portfolio-2026";
    const key = "visits";

    fetch(`https://api.countapi.xyz/get/${namespace}/${key}`)
      .then(res => {
        if (res.status === 404) {
          // Create counter if not exists
          return fetch(`https://api.countapi.xyz/create?namespace=${namespace}&key=${key}&value=0`)
            .then(() =>
              fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
            );
        }
        return fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`);
      })
      .then(res => res.json())
      .then(data => setCount(data.value))
      .catch(err => console.error("Counter error:", err));
  }, []);

  return (
    <div className="text-center mt-6 text-slate-600 text-lg">
      👀 Visitors: {count !== null ? count : "Loading..."}
    </div>
  );
};

export default VisitorCounter;
