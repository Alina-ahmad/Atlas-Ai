import Hero from "@/components/Hero";
import LearningSnapshot from "@/components/LearningSnapshot";
import LearningJourney from "@/components/LearningJourney";
import CurrentLearning from "@/components/CurrentLearning";


export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <Hero/>
        <LearningSnapshot/>
        <CurrentLearning/>
        
      </div>
    </main>
  );
}