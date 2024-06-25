// pages/_document.tsx
import NextDocument, {
  Html,
  Head,
  DocumentContext,
  Main,
  NextScript,
} from 'next/document';

import { createRelayDocument, RelayDocument } from 'relay-nextjs/document';

interface DocumentProps {
  relayDocument: RelayDocument;
}

export default class MyDocument extends NextDocument<DocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const relayDocument = createRelayDocument();

    const renderPage = ctx.renderPage;
    ctx.renderPage = () =>
      renderPage({
        enhanceApp: (App) => relayDocument.enhance(App),
      });

    const initialProps = await NextDocument.getInitialProps(ctx);

    return {
      ...initialProps,
      relayDocument,
    };
  }

  render() {
    const { relayDocument } = this.props;

    return (
      <Html>
        <Head>
          <NextScript />
          <relayDocument.Script />
        </Head>
        <Main></Main>
      </Html>
    );
  }
}
