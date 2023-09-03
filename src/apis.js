const APIKEY = import.meta.env.VITE_API_KEY
console.log(APIKEY);

export const popular_food = `https://api.spoonacular.com/recipes/random?number=15&apiKey=${APIKEY}`

export const veggie_food = `https://api.spoonacular.com/recipes/random?number=9&tags=vegetarian&apiKey=${APIKEY}`

export const cuisine_food_fun = (name) => {
    return `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&cuisine=${name}`
}

export const searched_food_fun = (name) => {
    return `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&query=${name}`
}

export const recipe_detail = (id) => {
    return `https://api.spoonacular.com/recipes/${id}/information?apiKey=${APIKEY}`
}