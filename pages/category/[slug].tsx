import { Content, Sidebar } from "@/components";
import Layout from "@/layout/Layout";
import { Box } from "@mui/material";
import { GetServerSideProps } from "next";
import { BlogsService } from "@/services/blog.service";
import SEO from "@/layout/seo/Seo";
import { useRouter } from "next/router";
import { BlogsType } from "@/interfaces/blogs.interface";
import { CategoryType } from "@/interfaces/categories.interface";

interface DetailedCategoriesPageProps {
	blogs: BlogsType[];
	latestBlogs: BlogsType[];
	categories: CategoryType[];
}

const CategoryDetailedPage = ({
  blogs,
  latestBlogs,
  categories,
}: DetailedCategoriesPageProps) => {
  const router = useRouter();

  return (
    <SEO metaTitle={`${router.query.slug}-category`}>
      <Layout>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            flexDirection: { xs: "column", md: "row" },
            padding: "20px",
          }}
        >
          <Sidebar latestBlogs={latestBlogs} categories={categories} />
          <Content blogs={blogs} />
        </Box>
      </Layout>
    </SEO>
  );
};

export default CategoryDetailedPage;

export const getServerSideProps: GetServerSideProps<
  DetailedCategoriesPageProps
> = async ({ query }) => {
  const blogs = await BlogsService.getDetaieldCateogriesBlog(
    query.slug as string
  );
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
