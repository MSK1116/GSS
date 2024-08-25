import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";

// Configure NProgress to disable the spinner
NProgress.configure({ showSpinner: false });

function useProgressBar() {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();

    // Stop the progress bar when the page is fully loaded
    const handleComplete = () => NProgress.done();

    // Set up an event listener to handle page load completion
    window.addEventListener("load", handleComplete);
    return () => {
      window.removeEventListener("load", handleComplete);
      NProgress.done(); // Ensure it's done if the component unmounts
    };
  }, [location.pathname]); // Dependency on location.pathname to trigger on route changes
}

export default useProgressBar;
