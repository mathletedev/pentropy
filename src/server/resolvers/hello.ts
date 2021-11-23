import { Ctx, Query, Resolver } from "type-graphql";
import { Context } from "../lib/types";

@Resolver()
export default class HelloResolver {
	@Query(() => String)
	public hello() {
		return "hello";
	}

	@Query(() => String)
	public session(@Ctx() { session }: Context) {
		return JSON.stringify(session);
	}
}
