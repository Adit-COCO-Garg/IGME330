/* @author Adit Garg */

export default class PopupCoronaParagraph{
    static init(paramObj){
        let {name, code, population, updated_at, today, latest_data} = paramObj;
        let pString= "<p>";
        pString += `Population: ${population} <br>`
        pString += `Today - Deaths: ${today.deaths} Confirmed: ${today.confirmed} <br>`
        pString += `<span class="headingP">Latest Aggeragate Data </span><br>`
        pString += `Deaths: ${latest_data.deaths}<br>`
        pString += `Confirmed Cases: ${latest_data.confirmed}<br>`
        pString += `Recovered: ${latest_data.recovered}<br>`
        pString += `Critical: ${latest_data.critical}<br>`
        let death_rate = latest_data.calculated.death_rate ? `${latest_data.calculated.death_rate.toFixed(2)}%`: `Not Available`;
        let recovery_rate = latest_data.calculated.recovery_rate ? `${latest_data.calculated.recovery_rate.toFixed(2)}` : `Not Available`;
        pString += `Death Rate: ${death_rate}<br>`
        pString += `Recovery Rate: ${recovery_rate}<br>`
        pString += `<span class="updated_at">Updated at: ${updated_at}</span><br>`
        pString += "</p>"
        return pString;
    }
}
