import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import kucing from "../assets/kucing.gif";
import pusing from "../assets/pusing.gif";

export default function Halaman1() {
  const [isPopped, setIsPopped] = useState(false);
  const balloonRef = useRef(null);
  const wrapperRef = useRef(null);
  const navigate = useNavigate();

  const handlePop = () => {
    setIsPopped(true);

    gsap.to(balloonRef.current, {
      scale: 0,
      duration: 1,
      ease: "back.in",
    });

    gsap.to(wrapperRef.current, {
      y: "-100%",
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        navigate("/halaman2");
      },
    });
  };

  return (
    <section ref={wrapperRef} onClick={handlePop} className="halaman_1">
      <div className="container halaman__container">
        {!isPopped ? (
          <div className="balloon" ref={balloonRef}>
            <img src={kucing} alt="kucing" />
          </div>
        ) : (
          <div className="explosion">
            <img src={pusing} alt="pusing" />
          </div>
        )}
        <button onClick={handlePop}>Tekan untuk membuka</button>
      </div>
    </section>
  );
}
