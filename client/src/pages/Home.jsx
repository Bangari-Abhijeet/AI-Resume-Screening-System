import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import StatsSection from "../components/home/StatsSection";
import FeatureGrid from "../components/home/FeatureGrid";
import SectionTitle from "../components/SectionTitle";
import ProcessTimeline from "../components/ProcessTimeline";
import TechnologyStack from "../components/TechnologyStack";
import ProblemSection from "../components/home/ProblemSection";
import CTASection from "../components/home/CTASection";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-slate-50">
      <Navbar />

      <main className="space-y-24 px-0 pt-0">
        <section id="home" className="bg-slate-50 pt-8 sm:pt-10 lg:pt-12">
          <Hero />
        </section>

        <section id="features" className="bg-slate-50 py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle
              title="A streamlined AI experience for resumes and job search"
              subtitle="From resume building to ATS scoring, Career Forge gives you every insight you need in one elegant platform."
            />
            <StatsSection />
            <div className="mt-16">
              <SectionTitle title="Core Features" subtitle="Designed for job seekers and hiring teams that want better outcomes." />
              <FeatureGrid />
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-white py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle title="How It Works" subtitle="A professional workflow to move from resume draft to job match." />
            <ProcessTimeline />
          </div>
        </section>

        <section id="about" className="bg-slate-50 py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <ProblemSection />
          </div>
        </section>

        <section id="technology" className="bg-white py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle title="Designed with modern technology" subtitle="Built on a stack created for speed, reliability, and future expansion." />
            <TechnologyStack />
          </div>
        </section>

        <section id="contact" className="bg-slate-50 py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <CTASection />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;