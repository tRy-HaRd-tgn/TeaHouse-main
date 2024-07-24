export default function MyMenuCase({
  id,
  src,
  alt,
  children,
  color,
  style,
  ...props
}) {
  return (
    <>
      <img
        {...props}
        id={id}
        src={src}
        className="Main_App_leftColumn_block_img"
        alt={alt}
        style={{ marginRight: "15px" }}
      />
      <p {...props} className={style}>{children}</p>
    </>
  );
}
