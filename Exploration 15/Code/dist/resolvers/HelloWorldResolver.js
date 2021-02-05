"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorldResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Book_1 = require("../entity/Book");
let CreateBookInput = class CreateBookInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CreateBookInput.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CreateBookInput.prototype, "author", void 0);
CreateBookInput = __decorate([
    type_graphql_1.InputType()
], CreateBookInput);
let HelloWorldResolver = class HelloWorldResolver {
    books() {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield Book_1.Book.find();
            return books;
        });
    }
    create_book(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = yield Book_1.Book.create(input).save();
            return book;
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [Book_1.Book]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HelloWorldResolver.prototype, "books", null);
__decorate([
    type_graphql_1.Mutation(() => Book_1.Book),
    __param(0, type_graphql_1.Arg("input", () => CreateBookInput)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateBookInput]),
    __metadata("design:returntype", Promise)
], HelloWorldResolver.prototype, "create_book", null);
HelloWorldResolver = __decorate([
    type_graphql_1.Resolver()
], HelloWorldResolver);
exports.HelloWorldResolver = HelloWorldResolver;
//# sourceMappingURL=HelloWorldResolver.js.map