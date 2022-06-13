
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

require('dotenv').config;
const KAKAOMAP_KEY = process.env.NEXT_PUBLIC_KAKAOMAP_API

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
        <Html>
          <Head>
            <meta charSet="utf-8"/>
            <script
                type="text/javascript"
                src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAOMAP_KEY}&libraries=services,clusterer,autoload=false`}
            ></script>
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
      </Html>
    )  }
}

export default MyDocument