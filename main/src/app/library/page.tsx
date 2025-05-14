import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";

const subjects = [
  { name: "Physics", agent: true, members: 124, desc: "Explore the laws of nature and the universe.", difficulty: "Advanced" },
  { name: "Chemistry", agent: true, members: 98, desc: "Dive into the world of atoms and molecules.", difficulty: "Intermediate" },
  { name: "Biology", agent: false, members: 76, desc: "Study living organisms and life processes.", difficulty: "Beginner" },
  { name: "Mathematics", agent: true, members: 142, desc: "Unlock the language of logic and numbers.", difficulty: "Advanced" },
  { name: "Computer Science", agent: true, members: 110, desc: "Learn about algorithms, data, and computation.", difficulty: "Intermediate" },
  { name: "Astronomy", agent: false, members: 53, desc: "Discover stars, planets, and the cosmos.", difficulty: "Beginner" },
  { name: "Geology", agent: false, members: 41, desc: "Understand Earth's structure and history.", difficulty: "Beginner" },
  { name: "Environmental Science", agent: true, members: 67, desc: "Study the environment and sustainability.", difficulty: "Intermediate" },
  { name: "Engineering", agent: false, members: 39, desc: "Apply science to solve real-world problems.", difficulty: "Advanced" },
  { name: "Medicine", agent: true, members: 88, desc: "Explore health, disease, and the human body.", difficulty: "Advanced" },
  { name: "Psychology", agent: false, members: 25, desc: "Understand the mind and human behavior.", difficulty: "Beginner" },
  { name: "Economics", agent: true, members: 59, desc: "Analyze markets, trade, and finance.", difficulty: "Intermediate" },
];

const difficultyColors: Record<string, string> = {
  Beginner: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200",
  Intermediate: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200",
  Advanced: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200",
};

export default function Library() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-background py-16 px-4">
      <AnimatedShinyText shimmerWidth={160} className="text-3xl font-bold text-center mb-2">
        Shanlearn Library
      </AnimatedShinyText>
      <div className="text-lg text-neutral-600 dark:text-neutral-300 mb-10 text-center max-w-2xl">
        Unlock knowledge across science and technology—powered by Gaia Agents. Decentralized in every sense.
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
        {subjects.map((subject, idx) => (
          <div
            key={subject.name}
            className="rounded-2xl bg-white/80 dark:bg-neutral-900/80 shadow-lg p-6 flex flex-col items-center border border-neutral-200 dark:border-neutral-800 transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl font-semibold text-neutral-800 dark:text-neutral-100">
                {subject.name}
              </span>
              <span
                className={`inline-block w-3 h-3 rounded-full ml-2 ${subject.agent ? "bg-green-500" : "bg-red-500"}`}
                title={subject.agent ? "Agent Available" : "Agent Not Available"}
              />
            </div>
            <div className="mb-2 w-full flex justify-center">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[subject.difficulty]}`}>{subject.difficulty}</span>
            </div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-1 text-center min-h-[40px]">
              {subject.desc}
            </div>
            <div className="text-xs text-neutral-600 dark:text-neutral-300 mb-2">
              Used by <span className="font-bold">{subject.members}</span> members
            </div>
            <div className="w-full flex justify-center mt-auto">
              <button className="px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black font-semibold shadow hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors text-sm">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 