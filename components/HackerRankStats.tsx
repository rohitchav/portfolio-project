import { SiHackerrank } from "react-icons/si";

const HackerRankStats = () => {
    return (
        <section className="py-14 md:py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            <div className="max-w-4xl mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="flex items-center justify-center gap-3 mb-8 md:mb-10">
                    <div className="text-2xl md:text-3xl text-green-400">
                        <SiHackerrank />
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold tracking-wide text-center">
                        HackerRank Achievements
                    </h2>
                </div>

                {/* Card */}
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-5 md:p-8">

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8 text-center">

                        {/* Java */}
                        <div className="bg-white/5 p-4 md:p-6 rounded-xl">
                            <div className="text-lg md:text-2xl text-yellow-400 tracking-wide">
                                ⭐⭐⭐⭐⭐
                            </div>
                            <p className="text-gray-400 text-xs md:text-sm mt-2">
                                Java (5★)
                            </p>
                        </div>

                        {/* SQL */}
                        <div className="bg-white/5 p-4 md:p-6 rounded-xl">
                            <div className="text-lg md:text-2xl text-yellow-400 tracking-wide">
                                ⭐⭐⭐⭐⭐
                            </div>
                            <p className="text-gray-400 text-xs md:text-sm mt-2">
                                SQL (5★)
                            </p>
                        </div>

                    </div>

                    {/* Profile Button */}
                    <div className="text-center mt-8">
                        <a
                            href="https://www.hackerrank.com/profile/rc7777046"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-full sm:w-auto bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-full text-sm font-semibold"
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
