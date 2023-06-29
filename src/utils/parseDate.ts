export default function parseDate(date: Date | string): string {
  const convertDate = new Date(date).toLocaleTimeString();

  return convertDate;
}
