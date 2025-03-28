import { Platform } from "@/hooks/usePlatforms";
import { HStack, Icon } from "@chakra-ui/react";
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from "react-icons";

interface PlatformIconsListProps {
    platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: PlatformIconsListProps) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe,
    }
    return (
        <HStack marginY={1}>
            {platforms.map(platform => <Icon as={iconMap[platform.slug]} key={platform.id} color='gray.500' />)}
        </HStack>
    )
}

export default PlatformIconsList