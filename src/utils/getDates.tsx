export function getDates(date: string) {
    const dates = new Date(date);
    return dates.toString().slice(4, 10).trim();
}