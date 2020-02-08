export type ClassesParam = Array<string | object> | object;

const isObject = (a: any): boolean => !!a && a.constructor === Object;

const getClassesFromObject = (obj: object): string => {
  return Object.keys(obj)
    .filter(item => {
      return typeof obj[item as keyof object] === "boolean"
        ? obj[item as keyof object]
        : false;
    })
    .join(" ")
    .trim();
};

const useClasses = (classes: ClassesParam): string => {
  if (Array.isArray(classes)) {
    return classes
      .map(item => {
        if (isObject(item)) return getClassesFromObject(item as object);
        else if (typeof item === "string") return item;
        else return "";
      })
      .join(" ")
      .trim();
  } else if (isObject(classes)) {
    return getClassesFromObject(classes);
  } else return "";
};

export { useClasses };
