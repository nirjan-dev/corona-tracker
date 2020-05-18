import {iso1A2Code} from '@ideditor/country-coder';
export function useCountryCode() {

    const getCountryCode: () => Promise<null | string> = () => {
        return new Promise((resolve) => {
            navigator.geolocation.getCurrentPosition((position) => {
              resolve(iso1A2Code([position.coords.longitude, position.coords.latitude]))
              }, (err) => {
                console.error(err);
                resolve(null);
              }, {timeout: 10000})
        })
    }

    return {
      getCountryCode
    }
}