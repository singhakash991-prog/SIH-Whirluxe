/* =========================================================
   MESSMATE
   JAVASCRIPT
========================================================= */


/* =========================================================
   🍽️ EDIT YOUR MESS DATA HERE
=========================================================

   You can replace the sample food below with your actual
   hostel mess menu and nutritional values.

   For every food item enter:

   name
   image
   calories
   protein
   carbs
   fats
   allergens

========================================================= */


const menu = {

    monday: {

        breakfast: [

            {
                name: "Idli Sambar",
                image: "C:\Users\Dell\Downloads\idli sambar.jpeg",
                calories: 250,
                protein: 6,
                carbs: 40,
                fats: 8,
                allergens: ["Peanuts"]
            },

            {
                name: "Vada",
                image: "images/milk.jpg",
                calories: 120,
                protein: 6,
                carbs: 9,
                fats: 5,
                allergens: ["Milk"]
            },

            {
                name: "Milk",
                image: "images/banana.jpg",
                calories: 90,
                protein: 1,
                carbs: 23,
                fats: 0,
                allergens: []
            }
            {
               name: "Banana",
                image: "images/banana.jpg",
                calories: 90,
                protein: 1,
                carbs: 23,
                fats: 0,
                allergens: []
            }

        ],


        lunch: [

            {
                name: "Rice",
                image: "images/rice.jpg",
                calories: 250,
                protein: 5,
                carbs: 55,
                fats: 1,
                allergens: []
            },

            {
                name: "Dal",
                image: "images/dal.jpg",
                calories: 180,
                protein: 10,
                carbs: 25,
                fats: 4,
                allergens: []
            },

            {
                name: "Paneer Curry",
                image: "images/paneer.jpg",
                calories: 320,
                protein: 18,
                carbs: 12,
                fats: 22,
                allergens: ["Milk"]
            }

        ],


        snacks: [

            {
                name: "Tea",
                image: "images/tea.jpg",
                calories: 80,
                protein: 2,
                carbs: 10,
                fats: 3,
                allergens: ["Milk"]
            },

            {
                name: "Biscuits",
                image: "images/biscuits.jpg",
                calories: 140,
                protein: 2,
                carbs: 20,
                fats: 6,
                allergens: ["Gluten", "Milk"]
            }

        ],


        dinner: [

            {
                name: "Roti",
                image: "images/roti.jpg",
                calories: 100,
                protein: 3,
                carbs: 18,
                fats: 2,
                allergens: ["Gluten"]
            },

            {
                name: "Mixed Vegetable",
                image: "images/vegetable.jpg",
                calories: 160,
                protein: 5,
                carbs: 20,
                fats: 6,
                allergens: []
            },

            {
                name: "Dal Tadka",
                image: "images/dal-tadka.jpg",
                calories: 200,
                protein: 10,
                carbs: 24,
                fats: 7,
                allergens: []
            }

        ]

    },


    /* =====================================================
       TUESDAY
    ===================================================== */

    tuesday: {

        breakfast: [
            {
                name: "Idli",
                image: "images/idli.jpg",
                calories: 180,
                protein: 6,
                carbs: 35,
                fats: 2,
                allergens: []
            },

            {
                name: "Sambar",
                image: "images/sambar.jpg",
                calories: 120,
                protein: 5,
                carbs: 18,
                fats: 3,
                allergens: []
            }
        ],

        lunch: [
            {
                name: "Rice",
                image: "images/rice.jpg",
                calories: 250,
                protein: 5,
                carbs: 55,
                fats: 1,
                allergens: []
            }
        ],

        snacks: [],

        dinner: []

    },


    /* =====================================================
       WEDNESDAY
    ===================================================== */

    wednesday: {

        breakfast: [],
        lunch: [],
        snacks: [],
        dinner: []

    },


    /* =====================================================
       THURSDAY
    ===================================================== */

    thursday: {

        breakfast: [],
        lunch: [],
        snacks: [],
        dinner: []

    },


    /* =====================================================
       FRIDAY
    ===================================================== */

    friday: {

        breakfast: [],
        lunch: [],
        snacks: [],
        dinner: []

    },


    /* =====================================================
       SATURDAY
    ===================================================== */

    saturday: {

        breakfast: [],
        lunch: [],
        snacks: [],
        dinner: []

    },


    /* =====================================================
       SUNDAY
    ===================================================== */

    sunday: {

        breakfast: [],
        lunch: [],
        snacks: [],
        dinner: []

    }

};


/* =========================================================
   DON'T NEED TO EDIT BELOW THIS LINE
========================================================= */


let currentDay = "monday";


/* Change day */

function changeDay(day) {

    currentDay = day;

    updateActiveDay();

    displayMenu();

    calculateNutrition();

    displayAllergens();

}


/* Highlight selected day */

function updateActiveDay() {

    const buttons = document.querySelectorAll(".day");

    buttons.forEach(button => {

        button.classList.remove("active");

    });

    const dayNames = [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday"
    ];

    const index = dayNames.indexOf(currentDay);

    if (buttons[index]) {

        buttons[index].classList.add("active");

    }

}


/* =========================================================
   DISPLAY FOOD
========================================================= */

function displayMenu() {

    const meals = [
        "breakfast",
        "lunch",
        "snacks",
        "dinner"
    ];


    meals.forEach(meal => {

        const container =
            document.getElementById(meal + "-menu");

        container.innerHTML = "";


        const foods = menu[currentDay][meal];


        if (foods.length === 0) {

            container.innerHTML = `
                <p style="
                    color:#99958c;
                    padding:20px 0;
                ">
                    No menu added yet.
                </p>
            `;

            return;

        }


        foods.forEach(food => {

            const card = document.createElement("div");

            card.className = "food-card";


            let allergens = "";

            if (food.allergens.length > 0) {

                allergens = `
                    <div class="allergen-tags">

                        ${food.allergens.map(
                            allergen =>
                            `<span class="allergen-tag">
                                ⚠️ ${allergen}
                            </span>`
                        ).join("")}

                    </div>
                `;

            }


            card.innerHTML = `

                <img
                    class="food-image"
                    src="${food.image}"
                    alt="${food.name}"
                    onerror="this.src='images/placeholder.jpg'"
                >

                <div class="food-info">

                    <h3>${food.name}</h3>

                    <p class="food-calories">
                        🔥 ${food.calories} kcal
                    </p>

                    <div class="macros">

                        <span class="macro">
                            💪 ${food.protein}g protein
                        </span>

                        <span class="macro">
                            🍚 ${food.carbs}g carbs
                        </span>

                        <span class="macro">
                            🥑 ${food.fats}g fat
                        </span>

                    </div>

                    ${allergens}

                </div>

            `;


            container.appendChild(card);

        });

    });

}


/* =========================================================
   CALCULATE TOTAL NUTRITION
========================================================= */

function calculateNutrition() {

    let calories = 0;

    let protein = 0;

    let carbs = 0;

    let fats = 0;


    const meals = [
        "breakfast",
        "lunch",
        "snacks",
        "dinner"
    ];


    meals.forEach(meal => {

        menu[currentDay][meal].forEach(food => {

            calories += food.calories;

            protein += food.protein;

            carbs += food.carbs;

            fats += food.fats;

        });

    });


    document.getElementById("total-calories")
        .textContent = calories;

    document.getElementById("total-protein")
        .textContent = protein;

    document.getElementById("total-carbs")
        .textContent = carbs;

    document.getElementById("total-fats")
        .textContent = fats;


    const formattedDay =
        currentDay.charAt(0).toUpperCase()
        + currentDay.slice(1);


    document.getElementById("selected-day")
        .textContent =
        formattedDay + "'s Nutrition";

}


/* =========================================================
   ALLERGENS
========================================================= */

function displayAllergens() {

    const allergenSet = new Set();


    const meals = [
        "breakfast",
        "lunch",
        "snacks",
        "dinner"
    ];


    meals.forEach(meal => {

        menu[currentDay][meal].forEach(food => {

            food.allergens.forEach(allergen => {

                allergenSet.add(allergen);

            });

        });

    });


    const container =
        document.getElementById("allergen-list");


    container.innerHTML = "";


    if (allergenSet.size === 0) {

        container.innerHTML =
            "<span>✓ No common allergens listed</span>";

        return;

    }


    allergenSet.forEach(allergen => {

        const tag = document.createElement("span");

        tag.textContent = "⚠️ " + allergen;

        container.appendChild(tag);

    });

}


/* =========================================================
   INITIAL LOAD
========================================================= */

displayMenu();

calculateNutrition();

displayAllergens();
