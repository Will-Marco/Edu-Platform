import { Box } from "@mui/system";
import { Content, Hero, Sidebar } from "../components";
import Layout from "../layout/Layout";

const index = () => {
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

export default index;
