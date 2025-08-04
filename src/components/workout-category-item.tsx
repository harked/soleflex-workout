import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExerciseCard } from "./exercise-card";
import type { WorkoutCategory } from "@/lib/data";

export function WorkoutCategoryItem({ category }: { category: WorkoutCategory }) {
  const Icon = category.icon;
  return (
    <AccordionItem value={`item-${category.title}`}>
      <AccordionTrigger className="hover:no-underline py-4">
        <div className="flex items-center gap-4 w-full">
          <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-grow text-left">
            <h3 className="text-lg font-headline font-semibold">{category.title}</h3>
            <p className="text-sm text-muted-foreground font-body">{category.description}</p>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="border-l-2 border-primary/20 ml-6 pl-10">
        <div className="space-y-6 py-4">
          {category.exercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
