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

  private canvas: HTMLCanvasElement | undefined;
  private ctx: CanvasRenderingContext2D | null = null;
  constructor() {
    this.init();
  }

  private init() {
    this.canvas = document.createElement("canvas");
    // this.canvas = createCanvas(this.format.width, this.format.height);
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
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

  public getImageUrl(_editionCount: number = 1) {
    if (!this.canvas) return;
    const _url = this.canvas.toBlob(function (blob) {
      if (!blob) return;
      let url = URL.createObjectURL(blob);
      return url;
    });
    return _url;
  }

  get getCanvas() {
    return this.canvas;
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
