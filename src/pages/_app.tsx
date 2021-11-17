import { AppProps } from "next/dist/shared/lib/router/router";
import { FC, Fragment } from "react";
import Layout from "../components/Layout";
import "../globals.css";

const _App: FC<AppProps> = ({ Component, pageProps }) => (
	<Fragment>
		<Layout>
			<Component {...pageProps} />
		</Layout>
	</Fragment>
);

export default _App;
