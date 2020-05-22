export function LOAD_CASES (state: any, cases: any) {
  // your code
  state.totalCaseStats = cases.totalCases;
  state.todayCaseStats = cases.todayCases;
}

export function FINISH_LOADING_CASES (state: any) {
  state.casesLoaded = true;
}