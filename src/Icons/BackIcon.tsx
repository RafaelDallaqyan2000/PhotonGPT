import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const BackIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={35}
    height={35}
    fill="none"
    {...props}>
    <Path
      fill="#DDD"
      fillOpacity={0.867}
      d="M11.583 15.89h15.716c.4 0 .734.136 1.004.407.27.27.405.605.406 1.003 0 .398-.135.733-.406 1.004-.272.27-.606.406-1.004.406H11.583l4.017 4.017c.282.282.417.61.406.986a1.48 1.48 0 0 1-.406.987 1.435 1.435 0 0 1-1.005.44 1.313 1.313 0 0 1-1.004-.405l-6.448-6.448a1.244 1.244 0 0 1-.3-.458 1.526 1.526 0 0 1-.088-.529c0-.188.03-.364.087-.529.058-.164.158-.317.3-.458l6.45-6.448a1.313 1.313 0 0 1 1.003-.406c.387.011.722.158 1.005.44.258.283.394.612.406.988.012.375-.123.704-.406.986l-4.017 4.018Z"
    />
  </Svg>
);
export default BackIcon;
