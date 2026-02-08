import Image from "next/image"


// Định nghĩa Props để tái sử dụng cho nhiều card khác nhau
interface PopularCardProps {
  imageSrc?: string;
  title?: string;
  count?: string;
}

export default function PopularCard({
  imageSrc = "/cauvang.png", // Default image
  title = "City Tours",      // Default title
  count = "100+ Tours",      // Default count
}: PopularCardProps) {
  return (
    <div className="relative w-40 h-40 rounded-2xl overflow-hidden group cursor-pointer">
      {/* 1. Hình nền */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* 2. Lớp phủ Gradient (Làm tối phần dưới để chữ trắng dễ đọc) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

      {/* 3. Nội dung Text */}
      <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col items-center justify-end text-center z-10">
        <h3 className="text-white text-sm font-bold tracking-wide mb-1">
          {title}
        </h3>
        <p className="text-gray-300 text-xs font-medium">
          {count}
        </p>
      </div>
    </div>
  );
}