export const BORN_YEAR = 1990;
export const WORKING_SINCE_YEAR = 2010;

export const calcAge = () => new Date().getFullYear() - BORN_YEAR;
export const calcExperienceYears = () =>
  new Date().getFullYear() - WORKING_SINCE_YEAR;
