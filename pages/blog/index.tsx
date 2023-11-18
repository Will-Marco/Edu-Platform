import { Content } from "@/components";
import Layout from "@/layout/Layout";
import { Box } from "@mui/material";
import { GetServerSideProps } from "next";
import { BlogsService } from "@/services/blog.service";
import { BlogsType } from "@/interfaces/blogs.interface";

const CategoryPage = ({ blogs }: BlogPageProps) => {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          flexDirection: { xs: "column", md: "row" },
          padding: "20px",
          justifyContent: "center",
        }}
      >
        <Content blogs={blogs} />
      </Box>
    </Layout>
  );
};

export default CategoryPage;

export const getServerSideProps: GetServerSideProps<
  BlogPageProps
> = async () => {
  const blogs = await BlogsService.getAllBlogs();

  return {
    props: { blogs },
  };
};

interface BlogPageProps {
  blogs: BlogsType[];
}
