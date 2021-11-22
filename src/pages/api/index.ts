import { PageConfig } from "next";
import server from "../../server";

export default server;

export const config: PageConfig = {
	api: {
		bodyParser: false
	}
};
