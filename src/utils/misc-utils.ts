export function px(n: number | undefined | null): string | undefined
{
    if (n === undefined || n === null) return undefined;
    else if (n === 0) return '0';
    else return `${n}px`;
}