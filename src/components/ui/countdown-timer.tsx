import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="flex justify-center gap-4 mt-6">
      <div className="text-center">
        <div className="bg-black-soft rounded-lg p-3 min-w-[60px]">
          <div className="text-2xl font-bold text-green-primary">{formatNumber(timeLeft.days)}</div>
        </div>
        <div className="text-xs text-gray-500 mt-1">Dias</div>
      </div>
      <div className="text-center">
        <div className="bg-black-soft rounded-lg p-3 min-w-[60px]">
          <div className="text-2xl font-bold text-green-primary">{formatNumber(timeLeft.hours)}</div>
        </div>
        <div className="text-xs text-gray-500 mt-1">Horas</div>
      </div>
      <div className="text-center">
        <div className="bg-black-soft rounded-lg p-3 min-w-[60px]">
          <div className="text-2xl font-bold text-green-primary">{formatNumber(timeLeft.minutes)}</div>
        </div>
        <div className="text-xs text-gray-500 mt-1">Min</div>
      </div>
      <div className="text-center">
        <div className="bg-black-soft rounded-lg p-3 min-w-[60px]">
          <div className="text-2xl font-bold text-green-primary">{formatNumber(timeLeft.seconds)}</div>
        </div>
        <div className="text-xs text-gray-500 mt-1">Seg</div>
      </div>
    </div>
  );
};
