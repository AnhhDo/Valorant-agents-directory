const SearchBar = ({handleInputChange}) => {
    return (
        <div>
            <form>
                <input type="text" placeholder="Type in the agent name" onChange={handleInputChange}></input>
            </form>
        </div>
    )
}
export default SearchBar;