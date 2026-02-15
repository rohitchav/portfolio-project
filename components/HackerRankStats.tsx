import { SiHackerrank } from "react-icons/si";

const HackerRankStats = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="text-3xl text-green-400">
            <SiHackerrank />
          </div>
          <h2 className="text-2xl font-semibold tracking-wide">
            HackerRank Achievements
          </h2>
        </div>

        {/* Card */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-8">

          <div className="grid grid-cols-2 gap-8 text-center">

            {/* Java */}
            <div className="bg-white/5 p-6 rounded-xl">
              <div className="text-2xl font-semibold text-green-400">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-gray-400 text-sm mt-2">
                Java (5★)
              </p>
            </div>

            {/* SQL */}
            <div className="bg-white/5 p-6 rounded-xl">
              <div className="text-2xl font-semibold text-blue-400">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-gray-400 text-sm mt-2">
                SQL (5★)
              </p>
            </div>

          </div>

          {/* Profile Button */}
          <div className="text-center mt-10">
            <a
              href="https://www.hackerrank.com/profile/rc7777046"
              target="_blank"
              className="inline-block bg-green-500 hover:bg-green-600 transition px-6 py-2 rounded-full text-sm font-semibold"
            >
              View HackerRank Profile →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HackerRankStats;
