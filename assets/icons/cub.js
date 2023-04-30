import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
export default function Cub(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={37}
      height={37}
      fill="none"
      {...props}
    >
      <Mask
        id="a"
        width={37}
        height={37}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M.09.776h36.146v35.89H.09V.777Z" />
      </Mask>
      <G mask="url(#a)">
        <Path
          fill="#050038"
          d="M16.97 1.219 2.283 6.729A3.39 3.39 0 0 0 .09 9.906v15.886c0 1.286.724 2.458 1.87 3.03l14.687 7.34c.953.479 2.073.479 3.026 0l14.688-7.34a3.382 3.382 0 0 0 1.87-3.03V9.906a3.38 3.38 0 0 0-2.198-3.172L19.35 1.23a3.347 3.347 0 0 0-2.38-.01Zm1.193 4.385 13.557 5.083v.079L18.163 16.27 4.605 10.766v-.079l13.558-5.083Zm2.26 25.13v-10.51l11.297-4.589v9.454l-11.297 5.645Z"
        />
      </G>
    </Svg>
  );
}
