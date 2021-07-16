import { useState } from "react";

export const useFavouriteImages = () => {
  const [favouriteImages, setFavouriteImages] = useState<string[]>([]);

  const hasUri = (uri: string) =>
    favouriteImages.find((imageUri) => uri === imageUri);

  const toggleFavouriteImages = (uri: string) => {
    let newImages = [...favouriteImages];

    if (hasUri(uri)) {
      newImages = newImages.filter((imageUri) => imageUri !== uri);
    } else {
      newImages.push(uri);
    }
    setFavouriteImages(newImages);
  };

  return {
    hasUri,
    toggleFavouriteImages,
  };
};
