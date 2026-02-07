// src/components/hero/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="absolute top-0 left-0 w-full z-20 flex items-center px-8 py-6 text-white">
            {/* Logo */}
            <div className="text-2xl font-bold flex items-center gap-2">
                <span>❄️</span> viatours
            </div>

            {/* Menu Links - Ẩn trên mobile, hiện trên màn hình lớn */}
            <nav className="hidden md:flex gap-10 text-sm font-medium ml-12">
                <Link href="#" className="hover:text-orange-400 transition">Home</Link>
                <Link href="#" className="hover:text-orange-400 transition">Tour</Link>
                <Link href="#" className="hover:text-orange-400 transition">Destination</Link>
                <Link href="#" className="hover:text-orange-400 transition">Activities</Link>
                <Link href="#" className="hover:text-orange-400 transition">Contact</Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4 text-sm font-medium ml-auto">
                <button>USD</button>
                <Link href="#">Sign up</Link>
                <Link href="#" className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
                    Log in
                </Link>
            </div>
        </header>
    );
}