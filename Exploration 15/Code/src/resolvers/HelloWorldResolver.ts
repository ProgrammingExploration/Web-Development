import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Book } from "../entity/Book";

@InputType()
class CreateBookInput {
    @Field()
    title: string;

    @Field()
    author: string;
}

// @ObjectType()
// class NameType {
//     @Field()
//     first: string;

//     @Field()
//     last: string;
// };

// @ObjectType()
// class BookType {
//     @Field()
//     title: string;

//     @Field(() => NameType)
//     author: NameType
// }

@Resolver()
export class HelloWorldResolver {
    @Query(() => [Book])
    async books() {
        const books = await Book.find();
        return books;
    }

    @Mutation(() => Book)
    async create_book(
        @Arg("input", () => CreateBookInput) input: CreateBookInput
    ) {
        const book = await Book.create(input).save();
        return book;
    }
}