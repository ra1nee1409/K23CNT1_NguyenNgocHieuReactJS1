import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://i.pinimg.com/736x/ef/68/00/ef68005b0e34afde4e18422358c8c8b4.jpg",
  "https://i.pinimg.com/736x/42/8d/60/428d60695edcf9abfbd66bceee9a6d26.jpg",
  "https://i.pinimg.com/736x/7f/13/45/7f13459f1c0fbdff32c757bd0d59a11b.jpg",
];

const bookImages = [
  "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTwyv8lRr3KpyhmcV0V2z9R8wBqyzhxApjtTSf9fQ5LHJ7nAJALfbZqQ3-IQnedftXk9CDNHNlPfGxwOkan52XA_9-Wmi0H63YhbNJShxKfq5z8VZrSB12U&usqp=CAc",
  "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTGE6CI88bFebx8G5g_ASX13kmaK8XECPLdPAtDZsqeXceyOWPxmyMlAbQNbs-KCfUprtgYo-Muf50VJZKispzqIiDveIFNKiI6uxIpZA-BqYzTJs7aO5BdK3xhkUzWvKgPu0AN0io&usqp=CAc",
  "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSKq5SpO8j8CWugMwrMWOLhdYhiQr6lwjFOqGAXfXyJcox6EEFY7XiQJZ7xvcmoI2ypH81MaM1jLM7fRxXYuWxQWre4Krx03eh_ixWi_iDwfBXc4OAFQb1hg8tmJGmbXlZQtqDpvB16&usqp=CAc",
  "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQqn2T2qw6Pr9JXgLNjloPDxFfR1AsSiOBkKffDejnGX4R4BL3BZhUSH5DMs7xYBPWXCPsfkxYTyZyE7xa_lYjMtPhl8mAiXbKkZNYudEEOT6Bygf132a6WOrb4LPG0WIQXh_yLLrveVA&usqp=CAc",
  "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQdjwLpUn5Q5IdAMErlld8zLoWmICFF3hfNc4JhXabSeseBkf2Izk2tcTeah7rVz_ijM0eU1XXsZx7s0m2P0_GJznx-5dw-gnh8GxXHpKWzCRITimyy37v4shAFjlddcbqBMjGEyAY&usqp=CAc",
];

export default function NnhHome() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="position-relative d-flex justify-content-center">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="rounded shadow-lg"
          style={{
            backgroundImage: `url(${images[index]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "400px",
            width: "80%",
            borderRadius: "12px",
            position: "relative",
          }}
        ></motion.div>
      </div>

      <button
        className="btn btn-dark position-absolute"
        style={{
          left: "95px",
          top: "38%",
          transform: "translateY(-50%)",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={prevImage}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        className="btn btn-dark position-absolute"
        style={{
          right: "95px",
          top: "38%",
          transform: "translateY(-50%)",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={nextImage}
      >
        <ChevronRight size={24} />
      </button>

      <div className="mt-3">
        <h3 style={{ textAlign: "center" }}>New Book</h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            padding: "20px",
          }}
        >
          {bookImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              style={{ width: "197px", height: "295px" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
