import { Accordion } from "@/components/ui/accordion";
import { workoutCategories } from "@/lib/data";
import { WorkoutCategoryItem } from "@/components/workout-category-item";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-headline text-primary font-bold">
            SoleFlex
          </h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/80 font-body max-w-2xl mx-auto">
            A comprehensive workout program designed to enhance foot mobility, strength, and overall health. Strengthen your foundation, one step at a time.
          </p>
        </header>

        <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
          {workoutCategories.map((category, index) => (
            <WorkoutCategoryItem key={index} category={category} />
          ))}
        </Accordion>

        <footer className="text-center mt-16 text-muted-foreground font-body">
          <p>&copy; {new Date().getFullYear()} SoleFlex. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
