import React, { useEffect, useState } from "react";
import "./FaceDetection.css";

export const FaceDetection = ({ box, url, loading }) => {
  const [imageDimensions, setImageDimensions] = useState({ height: 0, width: 0 });

  useEffect(() => {
    const apiImage = document.getElementById("detection-image");
    if (apiImage) {
      setImageDimensions({
        height: Number(apiImage.height),
        width: Number(apiImage.width),
      });
    }
  }, [box]);

  // Check if the box array is not empty before accessing its elements
  const imageBox =
    box.length > 0
      ? {
          topRow: box[0].topRow * imageDimensions.height || 0,
          bottomRow: imageDimensions.height - box[0].bottomRow * imageDimensions.height || 0,
          rightCol: imageDimensions.width - box[0].rightCol * imageDimensions.width || 0,
          leftCol: box[0].leftCol * imageDimensions.width || 0,
        }
      : null;

  return (
    <div className="center">
      <div className="face-detection-output-image w-50">
        {url && (
          <img
            style={{
              top: imageBox?.topRow,
              left: imageBox?.leftCol,
              right: imageBox?.rightCol,
              bottom: imageBox?.bottomRow,
            }}
            id="detection-image"
            src={url}
            className="w-90 mt2 br4"
            alt="Face Detection Output"
          />
        )}
      </div>
    </div>
  );
};
