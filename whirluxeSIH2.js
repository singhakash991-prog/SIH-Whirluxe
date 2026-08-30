/* =========================================================
   🍽️ MESSMATE — COMPLETE DEMO MENU
   =========================================================

   IMPORTANT:
   The nutrition numbers below are DEMO / APPROXIMATE values.
   Replace them with the values from your actual mess.

   You can also replace the image URLs with photographs
   taken in your own hostel mess.

========================================================= */


const menu = {

    /* =====================================================
       MONDAY
    ===================================================== */

    monday: {

        breakfast: [

            {
                name: "Poha",
                image: "https://sukhis.com/app/uploads/2019/09/Poha.jpg",
                calories: 250,
                protein: 6,
                carbs: 40,
                fats: 8,
                allergens: ["Peanuts"]
            },

            {
                name: "Milk",
                image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80",
                calories: 120,
                protein: 6,
                carbs: 9,
                fats: 5,
                allergens: ["Milk"]
            },

            {
                name: "Banana",
                image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80",
                calories: 90,
                protein: 1,
                carbs: 23,
                fats: 0,
                allergens: []
            }

        ],

        lunch: [

            {
                name: "Steamed Rice",
                image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80",
                calories: 250,
                protein: 5,
                carbs: 55,
                fats: 1,
                allergens: []
            },

            {
                name: "Dal Tadka",
                image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Ce_grayscale%2Cc_fit/FOOD_CATALOG/IMAGES/CMS/2025/9/30/af6ab770-f6db-4faf-9c8b-be625f8e650a_cf000a41-3345-4ceb-b95d-5958a44b8660.jpg",
                calories: 180,
                protein: 10,
                carbs: 25,
                fats: 4,
                allergens: []
            },

            {
                name: "Paneer Curry",
                image: "https://media-assets.swiggy.com/swiggy/image/upload/f_auto%2Cq_auto%2Cfl_lossy/RX_THUMBNAIL/IMAGES/VENDOR/2026/2/10/cdb5700f-b5d7-4287-9c34-7a6518fa288e_1326262.jpg",
                calories: 320,
                protein: 18,
                carbs: 12,
                fats: 22,
                allergens: ["Milk"]
            },

            {
                name: "Roti",
                image: "https://images.unsplash.com/photo-1633442496018-6872fbfbbcc7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                calories: 100,
                protein: 3,
                carbs: 18,
                fats: 2,
                allergens: ["Gluten"]
            }

        ],

        snacks: [

            {
                name: "Tea",
                image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=800&q=80",
                calories: 80,
                protein: 2,
                carbs: 10,
                fats: 3,
                allergens: ["Milk"]
            },

            {
                name: "Biscuits",
                image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80",
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
                image: "https://images.unsplash.com/photo-1633442496018-6872fbfbbcc7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                calories: 200,
                protein: 6,
                carbs: 36,
                fats: 4,
                allergens: ["Gluten"]
            },

            {
                name: "Mixed Vegetable Curry",
                image: "https://media.istockphoto.com/id/1278584350/photo/veg-kolhapuri-in-black-bowl-on-dark-slate-table-top-indian-vegetable-curry-dish-vegetarian.webp?a=1&b=1&s=612x612&w=0&k=20&c=O9tXE4uFBKx4VfIKKNnQDzAc28CaCeobaPxrPFAAAWE=",
                calories: 160,
                protein: 5,
                carbs: 20,
                fats: 6,
                allergens: []
            },

            {
                name: "Dal",
                image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Ce_grayscale%2Cc_fit/FOOD_CATALOG/IMAGES/CMS/2025/9/30/af6ab770-f6db-4faf-9c8b-be625f8e650a_cf000a41-3345-4ceb-b95d-5958a44b8660.jpg",
                calories: 180,
                protein: 10,
                carbs: 25,
                fats: 4,
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
                image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
                calories: 180,
                protein: 6,
                carbs: 35,
                fats: 2,
                allergens: []
            },

            {
                name: "Sambar",
                image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80",
                calories: 120,
                protein: 5,
                carbs: 18,
                fats: 3,
                allergens: []
            },

            {
                name: "Coconut Chutney",
                image: "https://images.unsplash.com/photo-1727404769553-f0ea7024de9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvY29udXQlMjBjaHV0bmV5fGVufDB8fDB8fHww",
                calories: 90,
                protein: 2,
                carbs: 5,
                fats: 7,
                allergens: []
            }

        ],

        lunch: [

            {
                name: "Rice",
                image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80",
                calories: 250,
                protein: 5,
                carbs: 55,
                fats: 1,
                allergens: []
            },

            {
                name: "Rajma",
                image: "https://plus.unsplash.com/premium_photo-1668446314000-a8bb3e4c874c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGtpZG5leSUyMGJlYW5zfGVufDB8fDB8fHww",
                calories: 210,
                protein: 12,
                carbs: 30,
                fats: 5,
                allergens: []
            },

            {
                name: "Cucumber Salad",
                image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
                calories: 50,
                protein: 2,
                carbs: 8,
                fats: 1,
                allergens: []
            },

            {
                name: "Roti",
                image: "https://images.unsplash.com/photo-1633442496018-6872fbfbbcc7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                calories: 100,
                protein: 3,
                carbs: 18,
                fats: 2,
                allergens: ["Gluten"]
            }

        ],

        snacks: [

            {
                name: "Samosa",
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
                calories: 180,
                protein: 4,
                carbs: 22,
                fats: 9,
                allergens: ["Gluten"]
            },

            {
                name: "Tea",
                image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=800&q=80",
                calories: 80,
                protein: 2,
                carbs: 10,
                fats: 3,
                allergens: ["Milk"]
            }

        ],

        dinner: [

            {
                name: "Jeera Rice",
                image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80",
                calories: 270,
                protein: 5,
                carbs: 55,
                fats: 4,
                allergens: []
            },

            {
                name: "Chole",
                image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpY2slMjBwZWFzfGVufDB8fDB8fHww",
                calories: 230,
                protein: 11,
                carbs: 32,
                fats: 6,
                allergens: []
            },

            {
                name: "Roti",
                image: "https://images.unsplash.com/photo-1633442496018-6872fbfbbcc7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                calories: 200,
                protein: 6,
                carbs: 36,
                fats: 4,
                allergens: ["Gluten"]
            }

        ]
    },


    /* =====================================================
       WEDNESDAY
    ===================================================== */

    wednesday: {

        breakfast: [

            {
                name: "Upma",
                image: "https://bf1af2.a-cdn.akinoncloud.com/products/2025/04/22/75798/96b192be-7259-4f23-9a6e-786e92c71cca.jpg",
                calories: 240,
                protein: 6,
                carbs: 35,
                fats: 8,
                allergens: ["Gluten"]
            },

            {
                name: "Boiled Egg Substitute / Sprouts",
                image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
                calories: 100,
                protein: 7,
                carbs: 12,
                fats: 2,
                allergens: []
            },

            {
                name: "Milk",
                image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80",
                calories: 120,
                protein: 6,
                carbs: 9,
                fats: 5,
                allergens: ["Milk"]
            }

        ],

        lunch: [

            {
                name: "Rice",
                image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80",
                calories: 250,
                protein: 5,
                carbs: 55,
                fats: 1,
                allergens: []
            },

            {
                name: "Dal Fry",
                image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Ce_grayscale%2Cc_fit/FOOD_CATALOG/IMAGES/CMS/2025/9/30/af6ab770-f6db-4faf-9c8b-be625f8e650a_cf000a41-3345-4ceb-b95d-5958a44b8660.jpg",
                calories: 190,
                protein: 10,
                carbs: 26,
                fats: 5,
                allergens: []
            },

            {
                name: "Aloo Gobi",
                image: "https://images.unsplash.com/photo-1596560981701-bfadc91c47ce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                calories: 170,
                protein: 4,
                carbs: 20,
                fats: 7,
                allergens: []
            },

            {
                name: "Roti",
                image: "https://images.unsplash.com/photo-1633442496018-6872fbfbbcc7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                calories: 200,
                protein: 6,
                carbs: 36,
                fats: 4,
                allergens: ["Gluten"]
            }

        ],

        snacks: [

            {
                name: "Fruit",
                image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80",
                calories: 100,
                protein: 1,
                carbs: 25,
                fats: 0,
                allergens: []
            },

            {
                name: "Tea",
                image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=800&q=80",
                calories: 80,
                protein: 2,
                carbs: 10,
                fats: 3,
                allergens: ["Milk"]
            }

        ],

        dinner: [

            {
                name: "Vegetable Pulao",
                image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnJTIwcHVsYW98ZW58MHx8MHx8fDA%3D",
                calories: 300,
                protein: 7,
                carbs: 48,
                fats: 9,
                allergens: []
            },

            {
                name: "Raita",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGt8AAZBheBoXNI0Bm3YnQ5IYahpuK5oQUZlM80WiJBg&s=10",
                calories: 100,
                protein: 5,
                carbs: 7,
                fats: 5,
                allergens: ["Milk"]
            },

            {
                name: "Dal",
                image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Ce_grayscale%2Cc_fit/FOOD_CATALOG/IMAGES/CMS/2025/9/30/af6ab770-f6db-4faf-9c8b-be625f8e650a_cf000a41-3345-4ceb-b95d-5958a44b8660.jpg",
                calories: 180,
                protein: 10,
                carbs: 25,
                fats: 4,
                allergens: []
            }

        ]
    },


    /* =====================================================
       THURSDAY
    ===================================================== */

    thursday: {

        breakfast: [

            {
                name: "Masala Dosa",
                image: "https://b.zmtcdn.com/data/dish_photos/0b9/91b684dce44c23edacbc1d0cd70c40b9.jpg",
                calories: 350,
                protein: 8,
                carbs: 50,
                fats: 12,
                allergens: []
            },

            {
                name: "Sambar",
                image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80",
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
                image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80",
                calories: 250,
                protein: 5,
                carbs: 55,
                fats: 1,
                allergens: []
            },

            {
                name: "Sambar",
                image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80",
                calories: 150,
                protein: 6,
                carbs: 22,
                fats: 4,
                allergens: []
            },

            {
                name: "Beans Poriyal",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8Z-5-R5DNBWMhoq2wna_iuMdjz-5SqrKQxnSnOsvCQ&s=10",
                calories: 130,
                protein: 4,
                carbs: 14,
                fats: 6,
                allergens: []
            },

            {
                name: "Curd",
                image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
                calories: 100,
                protein: 5,
                carbs: 7,
                fats: 5,
                allergens: ["Milk"]
            }

        ],

        snacks: [

            {
                name: "Banana",
                image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80",
                calories: 90,
                protein: 1,
                carbs: 23,
                fats: 0,
                allergens: []
            },

            {
                name: "Tea",
                image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=800&q=80",
                calories: 80,
                protein: 2,
                carbs: 10,
                fats: 3,
                allergens: ["Milk"]
            }

        ],

        dinner: [

            {
                name: "Roti",
                image: "https://images.unsplash.com/photo-1633442496018-6872fbfbbcc7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                calories: 200,
                protein: 6,
                carbs: 36,
                fats: 4,
                allergens: ["Gluten"]
            },

            {
                name: "Palak Paneer",
                image: "https://images.moneycontrol.com/static-mcnews/2023/08/Benefits-of-early-dinner.jpg",
                calories: 300,
                protein: 16,
                carbs: 12,
                fats: 20,
                allergens: ["Milk"]
            },

            {
                name: "Rice",
                image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80",
                calories: 250,
                protein: 5,
                carbs: 55,
                fats: 1,
                allergens: []
            }

        ]
    },


    /* =====================================================
       FRIDAY
    ===================================================== */

    friday: {

        breakfast: [

            {
                name: "Aloo Paratha",
                image: "https://images.unsplash.com/photo-1668357530437-72a12c660f94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWxvbyUyMHBhcmF0aGF8ZW58MHx8MHx8fDA%3D",
                calories: 320,
                protein: 8,
                carbs: 45,
                fats: 12,
                allergens: ["Gluten", "Milk"]
            },

            {
                name: "Curd",
                image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
                calories: 100,
                protein: 5,
                carbs: 7,
                fats: 5,
                allergens: ["Milk"]
            }

        ],

        lunch: [

            {
                name: "Rice",
                image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80",
                calories: 250,
                protein: 5,
                carbs: 55,
                fats: 1,
                allergens: []
            },

            {
                name: "Chana Masala",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuxlUMUJfu5yGgtbuOOED9zexzE-KgysHkgjF7TvSxj4O2RLR-hdoimFZenxtxEVPKfEVqJxdVAWi5snOKzuG6YGbhy1-TlJ-5j1L9ATqU&s=10",
                calories: 230,
                protein: 11,
                carbs: 32,
                fats: 6,
                allergens: []
            },

            {
                name: "Mixed Vegetable",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVBQwwfT6RINrYf5-r0yttzi3p71h5cAbSBXVsplth-g&s=10",
                calories: 160,
                protein: 5,
                carbs: 20,
                fats: 6,
                allergens: []
            },

            {
                name: "Roti",
                image: "https://images.unsplash.com/photo-1633442496018-6872fbfbbcc7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                calories: 200,
                protein: 6,
                carbs: 36,
                fats: 4,
                allergens: ["Gluten"]
            }

        ],

        snacks: [

            {
                name: "Samosa",
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
                calories: 180,
                protein: 4,
                carbs: 22,
                fats: 9,
                allergens: ["Gluten"]
            },

            {
                name: "Tea",
                image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=800&q=80",
                calories: 80,
                protein: 2,
                carbs: 10,
                fats: 3,
                allergens: ["Milk"]
            }

        ],

        dinner: [

            {
                name: "Khichdi",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn1o8z9dAZ-U88v1G1rtEWDf_BWaKkuuDxWh6gYN9wctZNBQEt9kVjkkmLie7ihQ5P8Szpjjnj8K6S0Bg094ao-daO6HAR1cP1ODDPXZWxBw&s=10",
                calories: 300,
                protein: 11,
                carbs: 45,
                fats: 8,
                allergens: ["Milk"]
            },

            {
                name: "Raita",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGt8AAZBheBoXNI0Bm3YnQ5IYahpuK5oQUZlM80WiJBg&s=10",
                calories: 100,
                protein: 5,
                carbs: 7,
                fats: 5,
                allergens: ["Milk"]
            }

        ]
    },


    /* =====================================================
       SATURDAY
    ===================================================== */

    saturday: {

        breakfast: [

            {
                name: "Dosa",
                image: "https://b.zmtcdn.com/data/dish_photos/0b9/91b684dce44c23edacbc1d0cd70c40b9.jpg",
                calories: 280,
                protein: 7,
                carbs: 42,
                fats: 8,
                allergens: []
            },

            {
                name: "Sambar",
                image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80",
                calories: 120,
                protein: 5,
                carbs: 18,
                fats: 3,
                allergens: []
            },

            {
                name: "Chutney",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGWT2IeQ60SOBX87PzMX--pI5rDLpnXphiETbtEOr9XRGGtlM715NdgwnfzdeUDQtIIif86ehP-TDtqCrBtMXjETCRwjpHICJNxBKeVcrkyg&s=10",
                calories: 90,
                protein: 2,
                carbs: 5,
                fats: 7,
                allergens: []
            }

        ],

        lunch: [

            {
                name: "Veg Biryani",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_EV-qh4Pu13muRkx4ElZUeOKOb7DLA3HNpUfLreGtA&s=10",
                calories: 350,
                protein: 8,
                carbs: 55,
                fats: 10,
                allergens: []
            },

            {
                name: "Raita",
                image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
                calories: 100,
                protein: 5,
                carbs: 7,
                fats: 5,
                allergens: ["Milk"]
            },

            {
                name: "Salad",
                image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
                calories: 50,
                protein: 2,
                carbs: 8,
                fats: 1,
                allergens: []
            }

        ],

        snacks: [

            {
                name: "Fruit Chaat",
                image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80",
                calories: 120,
                protein: 2,
                carbs: 28,
                fats: 1,
                allergens: []
            },

            {
                name: "Tea",
                image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=800&q=80",
                calories: 80,
                protein: 2,
                carbs: 10,
                fats: 3,
                allergens: ["Milk"]
            }

        ],

        dinner: [

            {
                name: "Roti",
                image: "https://images.unsplash.com/photo-1633442496018-6872fbfbbcc7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                calories: 200,
                protein: 6,
                carbs: 36,
                fats: 4,
                allergens: ["Gluten"]
            },

            {
                name: "Paneer Curry",
                image: "https://media-assets.swiggy.com/swiggy/image/upload/f_auto%2Cq_auto%2Cfl_lossy/RX_THUMBNAIL/IMAGES/VENDOR/2026/2/10/cdb5700f-b5d7-4287-9c34-7a6518fa288e_1326262.jpg",
                calories: 320,
                protein: 18,
                carbs: 12,
                fats: 22,
                allergens: ["Milk"]
            },

            {
                name: "Dal",
                image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Ce_grayscale%2Cc_fit/FOOD_CATALOG/IMAGES/CMS/2025/9/30/af6ab770-f6db-4faf-9c8b-be625f8e650a_cf000a41-3345-4ceb-b95d-5958a44b8660.jpg",
                calories: 180,
                protein: 10,
                carbs: 25,
                fats: 4,
                allergens: []
            }

        ]
    },


    /* =====================================================
       SUNDAY
    ===================================================== */

    sunday: {

        breakfast: [

            {
                name: "Poori",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUQ2Qg-iTKt7RVlUVKEryEthANpUBZPAVbIWheE_c1ug&s=10",
                calories: 300,
                protein: 6,
                carbs: 42,
                fats: 12,
                allergens: ["Gluten"]
            },

            {
                name: "Aloo Sabzi",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPak-B40CgQyM-3lUjnTwsM20e6a6hffSzG_o_3abtRQ&s=10",
                calories: 180,
                protein: 4,
                carbs: 25,
                fats: 7,
                allergens: []
            },

            {
                name: "Milk",
                image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80",
                calories: 120,
                protein: 6,
                carbs: 9,
                fats: 5,
                allergens: ["Milk"]
            }

        ],

        lunch: [

            {
                name: "Rice",
                image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80",
                calories: 250,
                protein: 5,
                carbs: 55,
                fats: 1,
                allergens: []
            },

            {
                name: "Dal",
                image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Ce_grayscale%2Cc_fit/FOOD_CATALOG/IMAGES/CMS/2025/9/30/af6ab770-f6db-4faf-9c8b-be625f8e650a_cf000a41-3345-4ceb-b95d-5958a44b8660.jpg",
                calories: 180,
                protein: 10,
                carbs: 25,
                fats: 4,
                allergens: []
            },

            {
                name: "Paneer Curry",
                image: "https://media-assets.swiggy.com/swiggy/image/upload/f_auto%2Cq_auto%2Cfl_lossy/RX_THUMBNAIL/IMAGES/VENDOR/2026/2/10/cdb5700f-b5d7-4287-9c34-7a6518fa288e_1326262.jpg",
                calories: 320,
                protein: 18,
                carbs: 12,
                fats: 22,
                allergens: ["Milk"]
            },

            {
                name: "Salad",
                image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
                calories: 50,
                protein: 2,
                carbs: 8,
                fats: 1,
                allergens: []
            }

        ],

        snacks: [

            {
                name: "Samosa",
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
                calories: 180,
                protein: 4,
                carbs: 22,
                fats: 9,
                allergens: ["Gluten"]
            },

            {
                name: "Tea",
                image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=800&q=80",
                calories: 80,
                protein: 2,
                carbs: 10,
                fats: 3,
                allergens: ["Milk"]
            }

        ],

        dinner: [

            {
                name: "Paneer Khichdi",
                image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Cc_fit/FOOD_CATALOG/IMAGES/CMS/2025/11/28/5c933e8f-b79d-4c5e-a98d-6daff58e4294_a327ff28-87b4-4d4d-978d-62b953a6a316.jpg",
                calories: 350,
                protein: 14,
                carbs: 48,
                fats: 10,
                allergens: ["Milk"]
            },

            {
                name: "Curd",
                image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
                calories: 100,
                protein: 5,
                carbs: 7,
                fats: 5,
                allergens: ["Milk"]
            },

            {
                name: "Papad",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKDvpB5Ziq4oMzHb3bANYom5LgdYqEvkEHyrkzKeXi1g&s=10",
                calories: 70,
                protein: 3,
                carbs: 10,
                fats: 2,
                allergens: []
            }

        ]
    }

};


/* =========================================================
   DON'T EDIT BELOW THIS LINE
========================================================= */

let currentDay = "monday";


function changeDay(day) {

    currentDay = day;

    updateActiveDay();

    displayMenu();

    calculateNutrition();

    displayAllergens();

    window.scrollTo({
        top: document.getElementById("menu").offsetTop - 80,
        behavior: "smooth"
    });

}


/* =========================================================
   HIGHLIGHT ACTIVE DAY
========================================================= */

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
   DISPLAY FOOD CARDS
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
                    onerror="this.src='https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80'"
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