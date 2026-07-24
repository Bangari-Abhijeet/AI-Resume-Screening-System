import { motion } from "framer-motion";

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:shadow-md hover:shadow-slate-200/60"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-100">
        {Icon && <Icon size={24} />}
      </div>
      <h3 className="text-xl font-semibold text-slate-950 mb-3">{title}</h3>
      <p className="text-sm leading-7 text-slate-600">{desc}</p>
    </motion.div>
  );
}

export default FeatureCard;
