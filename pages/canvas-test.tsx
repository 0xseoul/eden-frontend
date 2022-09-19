import { useEffect, useState } from "react";

const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

const CanvasTest = () => {
  const [imageURL, setImageURL] = useState<string>();

  useEffect(() => {
    // canvasを生成
    const Canvas = document.createElement("canvas");
    // 画像サイズ
    Canvas.width = format.width;
    Canvas.height = format.height;

    // 背景作成
    const baseCtx = Canvas.getContext("2d");
    if (baseCtx) {
      baseCtx.fillStyle = "#fff";
      baseCtx.fillRect(0, 0, format.width, format.height);
    }
    // 文章作成
    const textCtx = Canvas.getContext("2d");
    if (textCtx) {
      textCtx.fillStyle = "gray";
      textCtx.font = "50px 'ＭＳ ゴシック'";
      textCtx.textAlign = "left";
      textCtx.textBaseline = "top";
      textCtx.fillText("tset", 120, 200, format.width);
    }
    // 画像URLを生成
    setImageURL(Canvas.toDataURL("image/png"));
  }, []);
  return <img src={imageURL} />;
};

export default CanvasTest;
