//Adjustment Flat Rate
import http from 'k6/http'
import { config } from '/Users/user/Documents/EvermosAuto/github.com/evermos/evf-automation/api/env.js' 
import * as data from '/Users/user/Documents/EvermosAuto/github.com/evermos/evf-automation/api/shipment/data/v2/shipment/rate-adjustment/flateRate-data.js'

function create(auth,data){
    //Create Adjustment Flat Rate in table shipment.flat_rate_adjustment
    const url = `${config().Shipment}/v2/shipment/rate/adjustment`
    const payload = JSON.stringify({
            "adjustment": data.adjustment,
            "startDate": data.startDate,
            "isActive": data.isActive,
            "endDate": data.endDate //Add one year
    })
    const params = {
        headers:{ 
            'Content-Type': 'application/json',
            'Authorization' : `${auth}`
        }
    }
    return http.post(url,payload,params)
}

function update(auth,data){
    //Update Adjustment Flat Rate in table shipment.flat_rate_adjustment with id from coloumn id
    const url = `${config().Shipment}/v2/shipment/rate/adjustment/${data.id}`
    const payload = JSON.stringify({
            "adjustment": data.adjustment,
            "startDate": data.startDate,
            "isActive": data.isActive,
            "endDate": data.endDate //Add one year
    })
    const params = {
        headers:{ 
            'Content-Type': 'application/json',
            'Authorization' : `${auth}`
        }
    }
    return http.put(url,payload,params)
}

function sync(auth){
    //Sync Adjustment Flat Rate to table com. 
    const url = `${config().Shipment}/v2/shipment/rate/sync-adjustment`
    const params = {
        headers:{ 
            'Content-Type': 'application/json',
            'Authorization' : `${auth}`
        }
    }
    return http.get(url,params)
}

export const adjustment = {
    flatRate : {
        create,update,sync,
    },
}

export default function () {
    const auth = `Bearer ${config().Client.token}`    
    const res1 = adjustment.flatRate.create(auth,data.ADJUSTMENT_FLATRATE_DATA)
    console.log('Response create adjusment flat rate : ' + JSON.stringify(res1.body))
    const res2 = adjustment.flatRate.update(auth,data.ADJUSTMENT_FLATRATE_UPDATE_DATA)
    console.log('Response update adjusment flat rate : ' + JSON.stringify(res2.body))
    const res3 = adjustment.flatRate.sync (auth)
    console.log('Response Sync adjusment flat rate : ' + JSON.stringify(res3.body))
}