import React  from 'react';
import ReactDOM from 'react-dom/client';

/* 
 Header
  - Logo 
  - Nav Items

 Body
  - Search Input
  - RestaurantContainer
    -Restaurnt card
        -image
        -name of reaturant
        -star rating, cuisine, delivery time

 Footer
  - copyright
  - Links
  - Contact

     <!--RestaurantCard restName='KFC' cuisine="Pasta, Mexican" rating='4.2 stars' delTime='28 minutes'
                 imgSrc='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/TopPicks/CCWMeal'/>
*/

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-conatiner'>
                <img className='logo' src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png'></img>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


const swiggyArray = [
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "132930",
                    "name": "Sangam Mess",
                    "cloudinaryImageId": "it1t0ccxhlko4a1bpjg0",
                    "locality": "Chinnappa Layout",
                    "areaName": "Kammanahalli/Kalyan Nagar",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "Kerala",
                        "South Indian",
                        "Biryani",
                        "Seafood",
                        "Beverages"
                    ],
                    "avgRating": 4.3,
                    "parentId": "20972",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "10K+",
                    "promoted": true,
                    "adTrackingId": "cid=10482617~p=5~eid=0000018c-ed5c-80f1-4a4a-dc72001a053a~srvts=1704789311729~83645",
                    "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 6.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35 mins",
                        "lastMileTravelString": "6.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-01-09 22:30:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {},
                            "textBased": {},
                            "imageBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=132930&source=collection&query=North%20Indian",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "56497",
                    "name": "Maravanthe",
                    "cloudinaryImageId": "v06l1tgc4eay4e43wwxu",
                    "locality": "CMH Road",
                    "areaName": "Indiranagar",
                    "costForTwo": "₹800 for two",
                    "cuisines": [
                        "Seafood",
                        "Mangalorean",
                        "Coastal",
                        "Biryani",
                        "South Indian",
                        "Indian",
                        "Thalis"
                    ],
                    "avgRating": 4.3,
                    "parentId": "7368",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "5K+",
                    "promoted": true,
                    "adTrackingId": "cid=10482585~p=6~eid=0000018c-ed5c-80f1-4a4a-dc73001a066b~srvts=1704789311729~83645",
                    "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 0.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "23 mins",
                        "lastMileTravelString": "0.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-01-09 15:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {},
                            "textBased": {},
                            "imageBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=56497&source=collection&query=North%20Indian",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "248",
                    "name": "New Punjabi Hotel",
                    "cloudinaryImageId": "czxysv7y2rlbbyuvcivn",
                    "locality": "2nd stage",
                    "areaName": "Indiranagar",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                        "North Indian",
                        "Punjabi",
                        "Tandoor",
                        "Chinese"
                    ],
                    "avgRating": 4.1,
                    "parentId": "1764",
                    "avgRatingString": "4.1",
                    "totalRatingsString": "10K+",
                    "promoted": true,
                    "adTrackingId": "cid=10482522~p=8~eid=0000018c-ed5c-80f1-4a4a-dc75001a081a~srvts=1704789311729~83645",
                    "sla": {
                        "deliveryTime": 18,
                        "lastMileTravel": 1.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "18 mins",
                        "lastMileTravelString": "1.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-01-09 15:45:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {},
                            "textBased": {},
                            "imageBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=248&source=collection&query=North%20Indian",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "241",
                    "name": "Anjappar",
                    "cloudinaryImageId": "fa25f646f0f18e7b1d854e3e8b4a8f1b",
                    "locality": "Indiranagar",
                    "areaName": "Indiranagar",
                    "costForTwo": "₹600 for two",
                    "cuisines": [
                        "Chettinad",
                        "Thalis",
                        "Biryani",
                        "Chinese",
                        "Tandoor",
                        "South Indian",
                        "North Indian"
                    ],
                    "avgRating": 4.1,
                    "parentId": "61",
                    "avgRatingString": "4.1",
                    "totalRatingsString": "10K+",
                    "promoted": true,
                    "adTrackingId": "cid=10479435~p=9~eid=0000018c-ed5c-80f1-4a4a-dc76001a095e~srvts=1704789311729~83645",
                    "sla": {
                        "deliveryTime": 18,
                        "lastMileTravel": 0.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "18 mins",
                        "lastMileTravelString": "0.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-01-09 23:59:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=241&source=collection&query=North%20Indian",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "289261",
                    "name": "BOX8 - Desi Meals",
                    "cloudinaryImageId": "69a061b7e0f951cef2b4947946f94ec6",
                    "locality": "New Thipasandra",
                    "areaName": "Indiranagar",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                        "North Indian",
                        "Biryani",
                        "Thalis",
                        "Home Food"
                    ],
                    "avgRating": 4.5,
                    "parentId": "10655",
                    "avgRatingString": "4.5",
                    "totalRatingsString": "1K+",
                    "sla": {
                        "deliveryTime": 14,
                        "lastMileTravel": 0.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "9-19 mins",
                        "lastMileTravelString": "0.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-01-10 02:00:00",
                        "opened": true
                    },
                    "badges": {
                        "textExtendedBadges": [
                            {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available",
                                "fontColor": "#7E808C"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "",
                                            "shortDescription": "options available",
                                            "fontColor": "#7E808C",
                                            "iconId": "guiltfree/GF_Logo_android_3x"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=289261&source=collection&query=North%20Indian",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "15400",
                    "name": "Paratha Plaza",
                    "cloudinaryImageId": "skpxgzf48zl0q5myepkb",
                    "locality": "2nd stage",
                    "areaName": "Indiranagar",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                        "North Indian"
                    ],
                    "avgRating": 4.5,
                    "veg": true,
                    "parentId": "2066",
                    "avgRatingString": "4.5",
                    "totalRatingsString": "10K+",
                    "sla": {
                        "deliveryTime": 17,
                        "lastMileTravel": 0.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "17 mins",
                        "lastMileTravelString": "0.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-01-09 15:30:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                                            "description": "pureveg"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=15400&source=collection&query=North%20Indian",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "68145",
                    "name": "WarmOven Cake & Desserts",
                    "cloudinaryImageId": "e938fb5f416cc2c28b4b519cf27b04cc",
                    "locality": "Kaggadasapura Main Rd",
                    "areaName": "Kaggadasapura",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                        "Bakery",
                        "Desserts",
                        "Ice Cream",
                        "Beverages"
                    ],
                    "avgRating": 4.3,
                    "parentId": "9696",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "5K+",
                    "promoted": true,
                    "adTrackingId": "cid=10483365~p=1~eid=0000018c-ed64-4741-4a8f-f9af001a011e~srvts=1704789821249~83656",
                    "sla": {
                        "deliveryTime": 40,
                        "lastMileTravel": 5.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40 mins",
                        "lastMileTravelString": "5.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-01-09 23:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=68145&source=collection&query=Cakes",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "457308",
                    "name": "Bakingo",
                    "cloudinaryImageId": "0c53fd8f62e3d25ba56d1b4cfe572cef",
                    "locality": "New Thipasandra",
                    "areaName": "Indiranagar",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "Bakery",
                        "Desserts",
                        "Beverages",
                        "Snacks"
                    ],
                    "avgRating": 4.4,
                    "parentId": "3818",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "1K+",
                    "promoted": true,
                    "adTrackingId": "cid=10441820~p=2~eid=0000018c-ed64-4741-4a8f-f9b0001a0258~srvts=1704789821249~83656",
                    "sla": {
                        "deliveryTime": 16,
                        "lastMileTravel": 1.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "16 mins",
                        "lastMileTravelString": "1.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-01-10 01:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=457308&source=collection&query=Cakes",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "5167",
                    "name": "Theobroma",
                    "cloudinaryImageId": "b033728dcb0101ceb19bff0e1e1f6474",
                    "locality": "2nd stage",
                    "areaName": "Indiranagar",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "Bakery",
                        "Desserts",
                        "Beverages"
                    ],
                    "avgRating": 4.6,
                    "parentId": "1040",
                    "avgRatingString": "4.6",
                    "totalRatingsString": "10K+",
                    "promoted": true,
                    "adTrackingId": "cid=10499148~p=3~eid=0000018c-ed64-4741-4a8f-f9b1001a0319~srvts=1704789821249~83656",
                    "sla": {
                        "deliveryTime": 15,
                        "lastMileTravel": 1.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15 mins",
                        "lastMileTravelString": "1.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-01-09 23:59:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "newg.png",
                                "description": "Gourmet"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "newg.png",
                                            "description": "Gourmet"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=5167&source=collection&query=Cakes",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "490568",
                    "name": "NOTO - Ice Creams & Desserts",
                    "cloudinaryImageId": "81ac87e5c89c16adc867be38ce5a1ba3",
                    "locality": "1st Stage",
                    "areaName": "Indiranagar",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                        "Desserts",
                        "Ice Cream"
                    ],
                    "avgRating": 4.6,
                    "veg": true,
                    "parentId": "468478",
                    "avgRatingString": "4.6",
                    "totalRatingsString": "500+",
                    "promoted": true,
                    "adTrackingId": "cid=10452779~p=5~eid=0000018c-ed64-4741-4a8f-f9b3001a0511~srvts=1704789821249~83656",
                    "sla": {
                        "deliveryTime": 11,
                        "lastMileTravel": 0.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "11 mins",
                        "lastMileTravelString": "0.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-01-10 02:00:00",
                        "opened": true
                    },
                    "badges": {
                        "textExtendedBadges": [
                            {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "brand",
                                "fontColor": "#7E808C"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "fontColor": "#7E808C",
                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                            "description": "",
                                            "shortDescription": "brand"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=490568&source=collection&query=Cakes",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "537302",
                    "name": "Cheesecake & Co.",
                    "cloudinaryImageId": "b318c0b4bc2169550145ace1d6e791a2",
                    "locality": "Doopanahallii",
                    "areaName": "Indiranagar",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                        "Bakery",
                        "Desserts"
                    ],
                    "avgRating": 4.6,
                    "veg": true,
                    "parentId": "387417",
                    "avgRatingString": "4.6",
                    "totalRatingsString": "500+",
                    "promoted": true,
                    "adTrackingId": "cid=10348122~p=10~eid=0000018c-ed64-4741-4a8f-f9b8001a0a06~srvts=1704789821249~83656",
                    "sla": {
                        "deliveryTime": 16,
                        "lastMileTravel": 1.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "16 mins",
                        "lastMileTravelString": "1.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-01-10 00:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "newg.png",
                                "description": "Gourmet"
                            },
                            {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "newg.png",
                                            "description": "Gourmet"
                                        }
                                    },
                                    {
                                        "attributes": {
                                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                                            "description": "pureveg"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {},
                            "textBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=537302&source=collection&query=Cakes",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "280216",
                    "name": "Lavonne",
                    "cloudinaryImageId": "udzufnegmtvimdypnfbk",
                    "locality": "Indiranagar",
                    "areaName": "Indiranagar",
                    "costForTwo": "₹1000 for two",
                    "cuisines": [
                        "Bakery",
                        "Desserts"
                    ],
                    "avgRating": 4.6,
                    "parentId": "10530",
                    "avgRatingString": "4.6",
                    "totalRatingsString": "5K+",
                    "sla": {
                        "deliveryTime": 19,
                        "lastMileTravel": 1.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "19 mins",
                        "lastMileTravelString": "1.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-01-09 22:40:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                "description": "OnlyOnSwiggy"
                            },
                            {
                                "imageId": "newg.png",
                                "description": "Gourmet"
                            }
                        ],
                        "textExtendedBadges": [
                            {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available",
                                "fontColor": "#7E808C"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                            "description": "OnlyOnSwiggy"
                                        }
                                    },
                                    {
                                        "attributes": {
                                            "imageId": "newg.png",
                                            "description": "Gourmet"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "fontColor": "#7E808C",
                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                            "description": "",
                                            "shortDescription": "options available"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=280216&source=collection&query=Cakes",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "208175",
                    "name": "Milano Ice Cream",
                    "cloudinaryImageId": "z5ftuzi4kgyfvknvghiz",
                    "locality": "Indiranagar",
                    "areaName": "Indiranagar",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                        "Ice Cream",
                        "Desserts"
                    ],
                    "avgRating": 4.6,
                    "parentId": "20072",
                    "avgRatingString": "4.6",
                    "totalRatingsString": "5K+",
                    "sla": {
                        "deliveryTime": 13,
                        "lastMileTravel": 0.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "13 mins",
                        "lastMileTravelString": "0.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-01-09 23:45:00",
                        "opened": true
                    },
                    "badges": {
                        "textExtendedBadges": [
                            {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available",
                                "fontColor": "#7E808C"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "shortDescription": "options available",
                                            "fontColor": "#7E808C",
                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                            "description": ""
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=208175&source=collection&query=Cakes",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "17377",
                    "name": "Glen's Bakehouse",
                    "cloudinaryImageId": "xeb9pnx0vz6kaz4minjd",
                    "locality": "2nd stage",
                    "areaName": "Indiranagar",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                        "Desserts",
                        "Bakery",
                        "Beverages",
                        "Continental",
                        "Italian"
                    ],
                    "avgRating": 4.5,
                    "parentId": "3220",
                    "avgRatingString": "4.5",
                    "totalRatingsString": "10K+",
                    "sla": {
                        "deliveryTime": 18,
                        "lastMileTravel": 0.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "18 mins",
                        "lastMileTravelString": "0.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-01-10 00:30:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "newg.png",
                                "description": "Gourmet"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "Gourmet",
                                            "imageId": "newg.png"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {},
                            "textBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=17377&source=collection&query=Cakes",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "585078",
                    "name": "Aubree",
                    "cloudinaryImageId": "ef3aec85c38da87938b4e3c5a3028cd9",
                    "locality": "1st Stage",
                    "areaName": "Indiranagar",
                    "costForTwo": "₹800 for two",
                    "cuisines": [
                        "Desserts",
                        "Bakery"
                    ],
                    "avgRating": 4.3,
                    "veg": true,
                    "parentId": "3807",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "500+",
                    "sla": {
                        "deliveryTime": 12,
                        "lastMileTravel": 0.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "12 mins",
                        "lastMileTravelString": "0.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-01-09 23:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "newg.png",
                                "description": "Gourmet"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {},
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "newg.png",
                                            "description": "Gourmet"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=585078&source=collection&query=Cakes",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    }
]
const RestaurantCard = (props) => {
    const {resData} = props;

    const {info} = resData.card.card;
    return (
        <div className='res-card' style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" alt='Truffles' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'
                    +info.cloudinaryImageId}></img>
            <h3>{info.name}</h3>
            <h4>{info.cuisines.join(', ')}</h4>
            <h5>{info.costForTwo}</h5>
            <h5>{info.avgRatingString} stars</h5>
            <h5>{info.sla.slaString}</h5>
        </div>
    )
}

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                {
                    swiggyArray.map((resobj) => <RestaurantCard key={resobj.card.card.info.id} resData={resobj}/>)
                }
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className='app'>
           <Header/>
           <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);