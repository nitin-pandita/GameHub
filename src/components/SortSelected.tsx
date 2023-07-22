import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
const SortSelected = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} paddingLeft={2}>
        Order By : Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date Added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Release Date</MenuItem>
        <MenuItem>Average Rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelected;
