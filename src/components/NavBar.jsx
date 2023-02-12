import { Link } from "react-router-dom";
import { Box, Flex, HStack } from "@chakra-ui/react";

const links = [
  { name: "Jeff", path: "/" },
  { name: "About", path: "/about" },
];

const NavLink = (props) => {
  return <Link to={props.path}>{props.name}</Link>;
};
const NavBar = () => {
  return (
    <Box>
      <Flex>
        <HStack spacing={8} alignItems={"center"}>
          {links.map((link, idx) => (
            <NavLink key={idx} {...link} />
          ))}
        </HStack>
      </Flex>
    </Box>
  );
};

export default NavBar;
