export class ResturantsService {
    resturant = [{
        id: 0,
        name: 'EAT',
        picture: 'https://cdnimg.webstaurantstore.com/uploads/blog/2016/6/namerestaurant_image3.jpg',
        detail: 'abcd',
        cusine: ['BBQ', 'Chinese']
    },
    {
        id: 1,
        name: 'Thai Tanic',
        picture: 'http://sliptalk.s3-us-west-2.amazonaws.com/wp-content/uploads/2014/10/08131126/fail15.jpg',
        detail: 'abcdef',
        cusine: ['Thai', 'Chinese']
    },
    {
        id: 2,
        name: 'Ninety Nine',
        picture: 'https://media-cdn.tripadvisor.com/media/photo-s/08/2a/18/cc/restaurant-name.jpg',
        detail: 'ab',
        cusine: ['Thai', 'Desi']
    },
    {
        id: 3,
        name: 'Beach House',
        picture: 'https://trevsbistro.files.wordpress.com/2013/04/img_0542.jpg',
        detail: 'aaaa',
        cusine: ['BBQ', 'Sea-Food']
    },
    {
        id: 4,
        name: 'Desire',
        picture: 'https://fthmb.tqn.com/WaAjd-UuloGH7luA0Cu7gQ8fXi8=/768x0/filters:no_upscale()/GettyImages-486733315-575de9855f9b58f22e3df0e5.jpg',
        detail: 'aabbcc',
        cusine: ['BBQ', 'Steaks']
    },
    {
        id: 5,
        name: 'Toast Box',
        picture: 'https://upload.wikimedia.org/wikipedia/commons/2/29/HK_Jardon_night_233_Nathan_Road_JD_Mall_Toast_Box_restaurant_name_sign_Sept-2012.JPG',
        detail: 'xyz',
        cusine: ['Fast Food']
    },
    {
        id: 6,
        name: 'The Crawling Crab',
        picture: 'https://images2.westword.com/imager/the-ten-worst-restaurant-names-in-denver/u/original/6437991/crawlingcrab01.jpg',
        detail: 'xxyyzz',
        cusine: ['Thai', 'Chinese', 'Sea-Food']
    },
    {
        id: 7,
        name: 'Fulins',
        picture: 'http://fulins.com/wp-content/uploads/2014/11/Signage.jpg',
        detail: 'Asian Cusine',
        cusine: ['Thai', 'Chinese', 'Indian', 'Pakistani']
    },
    {
        id: 8,
        name: 'Chipotle',
        picture: 'http://www.forketers.com/wp-content/uploads/2017/11/how-to-name-restaurant.jpg',
        detail: 'ab abc d',
        cusine: ['Chinese']
    },
    {
        id: 9,
        name: 'Lord of the Fries',
        picture: 'http://www.lordofthefries.com.au/wp-content/uploads/2016/11/customlogo.jpg',
        detail: 'Fries',
        cusine: ['Fast Food']
    }];

    getAll(){
        return this.resturant;
    }

    getResturantByResturantId(id){
        for(let i = 0; i < this.resturant.length; i++){
            if(this.resturant[i].id == id){
                return this.resturant[i];
            }
            console.log(this.resturant[i]);
        }
    }
}