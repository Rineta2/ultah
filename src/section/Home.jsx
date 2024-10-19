import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import kado from "../assets/kado.gif";
import assest_1 from "../assets/element_1.gif";
import ira from "../assets/ira.jpg";

export default function Home() {
  const [isPriview, setIsPriview] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const kertasRef = useRef(null);

  useEffect(() => {
    if (isPriview) {
      gsap.fromTo(
        kertasRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1, ease: "power2.inOut" }
      );
    } else {
      gsap.to(kertasRef.current, {
        x: "-100%",
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      });
    }
  }, [isPriview]);

  const outPriview = () => {
    gsap.to(kertasRef.current, {
      x: "-100%",
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        setIsPriview(false); // Set isPriview ke false setelah animasi keluar
        setCurrentPage(1); // Reset halaman ke 1 saat keluar
      },
    });
  };

  return (
    <section className="home">
      <div className="home__container container">
        <div className="kado">
          <img src={kado} alt="kado" />

          <div className="btn">
            <button onClick={() => setIsPriview(!isPriview)}>
              {isPriview ? "Sembunyikan Kado" : "Lihat Kado"}
            </button>
          </div>

          {isPriview && (
            <div className="priview" ref={kertasRef}>
              <div className="kertas">
                {currentPage === 1 && (
                  <div className="content_1">
                    <img src={ira} alt="" />
                    <h2>Selamat Ulang Tahun Ira! 🎂🎉</h2>
                    <p>
                      Selamat Ulang Tahun! Semoga hari istimewamu dipenuhi
                      dengan kegembiraan, tawa, dan semua hal yang kamu cintai.
                      Semoga kamu dan semua momen indah yang akan datang menjadi
                      milikmu. Nikmati setiap menit harimu! 🎂🎉
                    </p>
                    <div className="next">
                      <button onClick={outPriview}>Keluar</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="assest_1">
          <img src={assest_1} alt="assest_1" />
        </div>
      </div>
    </section>
  );
}
