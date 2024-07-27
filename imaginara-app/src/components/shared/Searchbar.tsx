import Search from "../icon/Search";
import { Input } from "../ui/input";
import { IoSearch } from "react-icons/io5";

function Searchbar(prop: any) {
    return(
        <>
            <div className="search-bar flex items-center relative">
                <IoSearch className="absolute left-3 text-[#A1A19F] text-[20px]" />
                {/* <Search className="absolute left-3 text-[[#A1A19F]" /> */}
                <Input 
                    placeholder="Search"
                    className="h-[2.3rem] w-full bg-black ring-[#A1A19F] outline-none px-[2.5rem]  text-[#ffff] rounded-[20px] border-none"
                />
            </div>
        </>
    )
}

export default Searchbar;