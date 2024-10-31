import React, { useRef, useState } from 'react';
import { Play, Upload, X } from 'lucide-react';

interface AudioUploadProps {
  onAudioSelect: (audioFile: File) => void;
  onRemove: () => void;
  currentFileName?: string;
}

export default function AudioUpload({ onAudioSelect, onRemove, currentFileName }: AudioUploadProps) {
  const [previewAudio, setPreviewAudio] = useState<HTMLAudioElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'audio/mpeg') {
      onAudioSelect(file);
      setPreviewAudio(new Audio(URL.createObjectURL(file)));
    }
  };

  const handlePreview = () => {
    if (previewAudio) {
      previewAudio.currentTime = 0;
      previewAudio.play().catch(() => {});
    }
  };

  const handleRemove = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    if (previewAudio) {
      URL.revokeObjectURL(previewAudio.src);
      setPreviewAudio(null);
    }
    onRemove();
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <input
          ref={fileInputRef}
          type="file"
          accept=".mp3,audio/mpeg"
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex-1 flex items-center justify-center gap-1 px-2 py-1 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded text-xs"
        >
          <Upload className="w-3 h-3" />
          {currentFileName || 'Upload MP3'}
        </button>
        {currentFileName && (
          <>
            <button
              onClick={handlePreview}
              className="p-1 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded"
              title="Preview"
            >
              <Play className="w-3 h-3" />
            </button>
            <button
              onClick={handleRemove}
              className="p-1 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded"
              title="Remove"
            >
              <X className="w-3 h-3" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}