import { ApolloServer } from "apollo-server-micro";
import cors from "micro-cors";
import "reflect-metadata";
import { buildSchemaSync } from "type-graphql";
import HelloResolver from "./resolvers/hello";

const server = new ApolloServer({
	schema: buildSchemaSync({ resolvers: [HelloResolver] }),
	introspection: true
});

const startServer = server.start();

export const graphqlServer = cors()(async (req, res) => {
	if (req.method === "OPTIONS") {
		res.end();
		return false;
	}

	await startServer;
	await server.createHandler({ path: "/api/graphql" })(req, res);
});
