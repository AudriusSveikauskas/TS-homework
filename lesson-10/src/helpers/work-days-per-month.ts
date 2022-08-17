const today = new Date();

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month, 0).getDate();
}

function isWorkDay(year: number, month: number, day: number) {
  const dayOfWeek = new Date(year, month, day).getDay();
  return dayOfWeek >= 1 && dayOfWeek <= 5;
}

export default function calcWorkDaysPerMonth(
  year = today.getFullYear(),
  month = today.getMonth(),
) {
  let workDaysInMoth = 0;
  const daysInMonth = getDaysInMonth(year, month);

  for (let i = 1; i <= daysInMonth; i += 1) {
    if (isWorkDay(year, month, i)) {
      workDaysInMoth += 1;
    }
  }
  return workDaysInMoth;
}
