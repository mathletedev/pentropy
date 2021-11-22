import { Session } from "next-auth";
import { Ctx, Query, Resolver } from "type-graphql";

@Resolver()
export default class HelloResolver {
	@Query(() => String)
	public hello() {
		return "hello";
	}

	@Query(() => String)
	public session(@Ctx() session: Session) {
		return session.user?.name;
	}
}
