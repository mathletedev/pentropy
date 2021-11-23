import {
	ApolloClient,
	ApolloProvider,
	HttpLink,
	InMemoryCache
} from "@apollo/client";
import { AppProps } from "next/app";
import { FC } from "react";
import Layout from "../components/navigation/Layout";
import "../globals.css";
import { __baseUrl__ } from "../lib/constants";

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: new HttpLink({
		uri: `${__baseUrl__}/api`,
		credentials: "include"
	})
});

const _App: FC<AppProps> = ({ Component, pageProps }) => (
	<ApolloProvider client={client}>
		<Layout>
			<Component {...pageProps} />
		</Layout>
	</ApolloProvider>
);

export default _App;
