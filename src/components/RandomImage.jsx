import React, { useEffect, useState } from "react";

const RandomImage = () => {
  const [randomImage, setRandomImage] = useState("");

  const getRandomImage = () => {
    const images = [
      "1.png",
      "2.png",
      "3.png",
      "4.png",
      "5.png",
      "6.png",
      "7.png",
      "8.png",
      "9.png",
      "10.png",
      "11.png",
      "12.png",
      "13.png",
      "14.png",
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  useEffect(() => {
    setRandomImage(getRandomImage());
  }, []);

  return randomImage;
};

export default RandomImage;
