import * as React from "react";

export function useFilteredUserList(
  filterValue: string,
  filterKey: "name" | "email" | "location",
  list: User[]
): User[] {
  const [filteredList, setFilteredList] = React.useState<User[]>(list);

  React.useEffect(() => {
    const newList = list.filter((item: User) => {
      const keywords = item[filterKey].toLowerCase().split(" ");

      //   check if the start of any of the keywords match the filtervalue (short circuits are first item found)
      return keywords.some(
        (v) => v.slice(0, filterValue.length) === filterValue.toLowerCase()
      );
    });

    setFilteredList(newList);
  }, [filterValue, list]);

  return filteredList;
}
