export const sortById = (users, isSortByUp) => {
    const groupById = (acc, item) => {
        const id = item.id;
        if (id in acc) {
            acc[id].push(item);
        } else {
            acc[id] = [item];
        }
        return acc;
    };
    const sortByNum = (a, b) => a.num - b.num;
    const sortByMinNum = (a, b) => a[0].num - b[0].num;

    let groups = Object.values(users.reduce(groupById, {}))
        .map(group => group.sort(sortByNum))
        .sort(sortByMinNum);

    if(isSortByUp) return [].concat(...groups)
    return [].concat(...groups).reverse()
}