export const SVG = ({ iconName }) => {
  return (
    <svg width={30} height={30} className="">
      <use href={`/spritesheet.svg#${iconName}`} />
    </svg>
  );
};
