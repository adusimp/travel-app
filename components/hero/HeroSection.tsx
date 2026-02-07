// src/components/hero/HeroSection.tsx
import Image from "next/image";
import HeroContent from "./HeroContent";
import Navbar from "./Navbar";

// Bạn nhớ thay đường dẫn ảnh của bạn vào đây


export default function HeroSection() {
    return (
        // 1. Container chính: relative để làm mốc
       <div className="p-5">
         <section className="relative w-full overflow-hidden rounded-[40px] ">

            {/* 2. Ảnh nền: absolute + fill */}
            <div className="absolute inset-0 z-0 ">
                <Image
                    src="/banahill2.png" // Hoặc dùng biến import bên trên
                    alt="Iceland Landscape"
                    className="object-cover" // Cắt ảnh đẹp, không bị méo
                    fill
                    priority // Ưu tiên tải ảnh này trước vì nó ở đầu trang
                />
                {/* 3. Lớp phủ đen mờ (Overlay): Giúp chữ trắng dễ đọc hơn trên ảnh sáng */}
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* 4. Nội dung: relative + z-index cao hơn ảnh */}
            <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-between text-white">
                <Navbar />
                <HeroContent />
            </div>

        </section>
       </div>
    );
}