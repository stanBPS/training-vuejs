// Import Mirage mock server
import './mock';

/**
 * Get all Categories.
 */
async function getCategories() {
    const categoriesResponse = await fetch('/api/categories');
    const categories = await categoriesResponse.json();
    return categories;
}

/**
 * Get a category (including all related items) by id.
 * @param {*} categoryId
 */
async function getCategory(categoryId) {
    const categoryResponse = await fetch(`/api/categories/${categoryId}`);
    const category = await categoryResponse.json();
    return category;
}

export default {
    getCategories,
    getCategory,
};
