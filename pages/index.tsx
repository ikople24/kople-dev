import Image from "next/image";
import { Lightbulb, ShieldCheck, GaugeCircle } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';
import { useState } from "react";


export default function Home() {

  const [selectedService, setSelectedService] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const formData = {
    service: selectedService,
    name,
    email,
    phone,
    message,
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const formData = {
    service: selectedService,
    name,
    email,
    phone,
    message,
  };

  try {
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("ส่งข้อมูลสำเร็จผ่าน n8n");
    } else {
      alert("เกิดข้อผิดพลาด");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("ไม่สามารถเชื่อมต่อ webhook");
  }
};

  return (
    <div className="min-h-screen bg-[#282a36] text-[#f8f8f2]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-[#44475a] text-[#f8f8f2] px-6 py-12 overflow-hidden" id="home">
        <div className="relative z-10 w-full px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 p-10 rounded-lg">

          {/* Left Side Content */}
          <div className="max-w-xl">
            <div className="animated-headline">
              <TypeAnimation
                sequence={[
                  'เทคโนโลยีขับเคลื่อนอนาคต',
                  1000,
                  'เทคโนโลยีสุดล้ำสมัย',
                  1000,
                  'ด้วยเทคโนโลยี AI',
                  1000,
                ]}
                wrapper="h1"
                repeat={Infinity}
                className="text-4xl md:text-5xl font-bold leading-tight mb-6 pr-4 break-words whitespace-normal"
                preRenderFirstString={true}
                speed={50}
              />
            </div>
            <p className="mb-8 text-lg animate-fade-in-up delay-200 transition-opacity duration-1000">
              ยกระดับธุรกิจของคุณด้วยโซลูชันเทคโนโลยีล้ำสมัยที่ออกแบบมาเพื่อเพิ่มประสิทธิภาพและสร้างการเติบโต
            </p>
            <div className="flex gap-4">
              <button className="btn btn-success" onClick={() => scrollTo("contact")}>ดูสินค้าของเรา</button>
              <button
                className="btn btn-outline btn-success hover:bg-success hover:text-black transition duration-300"
                onClick={() => scrollTo('contact')}
              >
                ติดต่อเรา
              </button>
            </div>
          </div>

          {/* Responsive Large Text */}
          <div className="absolute inset-0 flex flex-col-reverse lg:flex-row justify-end items-center lg:items-center pr-4 lg:pr-10 mt-24 lg:mt-0 pointer-events-none">
            <div className="text-[64px] lg:text-[120px] font-bold text-[#50fa7b]/20 select-none transition duration-500 ease-in-out hover:animate-pulse">
              <span>KOPLE-DEV</span>
            </div>
          </div>

        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 flex items-center bg-[#282a36]" id="why">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-[#f8f8f2]">ทำไมต้องเลือก KOPLE DEV?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card shadow p-6 bg-[#44475a] text-[#f8f8f2]">
              <Lightbulb className="w-8 h-8 text-[#bd93f9] mb-3 mx-auto" />
              <h3 className="font-bold mb-2">นวัตกรรมล้ำสมัย</h3>
              <p>เรานำเทคโนโลยีล่าสุดมาพัฒนาโซลูชันที่ตอบโจทย์</p>
            </div>
            <div className="card shadow p-6 bg-[#44475a] text-[#f8f8f2]">
              <ShieldCheck className="w-8 h-8 text-[#bd93f9] mb-3 mx-auto" />
              <h3 className="font-bold mb-2">ความปลอดภัยสูงสุด</h3>
              <p>ระบบออกแบบโดยคำนึงถึงความปลอดภัยของข้อมูล</p>
            </div>
            <div className="card shadow p-6 bg-[#44475a] text-[#f8f8f2]">
              <GaugeCircle className="w-8 h-8 text-[#bd93f9] mb-3 mx-auto" />
              <h3 className="font-bold mb-2">ประสิทธิภาพสูง</h3>
              <p>ลดต้นทุน เพิ่มประสิทธิภาพการทำงานระยะยาว</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#282a36] text-center text-[#f8f8f2]" id="services">
        <h2 className="text-3xl font-bold mb-6">สินค้าและบริการ</h2>
        <p className="max-w-xl mx-auto">เราพัฒนาโซลูชันเทคโนโลยี AI และฐานข้อมูลเพื่อรองรับธุรกิจทุกขนาด</p>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#282a36] text-[#f8f8f2]" id="about">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <Image
            src="https://res.cloudinary.com/dczmhfvgh/image/upload/v1747504680/unnamed_wnxhab.jpg"
            alt="about"
            width={400}
            height={400}
            className="rounded-full object-cover shadow-lg ring-4 ring-[#44475a]/40 transition duration-300 hover:brightness-110 hover:contrast-125 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">เกี่ยวกับ KOPLE DEV</h2>
            <p className="mb-6">
              บริษัทเทคโนโลยีชั้นนำ มุ่งพัฒนาโซลูชัน AI และฐานข้อมูลล้ำสมัยให้ลูกค้าสามารถใช้ได้อย่างเต็มประสิทธิภาพ
            </p>
            <button className="btn btn-success mr-4" onClick={() => scrollTo("contact")}>ติดต่อเรา</button>
            <button className="btn btn-outline btn-success">ดูสินค้า</button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#282a36]" id="contact">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#f8f8f2]">ติดต่อเรา</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6 bg-white shadow-md text-black">
              <h3 className="font-bold text-lg mb-4">ส่งข้อความถึงเรา</h3>
              <form className="space-y-4">
                <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)} className="select select-bordered bg-[#44475a] text-[#f8f8f2] w-full">
                  <option value="" disabled>เลือกบริการที่สนใจ</option>
                  <option>ซื้อโดเมน</option>
                  <option>เช่าพื้นที่คลาวด์</option>
                  <option>ออกแบบเว็บไซต์</option>
                  <option>ออกแบบฐานข้อมูล</option>
                  <option>UX/UI</option>
                  <option>เช่าซื้อระบบ Smart-Apps</option>
                </select>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="ชื่อ - นามสกุล" className="input input-bordered bg-[#44475a] text-[#f8f8f2] w-full" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="อีเมล" className="input input-bordered bg-[#44475a] text-[#f8f8f2] w-full" />
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="เบอร์โทรศัพท์" className="input input-bordered bg-[#44475a] text-[#f8f8f2] w-full" />
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="textarea textarea-bordered bg-[#44475a] text-[#f8f8f2] w-full" placeholder="ข้อความ"></textarea>
                <button type="submit" onClick={handleSubmit} className="btn btn-success w-full">ส่งข้อความ</button>
              </form>
            </div>
            <div className="card p-6 bg-white shadow-md text-black">
              <h3 className="font-bold text-lg mb-4">ข้อมูลติดต่อ</h3>
              <p>📍 ที่อยู่: 79 ถ.เจ้าเงาะ ต.ตาคลี อ.ตาคลี จ.นครสวรรค์ 60140</p>
              <p>📞 โทร: 090-6877773</p>
              <p>📧 อีเมล: boldnessking26@gmail.com</p>
              <p>🕘 เวลาเปิดทำการ: จันทร์ - ศุกร์ 09:00 - 18:00 น.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#44475a] text-[#f8f8f2] p-6 text-center">
        <p>&copy; 2025 KOPLE-DEV. สงวนลิขสิทธิ์ทั้งหมด</p>
      </footer>
    </div>
  );
}
