import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Back = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill="#050038"
      d="m8.77 6.443 5.401-5.407a.959.959 0 0 1 1.35 0l.895.901a.943.943 0 0 1 0 1.344l-3.823 3.834 3.828 3.833a.943.943 0 0 1 0 1.344l-.896.9a.95.95 0 0 1-1.349 0l-5.406-5.4a.95.95 0 0 1 0-1.35ZM1.14 7.792l5.401 5.4a.95.95 0 0 0 1.349 0l.896-.895a.95.95 0 0 0 0-1.35L4.963 7.116 8.79 3.286a.95.95 0 0 0 0-1.349l-.896-.9a.959.959 0 0 0-1.349 0l-5.4 5.406a.945.945 0 0 0-.006 1.349Z"
    />
  </Svg>
);
export default Back;
