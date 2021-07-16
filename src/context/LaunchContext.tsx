import React, { createContext, useState } from "react";
import { useFavouriteImages } from "../hooks";

interface ILaunchContext {
  hasUri: (uri: string) => any;
  toggleFavouriteImages: (uri: string) => void;
}

const initialValues: ILaunchContext = {
  hasUri: (uri: string) => {},
  toggleFavouriteImages: (uri: string) => {},
};

export const LaunchContext = createContext<ILaunchContext>(initialValues);

export const LaunchProvider: React.FC = ({ children }) => {
  const { hasUri, toggleFavouriteImages } = useFavouriteImages();

  return (
    <LaunchContext.Provider
      value={{
        hasUri,
        toggleFavouriteImages,
      }}
    >
      {children}
    </LaunchContext.Provider>
  );
};
