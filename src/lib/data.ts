import { Scale, Footprints, Move3d, Network, RotateCw, Fingerprint, StepForward, type LucideIcon } from 'lucide-react';

export interface Exercise {
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: number; // in seconds
  description: string;
  visual: string; // Emoji or URL
  aiHint: string;
}

export interface WorkoutCategory {
  title:string;
  icon: LucideIcon;
  description: string;
  exercises: Exercise[];
}

export const workoutCategories: WorkoutCategory[] = [
  {
    title: "Structural Alignment",
    icon: Scale,
    description: "Improve foot posture and correct alignment issues.",
    exercises: [
      {
        title: "Foundation Alignment Series",
        difficulty: "Beginner",
        duration: 45,
        description: "Gently press your big toe, little toe, and heel into the ground to form a stable 'tripod'. Hold to improve your foot's foundational posture.",
        visual: "https://placehold.co/400x400.png",
        aiHint: "foot yoga"
      },
      {
        title: "Heel Lifts & Lowers",
        difficulty: "Intermediate",
        duration: 60,
        description: "Slowly lift your heels off the ground, hold for a moment, and then lower them back down with control. This strengthens calf muscles and improves balance.",
        visual: "https://placehold.co/400x400.png",
        aiHint: "foot exercise"
      }
    ]
  },
  {
    title: "Morphology",
    icon: Footprints,
    description: "Develop foot shape and enhance arch support.",
    exercises: [
      {
        title: "Arch Development Routine",
        difficulty: "Beginner",
        duration: 60,
        description: "Sit with your feet flat on the floor. Try to raise your arch while keeping your toes and heel on the ground. This helps activate intrinsic foot muscles.",
        visual: "https://placehold.co/400x400.png",
        aiHint: "foot arch"
      },
      {
        title: "Towel Curls",
        difficulty: "Intermediate",
        duration: 45,
        description: "Place a small towel on the floor and use your toes to scrunch it towards you. This is excellent for strengthening the muscles that support your arches.",
        visual: "https://placehold.co/400x400.png",
        aiHint: "towel curl"
      }
    ]
  },
  {
    title: "Bio-mechanics",
    icon: Move3d,
    description: "Refine movement patterns and walking mechanics.",
    exercises: [
      {
        title: "Movement Pattern Training",
        difficulty: "Intermediate",
        duration: 90,
        description: "Practice walking in a straight line, focusing on a heel-to-toe motion. Pay attention to how your foot rolls from the outer heel to the big toe.",
        visual: "https://placehold.co/400x400.png",
        aiHint: "walking barefoot"
      },
      {
        title: "Single Leg Balance",
        difficulty: "Advanced",
        duration: 30,
        description: "Stand on one leg and try to maintain your balance. This challenges and improves your ankle stability and the overall mechanics of your foot.",
        visual: "https://placehold.co/400x400.png",
        aiHint: "balance yoga"
      }
    ]
  },
  {
    title: "Load Distribution",
    icon: Network,
    description: "Master weight distribution across the entire foot.",
    exercises: [
      {
        title: "Weight Distribution Mastery",
        difficulty: "Intermediate",
        duration: 75,
        description: "While standing, slowly shift your weight from your heels to your toes, and then from side to side. Feel how the pressure changes across your foot.",
        visual: "https://placehold.co/400x400.png",
        aiHint: "foot pressure"
      }
    ]
  },
  {
    title: "Joint Mobility",
    icon: RotateCw,
    description: "Increase ankle and foot joint flexibility.",
    exercises: [
      {
        title: "Ankle & Foot Mobility Flow",
        difficulty: "Beginner",
        duration: 60,
        description: "Sit or stand and slowly rotate your ankles in circles, first clockwise, then counter-clockwise. Perform this smoothly to enhance joint mobility.",
        visual: "https://placehold.co/400x400.png",
        aiHint: "ankle rotation"
      }
    ]
  },
  {
    title: "Toe Flexibility",
    icon: Fingerprint,
    description: "Build strength and flexibility in each toe.",
    exercises: [
      {
        title: "Toe Strength & Flexibility",
        difficulty: "Beginner",
        duration: 60,
        description: "Try to lift only your big toe while keeping the others on the ground. Then, try to lift the other four toes while keeping the big toe down.",
        visual: "https://placehold.co/400x400.png",
        aiHint: "toe yoga"
      },
      {
        title: "Toe Splaying",
        difficulty: "Intermediate",
        duration: 45,
        description: "Spread your toes as wide apart as you can, hold for a few seconds, and then relax. This helps counteract the effects of narrow shoes.",
        visual: "https://placehold.co/400x400.png",
        aiHint: "foot stretch"
      }
    ]
  },
  {
    title: "Footwear Training",
    icon: StepForward,
    description: "Exercises for both barefoot and outdoor environments.",
    exercises: [
      {
        title: "Barefoot Foundation",
        difficulty: "Beginner",
        duration: 120,
        description: "Walk around your home barefoot on different surfaces (carpet, wood, tile) to stimulate the nerves and muscles in your feet.",
        visual: "https://placehold.co/400x400.png",
        aiHint: "barefoot home"
      },
      {
        title: "Outdoor Performance Training",
        difficulty: "Advanced",
        duration: 180,
        description: "Practice walking on natural, uneven surfaces like grass or sand (when safe). This builds adaptive strength and resilience in your feet and ankles.",
        visual: "https://placehold.co/400x400.png",
        aiHint: "walking grass"
      }
    ]
  }
];
