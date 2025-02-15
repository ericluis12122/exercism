const Schedule = Object.freeze({
  Teenth: "teenth",
  First: "first",
  Second: "second",
  Third: "third",
  Fourth: "fourth",
  Last: "last"
});

export const meetup = (year, month, schedule, dayOfWeek) => {
  // Convertir día de la semana a índice (0 = Domingo, 1 = Lunes, ..., 6 = Sábado)
  const targetDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].indexOf(dayOfWeek);
  // Crear un array con las fechas del mes que coinciden con el día de la semana
  const dates = [];
  const date = new Date(year, month - 1, 1); // Mes en JavaScript es 0-indexado
  while (date.getMonth() === month - 1) {
    if (date.getDay() === targetDay)
      dates.push(new Date(date)); // Clonar la fecha
    date.setDate(date.getDate() + 1); // Avanzar al día siguiente
  }
  // Determinar la fecha según el schedule
  switch (schedule) {
    case Schedule.First:
      return dates[0];
    case Schedule.Second:
      return dates[1];
    case Schedule.Third:
      return dates[2];
    case Schedule.Fourth:
      return dates[3];
    case Schedule.Last:
      return dates[dates.length - 1];
    case Schedule.Teenth:
      return dates.find(d => d.getDate() >= 13 && d.getDate() <= 19);
    default:
      throw new Error("Invalid schedule");
  }
};