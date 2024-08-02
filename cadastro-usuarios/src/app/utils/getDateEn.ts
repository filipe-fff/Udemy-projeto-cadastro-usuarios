export const getDateEn = (date:string):Date | null => {

    if(!date) return null;

    const [ day, month, year ] = date.split('/').map(Number);

    return new Date(year, month-1, day);
}