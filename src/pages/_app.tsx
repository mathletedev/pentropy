import { AppProps } from "next/app";
import { FC } from "react";
import Layout from "../components/navigation/Layout";
import "../globals.css";

const _App: FC<AppProps> = ({ Component, pageProps }) => (
	<Layout>
		<Component {...pageProps} />
	</Layout>
);

export default _App;
