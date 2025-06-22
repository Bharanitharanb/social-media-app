import React, { useState } from "react";
import axios from "axios";

function UploadPage() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!image) return alert("Please select an image.");

    const formData = new FormData();
    formData.append("image", image);

    try {
      setUploading(true);
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/upload/image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`, // ✅ Send token
          },
        }
      );

      alert("Upload successful!");
      console.log("Uploaded to:", res.data.imageUrl);
      setUploadedUrl(res.data.imageUrl);
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold mb-4">Upload Image</h2>

      <input type="file" onChange={handleImageChange} className="mb-4" />
      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="w-64 h-64 object-cover mb-4 border"
        />
      )}

      <button
        onClick={handleUpload}
        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        disabled={uploading}>
        {uploading ? "Uploading..." : "Upload Image"}
      </button>

      {uploadedUrl && (
        <div className="mt-6 text-center">
          <p className="text-green-600">Image uploaded successfully!</p>
          <a
            href={uploadedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline">
            View Image
          </a>
        </div>
      )}
    </div>
  );
}

export default UploadPage;
