import { getDate } from '/Users/user/Documents/EvermosAuto/github.com/evermos/evf-automation/api/misc/date.js'
import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';


export const ADJUSTMENT_FLATRATE_DATA = {
    adjustment : randomIntBetween(1,10)* 1000,
    startDate : getDate(), //Set date current date at 23:59:59
    isActive : 0,
    endDate : getDate(1) //set date one year from current date 
}

export const ADJUSTMENT_FLATRATE_UPDATE_DATA = {
    //Update Adjustment Flat Rate get id in table schema shipment.flat_rate_adjustment from coloumn id
    id : '051acc5a-823c-4f21-8775-da4160d6107b',
    adjustment : randomIntBetween(1,10) * 1000,
    startDate : getDate(),
    isActive : 0,
    endDate : getDate(2) //update date two year from current date
}