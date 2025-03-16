import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const imagesDir = path.join(__dirname, 'public/images/h5'); // Update this path to the correct directory

// Function to convert PNG to WebP and delete the original PNG
const convertToWebP = async (filePath) => {
  const outputFilePath = filePath.replace(/\.png$/, '.webp');
  await sharp(filePath)
    .webp({ quality: 80 })
    .toFile(outputFilePath);
  console.log(`Converted: ${filePath} -> ${outputFilePath}`);

  // Delete the original PNG file
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error deleting original PNG:', err);
    } else {
      console.log(`Deleted original PNG: ${filePath}`);
    }
  });
};

// Read the directory and convert each PNG image
fs.readdir(imagesDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach((file) => {
    const filePath = path.join(imagesDir, file);
    if (path.extname(file).toLowerCase() === '.png') {
      convertToWebP(filePath).catch((err) => {
        console.error('Error converting image:', err);
      });
    }
  });
});