import { AppState } from "../AppState.js"
import { housesService } from "../services/HouseService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


function _drawHouses() {
    const houses = AppState.houses
    let htmlString = ''
    houses.forEach(house => htmlString += house.HousesCardHTMLTemplate)
    setHTML('houseListings', htmlString)
}

function _drawHouseForm() {
    if (!AppState.account) {
        return
    }

    const houseFormElement = document.getElementById('houseForm')
    if (!houseFormElement) {
        return
    }
    houseFormElement.classList.remove('d-none')

}


export class HousesController {
    constructor() {
        this.getHouses()
        AppState.on('houses', _drawHouses)
        AppState.on('account', _drawHouses)
        AppState.on('account', _drawHouseForm)
    }


    async getHouses() {
        try {
            await housesService.getHouses
            Pop.success('Got Houses!')
        } catch (error) {
            console.log(error)
            Pop.error(error)
        }
    }

    async createHome() {
        try {
            event.preventDefault()
            const form = event.target
            const houseFormData = getFormData(form)
            await housesService.createHouse(houseFormData)
            // @ts-ignore
            form.reset()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }

    async removeHouse(houseId) {
        try {
            const wantsToRemove = await Pop.confirm('Are you sure you want to delete this listing?')
            if (!wantsToRemove) {
                return
            }
            await housesService.removeHouse(houseId)
            Pop.success('Listing was deleted')
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }
}