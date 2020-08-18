export type Types = Record<string, ComponentTheme>;
export type ComponentTheme = Record<string, string>;
export type ThemeClazz = string | { displayName: string } ;

export type ThemeForClazz = (clazz: ThemeClazz) => (...args: any[]) => string;