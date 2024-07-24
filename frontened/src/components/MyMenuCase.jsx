export default function MyMenuCase({id,src,alt,children,color,style,...props}) {
  return (
    <>
      <img
        id={id}
        src={src}
        className="Main_App_leftColumn_block_img"
        alt={alt}
      ></img>
      <p className={style}>{children}</p>
    </>
  );
}
