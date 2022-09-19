import {
  createCanvas,
  loadImage,
  Canvas as C,
  CanvasRenderingContext2D,
} from "canvas";

import fs from "fs";
import { BASE_PATH } from "../constants";

class Canvas {
  private format = {
    width: 512,
    height: 512,
    smoothing: false,
  } as const;

  private buildDir: string = `${BASE_PATH}/__test__`;

  private canvas: C | undefined;
  private ctx: CanvasRenderingContext2D | undefined;
  constructor() {
    this.init();
  }

  private init() {
    this.canvas = createCanvas(this.format.width, this.format.height);
    this.ctx = this.canvas.getContext("2d");
    this.ctx.imageSmoothingEnabled = this.format.smoothing;
  }

  public async loadLayerImg(imgLink: string) {
    try {
      return new Promise(async (resolve) => {
        const image = await loadImage(imgLink);
        resolve(image);
      });
    } catch (error) {
      console.error("Error loading image:", error);
    }
  }

  // FIXME: 여기 부분 수정하기
  public drawElement(_loadedImage: any) {
    //_layersLen 이거 결국 안씀
    if (!this.ctx) return;
    this.ctx.globalAlpha = 1;
    this.ctx.globalCompositeOperation = "source-over";
    // false
    this.ctx.drawImage(
      _loadedImage,
      0,
      0,
      this.format.width,
      this.format.height
    );
  }

  public clearCanvas() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.format.width, this.format.height);
  }

  public saveImage(_editionCount: number = 1) {
    if (!this.canvas) return;
    fs.writeFileSync(
      `${this.buildDir}/${_editionCount}.png`,
      this.canvas.toBuffer("image/png") // 지금까지 ctx에 쌓아서 저장한거를 이미지로 만드는 작업
    );
  }

  get getCanvas() {
    return this.canvas;
  }

  get buffer() {
    if (!this.canvas) return;
    return this.canvas.toBuffer("image/png");
  }

  get toImgSrc() {
    if (!this.canvas) return;
    return this.canvas.toDataURL();
  }

  get getCtx() {
    return this.ctx;
  }
}
export default Canvas;
