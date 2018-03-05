import * as firebase from 'firebase/app';

export class MenusService {
    // Menu = [{
    //     MenuId: 0,
    //     resturantId: 0,
    //     dishes: [{
    //         dishId: 0,
    //         dishName: 'Kabab',
    //         dishPrice: '200',
    //         dishImage: 'https://ssl.c.photoshelter.com/img-get/I0000po3PBN8cWlw/s/1000/PWP17316-BBQ-Beef-Burgers-Photos.jpg',
    //     },
    //     {
    //         dishId: 1,
    //         dishName: 'Chicken Tikka',
    //         dishPrice: '250',
    //         dishImage: 'http://nutright.com/blog/wp-content/uploads/2017/01/bbq-islamabad.jpg',
    //     },
    //     {
    //         dishId: 2,
    //         dishName: 'Chicken Boti',
    //         dishPrice: '350',
    //         dishImage: 'http://www.sullivansbbqcatering.com/wp-content/uploads/2016/06/Italian_Pork_Kabobs_with_Summer_Vegetables-Grilling-Class.jpg',
    //     },
    //     {
    //         dishId: 3,
    //         dishName: 'Beef Mangolian',
    //         dishPrice: '500',
    //         dishImage: 'http://del.h-cdn.co/assets/17/05/980x490/landscape-1485807729-delish-mongolian-beef-ramen-1.jpg',
    //     },
    //     {
    //         dishId: 4,
    //         dishName: 'Chicken Shashlik',
    //         dishPrice: '450',
    //         dishImage: 'http://www.sydneycafes.com.au/wp-content/uploads/2016/11/China-Garden-Hammond.jpg',
    //     },
    //     {
    //         dishId: 5,
    //         dishName: 'Chowmein',
    //         dishPrice: '550',
    //         dishImage: 'http://magazine.foodpanda.pk/wp-content/uploads/sites/13/2016/06/Chinese-Featured-Image.jpg',
    //     }]
    // },
    // {
    //     MenuId: 1,
    //     resturantId: 1,
    //     dishes: [{
    //         dishId: 0,
    //         dishName: 'Fried Rice Shrimp',
    //         dishPrice: '700',
    //         dishImage: 'https://thumbs.dreamstime.com/z/thai-food-name-seafood-fried-rice-shrimp-squid-38232310.jpg',
    //     },
    //     {
    //         dishId: 1,
    //         dishName: 'Fried Fish',
    //         dishPrice: '1250',
    //         dishImage: 'https://thumbs.dreamstime.com/z/thai-food-name-deep-fried-silver-banded-fish-garlic-pepp-pepper-spicy-sauce-37185459.jpg',
    //     },
    //     {
    //         dishId: 2,
    //         dishName: 'Prwans',
    //         dishPrice: '1350',
    //         dishImage: 'http://www.tommyschultz.com/photos/thai-food-in-bangkok/bkk-st-food_12.jpg',
    //     },
    //     {
    //         dishId: 3,
    //         dishName: 'Beef Mangolian',
    //         dishPrice: '900',
    //         dishImage: 'http://del.h-cdn.co/assets/17/05/980x490/landscape-1485807729-delish-mongolian-beef-ramen-1.jpg',
    //     },
    //     {
    //         dishId: 4,
    //         dishName: 'Chicken Shashlik',
    //         dishPrice: '750',
    //         dishImage: 'http://www.sydneycafes.com.au/wp-content/uploads/2016/11/China-Garden-Hammond.jpg',
    //     },
    //     {
    //         dishId: 5,
    //         dishName: 'Chowmein',
    //         dishPrice: '850',
    //         dishImage: 'http://magazine.foodpanda.pk/wp-content/uploads/sites/13/2016/06/Chinese-Featured-Image.jpg',
    //     }]
    // },
    // {
    //     MenuId: 2,
    //     resturantId: 2,
    //     dishes: [{
    //         dishId: 0,
    //         dishName: 'Fried Rice Shrimp',
    //         dishPrice: '700',
    //         dishImage: 'https://thumbs.dreamstime.com/z/thai-food-name-seafood-fried-rice-shrimp-squid-38232310.jpg',
    //     },
    //     {
    //         dishId: 1,
    //         dishName: 'Fried Fish',
    //         dishPrice: '1250',
    //         dishImage: 'https://thumbs.dreamstime.com/z/thai-food-name-deep-fried-silver-banded-fish-garlic-pepp-pepper-spicy-sauce-37185459.jpg',
    //     },
    //     {
    //         dishId: 2,
    //         dishName: 'Prwans',
    //         dishPrice: '1350',
    //         dishImage: 'http://www.tommyschultz.com/photos/thai-food-in-bangkok/bkk-st-food_12.jpg',
    //     },
    //     {
    //         dishId: 3,
    //         dishName: 'Kabab',
    //         dishPrice: '200',
    //         dishImage: 'https://ssl.c.photoshelter.com/img-get/I0000po3PBN8cWlw/s/1000/PWP17316-BBQ-Beef-Burgers-Photos.jpg',
    //     },
    //     {
    //         dishId: 4,
    //         dishName: 'Chicken Tikka',
    //         dishPrice: '250',
    //         dishImage: 'http://nutright.com/blog/wp-content/uploads/2017/01/bbq-islamabad.jpg',
    //     },
    //     {
    //         dishId: 5,
    //         dishName: 'Chicken Boti',
    //         dishPrice: '350',
    //         dishImage: 'http://www.sullivansbbqcatering.com/wp-content/uploads/2016/06/Italian_Pork_Kabobs_with_Summer_Vegetables-Grilling-Class.jpg',
    //     }]
    // },
    // {
    //     MenuId: 3,
    //     resturantId: 3,
    //     dishes: [{
    //         dishId: 0,
    //         dishName: 'Fried Rice Shrimp',
    //         dishPrice: '700',
    //         dishImage: 'https://thumbs.dreamstime.com/z/thai-food-name-seafood-fried-rice-shrimp-squid-38232310.jpg',
    //     },
    //     {
    //         dishId: 1,
    //         dishName: 'Fried Fish',
    //         dishPrice: '1250',
    //         dishImage: 'https://thumbs.dreamstime.com/z/thai-food-name-deep-fried-silver-banded-fish-garlic-pepp-pepper-spicy-sauce-37185459.jpg',
    //     },
    //     {
    //         dishId: 2,
    //         dishName: 'Prwans',
    //         dishPrice: '1350',
    //         dishImage: 'http://www.tommyschultz.com/photos/thai-food-in-bangkok/bkk-st-food_12.jpg',
    //     },
    //     {
    //         dishId: 3,
    //         dishName: 'Kabab',
    //         dishPrice: '200',
    //         dishImage: 'https://ssl.c.photoshelter.com/img-get/I0000po3PBN8cWlw/s/1000/PWP17316-BBQ-Beef-Burgers-Photos.jpg',
    //     },
    //     {
    //         dishId: 4,
    //         dishName: 'Chicken Tikka',
    //         dishPrice: '250',
    //         dishImage: 'http://nutright.com/blog/wp-content/uploads/2017/01/bbq-islamabad.jpg',
    //     },
    //     {
    //         dishId: 5,
    //         dishName: 'Chicken Boti',
    //         dishPrice: '350',
    //         dishImage: 'http://www.sullivansbbqcatering.com/wp-content/uploads/2016/06/Italian_Pork_Kabobs_with_Summer_Vegetables-Grilling-Class.jpg',
    //     }]
    // },
    // {
    //     MenuId: 4,
    //     resturantId: 4,
    //     dishes: [{
    //         dishId: 0,
    //         dishName: 'Skirt Steak',
    //         dishPrice: '1700',
    //         dishImage: 'https://shewearsmanyhats.com/wp-content/uploads/2011/06/skirt-steak-4.jpg',
    //     },
    //     {
    //         dishId: 1,
    //         dishName: 'Beef Steak',
    //         dishPrice: '1450',
    //         dishImage: 'http://www.japanesecooking101.com/wp-content/uploads/2015/10/IMG_8926.jpg',
    //     },
    //     {
    //         dishId: 2,
    //         dishName: 'Chicken Steak',
    //         dishPrice: '1650',
    //         dishImage: 'https://www.frenchentree.com/wp-content/uploads/2004/11/1024px-Steak_frites.-by-LWY-via-Wikimedia-Commons-1024x546.jpg',
    //     },
    //     {
    //         dishId: 3,
    //         dishName: 'Kabab',
    //         dishPrice: '400',
    //         dishImage: 'https://ssl.c.photoshelter.com/img-get/I0000po3PBN8cWlw/s/1000/PWP17316-BBQ-Beef-Burgers-Photos.jpg',
    //     },
    //     {
    //         dishId: 4,
    //         dishName: 'Chicken Tikka',
    //         dishPrice: '550',
    //         dishImage: 'http://nutright.com/blog/wp-content/uploads/2017/01/bbq-islamabad.jpg',
    //     },
    //     {
    //         dishId: 5,
    //         dishName: 'Chicken Boti',
    //         dishPrice: '850',
    //         dishImage: 'http://www.sullivansbbqcatering.com/wp-content/uploads/2016/06/Italian_Pork_Kabobs_with_Summer_Vegetables-Grilling-Class.jpg',
    //     }]
    // },
    // {
    //     MenuId: 5,
    //     resturantId: 5,
    //     dishes: [{
    //         dishId: 0,
    //         dishName: 'Burger',
    //         dishPrice: '700',
    //         dishImage: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Fast_food_meal.jpg',
    //     },
    //     {
    //         dishId: 1,
    //         dishName: 'Pizza',
    //         dishPrice: '1450',
    //         dishImage: 'https://i2.wp.com/media.hungryforever.com/wp-content/uploads/2015/09/17214105/feature-image-kids-fast-food.jpg?w=1269&strip=all&quality=80',
    //     },
    //     {
    //         dishId: 2,
    //         dishName: 'Sandwhich',
    //         dishPrice: '650',
    //         dishImage: 'http://www.dhunii.com/wp-content/uploads/2016/09/Veg.-Sandwhich-500x550.jpg',
    //     }]
    // },
    // {
    //     MenuId: 6,
    //     resturantId: 6,
    //     dishes: [{
    //         dishId: 0,
    //         dishName: 'Fried Rice Shrimp',
    //         dishPrice: '700',
    //         dishImage: 'https://thumbs.dreamstime.com/z/thai-food-name-seafood-fried-rice-shrimp-squid-38232310.jpg',
    //     },
    //     {
    //         dishId: 1,
    //         dishName: 'Fried Fish',
    //         dishPrice: '1250',
    //         dishImage: 'https://thumbs.dreamstime.com/z/thai-food-name-deep-fried-silver-banded-fish-garlic-pepp-pepper-spicy-sauce-37185459.jpg',
    //     },
    //     {
    //         dishId: 2,
    //         dishName: 'Prwans',
    //         dishPrice: '1350',
    //         dishImage: 'http://www.tommyschultz.com/photos/thai-food-in-bangkok/bkk-st-food_12.jpg',
    //     },
    //     {
    //         dishId: 3,
    //         dishName: 'Beef Mangolian',
    //         dishPrice: '900',
    //         dishImage: 'http://del.h-cdn.co/assets/17/05/980x490/landscape-1485807729-delish-mongolian-beef-ramen-1.jpg',
    //     },
    //     {
    //         dishId: 4,
    //         dishName: 'Chicken Shashlik',
    //         dishPrice: '750',
    //         dishImage: 'http://www.sydneycafes.com.au/wp-content/uploads/2016/11/China-Garden-Hammond.jpg',
    //     },
    //     {
    //         dishId: 5,
    //         dishName: 'Chowmein',
    //         dishPrice: '850',
    //         dishImage: 'http://magazine.foodpanda.pk/wp-content/uploads/sites/13/2016/06/Chinese-Featured-Image.jpg',
    //     }]
    // },
    // {
    //     MenuId: 7,
    //     resturantId: 7,
    //     dishes: [{
    //         dishId: 0,
    //         dishName: 'Fried Rice Shrimp',
    //         dishPrice: '700',
    //         dishImage: 'https://thumbs.dreamstime.com/z/thai-food-name-seafood-fried-rice-shrimp-squid-38232310.jpg',
    //     },
    //     {
    //         dishId: 1,
    //         dishName: 'Fried Fish',
    //         dishPrice: '1250',
    //         dishImage: 'https://thumbs.dreamstime.com/z/thai-food-name-deep-fried-silver-banded-fish-garlic-pepp-pepper-spicy-sauce-37185459.jpg',
    //     },
    //     {
    //         dishId: 2,
    //         dishName: 'Prwans',
    //         dishPrice: '1350',
    //         dishImage: 'http://www.tommyschultz.com/photos/thai-food-in-bangkok/bkk-st-food_12.jpg',
    //     },
    //     {
    //         dishId: 3,
    //         dishName: 'Beef Mangolian',
    //         dishPrice: '900',
    //         dishImage: 'http://del.h-cdn.co/assets/17/05/980x490/landscape-1485807729-delish-mongolian-beef-ramen-1.jpg',
    //     },
    //     {
    //         dishId: 4,
    //         dishName: 'Chicken Shashlik',
    //         dishPrice: '750',
    //         dishImage: 'http://www.sydneycafes.com.au/wp-content/uploads/2016/11/China-Garden-Hammond.jpg',
    //     },
    //     {
    //         dishId: 5,
    //         dishName: 'Chowmein',
    //         dishPrice: '850',
    //         dishImage: 'http://magazine.foodpanda.pk/wp-content/uploads/sites/13/2016/06/Chinese-Featured-Image.jpg',
    //     },
    //     {
    //         dishId: 6,
    //         dishName: 'Burger',
    //         dishPrice: '700',
    //         dishImage: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Fast_food_meal.jpg',
    //     },
    //     {
    //         dishId: 7,
    //         dishName: 'Pizza',
    //         dishPrice: '1450',
    //         dishImage: 'https://i2.wp.com/media.hungryforever.com/wp-content/uploads/2015/09/17214105/feature-image-kids-fast-food.jpg?w=1269&strip=all&quality=80',
    //     },
    //     {
    //         dishId: 8,
    //         dishName: 'Sandwhich',
    //         dishPrice: '650',
    //         dishImage: 'http://www.dhunii.com/wp-content/uploads/2016/09/Veg.-Sandwhich-500x550.jpg',
    //     },
    //     {
    //         dishId: 9,
    //         dishName: 'Kabab',
    //         dishPrice: '400',
    //         dishImage: 'https://ssl.c.photoshelter.com/img-get/I0000po3PBN8cWlw/s/1000/PWP17316-BBQ-Beef-Burgers-Photos.jpg',
    //     },
    //     {
    //         dishId: 10,
    //         dishName: 'Chicken Tikka',
    //         dishPrice: '550',
    //         dishImage: 'http://nutright.com/blog/wp-content/uploads/2017/01/bbq-islamabad.jpg',
    //     },
    //     {
    //         dishId: 11,
    //         dishName: 'Chicken Boti',
    //         dishPrice: '850',
    //         dishImage: 'http://www.sullivansbbqcatering.com/wp-content/uploads/2016/06/Italian_Pork_Kabobs_with_Summer_Vegetables-Grilling-Class.jpg',
    //     }]
    // },
    // {
    //     MenuId: 8,
    //     resturantId: 8,
    //     dishes: [{
    //         dishId: 0,
    //         dishName: 'Fried Rice Shrimp',
    //         dishPrice: '700',
    //         dishImage: 'https://thumbs.dreamstime.com/z/thai-food-name-seafood-fried-rice-shrimp-squid-38232310.jpg',
    //     },
    //     {
    //         dishId: 1,
    //         dishName: 'Beef Mangolian',
    //         dishPrice: '900',
    //         dishImage: 'http://del.h-cdn.co/assets/17/05/980x490/landscape-1485807729-delish-mongolian-beef-ramen-1.jpg',
    //     },
    //     {
    //         dishId: 2,
    //         dishName: 'Chicken Shashlik',
    //         dishPrice: '750',
    //         dishImage: 'http://www.sydneycafes.com.au/wp-content/uploads/2016/11/China-Garden-Hammond.jpg',
    //     },
    //     {
    //         dishId: 3,
    //         dishName: 'Chowmein',
    //         dishPrice: '850',
    //         dishImage: 'http://magazine.foodpanda.pk/wp-content/uploads/sites/13/2016/06/Chinese-Featured-Image.jpg',
    //     }]
    // },
    // {
    //     MenuId: 9,
    //     resturantId: 9,
    //     dishes: [{
    //         dishId: 0,
    //         dishName: 'Burger',
    //         dishPrice: '700',
    //         dishImage: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Fast_food_meal.jpg',
    //     },
    //     {
    //         dishId: 1,
    //         dishName: 'Pizza',
    //         dishPrice: '1450',
    //         dishImage: 'https://i2.wp.com/media.hungryforever.com/wp-content/uploads/2015/09/17214105/feature-image-kids-fast-food.jpg?w=1269&strip=all&quality=80',
    //     },
    //     {
    //         dishId: 2,
    //         dishName: 'Sandwhich',
    //         dishPrice: '650',
    //         dishImage: 'http://www.dhunii.com/wp-content/uploads/2016/09/Veg.-Sandwhich-500x550.jpg',
    //     }]
    // }];

    allMenus;
    menu;
    menus;

    MenuService(){
        let self = this;
        this.menu = firebase.database().ref('/menus').on('value', function (snapshot) {
          self.allMenus = snapshot.val();
          //console.log(self.allMenus);
        });
    }


    getMenuByResturantId(Id) {
        for (var id in this.allMenus) {
            if (Id == this.allMenus[id].resturantId) {
              this.menus = this.allMenus[id];
              //console.log(this.allMenus[id]);
            }
          }
    //     for(let i = 0; i < this.Menu.length; i++){
    //         if(this.Menu[i].resturantId == Id){
    //             return this.Menu[i];
    //         }
    //         //console.log(this.Menu[i]);
    //     }
     }
}