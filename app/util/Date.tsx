export function getFormattedDate(date: any) {
  return date.toISOString().split("T")[0];
}
export function getDateMinusDays(date: any, days: any) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
