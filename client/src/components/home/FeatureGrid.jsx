import FeatureCard from "../FeatureCard";
import { homeFeatures } from "../../data/dummyData";
import { Sparkles, UploadCloud, ShieldCheck, TrendingUp, Toolbox, MessageCircle } from "lucide-react";

const icons = [Sparkles, UploadCloud, ShieldCheck, TrendingUp, Toolbox, MessageCircle];

function FeatureGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {homeFeatures.map((item, index) => (
        <FeatureCard key={item.title} icon={icons[index]} title={item.title} desc={item.description} />
      ))}
    </div>
  );
}

export default FeatureGrid;
