import { useMediaQuery } from "react-responsive"

function Mobile({ children }) {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 700px)",
  })
  return isTabletOrMobileDevice && children
}

function Desktop({ children }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  })
  return isDesktopOrLaptop && children
}

const Responsive = { Mobile, Desktop }

export default Responsive
