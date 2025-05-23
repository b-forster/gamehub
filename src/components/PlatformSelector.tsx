import usePlatforms, { Platform } from "@/hooks/usePlatforms";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs";

interface PlatformSelectorProps {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: PlatformSelectorProps) => {
    const { data: platforms, error } = usePlatforms();

    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform?.name || 'Platform'}</MenuButton>
            <MenuList>
                {platforms.map(platform =>
                    <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>
                        {platform.name}
                    </MenuItem>
                )}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector