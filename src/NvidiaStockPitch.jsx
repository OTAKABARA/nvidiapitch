
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

      {/* Slide 5: เครื่องมือและแหล่งข้อมูล */}
      <div style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px' }}>
        <h2>4. เครื่องมือและแหล่งข้อมูลที่ใช้ในการวิเคราะห์</h2>
        
        <h3 style={{ marginTop: '15px', marginBottom: '10px', color: '#1a73e8' }}>📊 เครื่องมือการวิเคราะห์:</h3>
        <ul>
          <li><strong>Technical Analysis:</strong> RSI (Relative Strength Index), Moving Average (MA 50, MA 200)</li>
          <li><strong>Fundamental Analysis:</strong> EPS (Earnings Per Share), P/E Ratio</li>
          <li><strong>Market Analysis:</strong> Volume Analysis, Support & Resistance</li>
        </ul>

        <h3 style={{ marginTop: '15px', marginBottom: '10px', color: '#1a73e8' }}>📈 แหล่งข้อมูลหุ้น:</h3>
        <ul>
          <li><strong>Yahoo Finance</strong> (finance.yahoo.com) - ข้อมูลราคาและกราฟ</li>
          <li><strong>TradingView</strong> (tradingview.com) - เครื่องมือ Technical Analysis</li>
          <li><strong>SEC Edgar</strong> (sec.gov/edgar) - รายงานทางการเงินบริษัท</li>
          <li><strong>NASDAQ</strong> (nasdaq.com) - ข้อมูลหุ้นและข่าวสาร</li>
        </ul>

        <h3 style={{ marginTop: '15px', marginBottom: '10px', color: '#1a73e8' }}>📰 แหล่งข่าวสารและงานวิจัย:</h3>
        <ul>
          <li><strong>Bloomberg</strong> (bloomberg.com) - ข่าวการเงินและการลงทุน</li>
          <li><strong>Reuters</strong> (reuters.com) - ข่าวเศรษฐกิจโลก</li>
          <li><strong>MarketWatch</strong> (marketwatch.com) - ข้อมูลตลาดและการวิเคราะห์</li>
          <li><strong>Seeking Alpha</strong> (seekingalpha.com) - บทวิเคราะห์จากนักลงทุน</li>
        </ul>

        <h3 style={{ marginTop: '15px', marginBottom: '10px', color: '#1a73e8' }}>🏦 แหล่งข้อมูลเศรษฐกิจมหภาค:</h3>
        <ul>
          <li><strong>Federal Reserve</strong> (federalreserve.gov) - นโยบายดอกเบี้ย</li>
          <li><strong>Bureau of Economic Analysis</strong> (bea.gov) - ข้อมูล GDP และเศรษฐกิจ</li>
          <li><strong>FRED Economic Data</strong> (fred.stlouisfed.org) - ข้อมูลเศรษฐกิจสหรัฐฯ</li>
        </ul>
      </div>

      {/* Slide 6: วิธีการเข้าถึงเครื่องมือ */}
      <div style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px', backgroundColor: '#fff3e0' }}>
        <h2>5. วิธีการเข้าถึงและใช้งานเครื่องมือ</h2>
        
        <h3 style={{ marginTop: '15px', marginBottom: '10px', color: '#ff9800' }}>🆓 เครื่องมือฟรี:</h3>
        <ul>
          <li><strong>Yahoo Finance:</strong> สร้างบัญชีฟรี เพื่อติดตามพอร์ตโฟลิโอ</li>
          <li><strong>TradingView (Basic):</strong> ใช้งานฟรีได้ แต่จำกัดจำนวนกราฟ</li>
          <li><strong>SEC Edgar:</strong> เข้าถึงได้ฟรีโดยไม่ต้องสมัครสมาชิก</li>
          <li><strong>FRED:</strong> ข้อมูลเศรษฐกิจฟรีจาก Federal Reserve</li>
        </ul>

        <h3 style={{ marginTop: '15px', marginBottom: '10px', color: '#ff9800' }}>💰 เครื่องมือแบบเสียค่าใช้จ่าย:</h3>
        <ul>
          <li><strong>Bloomberg Terminal:</strong> ~$2,000/เดือน สำหรับมืออาชีพ</li>
          <li><strong>TradingView Pro:</strong> ~$15-60/เดือน เครื่องมือครบครัน</li>
          <li><strong>FactSet:</strong> สำหรับสถาบันการเงิน</li>
        </ul>

        <p style={{ marginTop: '15px', fontStyle: 'italic', color: '#666' }}>
          <strong>หมายเหตุ:</strong> ข้อมูลในงานนำเสนอนี้รวบรวมจากแหล่งข้อมูลสาธารณะ 
          และเป็นการวิเคราะห์เพื่อการศึกษาเท่านั้น ไม่ใช่คำแนะนำการลงทุน
        </p>
      </div>

      {/* Slide 7 */}
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