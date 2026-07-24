import { motion } from "framer-motion";
import { homeStats } from "../../data/dummyData";

function StatsSection() {
  return (
    <div className="grid gap-6 md:grid-cols-4">
      {homeStats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
          className="rounded-[28px] border border-slate-200 bg-white px-6 py-7 shadow-sm"
        >
          <p className="text-3xl font-semibold text-slate-950">{stat.value}</p>
          <p className="mt-3 text-sm font-medium uppercase tracking-[0.24em] text-slate-500">{stat.label}</p>
          <p className="mt-4 text-sm leading-7 text-slate-600">{stat.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default StatsSection;
