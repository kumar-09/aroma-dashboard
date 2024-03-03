function AdminPage(){

    return(
        <form className="admin-component" action = "POST">
            <h2 className="admin-heading">Add New Item</h2>
            <label htmlFor="FoodID">Food ID</label>
            <input required type="text" id="FoodID" />
            <br/>
            <label htmlFor="category">Category</label>
            <input required type="text" id="category" />
            <br/>
            <label htmlFor="item-name">Item Name</label>
            <input required type="text" id="item-name" />
            <br/>
            <label htmlFor="price">Item Price</label>
            <button disabled className="rupee-symbol">&#8377;</button>
            <input required type="number" id="price" />
            <br />
            <label htmlFor="image">Item Image</label>
            <input required type="file" id="image" />
            <br />
            <button type="submit" className="submit-item">Upload Item</button>
        </form>
    )
}

export default AdminPage;