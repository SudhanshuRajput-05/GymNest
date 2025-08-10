const productData = [
    // Supplements
    {
        id: 1,
        productName: 'Nutrabay Gold Creatine Monohydrate (Orange)',
        price: 849,
        originalPrice: 999,
        description: 'Micronized Creatine Monohydrate with Orange Flavor',
        longDescription: 'Premium quality creatine monohydrate that helps in muscle strength, power and growth. Enhanced with refreshing orange flavor for better taste.',
        brand: 'Nutrabay Gold',
        image: '/src/assets/CE1.webp',
        category: 'Supplements',
        inStock: true,
        stockCount: 50,
        rating: 4.7,
        reviews: 158,
        features: [
            'Micronized Creatine',
            '4g per serving',
            'Orange Flavored',
            '62 servings',
            'Lab tested'
        ],
        benefits: [
            'Increases muscle strength',
            'Improves workout performance',
            'Better taste and mixability',
            'Enhanced muscle growth'
        ]
    },
    {
        id: 2,
        productName: 'Bigmuscles Nutrition Creatine',
        price: 699,
        originalPrice: 899,
        description: '100% Premium Creatine Monohydrate',
        longDescription: 'Superior quality micronized creatine with international ingredients. Designed for peak workout performance and lean muscle gain.',
        brand: 'Bigmuscles',
        image: '/src/assets/CE3.webp',
        category: 'Supplements',
        inStock: true,
        stockCount: 40,
        rating: 4.6,
        reviews: 223,
        features: [
            '3g creatine per serving',
            '83 servings',
            'Superior mixability',
            'Unflavoured',
            'International ingredients'
        ],
        benefits: [
            'Peak workout performance',
            'Strength enhancement',
            'Lean muscle gain',
            'Quick recovery'
        ]
    },
    {
        id: 3,
        productName: 'Nutrabay Gold Creatine Monohydrate (Cola)',
        price: 799,
        originalPrice: 949,
        description: 'Micronized Creatine with Cola Flavor',
        longDescription: 'High-quality creatine monohydrate with refreshing cola taste. Perfect for those who want their supplements to taste great.',
        brand: 'Nutrabay Gold',
        image: '/src/assets/CE2.webp',
        category: 'Supplements',
        inStock: true,
        stockCount: 35,
        rating: 4.5,
        reviews: 142,
        features: [
            'Micronized Creatine',
            '4g per serving',
            'Cola Flavored',
            '30 servings',
            'Lab tested'
        ],
        benefits: [
            'Muscle strength boost',
            'Enhanced performance',
            'Great taste',
            'Better recovery'
        ]
    },
    {
        id: 2,
        productName: 'Optimum Nutrition Gold Standard Whey Protein',
        price: 2999,
        originalPrice: 3499,
        description: 'Double Rich Chocolate Flavor - 2lbs',
        longDescription: 'Gold standard 100% whey protein powder with 24g protein, 5.5g BCAAs, and 4g glutamine per serving. Ideal for post-workout recovery and muscle building.',
        brand: 'Optimum Nutrition',
        image: '/src/assets/CE2.webp',
        category: 'Supplements',
        inStock: true,
        stockCount: 40,
        rating: 4.8,
        reviews: 256,
        features: [
            '24g protein per serving',
            '5.5g BCAAs',
            '4g Glutamine',
            'Easy mixability',
            'Tested quality'
        ],
        benefits: [
            'Muscle recovery',
            'Lean muscle growth',
            'Post-workout nutrition',
            'Complete protein source'
        ]
    },
    {
        id: 3,
        productName: 'Fish Oil Omega-3',
        price: 599,
        originalPrice: 699,
        description: 'Pure Fish Oil Capsules with EPA & DHA',
        longDescription: 'High-strength fish oil capsules rich in EPA & DHA. Supports heart, brain and joint health.',
        brand: 'GymNest Nutrition',
        image: '/src/assets/FISH OIL.webp',
        category: 'Supplements',
        inStock: true,
        stockCount: 45,
        rating: 4.6,
        reviews: 89,
        features: [
            '1000mg per capsule',
            'Purified & tested',
            'No fishy aftertaste',
            '90 capsules'
        ],
        benefits: [
            'Supports joint health',
            'Brain function',
            'Heart health',
            'Reduces inflammation'
        ]
    },
    {
        id: 4,
        productName: 'Protein Bar',
        price: 85,
        originalPrice: 99,
        description: 'High Protein Low Sugar Energy Bar',
        longDescription: 'Delicious protein bar packed with 20g protein and low in sugar. Perfect for on-the-go nutrition.',
        brand: 'GymNest Nutrition',
        image: '/src/assets/PROTEIN BAR.webp',
        category: 'Snacks',
        inStock: true,
        stockCount: 150,
        rating: 4.3,
        reviews: 167,
        features: [
            '20g protein',
            'Low sugar',
            'Rich chocolate flavor',
            'No artificial colors'
        ],
        benefits: [
            'Convenient nutrition',
            'Muscle recovery',
            'Satisfies hunger',
            'Pre/post workout snack'
        ]
    },
    {
        id: 5,
        productName: 'Hex Dumbbells (Pair)',
        price: 2499,
        originalPrice: 2999,
        description: 'Professional Grade Hex Dumbbells',
        longDescription: 'Heavy-duty hexagonal dumbbells perfect for home or commercial gym use. Anti-roll design with knurled handles for better grip.',
        brand: 'GymNest Equipment',
        image: '/src/assets/Equ1.jpeg',
        category: 'Equipment',
        inStock: true,
        stockCount: 20,
        rating: 4.8,
        reviews: 95,
        features: [
            'Hexagonal design prevents rolling',
            'Rubber coated for floor protection',
            'Knurled handles',
            'Various weight options',
            'Commercial grade'
        ],
        benefits: [
            'Versatile workout options',
            'Durable construction',
            'Safe and stable design',
            'Professional quality'
        ]
    },
    {
        id: 6,
        productName: 'Adjustable Dumbbell Set',
        price: 4999,
        originalPrice: 5999,
        description: '20kg Adjustable Dumbbell Set with Connecting Rod',
        longDescription: 'Space-saving adjustable dumbbell set that can be used as individual dumbbells or a complete barbell. Perfect for home gyms.',
        brand: 'GymNest Equipment',
        image: '/src/assets/Equ2.jpeg',
        category: 'Equipment',
        inStock: true,
        stockCount: 15,
        rating: 4.7,
        reviews: 78,
        features: [
            'Adjustable weight plates',
            'Connecting rod included',
            'Anti-slip handles',
            'Space-efficient design',
            'Multiple configurations'
        ],
        benefits: [
            'Space-saving solution',
            'Versatile workouts',
            'Easy weight adjustment',
            'Durable construction'
        ]
    },
    {
        id: 7,
        productName: 'Standard Weight Plates Set',
        price: 3499,
        originalPrice: 3999,
        description: '20kg Weight Plates Set with Bar',
        longDescription: 'Complete weight plates set with connecting bar. Perfect for strength training and muscle building workouts.',
        brand: 'GymNest Equipment',
        image: '/src/assets/Equ3.jpeg',
        category: 'Equipment',
        inStock: true,
        stockCount: 25,
        rating: 4.6,
        reviews: 112,
        features: [
            'Standard size plates',
            'Includes connecting bar',
            'Anti-slip texture',
            'Durable PVC material',
            'Various weight options'
        ],
        benefits: [
            'Complete workout solution',
            'High durability',
            'Easy to store',
            'Versatile usage'
        ]
    },
    {
        id: 8,
        productName: 'Adjustable Weight Bench',
        price: 5999,
        originalPrice: 7499,
        description: 'Multi-Position Adjustable Weight Training Bench',
        longDescription: 'Professional-grade adjustable weight bench with multiple incline positions. Perfect for various workout routines.',
        brand: 'GymNest Equipment',
        image: '/src/assets/Equ4.jpeg',
        category: 'Equipment',
        inStock: true,
        stockCount: 10,
        rating: 4.9,
        reviews: 67,
        features: [
            'Multiple incline positions',
            'Heavy-duty steel frame',
            'Comfortable padding',
            'Foldable design',
            'Non-slip feet'
        ],
        benefits: [
            'Versatile workout positions',
            'Space-efficient storage',
            'Stable and secure',
            'Professional quality'
        ]
    },
    {
        id: 9,
        productName: 'Olympic Bench Press Set',
        price: 8999,
        originalPrice: 10999,
        description: 'Professional Olympic Bench Press Station',
        longDescription: 'Commercial grade bench press station with adjustable rack height. Ideal for serious strength training and professional use.',
        brand: 'GymNest Equipment',
        image: '/src/assets/Equ5.jpeg',
        category: 'Equipment',
        inStock: true,
        stockCount: 5,
        rating: 4.8,
        reviews: 45,
        features: [
            'Heavy-duty steel construction',
            'Adjustable rack height',
            'Safety spotters included',
            'Wide base for stability',
            'Commercial grade quality'
        ],
        benefits: [
            'Professional workout station',
            'Maximum stability',
            'Safe and secure design',
            'Long-lasting durability'
        ]
    }
];

export default productData;