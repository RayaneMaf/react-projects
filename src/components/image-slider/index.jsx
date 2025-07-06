import { useEffect, useState } from "react";
import "./style.css";
function ImageSlider({ url, limit = 10, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(url) {
    setLoading(true);
    try {
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
      }
    } catch (e) {
      setErrorMsg(e.message);
    } finally {
      setLoading(false);
    }
  }

  const handlePrevious = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };
  const handleNext = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occured ! {errorMsg}</div>;
  }

  console.log(images);

  return (
    <div className="imageSlider-app">
      <div className="imageSlider-title">Image Slider</div>
      <div className="imageSlider-images-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="arrow arrow-left"
          onClick={handlePrevious}
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
        {images && images.length
          ? images.map((item, index) => (
              <img
                src={item.download_url}
                alt={item.download_url}
                key={item.id}
                className={
                  currentImage === index
                    ? "imageSlider-image"
                    : "imageSlider-image imageSlider-inactive-image"
                }
              />
            ))
          : null}
        <span className="imageSlider-circle-indicators">
          {images && images.length
            ? images.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentImage(index)}
                  className={
                    currentImage === index
                      ? "imageSlider-indicator"
                      : "imageSlider-indicator imageSlider-inactive-indicator"
                  }
                ></button>
              ))
            : null}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="arrow arrow-right"
          onClick={handleNext}
        >
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
      </div>
    </div>
  );
}
export default ImageSlider;
