import type { ChangeEvent } from "react";
import { useState } from "react";
import { fetchData } from "../hooks/fetchData";

//upload statukset
type UploadStatus = "idle" | "uploading" | "success" | "error";

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<UploadStatus>("idle");

  //Tiedoston valinta
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
//Tiedosto lähetetään palvelimelle
  const handleFileUpload = async () => {
    try {
        if (!file) return;

        const token = localStorage.getItem("token");

        setStatus("uploading");

        const formData = new FormData();
        formData.append("file", file);

        const fileData = await fetchData<{filename: string, filesize: number, media_type: string}>(
            import.meta.env.VITE_UPLOAD_SERVER + "/upload",
            {
                method: "POST",
                headers: { Authorization: `Bearer ${token}` },
                body: formData,
            }
        );
        console.log("fileData:", fileData)


        setStatus("success");
    } catch (error) {
        console.log("Upload error:", error);
        setStatus("error");
    }
};

  return (
    <div>
      <input type="file" onChange={handleFileChange} />

      {file && (
        <div>
          <p>File name: {file.name}</p>
          <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
          <p>Type: {file.type}</p>
        </div>
      )}

      {file && status !== "uploading" && (
        <button className="upload-button" onClick={handleFileUpload}>Upload</button>
      )}

      {status === "success" && (
        <p>Upload Successful</p>
      )}

      {status === "error" && (
        <p>Upload Failed</p>
      )}
    </div>
  );
};

export default Upload;