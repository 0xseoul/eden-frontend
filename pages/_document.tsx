import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        {/* 여기서 이렇게 preload하니까 플리커링 없어짐 */}
        <Head>
          <link
            rel="preload"
            href="/fonts/NexaThin.otf"
            as="font"
            type="font/oft"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/NexaLight.otf"
            as="font"
            type="font/oft"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Nexa Light.otf"
            as="font"
            type="font/oft"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/NexaBook.otf"
            as="font"
            type="font/oft"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/NexaRegular.otf"
            as="font"
            type="font/oft"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/NexaBold.otf"
            as="font"
            type="font/oft"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/NexaXBold.otf"
            as="font"
            type="font/oft"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/NexaHeavy.otf"
            as="font"
            type="font/oft"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/NexaBlack.otf"
            as="font"
            type="font/oft"
            crossOrigin=""
          />
          <script async type="text/javascript" src="/easings.js"></script>

          <script async type="text/javascript" src="/easings.min.js"></script>
          <script
            async
            type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"
          ></script>
          {/* fullpage.js/vendors/easings */}

          {/* <script
            async
            type="text/javascript"
            src="./js/fullpage/vendors/scrolloverflow.js"
          ></script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
