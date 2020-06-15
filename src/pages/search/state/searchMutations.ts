export function LOAD_CASES (state: any, cases: any) {
  // your code
  state.totalCaseStats = cases.totalCases;
  state.todayCaseStats = cases.todayCases;
}

export function FINISH_LOADING_CASES (state: any) {
  state.casesLoaded = true;
}

export function SET_COUNTRY_CODE (state: any, countryCode: string) {
  state.searchCountryCode = countryCode;
}

export function RESET_LOADING_CASES(state: any) {
  state.casesLoaded = false;
}

export function SET_LOADING_ERROR(state: any, errorState: boolean) {
  state.loadingError = errorState;
}