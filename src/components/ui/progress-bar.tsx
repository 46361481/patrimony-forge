interface ProgressBarProps {
  progress: number;
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
      <div
        className="bg-gradient-to-r from-green-primary to-green-light h-full rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
