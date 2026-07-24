import { motion } from "framer-motion";
import { homeTech } from "../data/dummyData";

function TechnologyStack() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {homeTech.map((name) => (
        <motion.div
          key={name}
          whileHover={{ y: -4 }}
          className="rounded-[28px] border border-slate-200 bg-white p-5 text-sm font-semibold text-slate-700 shadow-sm transition duration-300"
        >
          {name}
        </motion.div>
      ))}
    </div>
  );
}

export default TechnologyStack;
