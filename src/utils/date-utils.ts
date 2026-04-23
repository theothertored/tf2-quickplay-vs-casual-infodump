
export function p2(n: number)
{
    return n.toString().padStart(0);
}

export function Date_toYMD(date: Date)
{
    return `${date.getFullYear()}-${p2(date.getMonth() + 1)}-${p2(date.getDate())}`;
}

export function Date_parseYMD(ymd: string)
{
    const match = /(\d\d\d\d)-(\d\d)-(\d\d)/.exec(ymd);

    if (match)
    {
        const parsed = match.slice(1).map(m => parseInt(m));

        if (!parsed.some(n => n === undefined || isNaN(n)))
        {
            const [y, m, d] = parsed;
            return new Date(y!, m! - 1, d!);
        }
    }

    return new Date(NaN);
}

export const Date_MonthAbbrevs = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function Date_toReadableString(date: Date)
{
    return `${date.getFullYear()} ${Date_MonthAbbrevs[date.getMonth()]} ${date.getDate()}`
}