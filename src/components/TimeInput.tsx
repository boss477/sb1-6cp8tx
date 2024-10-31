import React from 'react';

interface TimeInputProps {
  onTimeSet: (seconds: number) => void;
}

export default function TimeInput({ onTimeSet }: TimeInputProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const minutes = Number(formData.get('minutes')) || 0;
    const seconds = Number(formData.get('seconds')) || 0;
    onTimeSet(minutes * 60 + seconds);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-1 mb-2">
      <div>
        <input
          type="number"
          name="minutes"
          min="0"
          max="59"
          placeholder="Min"
          className="w-full px-2 py-0.5 bg-gray-800 text-white rounded text-xs"
        />
      </div>
      <div>
        <input
          type="number"
          name="seconds"
          min="0"
          max="59"
          placeholder="Sec"
          className="w-full px-2 py-0.5 bg-gray-800 text-white rounded text-xs"
        />
      </div>
    </form>
  );
}