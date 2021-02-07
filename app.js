
document.getElementById("search-button").addEventListener("click", function(){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search_city.value.charAt(0)}`)
.then(res => res.json())
.then(data => displayFoodName(data))


const displayFoodName = item => {   
    const foodsDiv = document.getElementById('food_item');
    foodsDiv.innerHTML = "";
    const ingredientsDetails = document.getElementById('single_ingredients');
    ingredientsDetails.innerHTML = "";
    const allItem = item.meals;
    if(allItem){
        allItem.forEach(meals => {
            const foodDiv = document.createElement('div');
            foodDiv.className = 'food col-md-4';
    
            const foodInfo = `
            <div class ="property h-100">
                <div onclick="ingredients('${meals.idMeal}')" class="food_img">
                    <img src="${meals.strMealThumb}">
                    <h6 class="food_name">${meals.strMeal}</h6> 
                </div>
            </div>
            
            `;
            foodDiv.innerHTML = foodInfo;
            foodsDiv.appendChild(foodDiv);
        });
    }
    else{
        const foodDiv = document.createElement('div');
            foodDiv.className = 'food';
    
            const foodInfo = `
            <div class ="error_message">
                <h2>The food item has not to match with our menu.</h2>
                <h2>Try another one</h2>
                <h2>Thank You</h2>
            </div>        
            `;
            foodDiv.innerHTML = foodInfo;
            foodsDiv.appendChild(foodDiv);
    }   
}
})

function ingredients(items_name) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${items_name}`)
    .then(res => res.json())
    .then(data => {
        const ingredientsItem = data.meals;
        const ingredientsDetails = document.getElementById('single_ingredients');
        ingredientsItem.forEach(ingredientsInfo => {
        ingredientsDetails.innerHTML = `
            <div class ="ingredients_area">
                <img class="ingredients_img"  src="${ingredientsInfo.strMealThumb}">
                <div class="ingredients_details">
                    <h2>${ingredientsInfo.strMeal}</h2>  
                    <h6><b>Ingredients :</b></h6>
                    <ul>
                        <li><span>${ingredientsInfo.strMeasure1}</span> <span>${ingredientsInfo.strIngredient1}</span></li>
                        <li><span ${ingredientsInfo.strMeasure2}</span> <span>${ingredientsInfo.strIngredient2}</span> </li>
                        <li><span>${ingredientsInfo.strMeasure3}</span> <span>${ingredientsInfo.strIngredient3}</span> </li>
                        <li><span>${ingredientsInfo.strMeasure4}</span> <span>${ingredientsInfo.strIngredient4}</span> </li>
                        <li><span>${ingredientsInfo.strMeasure5}</span> <span>${ingredientsInfo.strIngredient5}</span> </li>
                        <li><span>${ingredientsInfo.strMeasure6}</span> <span>${ingredientsInfo.strIngredient6}</span> </li>
                        <li><span>${ingredientsInfo.strMeasure7}</span> <span>${ingredientsInfo.strIngredient7}</span> </li>
                        <li><span>${ingredientsInfo.strMeasure8}</span> <span>${ingredientsInfo.strIngredient8}</span> </li>
                        <li><span>${ingredientsInfo.strMeasure9}</span> <span>${ingredientsInfo.strIngredient9}</span> </li>
                        <li><span>${ingredientsInfo.strMeasure10}</span> <span>${ingredientsInfo.strIngredient10}</span> </li>
                        <li><span>${ingredientsInfo.strMeasure11}</span> <span>${ingredientsInfo.strIngredient11}</span> </li>  
                    </ul>
                </div>
            </div>   
        `;
        })
    })
}
