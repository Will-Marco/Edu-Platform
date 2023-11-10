import { BlogsType } from "@/interfaces/blogs.interface";
import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

export const BlogsService = {
  async getAllBlogs() {
    const query = gql`
      query getBlogs {
        blogs {
          id
          title
          slug
          excerpt
          image {
            url
          }
          category {
            label
            slug
          }
          author {
            ... on Author {
              id
              name
              avatar {
                url
              }
            }
          }
        }
      }
    `;

    const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, query);
    return result.blogs;
  },
};
