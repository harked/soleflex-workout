"use client";

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, RotateCw } from 'lucide-react';

interface TimerProps {
  duration: number;
  onComplete: () => void;
  isStarted: boolean;
  setIsStarted: (isStarted: boolean) => void;
  progress: number;
  setProgress: (progress: number) => void;
  isCompleted: boolean;
}

export function Timer({ duration, onComplete, isStarted, setIsStarted, progress, setProgress, isCompleted }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isActive, setIsActive] = useState(false);

  const resetTimer = useCallback(() => {
    setIsActive(false);
    setIsStarted(false);
    setTimeLeft(duration);
    setProgress(0);
  }, [duration, setProgress, setIsStarted]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      setIsActive(false);
      onComplete();
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive, timeLeft, onComplete]);

  useEffect(() => {
    const newProgress = ((duration - timeLeft) / duration) * 100;
    setProgress(newProgress > 100 ? 100 : newProgress);
  }, [timeLeft, duration, setProgress]);

  useEffect(() => {
    if(isCompleted) {
      setIsActive(false);
    }
  }, [isCompleted]);

  const handleStartPause = () => {
    if (isCompleted) return;
    if (!isStarted) {
      setIsStarted(true);
    }
    setIsActive(!isActive);
  };
  
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center justify-center rounded-lg bg-muted p-2">
        <span className="text-2xl font-semibold font-mono tabular-nums text-muted-foreground w-[70px] text-center">{formatTime(timeLeft)}</span>
      </div>
      <div className="flex gap-2">
        <Button onClick={handleStartPause} size="icon" aria-label={isActive ? 'Pause' : 'Start'} disabled={isCompleted}>
          {isActive ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
        </Button>
        <Button onClick={resetTimer} size="icon" variant="outline" aria-label="Reset">
          <RotateCw className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
