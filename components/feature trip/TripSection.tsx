import TripCard from "./TripCard";

export default function TripSection() {
    return (
        <section className="">
            <div className="container mx-auto mb-4">
                <h2 className="text-2xl font-bold">Featured Trips</h2>
            </div>

            {/* Vùng chứa danh sách card */}
            <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth">
                
                {/* Tăng số lượng lên 10 card để test cuộn */}
                {Array.from({ length: 10 }).map((_, index) => (
                    
                    // QUAN TRỌNG: flex-shrink-0 giúp card không bị bóp méo
                    <div key={index} className="flex-shrink-0">
                        <TripCard />
                    </div>
                    
                ))}
            </div>
        </section>
    )
}