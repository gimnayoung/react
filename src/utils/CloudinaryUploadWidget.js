import React, { Component } from "react";
// import { Button } from "react-bootstrap";
import "../App.css";

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const UPLOADPRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

class CloudinaryUploadWidget extends Component {
  componentDidMount() {
    if (!window.cloudinary) {
      console.error("Cloudinary SDK not loaded.");
      return;
    }

    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: CLOUDNAME,
        uploadPreset: UPLOADPRESET,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          document
            .getElementById("uploadedimage")
            .setAttribute("src", result.info.secure_url);
          this.props.uploadImage(result.info.secure_url);
        }
      }
    );

    document.getElementById("upload_widget").addEventListener("click", () => {
      myWidget.open();
    });
  }

  render() {
    return (
      <button id="upload_widget" size="sm" className="ml-2">
        Upload Image +
      </button>
    );
  }
}

export default CloudinaryUploadWidget;