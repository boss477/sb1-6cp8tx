import React from 'react';
import { Pause, Play } from 'lucide-react';

interface TimerControlsProps {
  isRunning: boolean;
  onToggle: () => void;
}

export default function TimerControls({ isRunning, onToggle }: TimerControlsProps) {
  return (
    <button
      onClick={onToggle}
      className={`w-full py-1 px-2 rounded-lg flex items-center justify-center gap-1 transition-colors text-xs ${
        isRunning
          ? 'bg-red-500 hover:bg-red-600 text-white'
          : 'bg-gray-700 hover:bg-gray-600 text-white'
      }`}
    >
      {isRunning ? (
        <>
          <Pause className="w-3 h-3" /> Stop
        </>
      ) : (
        <>
          <Play className="w-3 h-3" /> Start
        </>
      )}
    </button>
  );
}