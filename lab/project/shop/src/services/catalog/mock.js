import { Server, Model } from 'miragejs';
import data from './data';

// Create a Mirage Server
new Server({
    // Manage categories and items
    models: {
        category: Model,
        items: Model,
    },

    // Populate with mock data
    seeds(server) {
        data.categories.forEach(category => {
            server.schema.categories.create({
                id: category.id,
                label: category.label,
                image: `catalog/${category.id}/0.jpg`,
            });

            category.items.forEach((item, index) => {
                server.schema.items.create({
                    ...item,
                    categoryId: category.id,
                    id: `${category.id}_${index}`,
                    image: `catalog/${category.id}/${index}.jpg`,
                });
            });
        });
    },

    // Intercept API HTTP Routes to mock
    routes() {
        this.namespace = 'api';

        this.get('/categories', function(schema) {
            const categories = schema.categories.all();
            return this.serialize(categories).categories;
        });

        this.get('/categories/:categoryId', function(schema, request) {
            const category = this.serialize(
                schema.categories.findBy({ id: request.params.categoryId }),
            ).category;
            const items = this.serialize(
                schema.items.where({ categoryId: request.params.categoryId }),
            ).items;
            return {
                ...category,
                items,
            };
        });
    },
});
