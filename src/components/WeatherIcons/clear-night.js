const ClearNight = ({ width, height, fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill={fill}
      d="M6.001 1.195 6 1.196c-.24.517-.427 1.043-.533 1.366-.348 0-.92.013-1.467.084v.001h.001c.417.39.86.73 1.135.93-.108.33-.272.88-.374 1.42h.002c.499-.276.959-.592 1.234-.791a12.06 12.06 0 0 0 1.236.793v-.001a12.804 12.804 0 0 0-.371-1.418A12.065 12.065 0 0 0 8 2.65v-.001h-.001a12.788 12.788 0 0 0-1.464-.085 12.07 12.07 0 0 0-.534-1.37zM2.5 5.146a9.6 9.6 0 0 0-.4 1.025 9.032 9.032 0 0 0-1.1.064 9.6 9.6 0 0 0 .852.697c-.081.248-.204.66-.28 1.066a9.59 9.59 0 0 0 .926-.594A8.9 8.9 0 0 0 3.426 8v-.001c-.082-.42-.2-.822-.279-1.064.211-.153.553-.414.853-.698a9.596 9.596 0 0 0-1.099-.064 9.078 9.078 0 0 0-.4-1.027zm7.797-2.901a5.725 5.725 0 0 1 1.1 5.096 5.729 5.729 0 0 1-7.016 4.05 5.728 5.728 0 0 1-2.132-1.099 6.507 6.507 0 0 0 4.56 4.485 6.506 6.506 0 0 0 7.969-4.6 6.507 6.507 0 0 0-4.48-7.932zm2.166 2.457a5.471 5.471 0 0 1 1.528 4.127 5.567 5.567 0 0 1-.180 1.09 5.49 5.49 0 0 1-9.137 2.528c3.4.61 6.78-1.453 7.69-4.846v-.002a6.71 6.71 0 0 0 .100-2.897z"
      overflow="visible"
      style={{
        marker: "none",
      }}
    />
  </svg>
);

export default ClearNight;
