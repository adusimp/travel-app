// src/components/hero/HeroContent.tsx
export default function HeroContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full pb-20 pt-32">
      
      {/* Cột trái: Text */}
      <div className="space-y-6 p-8">
        <span className="text-gray-300 text-sm font-semibold uppercase tracking-wider">
          Starting at $978
        </span>
        <h1 className="text-xl md:text-7xl font-bold leading-tight">
          Iceland's legendary <br /> Golden Circle
        </h1>
        <p className="text-gray-200 max-w-md text-lg">
          Enjoy a full-day bus tour of Iceland's legendary Golden Circle. 
          Soak in the warm thermal waters of the Secret Lagoon.
        </p>
        <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition mt-4">
          View Tour
        </button>
      </div>
    </div>
  );
}