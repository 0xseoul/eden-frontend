// AutoHeightImage.tsx

import Image, { ImageProps } from "next/image";

const AutoHeightImage = ({ ...props }: ImageProps): React.ReactElement => {
  return (
    <div className="autoImage__wrapper rounded-3xl">
      <Image layout="fill" className="autoImage" {...props} alt="img" />
    </div>
  );
};

export default AutoHeightImage;
