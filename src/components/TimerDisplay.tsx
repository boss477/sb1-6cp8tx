import React from 'react';
import { Timer as TimerIcon, Settings2, Volume2 } from 'lucide-react';

interface TimerDisplayProps {
  time: number;
  showSettings: boolean;
  showSoundSettings: boolean;
  onSettingsToggle: () => void;
  onSoundSettingsToggle: () => void;
}

export default function TimerDisplay({
  time,
  showSettings,
  showSoundSettings,
  onSettingsToggle,
  onSoundSettingsToggle
}: TimerDisplayProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <div className="flex items-center justify-between mb-1">
        <TimerIcon className="w-3 h-3 text-gray-400" />
        <div className="flex gap-2">
          <button
            onClick={onSoundSettingsToggle}
            className="text-gray-400 hover:text-gray-200"
          >
            <Volume2 className="w-3 h-3" />
          </button>
          <button
            onClick={onSettingsToggle}
            className="text-gray-400 hover:text-gray-200"
          >
            <Settings2 className="w-3 h-3" />
          </button>
        </div>
      </div>
      <div 
        className="text-2xl font-bold text-center mb-2 text-white" 
        style={{ fontVariantNumeric: 'tabular-nums' }}
      >
        {formatTime(time)}
      </div>
    </>
  );
}