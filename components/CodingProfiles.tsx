import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { SiLeetcode } from "react-icons/si";

const CodingProfiles = () => {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/rohitchavan0")
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error(err));
  }, []);

  if (!stats) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading LeetCode Stats...
      </div>
    );
  }

  return (
   <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
  <div className="max-w-5xl mx-auto px-6">

    {/* Header */}
    <div className="flex items-center justify-center gap-3 mb-10">
     <div className="text-3xl text-yellow-400">
  <SiLeetcode />
</div>

      <h2 className="text-2xl font-semibold tracking-wide">
        LeetCode Stats
      </h2>
    </div>

    {/* Main Card */}
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-8">

      {/* Total Solved */}
      <div className="text-center mb-10">
        <div className="text-5xl font-bold text-yellow-400">
          <CountUp end={stats.totalSolved} duration={2} />
        </div>
        <p className="text-gray-300 text-sm mt-2">
          Total Problems Solved
        </p>
      </div>

      {/* Difficulty Grid */}
      <div className="grid grid-cols-3 gap-6 text-center mb-8">

        <div className="bg-white/5 p-4 rounded-xl">
          <div className="text-2xl font-semibold text-green-400">
            <CountUp end={stats.easySolved} duration={2} />
          </div>
          <p className="text-gray-400 text-xs mt-1">Easy</p>
        </div>

        <div className="bg-white/5 p-4 rounded-xl">
          <div className="text-2xl font-semibold text-orange-400">
            <CountUp end={stats.mediumSolved} duration={2} />
          </div>
          <p className="text-gray-400 text-xs mt-1">Medium</p>
        </div>

        <div className="bg-white/5 p-4 rounded-xl">
          <div className="text-2xl font-semibold text-red-400">
            <CountUp end={stats.hardSolved} duration={2} />
          </div>
          <p className="text-gray-400 text-xs mt-1">Hard</p>
        </div>

      </div>

      {/* Bottom Stats */}
      <div className="flex justify-between text-sm text-gray-400">
        <div>
          Acceptance Rate:{" "}
          <span className="text-blue-400 font-medium">
            {stats.acceptanceRate}%
          </span>
        </div>
        <div>
          Ranking:{" "}
          <span className="text-purple-400 font-medium">
            {stats.ranking.toLocaleString()}
          </span>
        </div>
      </div>

    </div>
  </div>
</section>


  );
};

export default CodingProfiles;
