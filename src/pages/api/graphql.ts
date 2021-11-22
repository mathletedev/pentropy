import { PageConfig } from "next";
import { graphqlServer } from "../../server";

export default graphqlServer;

export const config: PageConfig = {
	api: {
		bodyParser: false
	}
};
