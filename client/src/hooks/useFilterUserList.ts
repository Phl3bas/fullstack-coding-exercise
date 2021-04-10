import * as React from "react";

export function useFilteredUserList<T>(
  filterValue: string,
  filterKey: "name" | "email" | "location",
  list: User[]
): User[] {
  const [filteredList, setFilteredList] = React.useState<User[]>(list);

  React.useEffect(() => {
    const newList = list.filter((item: User) => {
      // split each item into array (split on spaces)
      const keywords = item[filterKey].toLowerCase().split(" ");

      //   check if the start of any of the keywords match the filtervalue (short circuits are first item found)
      return keywords.some(
        (v) => v.slice(0, filterValue.length) === filterValue
      );
    });
    setFilteredList(newList);
  }, [filterValue, filterKey, list]);

  return filteredList;
}
