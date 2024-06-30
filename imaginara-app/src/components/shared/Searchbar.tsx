import Search from "../icon/Search";
import { Input } from "../ui/input";

function Searchbar() {
    return(
        <>
            <div className="search-bar flex items-center">
                <Search />
                <Input 
                    placeholder="Search"
                    className="h-[2.3rem] w-full bg-black ring-[#A1A19F] outline-none px-[1.5rem]  text-[#ffff] rounded-[20px] border-none"
                    
                />
            </div>
        </>
    )
}

export default Searchbar;