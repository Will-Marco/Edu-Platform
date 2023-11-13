import { Box } from "@mui/system";
import { GetServerSideProps } from "next";
import { Content, Hero, Sidebar } from "../components";
import Layout from "../layout/Layout";
import { BlogsType } from "@/interfaces/blogs.interface";
import { CategoryType } from "@/interfaces/categories.interface";
import { BlogsService } from "@/services/blog.service";

const Index = ({ blogs, latestBlogs, categories }: HomePageProps) => {
  return (
    <Layout>
      <Hero blogs={blogs.slice(0, 3)} />
      <Box sx={{ display: "flex", gap: "20px", flexDirection: { xs: "column", md: "row" }, padding: "20px" }}>
        <Sidebar latestBlogs={latestBlogs} categories={categories} />
		<Content blogs={blogs} />
      </Box>
    </Layout>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
	const blogs = await BlogsService.getAllBlogs();
	const latestBlogs = await BlogsService.getLatestBlog();
	const categories = await BlogsService.getCategories();

	return {
		props: {
			blogs,
			latestBlogs,
			categories,
		},
	};
};

interface HomePageProps {
	blogs: BlogsType[];
	latestBlogs: BlogsType[];
	categories: CategoryType[];
}