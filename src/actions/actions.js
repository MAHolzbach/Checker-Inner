export const SELECT_MONTH = "SELECT_MONTH";

export function selectMonth(month) {
  return {
    type: SELECT_MONTH,
    payload: {
      days: new Date().getUTCMonth()
    }
  };
}
