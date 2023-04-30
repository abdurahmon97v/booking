import Svg, { Mask, Path, G } from "react-native-svg";
const Check = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={37}
    fill="none"
    {...props}
  >
    <Mask
      id="a"
      width={38}
      height={37}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M.969.766h36.146v35.9H.969V.767Z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#050038"
        d="M36.552 18.833c0 9.672-7.838 17.51-17.51 17.51s-17.51-7.838-17.51-17.51c0-9.666 7.838-17.505 17.51-17.505 9.671 0 17.51 7.839 17.51 17.505Zm-19.536 9.271 12.99-12.99a1.122 1.122 0 0 0 0-1.593l-1.595-1.6a1.129 1.129 0 0 0-1.599 0L16.22 22.517l-4.948-4.948a1.138 1.138 0 0 0-1.6 0l-1.593 1.599a1.128 1.128 0 0 0 0 1.599l7.339 7.338a1.128 1.128 0 0 0 1.599 0Z"
      />
    </G>
  </Svg>
);
export default Check;
