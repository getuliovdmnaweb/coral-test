import React from "react";
import { Loading } from "./loading-launches.styled";

interface Props {
  loading: boolean;
}

const LoadingLaunches: React.FC<Props> = ({ children, loading }) => {
  if (loading) {
    return <Loading />;
  }

  return <>{children}</>;
};

export default LoadingLaunches;
