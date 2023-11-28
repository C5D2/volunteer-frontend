import React, { useEffect, useState } from 'react';

interface UserImageProps {
  imageUrl: string;
  style?: React.CSSProperties;
}

const UserImage: React.FC<UserImageProps> = ({ imageUrl, style }) => {
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
      })
      .catch((err) => console.error('유저 이미지를 불러오는 데 실패하였습니다.', err));
  }, [imageUrl]);

  return loadedImage ? <img src={loadedImage} alt="User" style={style} /> : <div>Loading...</div>;
};

export default UserImage;
