import axios from 'axios';


const getGlobalCases = async () => {
    const response = await (await axios.get('https://api.thevirustracker.com/free-api?global=stats')).data;

    const todayResponse = await(await axios.get('https://api.covid19api.com/summary')).data;

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



export const loadCases = async () => {
    const globalCases = await getGlobalCases();
    return {
        todayCases: globalCases.todayStats,
        totalCases: globalCases.totalStats
    }
}
