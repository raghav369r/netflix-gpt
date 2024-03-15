function SearchBox() {
    return (
        <div className="z-30">
            <form className="bg-black">
                <input className="py-2 px-4" type="text" placeholder="What would you like to watch?"/>
                <button className="py-2 px-4 bg-red-900 text-white">Search</button>
            </form>
        </div>
    );
}

export default SearchBox;