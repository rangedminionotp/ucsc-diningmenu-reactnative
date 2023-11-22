import React from 'react';

interface CalendarGeneratorProps {
  date: Date;
}

class CalendarGenerator extends React.Component<CalendarGeneratorProps> {
  /**
   * @param {object} date
   * @return {[[Number]]} 6x7 array of integers
   */
  static generate(date: Date): number[][] {
    const numRows = 6;
    const numCols = 7;
    const calendar: number[][] = Array.from({ length: numRows }, () => Array(numCols).fill(0));

    const currMonth: number = date.getMonth();
    const currYear: number = date.getFullYear();
    const currDays: number = new Date(currYear, currMonth + 1, 0).getDate();
    const firstDay: number = new Date(currYear, currMonth, 1).getDay();

    const prevMonth: number = currMonth !== 0 ? currMonth - 1 : 11;
    const prevYear: number = currMonth !== 0 ? currYear : currYear - 1;
    const prevDays: number = new Date(prevYear, prevMonth + 1, 0).getDate();

    let total = 0;
    let rowsIndex = 0;
    let colsIndex = firstDay;

    // Fill in the days from the previous month
    for (let i = firstDay - 1; i >= 0; i--) {
      calendar[rowsIndex][i] = 0
      total++;
    }

    // Fill in the days from the current month
    for (let day = 1; day <= currDays; day++) {
      calendar[rowsIndex][colsIndex] = day;
      colsIndex = (colsIndex + 1) % numCols;
      total++;

      if (colsIndex === 0) {
        rowsIndex++;
      }
    }

    // Fill in the days from the next month
    while (total < numRows * numCols) {
      calendar[rowsIndex][colsIndex] = total - (currDays + firstDay) + 1;
      colsIndex = (colsIndex + 1) % numCols;
      total++;

      if (colsIndex === 0) {
        rowsIndex++;
      }
    }

    return calendar;
  } 
}

export default CalendarGenerator;