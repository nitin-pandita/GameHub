import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGame";
interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  choosenPlatform: Platform | null;
}
const PlatformSelector = ({ onSelectedPlatform, choosenPlatform }: Props) => {
  const { data, error } = usePlatform();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {choosenPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((item) => (
          // ?actually platform is the filter button

          <MenuItem onClick={() => onSelectedPlatform(item)} key={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
