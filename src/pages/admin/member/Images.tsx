import React, { useEffect, useState } from 'react';

interface ImagesProps {
  imageUrl: string;
  style?: React.CSSProperties;
  onLoad: (loaded: boolean) => void;
}

const Images: React.FC<ImagesProps> = ({ imageUrl, style, onLoad }) => {
  const [loadedImage, setLoadedImage] = useState<string | null>(null);

  useEffect(() => {
    const loadImage = async () => {
      return new Promise<string>((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = imageUrl;
        loadImg.onload = () => resolve(imageUrl);
        loadImg.onerror = (err) => reject(err);
      });
    };

    loadImage()
      .then((loadedImage) => {
        setLoadedImage(loadedImage);
        onLoad(true); // 이미지 로딩이 완료되면 onLoad를 호출
      })
      .catch((err) => {
        console.error('유저 이미지를 불러오는 데 실패하였습니다.', err);
        onLoad(false); // 이미지 로딩이 실패하면 onLoad를 호출
      });
  }, [imageUrl, onLoad]);

  return loadedImage ? <img src={loadedImage} alt="User" style={style} /> : <div>Loading...</div>;
};

export default Images;
