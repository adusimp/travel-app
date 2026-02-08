import Image from "next/image";

export default function TrendingCard() {
    return (
        <div className="border border-gray-300 hover:shadow p-4 rounded-xl   flex gap-4">
            <div className="relative w-15 h-15">
                <Image src="/banahill.png"
                    alt="Destination Name"
                    className="object-cover rounded-full"
                    fill />
            </div>
            <div>
                <h3 className="font-bold pb-1">Destination Name</h3>
                <p className="text-sm">100+ Tours</p>
            </div>
        </div>
    );
}
