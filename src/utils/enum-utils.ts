// https://github.com/microsoft/TypeScript/issues/4753#issuecomment-694557208
export function Enum_getValues<T extends string>(enumObj: { [key: string]: T; }): IterableIterator<T>;
export function Enum_getValues<T extends string | number>(enumObj: { [key: string]: T; }): IterableIterator<Exclude<T, string>>;
export function* Enum_getValues<T>(enumObj: { [key: string]: T; }): IterableIterator<T>
{
    let isStringEnum = true;
    for (const property in enumObj)
    {
        if (typeof enumObj[property] === 'number')
        {
            isStringEnum = false;
            break;
        }
    }
    for (const property in enumObj)
    {
        if (isStringEnum || typeof enumObj[property] === 'number')
        {
            yield enumObj[property]!;
        }
    }
}

export function Enum_getEntries<T extends string>(enumObj: { [key: string]: T; }): IterableIterator<[key: string, value: T]>;
export function Enum_getEntries<T extends string | number>(enumObj: { [key: string]: T; }): IterableIterator<[key: string, value: Exclude<T, string>]>;
export function* Enum_getEntries<T>(enumObj: { [key: string]: T; }): IterableIterator<[key: string, value: T]>
{
    let isStringEnum = true;
    for (const property in enumObj)
    {
        if (typeof enumObj[property] === 'number')
        {
            isStringEnum = false;
            break;
        }
    }
    for (const property in enumObj)
    {
        if (isStringEnum || typeof enumObj[property] === 'number')
        {
            yield [property, enumObj[property]!];
        }
    }
}