export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount/limit)
}
export const getPagesArray = (count) => {
  let pages = []
  for (let i = 0; i < count; i++) {
    pages.push(i+1)
  }
  return pages;
}