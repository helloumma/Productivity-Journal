type CircleDialProps = {
  percentage: any;
  title?: string;
  emoji?: any;
};

export default function CircleDial({
  percentage,
  title,
  emoji,
}: CircleDialProps) {
  // Ensure the percentage is between 0 and 100
  const clampedPercentage = Math.min(100, Math.max(0, percentage));

  // Calculate the stroke dash array for the circle
  const circumference = 2 * Math.PI * 50; // Assuming the radius is 50
  const strokeDasharray = `${
    (clampedPercentage / 100) * circumference
  } ${circumference}`;
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center">
        <svg
          width="75"
          height="75"
          viewBox="0 0 120 120"
          className="text-gray-200"
        >
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            className="opacity-75"
          />
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            strokeDasharray={strokeDasharray}
            transform="rotate(-90 60 60)"
            className="text-green-500"
          />
        </svg>
        <div className="absolute text-xl font-semibold">{emoji}</div>
      </div>
      <div className="flex items-center">
        {/* <p className="mr-2">{emoji}</p> */}
        <p>{title}</p>
      </div>
    </div>
  );
}
