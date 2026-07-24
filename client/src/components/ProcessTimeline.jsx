import { motion } from "framer-motion";
import { processSteps } from "../data/dummyData";

function ProcessTimeline() {
  return (
    <div className="overflow-x-auto py-6">
      <div className="flex min-w-[820px] gap-8">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="relative flex min-w-[240px] flex-col rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-600 text-lg font-semibold text-white">{index + 1}</span>
            <h3 className="mt-5 text-xl font-semibold text-slate-950">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
            {index < processSteps.length - 1 && (
              <div className="absolute right-[-16px] top-1/2 hidden h-0.5 w-8 bg-slate-300 md:block" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProcessTimeline;
