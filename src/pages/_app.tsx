import { AppProps } from "next/dist/shared/lib/router/router";
import { FC } from "react";
import Layout from "../components/Layout";
import "../globals.css";

const _App: FC<AppProps> = ({ Component, pageProps }) => (
	<Layout>
		<Component {...pageProps} />
	</Layout>
);

export default _App;
