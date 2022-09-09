export default function addMinutes(numOfMinutes: number, date: Date) {
  date.setMinutes(date.getMinutes() + numOfMinutes);
  return date;
}
