
import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function NvidiaStockPitch() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto', backgroundColor: 'white' }}>
      {/* Slide 1: Title Slide */}
      <div style={{ textAlign: 'center', padding: '60px 20px', border: '1px solid #ccc', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>Investment Pitch: NVIDIA (NVDA)</h1>
        <p style={{ fontSize: '1.2rem' }}>วิเคราะห์หุ้นสหรัฐ – NASDAQ</p>
        <p style={{ marginTop: '10px' }}>กลุ่มที่ XX | รหัส 68_GE101_SecXXXX</p>
      </div>

      {/* Slide 2 */}
      <div style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px' }}>
        <h2>1. ปัจจัยที่ส่งผลต่อราคาหุ้น</h2>
        <ul>
          <li>การเติบโตของเทคโนโลยี AI และ Cloud</li>
          <li>ผลประกอบการ NVIDIA ดีเกินคาด (EPS โตสูง)</li>
          <li>นโยบายดอกเบี้ยสหรัฐฯ ส่งผลต่อความเชื่อมั่นนักลงทุน</li>
          <li>ตลาดคาดหวังความเป็นผู้นำในอุตสาหกรรม AI</li>
        </ul>
      </div>

      {/* Slide 3 */}
      <div style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px' }}>
        <h2>2. ผลกระทบจากปัจจัยต่าง ๆ</h2>
        <ul>
          <li>ยอดขายชิป AI พุ่งสูง → ราคาหุ้นปรับตัวขึ้น</li>
          <li>แนวโน้มลดดอกเบี้ย → นักลงทุนกล้าลงทุนมากขึ้น</li>
          <li>RSI อยู่ที่ 60-65 → ราคายังไม่ Overbought</li>
          <li>ราคาอยู่เหนือเส้น MA 50 และ MA 200 → แนวโน้มยังขึ้น</li>
        </ul>
      </div>

      {/* Slide 4 */}
      <div style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px' }}>
        <h2>3. แนวโน้มในอนาคต</h2>
        <ul>
          <li>ตลาด AI ยังเติบโตต่อเนื่อง</li>
          <li>ราคาหุ้นมีโอกาสทำ New High หากเศรษฐกิจฟื้นตัว</li>
          <li>แนวโน้มขึ้นระยะกลางถึงยาว แต่มีโอกาสปรับฐานระยะสั้น</li>
        </ul>
      </div>

      {/* Slide 5 */}
      <div style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px', backgroundColor: '#e6f4ea' }}>
        <h2>✅ สรุป</h2>
        <p>
          หุ้น NVIDIA (NVDA) เป็นผู้นำในตลาด AI มีพื้นฐานที่แข็งแกร่งและแนวโน้มเติบโตสูงในระยะยาว
          จึงเหมาะกับนักลงทุนที่มองหาโอกาสระยะกลาง-ยาว และรับความเสี่ยงได้ในระดับหนึ่ง
        </p>
      </div>
    </div>
  );
}
