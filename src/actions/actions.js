export const SELECT_MONTH = "SELECT_MONTH";
export const CURRENT_MONTH = "CURRENT_MONTH";

export function currentMonth(month) {
  return {
    type: CURRENT_MONTH,
    days: new Date().getUTCMonth()
  };
}

export function selectMonth(month) {
  return {
    type: SELECT_MONTH,
    days: month
  };
}
