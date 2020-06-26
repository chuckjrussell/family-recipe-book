const {
  ApolloServer,
  gql
} = require('apollo-server');

let {
  recipes
} = require('./recipes.js');
let {
  users
} = require('./users.js');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql `
  type User {
    id: ID
    imageUrl: String
    firstName: String
    lastName: String
  }

  type Ingredient {
    amount: String
    unit: String
    name: String
    preparation: String
  }

  type Recipe {
    id: ID
    title: String
    author: User
    servings: Int
    imageUrl: String
    sourceUrl: String
    sourceName: String
    tags: [String]
    steps: [String]
    ingredients: [Ingredient]
    notes: [String]
  }

  input IngredientInput {
    amount: String
    unit: String
    name: String
    preparation: String
  }

  input RecipeInput {
    title: String
    author: ID
    servings: Int
    imageUrl: String
    sourceUrl: String
    sourceName: String
    tags: [String]
    steps: [String]
    ingredients: [IngredientInput]
    notes: [String]
  }

  type Query {
    recipes: [Recipe]
    recipe(id: ID!): Recipe
    users: [User]
  }

  type Mutation {
    createRecipe(recipe: RecipeInput): Recipe
  }
`;

const mockService = {
  recipes: recipes,
  users: users
}

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    users: () => mockService.users,
    recipes: () => mockService.recipes,
    recipe: (_, {
        id
      }) =>
      mockService.recipes.filter(r => r.id == id)[0]
  },
  Mutation: {
    createRecipe: async (_, {
      recipe
    }) => {
      console.log(recipe);
      mockService.recipes = [...mockService.recipes, recipe];
      return recipe;
    }
  }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// The `listen` method launches a web server.
server.listen().then(({
  url
}) => {
  console.log(`🚀  Server ready at ${url}`);
});