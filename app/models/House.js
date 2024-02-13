export class House {
    constructor(data) {
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.creatorId = data.creatorId
    }

    get CardHTMLTemplate() {

    }
}










// {
//     "bedrooms": {
//         "type": "Number",
//             "required": true
//     },
//     "bathrooms": {
//         "type": "Number",
//             "required": true
//     },
//     "levels": {
//         "type": "Number",
//             "required": true
//     },
//     "imgUrl": {
//         "type": "String",
//             "maxLength": 500
//     },
//     "year": {
//         "type": "Number",
//             "required": true
//     },
//     "price": {
//         "type": "Number",
//             "required": true
//     },
//     "description": {
//         "type": "String",
//             "maxLength": 5000
//     },
//     "creatorId": {
//         "type": "ObjectId",
//             "required": true,
//                 "ref": "Account"
//     }
// }