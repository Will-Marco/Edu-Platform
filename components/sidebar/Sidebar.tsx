import { Fragment } from "react";
import Image from "next/image";
import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import { format } from "date-fns";
import { SidebarProps } from "./sidebar.props";
import { useRouter } from "next/router";

const Sidebar = ({ latestBlogs, categories }: SidebarProps) => {
	const router = useRouter();

  return (
    <Box width={{ xs: "100%", md: "30%" }}>
      <Box
        position={"sticky"}
        top={"100px"}
        sx={{ transition: "all .3s ease" }}
      >
        <Box padding={"20px"} border={"1px solid gray"} borderRadius={"8px"}>
          <Typography variant="h5">Latest blog</Typography>
          <Box
            sx={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
          >
            {latestBlogs.map((item) => (
              <Box key={item.title} marginTop={"20px"} sx={{ cursor: 'pointer' }} onClick={() => router.push(`/blog/${item.slug}`)}>
                <Box
                  sx={{ display: "flex", gap: "20px", alignItems: "center" }}
                >
                  <Image
                    src={item.image.url}
                    alt={item.title}
                    width={100}
                    height={100}
                    style={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <Typography variant="body1">{item.title}</Typography>
                    <Box sx={{ display: "flex", gap: "10px" }}>
                      <Avatar alt={item.author.name} src={item?.author?.avatar?.url} />
                      <Box>
                        <Typography variant="body2">
                          {item.author.name}
                        </Typography>
                        <Box sx={{ opacity: ".6" }}>
                          {format(new Date(), "dd MMM, yyyy")}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Divider sx={{ marginTop: "20px" }} />
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          marginTop={"20px"}
          padding={"20px"}
          border={"1px solid gray"}
          borderRadius={"8px"}
        >
          <Typography variant="h5">Categories</Typography>
          <Box
            sx={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
          >
            {categories.map((nav) => (
              <Fragment key={nav.label}>
                <Button
                  fullWidth
                  sx={{ justifyContent: "flex-start", height: "50px" }}
                  onClick={() => router.push(`/category/${nav.slug}`)}
                >
                  {nav.label}
                </Button>
                <Divider />
              </Fragment>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
