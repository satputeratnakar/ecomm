import React from 'react'

const tempCategory = [
    {
        label: "Men's clothing",
        value: "men's clothing",
    },
    {
        label: "Jewelry",
        value: "jewelery",
    },
    {
        label: "Electronics",
        value: "electronics",
    },
    {
        label: "Women's clothing",
        value: "women's clothing",
    },

]


const ProductFilter = (props) => {

    const clearFilter = () => {
        props?.setSearchText("")
        props?.setSelectedCategory("")
    }

    return (
        <div>
            <div className="form-group t-align-left m-20">
                <label>Search By Name</label>
                <input
                    value={props?.searchText}
                    className="form-control"
                    onChange={(e) => {
                        props?.setSearchText(e.target.value)
                        props?.setSelectedCategory("")
                    }
                    }
                    type="text"
                    placeholder="Search"
                />
            </div>
            <div className="form-group t-align-left m-20">
                <label>Filter By Category</label>
                <select
                    className="form-control"
                    name="category"
                    value={props?.selectedCategory}
                    onChange={(e) => {
                        props?.setSelectedCategory(e.target.value)
                        props?.setSearchText("")
                    }}
                >
                    <option value={""}>Select All</option>
                    {tempCategory.map((e, key) => {
                        return <option key={e.value} value={e.value}>{e.label}</option>;
                    })}
                </select>
            </div>
            <div className="form-group t-align-left m-20">
                <button
                    className="form-control btn btn-danger"
                    onClick={clearFilter}
                >
                    Clear Filter
                </button>

            </div>
        </div>
    )
}

export default ProductFilter;