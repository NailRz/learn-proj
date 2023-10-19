import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => {
        if (a[sort] && b[sort]) {
          return a[sort].localeCompare(b[sort]);
        }
        return 0; // Вернуть 0, если свойство sort отсутствует в одном из объектов
      });
    }
    return posts;
  }, [sort, posts]);
  return sortedPosts;
};


export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
}, [query, sortedPosts])


  return sortedAndSearchedPosts;
}


