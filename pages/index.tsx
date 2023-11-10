import { Box } from "@mui/system";
import { Content, Hero, Sidebar } from "../components";
import Layout from "../layout/Layout";
import { BlogsService } from "@/services/blog.service";
import { GetServerSideProps } from "next";
import { BlogsType } from "@/interfaces/blogs.interface";

const Index = ({ blogs }: HomePageProps) => {

  return (
    <Layout>
      <Hero />
      <Box
        sx={{
          padding: "20px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "20px",
        }}
      >
        <Sidebar />
        <Content />
      </Box>
    </Layout>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
	const blogs = await BlogsService.getAllBlogs();
  return {
		props: {
			blogs,
		},
	};
};


interface HomePageProps {
	blogs: BlogsType[];
}