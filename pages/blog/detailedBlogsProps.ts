import { BlogsType } from "@/interfaces/blogs.interface";
import { CategoryType } from "@/interfaces/categories.interface";

export interface DetailedBlogsPageProps {
    blog: BlogsType,
    latestBlogs: BlogsType[],
    categories: CategoryType[],
}