export function getDays(date: string) {
  const dayWeek = new Date(date);
  let days = "";
  switch (dayWeek.getDay()) {
    case 0:
      days = "Sun";
      break;
    case 1:
      days = "Mon";
      break;
    case 2:
      days = "Tue";
      break;
    case 3:
      days = "Wed";
      break;
    case 4:
      days = "Thu";
      break;
    case 5:
      days = "Fri";
      break;
    case 6:
      days = "Sat";
      break;
    default:
      days = "Today";
      break;
  }
  return days;
}
