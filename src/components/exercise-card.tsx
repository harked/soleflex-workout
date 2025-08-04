"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Timer } from './timer';
import { CheckCircle2 } from 'lucide-react';
import type { Exercise } from '@/lib/data';
import { cn } from '@/lib/utils';

export function ExerciseCard({ exercise }: { exercise: Exercise }) {
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const handleComplete = () => {
    if (!isCompleted) {
      setIsCompleted(true);
    }
  };

  const difficultyBadgeClass = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'bg-primary/10 text-foreground border-primary/20';
      case 'intermediate':
        return 'bg-accent/10 text-foreground border-accent/20';
      case 'advanced':
        return 'bg-destructive/10 text-foreground border-destructive/20';
      default:
        return 'bg-secondary text-secondary-foreground border-border';
    }
  };


  return (
    <Card className={cn('transition-all duration-500', isCompleted ? 'border-primary/50 shadow-md' : '')}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="font-headline text-xl mb-2">{exercise.title}</CardTitle>
            <Badge className={cn('capitalize', difficultyBadgeClass(exercise.difficulty))}>
              {exercise.difficulty}
            </Badge>
          </div>
          {isCompleted && <CheckCircle2 className="h-8 w-8 text-primary animate-in fade-in zoom-in" />}
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-4 flex items-center justify-center bg-accent/10 dark:bg-accent/5 rounded-lg p-4 h-40">
            <Image
              src={exercise.visual}
              alt={exercise.title}
              width={150}
              height={150}
              className="rounded-lg object-cover w-full h-full"
              data-ai-hint={exercise.aiHint}
            />
          </div>
          <div className="md:col-span-8">
            <CardDescription className="mb-4 text-base font-body text-foreground/80 leading-relaxed">{exercise.description}</CardDescription>
            <div className="space-y-4">
              <Timer
                duration={exercise.duration}
                onComplete={handleComplete}
                isStarted={isStarted}
                setIsStarted={setIsStarted}
                progress={progress}
                setProgress={setProgress}
                isCompleted={isCompleted}
              />
              <div className="flex items-center gap-3">
                <Progress value={progress} className="w-full h-2" />
                <span className="text-sm text-muted-foreground font-mono tabular-nums">{Math.round(progress)}%</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
