import PopularCard from "./popularCard";

export default function PopularSection() {
    return (
        < section className="px-20 py-10">
            <div className="flex justify-between mb-4">
                <h2 className="text-2xl font-bold">Popular Destinations</h2>
            </div>
            <div className="flex space-x-4">
                <PopularCard />
                <PopularCard />
                <PopularCard />
                <PopularCard />
                <PopularCard />
                <PopularCard />
                <PopularCard />
            </div>
        </section>
    )
}
