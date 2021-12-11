import { useRef, useState } from "react";

export default function Form() {
  const imageRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const handleUpload = (e) => {
    e.preventDefault();
    const file = imageRef.current.files[0];
    if (file) {
      const src = URL.createObjectURL(file);
      setImageSrc(src);
    } else {
      setImageSrc(null);
    }
  };
  return (
    <form onSubmit={handleUpload}>
      <input ref={imageRef} type="file" />
      <br />
      <input type="submit" value="Submit" />
      {imageSrc && <img src={imageSrc} alt="profile" />}
    </form>
  );
}
