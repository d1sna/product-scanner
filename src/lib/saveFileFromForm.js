import { createWriteStream } from "fs";

const saveFileFromForm = async (fileFromForm, filePath) => {
  const matches = fileFromForm.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  // TODO:
  const imageType = matches[1];
  const imageData = matches[2];

  const buffer = Buffer.from(imageData, "base64");

  const fileStream = createWriteStream(filePath);
  fileStream.write(buffer);
  fileStream.end();

  fileStream.on("finish", () => {
    console.log("File successfully saved:", filePath);
  });

  fileStream.on("error", (error) => {
    console.error("Error while saving file:", error);
  });
};

export default saveFileFromForm;