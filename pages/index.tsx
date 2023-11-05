import { Box } from "@mui/system";
import { Content, Hero, Sidebar } from "./components";
import Layout from "./layout/Layout";

const index = () => {
  return (
    <Layout>
      <Hero />
      <Box sx={{ display: "flex", gap: "20px", padding: "20px" }}>
        <Sidebar />
        <Content />
      </Box>
    </Layout>
  );
};

export default index;
