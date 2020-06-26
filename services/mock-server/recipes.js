let {
    users
} = require('./users');

const recipes = [{
        id: 1,
        title: 'Aglio e Olio',
        author: users[0],
        sourceName: 'Binging with Babish',
        sourceUrl: 'https://www.bingingwithbabish.com/recipes/2017/5/4/aglioeolio',
        servings: 2,
        tags: ['Dinner', 'Pasta', 'Italian'],
        imageUrl: 'https://media.istockphoto.com/photos/italian-pasta-collection-on-rustic-wooden-table-picture-id838578926',
        steps: [
            'Heavily salt a large pot of water, and bring to a boil. Cook pasta until slightly underdone while completing the steps below.',
            'Slice the garlic cloves thinly, and set aside. Heat olive oil in a large sauté pan over medium heat until barely shimmering. Add sliced garlic, stirring constantly, until softened and turning golden on the edges. Add the red pepper flakes and lower the heat to medium-low.',
            'Add the pasta, drained, with about 1/4 cup reserved pasta cooking water. Squeeze lemon juice over top, and mix into the pasta with the fresh parsley. If sauce is too watery, continue to cook for 1-3 minutes, until pasta has absorbed more liquid. Season with salt and pepper, and serve.'
        ],
        ingredients: [{
            amount: '1/2',
            unit: 'head',
            name: 'garlic',
            preparation: 'separated and peeled'
        }, {
            amount: '1/2',
            unit: 'cup',
            name: 'flat-leaved parsley',
            preparation: 'rinsed and finely chopped'
        }, {
            amount: '1/2',
            unit: 'cup',
            name: 'olive oil'
        }, {
            amount: '1',
            unit: 'tsp',
            name: 'red pepper flakes'
        }, {
            amount: '1/2',
            unit: 'pound',
            name: 'dry linguine'
        }, {
            amount: '1/2',
            unit: 'unit',
            name: 'lemon'
        }]
    },
    {
        id: 2,
        title: 'Fried Rice',
        author: users[0],
        sourceName: 'Gimme Some Oven',
        sourceUrl: 'https://www.gimmesomeoven.com/fried-rice-recipe/',
        servings: 4,
        tags: ['Dinner', 'Rice', 'Chinese', 'Asian'],
        imageUrl: 'https://www.seriouseats.com/recipes/images/2016/01/20160206-fried-rice-food-lab-68-625x469.jpg',
        steps: [
            'Heat 1/2 tablespoon of butter in a large sauté pan* over medium-high heat until melted. Add egg, and cook until scrambled, stirring occasionally. Remove egg, and transfer to a separate plate.',
            'Add an additional 1 tablespoon butter to the pan and heat until melted. Add carrots, onion, peas and garlic, and season with a generous pinch of salt and pepper. Sauté for about 5 minutes or until the onion and carrots are soft. Increase heat to high, add in the remaining 1 1/2 tablespoons of butter, and stir until melted. Immediately add the rice, green onions, soy sauce and oyster sauce (if using), and stir until combined. Continue stirring for an additional 3 minutes to fry the rice. Then add in the eggs and stir to combine. Remove from heat, and stir in the sesame oil until combined.  Taste and season with extra soy sauce, if needed.',
            'Serve immediately, or refrigerate in a sealed container for up to 3 days.'
        ],
        ingredients: [{
            amount: '3',
            unit: 'metric tbsp',
            name: 'butter',
            preparation: 'divided'
        }, {
            amount: '2',
            unit: 'unit',
            name: 'eggs',
            preparation: 'whisked'
        }, {
            amount: '2',
            unit: 'unit',
            name: 'carrots',
            preparation: 'peeled and diced'
        }, {
            amount: '1',
            unit: 'unit',
            name: 'white onion',
            preparation: 'diced'
        }, {
            amount: '1/2',
            unit: 'metric cup',
            name: 'frozen peas'
        }, {
            amount: '3',
            unit: 'cloves',
            name: 'garlic',
            preparation: 'minced'
        }, {
            amount: '4',
            unit: 'metric cup',
            name: 'white rice',
            preparation: 'cooked and chilled'
        }, {
            amount: '3',
            unit: 'unit',
            name: 'green onions',
            preparation: 'thinly sliced'
        }, {
            amount: '3',
            unit: 'metric tbsp',
            name: 'soy sauce'
        }, {
            amount: '2',
            unit: 'tsp',
            name: 'oyster sauce'
        }, {
            amount: '1/2',
            unit: 'tsp',
            name: 'sesame oil'
        }]
    },
];

exports.recipes = recipes;