import axios from 'axios';

const baseApi = 'https://api.thevirustracker.com/free-api';
const altApi = 'https://api.covid19api.com';

const loadTotalCases = async (countryCode: string) => {
    const responseCountry = await (await axios.get(`${baseApi}?countryTotal=${countryCode}`)).data;
    if(!responseCountry.countrydata) {
        return null;
    }
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
    const responseCountry = await (await axios.get(`${baseApi}?countryTimeline=${countryCode}`)).data;
    if (!responseCountry.timelineitems) {
        return null;
    }
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

export const loadCountryCases = async (countryCode: string) => {
    const totalCases = await loadTotalCases(countryCode);
    const todayCases = await loadTodayCases(countryCode);
    if (!totalCases || !todayCases) {
        return null;
    }
    return {
        todayCases,
        totalCases
    }
}




const getGlobalCases = async () => {
    const response = await (await axios.get(`${baseApi}?global=stats`)).data;

    const todayResponse = await(await axios.get(`${altApi}/summary`)).data;

    const todayGlobalStats = todayResponse.Global;
    
    const results = response.results[0];
    const totalStats = {
        active: results.total_active_cases,
        total: results.total_cases,
        deaths: results.total_deaths,
        recoveries: results.total_recovered,
    };
    const todayStats = {
        total: results.total_cases,
        deathsToday: todayGlobalStats.NewDeaths,
        newCases: todayGlobalStats.NewConfirmed,
        recoveriesToday: todayGlobalStats.NewRecovered
    }
    return {
        totalStats,
        todayStats
    };
}



export const loadGlobalCases = async () => {
    const globalCases = await getGlobalCases();
    return {
        todayCases: globalCases.todayStats,
        totalCases: globalCases.totalStats
    }
}

