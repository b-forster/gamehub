import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react"
import { BsSearch } from "react-icons/bs"

interface SearchInputProps {
    onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (inputRef.current) onSearch(inputRef.current.value);
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input ref={inputRef} borderRadius={20} placeholder='Search games...' variant='filled' />
            </InputGroup>
        </form>
    )
}

export default SearchInput