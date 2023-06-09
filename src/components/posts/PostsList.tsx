import { FC } from "react";

import { PostsListStyle } from "./postsListStyle";
import { PostsItem } from "./PostsItem";

export const PostsList: FC<any> = ({ posts }) => {
  // async function getUsers(limit: any = 3) {
  //   try {
  //     await fetch(
  //       "https://jsonplaceholder.typicode.com/users?" +
  //         new URLSearchParams({
  //           _limit: limit,
  //         }),
  //     )
  //       .then((response) => response.json())
  //       .then((data) => props?.setUsers(data));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   getUsers();
  // }, []);

  return (
    <PostsListStyle>
      {posts.map((user: any) => (
        <PostsItem key={user.id} user={user} />
      ))}
    </PostsListStyle>
  );
};
