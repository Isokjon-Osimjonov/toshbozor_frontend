/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Component } from "react";
import { GetRouterLocation } from "./getRouterLocation";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ hasError: false });
    }
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <p style={{ textAlign: "center", marginTop: "200px" , fontSize:'1.5em'}}>
          “Toshbozor” jamoasi yuzaga kelgan noqulayliklar uchun uzr
          so&apos;raydi. <br/> Veb-sayt o&apos;zgartirilmoqda.
        </p>
      );
    }
    return this.props.children;
  }
}

export default GetRouterLocation(ErrorBoundary);
