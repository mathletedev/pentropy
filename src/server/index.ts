import { ApolloServer } from "apollo-server-micro";
import cors from "micro-cors";
import { NextApiRequest, NextApiResponse } from "next";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import HelloResolver from "./resolvers/hello";

const graphql = async (req: NextApiRequest, res: NextApiResponse) => {
	const server = new ApolloServer({
		schema: await buildSchema({ resolvers: [HelloResolver] })
	});

	await server.start();

	return await cors({ origin: "https://studio.apollographql.com" })(
		server.createHandler({
			path: "/api/graphql"
		})
	)(req, res);
};

export default graphql;
