import { useState } from "react";
import axios from "axios";

function AdminPage(event){

    const [details, setDetails] = useState(
        {
            food_id: {
                food_id: '',
                Type: '',
                image: ''
            },
            name: '',
            price: 0,
            image: '',
        }
    )

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/additem/', {details})
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }


    function handleChange(event) {
        const { name, value } = event.target;
    
        // Check if the input field is related to the food_id or category
        if (name.startsWith('food_id')) {
            setDetails(prevDetails => ({
                ...prevDetails,
                food_id: {
                    ...prevDetails.food_id,
                    [name]: value
                }
            }));
        } else {
            setDetails(prevDetails => ({
                ...prevDetails,
                [name]: value
            }));
        }
    }
    


    return(
        <form className="admin-component" onSubmit={handleSubmit}>
            <h2 className="admin-heading">Add New Item</h2>
            <label htmlFor="FoodID">Food ID</label>
            <input required type="text" id="FoodID" name="food_id" onChange={handleChange}/>
            <br/>
            <label htmlFor="category">Category</label>
            <input required type="text" id="category" name="Type" onChange={handleChange}/>
            <br/>
            <label htmlFor="item-name">Item Name</label>
            <input required type="text" id="item-name" name="name" onChange={handleChange}/>
            <br/>
            <label htmlFor="price">Item Price</label>
            <button disabled className="rupee-symbol">&#8377;</button>
            <input required type="number" id="price" name="price" onChange={handleChange} min = {1}/>
            <br />
            <label htmlFor="image">Item Image</label>
            <input required type="file" id="image" name="image"accept="image/*" onChange={handleChange}/>
            <br />
            <label htmlFor="cat-image">Category Image</label>
            <input required type="file" id="cat-image" name="image"accept="image/*" onChange={handleChange}/>
            <br />
            <button type="submit" className="submit-item">Upload Item</button>
        </form>
    )
}

export default AdminPage;