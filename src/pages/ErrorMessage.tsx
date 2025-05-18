const ErrorMessage: React.FC = () => {
  return (
    <>
      <div className="flex items-center gap-4 bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-xl shadow-md max-w-xl mx-auto my-8 animate-fade-in">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-red-600 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01M12 5a7 7 0 100 14 7 7 0 000-14z"
          />
        </svg>
        <span className="font-medium">
          Word not found. <span className="underline">Try another one</span>,
          maybe with fewer typos 😅
        </span>
      </div>
    </>
  );
};

export default ErrorMessage;
