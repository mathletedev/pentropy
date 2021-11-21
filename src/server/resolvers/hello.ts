import { Query, Resolver } from "type-graphql";

@Resolver()
export default class HelloResolver {
	@Query(() => String)
	public hello() {
		return "hello";
	}
}
