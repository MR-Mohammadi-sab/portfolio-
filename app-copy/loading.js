export default function Loading() {
  return (
    <div className="dark:bg-bg-dark bg-bg-light h-screen flex flex-col items-center justify-center">
      <div className="animate-pulse w-14 h-14 rounded-full">
        <div className="animate-spin w-14 h-14 rounded-full border-t-4 dark:border-border-dark border-gray-400"></div>
      </div>
    </div>
  );
}
