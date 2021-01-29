import { Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class HelloResolver {
    @Query(() => String)
    hello() {
        return "Hello World"
    }

    @Mutation(() => String)
    hi() {
        return "Hello"
    }
}