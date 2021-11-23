import { ApolloServer } from "apollo-server-micro";
import cors from "micro-cors";
import { getSession } from "next-auth/client";
import "reflect-metadata";
import { buildSchemaSync } from "type-graphql";
import HelloResolver from "./resolvers/hello";

const server = new ApolloServer({
	schema: buildSchemaSync({ resolvers: [HelloResolver] }),
	context: async ({ req }) => ({ session: await getSession({ req }) }),
	introspection: true
});

const startServer = server.start();

export default cors()(async (req, res) => {
	if (req.method === "OPTIONS") {
		res.end();
		return false;
	}

	await startServer;
	await server.createHandler({ path: "/api" })(req, res);
});
