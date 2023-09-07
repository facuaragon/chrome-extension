const Cloudy = ({ width, height, fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill={fill}
      d="M8.64 1.668C6.482 1.67 4.648 2.999 3.772 4.9l-.061.13-.139.01C1.578 5.184 0 6.91 0 9.008 0 11.201 1.716 13 3.838 13h9.284C14.714 13 16 11.65 16 10.012a2.958 2.958 0 0 0-1.805-2.735l-.137-.058-.01-.149c-.135-2.993-2.487-5.4-5.404-5.402zm0 1c2.368.002 4.292 1.952 4.405 4.447v.01l.051.776.703.297a1.944 1.944 0 0 1 1.195 1.814c.01 1.114-.845 1.988-1.87 1.988H3.837C2.281 12 .999 10.68.999 9.008c0-1.597 1.185-2.866 2.645-2.973l.723-.05.31-.662v-.004c.728-1.58 2.213-2.65 3.961-2.65z"
      fontFamily="sans-serif"
      fontWeight={400}
      overflow="visible"
      style={{
        lineHeight: "normal",
        InkscapeFontSpecification: "sans-serif",
        textIndent: 0,
        textAlign: "start",
        textDecorationLine: "none",
        textTransform: "none",
        marker: "none",
      }}
    />
  </svg>
);

export default Cloudy;