const CloseIcon = ({ width, height, fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      fillRule="evenodd"
      d="m10.94 12-3.97 3.97 1.06 1.06L12 13.06l3.97 3.97 1.06-1.06L13.06 12l3.97-3.97-1.06-1.06L12 10.94 8.03 6.97 6.97 8.03 10.94 12Z"
      clipRule="evenodd"
    />
  </svg>
);

export default CloseIcon;
