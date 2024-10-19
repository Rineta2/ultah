import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import img1 from "../assets/img1.gif";
import img2 from "../assets/img2.gif";

export default function Halaman2() {
  const [isPopped, setIsPopped] = useState(false);
  const balloonRef = useRef(null);
  const wrapperRef = useRef(null);
  const navigate = useNavigate();

  // Effect untuk animasi masuk saat komponen dimuat
  useEffect(() => {
    gsap.fromTo(
      balloonRef.current,
      { y: "-100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 0.7, ease: "power2.out" }
    );
  }, []);

  const handlePop = () => {
    setIsPopped(true);

    gsap.to(balloonRef.current, {
      scale: 0,
      duration: 1,
      ease: "back.in",
    });

    gsap.to(wrapperRef.current, {
      y: "100%", // Pindahkan ke bawah
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        navigate("/halaman3");
      },
    });
  };

  return (
    <section ref={wrapperRef} onClick={handlePop} className="halaman_2">
      <div className="container halaman__container">
        {!isPopped ? (
          <div className="balloon" ref={balloonRef}>
            <img src={img2} alt="kucing" />
            <button onClick={handlePop}>Tekan Lagi untuk membuka</button>
          </div>
        ) : (
          <div className="explosion">
            <img src={img1} alt="pusing" />
          </div>
        )}
      </div>
    </section>
  );
}
