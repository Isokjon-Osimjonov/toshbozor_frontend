import { useLocation } from "react-router-dom";

export const GetRouterLocation = (OriginalComponent) => {
  const NewComponent = (props) => {
    const location = useLocation();

    return <OriginalComponent {...props} location={location} />;
  };

  return NewComponent;
};
