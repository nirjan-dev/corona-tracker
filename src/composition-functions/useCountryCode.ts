import { ref, onMounted } from "@vue/composition-api";
import {iso1A2Code} from '@ideditor/country-coder';
export function useCountryCode(options: {defaultCode: string}) {

    const getCountryCode= () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((position) => {
              resolve(iso1A2Code([position.coords.longitude, position.coords.latitude]))
              }, (err) => {
                console.error(err);
                const countryCodeFromLocalStorage = localStorage.getItem('CoronaApp-countryCode');
                if (!countryCodeFromLocalStorage) {
                  const userPromptCountryCode = prompt('Unable to get your location, please enter your 2 digit ISO country code, go to countrycode.org if you do not know your country code');
                  localStorage.setItem('CoronaApp-countryCode', userPromptCountryCode || options.defaultCode);
                  resolve(userPromptCountryCode);
                } else {
                  resolve(countryCodeFromLocalStorage);
                }
                
               
              }, {timeout: 10000})
        })
    }

    return {
      getCountryCode
    }
}