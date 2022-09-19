import {
  createCanvas,
  loadImage,
  Image,
  CanvasRenderingContext2D,
  Canvas,
} from "canvas";
import fs from "fs";
const basePath = process.cwd();
const buildDir = `${basePath}/__test__`;
const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

export const getCanvas = () => {
  const canvas = createCanvas(format.width, format.height);
  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = format.smoothing;
  return { canvas, ctx };
};

export const loadLayerImg = async (
  imgLink: string
): Promise<Image | undefined> => {
  try {
    return new Promise(async (resolve) => {
      const image = await loadImage(imgLink);
      resolve(image);
    });
  } catch (error) {
    console.error("Error loading image:", error);
    return undefined;
  }
};

export const drawElement = (
  _loadedImage: Image,
  ctx: CanvasRenderingContext2D
) => {
  //_layersLen 이거 결국 안씀
  ctx.globalAlpha = 1;
  ctx.globalCompositeOperation = "source-over";
  // false
  ctx.drawImage(_loadedImage, 0, 0, format.width, format.height);
};

export const saveImage = (_editionCount: string | number, canvas: Canvas) => {
  fs.writeFileSync(
    `${buildDir}/${_editionCount}.png`,
    canvas.toBuffer("image/png") // 지금까지 ctx에 쌓아서 저장한거를 이미지로 만드는 작업
  );
};

const buildSetup = () => {
  if (fs.existsSync(buildDir)) {
    fs.rmdirSync(buildDir, { recursive: true });
  }
  fs.mkdirSync(buildDir);

  fs.mkdirSync(`${buildDir}/json`);
  fs.mkdirSync(`${buildDir}/images`);
};
