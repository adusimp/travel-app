import Image from 'next/image';

export default function TripCard() {
  return (
    // Container chính: cần overflow-hidden để bo tròn cả ảnh bên trong
    <div className="relative w-72 h-96 rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
      
      {/* 1. Hình nền */}
      <Image
        src="/nuithantai.png" // Đảm bảo đường dẫn ảnh đúng
        alt="Núi Thần Tài"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        fill
      />

      {/* 2. Lớp phủ Gradient (Quan trọng): Giúp chữ trắng đọc được trên mọi nền ảnh */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* 3. Nội dung bên trong (đè lên ảnh) */}
      <div className="absolute inset-0 p-5 flex flex-col justify-between">
        
        {/* Phần trên: Số ngày */}
        <div className="flex justify-between items-start">
            <span className="text-white/80 text-sm font-medium">1 ngày</span>
        </div>

        {/* Phần dưới: Thông tin chi tiết & Giá */}
        <div className="flex items-end justify-between">
            {/* Bên trái: Tên và Địa điểm */}
            <div className="flex-1 pr-2">
                <p className="text-xs text-gray-300 font-light mb-1 uppercase tracking-wide">
                    Đà Nẵng, Việt Nam
                </p>
                <h3 className="text-lg font-bold text-white leading-tight mb-1">
                    Núi Thần Tài
                </h3>
                {/* Đánh giá sao (nếu cần) */}
                <div className="flex items-center gap-1 text-xs text-gray-300">
                    <span>★ 4.8 (243)</span>
                </div>
            </div>

            {/* Bên phải: Giá tiền */}
            <div className="text-right shrink-0">
                <p className="text-xs text-gray-400">Từ</p>
                <p className="text-xl font-bold text-white">$45</p>
            </div>
        </div>
      </div>
    </div>
  );
}