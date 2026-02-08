import Image from 'next/image';
import { Ticket, Plane, Diamond } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: <Ticket size={32} />, 
      title: "Ultimate flexibility",
      desc: "You're in control, with free cancellation and payment."
    },
    {
      id: 2,
      icon: <Plane size={32} />, 
      title: "Memorable experiences",
      desc: "Browse and book tours and activities so incredible."
    },
    {
      id: 3,
      icon: <Diamond size={32} />,
      title: "Quality at our core",
      desc: "High quality standards. Millions of reviews."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        
        {/* CONTAINER CHÍNH: Dùng relative để định vị các phần tử con */}
        <div className="relative">

          {/* 1. ẢNH (LAYER GIỮA - Z-10) 
             - absolute: để nó có thể nằm đè lên vị trí bất kỳ
             - left-0: ghim vào bên trái
             - z-10: cao hơn nền hồng (z-0) nhưng thấp hơn card (z-20)
          */}
          <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 z-10 w-[350px] h-[500px]">
             <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl border-[6px] border-white">
                <Image 
                  src="/whychoosetour.png" // Thay ảnh của bạn
                  alt="Travel girl"
                  fill
                  className="object-cover"
                />
             </div>
          </div>

          {/* 2. KHỐI NỀN HỒNG (LAYER ĐÁY - Z-0) 
             - ml-auto & w-[85%]: Đẩy khối này sang phải, chừa chỗ trống bên trái cho ảnh
             - pl-[180px]: QUAN TRỌNG - Padding trái cực lớn để đẩy nội dung né cái ảnh ra
          */}
          <div className="bg-[#FFFBF8] rounded-[50px] p-10 lg:pl-[200px] xl:pl-[280px] lg:py-16 ml-auto w-full lg:w-[90%] relative z-0 min-h-[400px]">
            
            {/* 3. NỘI DUNG CHỮ & CARD (LAYER ĐỈNH - Z-20) 
               - relative z-20: Đảm bảo luôn nổi lên trên cùng, không bị ảnh che
            */}
            <div className="relative z-20">
              
              {/* Header */}
              <div className="mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
                  Why choose Tourz
                </h2>
                <p className="text-slate-500">
                  Most viewed and all-time top-selling services
                </p>
              </div>

              {/* Grid Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((item) => (
                  <div 
                    key={item.id} 
                    className="bg-white p-6 rounded-[32px] shadow-lg border border-orange-50 hover:-translate-y-2 transition-transform duration-300"
                  >
                    <div className="text-orange-500 mb-4 bg-orange-50 w-fit p-3 rounded-full">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
          
          {/* Mobile Image (Chỉ hiện khi màn hình nhỏ) */}
          <div className="block lg:hidden w-full h-64 relative rounded-3xl overflow-hidden mb-8 shadow-lg">
             <Image src="/whychoosetour.png" alt="Travel" fill className="object-cover" />
          </div>

        </div>
      </div>
    </section>
  );
}