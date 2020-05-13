import axios from 'axios';


const loadTotalCases = async (countryCode: string) => {
    const responseCountry = await (await axios.get(`https://api.thevirustracker.com/free-api?countryTotal=${countryCode}`)).data;
    const resultsCountry = responseCountry.countrydata[0];
    const countryStats = {
        active: resultsCountry.total_active_cases,
        total: resultsCountry.total_cases,
        deaths: resultsCountry.total_deaths,
        recoveries: resultsCountry.total_recovered,
    };
    return countryStats;
}

const loadTodayCases = async (countryCode: string) => {
    const responseCountry = await (await axios.get(`https://api.thevirustracker.com/free-api?countryTimeline=${countryCode}`)).data;
    const timelineItems = responseCountry.timelineitems[0];
    const timelineItemsKeysArray = Object.keys(timelineItems);
    const todayCasesFull = timelineItems[timelineItemsKeysArray[timelineItemsKeysArray.length - 2]];
    const todayCases = {
        newCases: todayCasesFull.new_daily_cases,
        total: todayCasesFull.total_cases,
        deathsToday: todayCasesFull.new_daily_deaths,
        recoveriesToday: todayCasesFull.total_recoveries,
    };
    return todayCases;
}

export const loadCases = async (countryCode: string) => {
    const totalCases = await loadTotalCases(countryCode);
    const todayCases = await loadTodayCases(countryCode);
    return {
        todayCases,
        totalCases
    }
}
