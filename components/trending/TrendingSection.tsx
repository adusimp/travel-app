import TrendingCard from "./TrendingCard";

export default function TrendingSection() {
  return (
    <section className="">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Trending Destinations</h2>
        <p className="hover:underline hover:text-blue-300 cursor-pointer">see all</p>
      </div>
      <div className="grid grid-cols-4 gap-4 pt-5">
        {Array.from({ length: 8 }).map((_, index) => (
          <TrendingCard key={index} />
        ))}
      </div>
    </section>
  );
}