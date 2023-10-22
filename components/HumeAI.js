const axios = require("axios");
import { FileSystem } from "expo";

const directoryPath = "../temp";

const files = [];

try {
  const foundFiles = await FileSystem.readDirectoryAsync(directoryPath);
  foundFiles.forEach((file) => {
    files.push(file);
  });
} catch (error) {
  console.error("Error reading directory:", error);
}
