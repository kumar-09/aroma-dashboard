import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminPage(event){
    const navigate = useNavigate();
    useEffect(()=>{
        if(event.admin === false){
            navigate("/");
        }
    })
    const [details, setDetails] = useState(
        {
            food_id: '',
            name: '',
            Type: '',
            price: 0,
            image: null,
            cat_image: null
        }
    )
    function handleSubmit(event){
       let formdata = new FormData();
        formdata.append("food_id",details['food_id'])
        formdata.append('name',details['name'])
        formdata.append('Type',details['Type'])
        formdata.append('price', details['price'])
        formdata.append('image',details['image'])
        formdata.append('cat_image',details['cat_image'])

        event.preventDefault();
        axios({method : 'post', url: 'http://127.0.0.1:8000/api/additem/', data: formdata, 
    })
          .then(res => {
        })
        .catch(err => console.log(err))
    }


    function handleChange(event) {
        const { name, value } = event.target;
                if(name === 'image' || name === 'cat_image'){

                    setDetails( prevDetails =>({
                        ...prevDetails,
                        [name]: event.target.files[0]
                    }))
                }
                else {
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
            <input required type="text" id="FoodID" name="food_id" onChange={(event)=>{handleChange(event)}}/>
            <br/>
            <label htmlFor="category">Category</label>
            <input required type="text" id="category" name="Type" onChange={(event)=>{handleChange(event)}}/>
            <br/>
            <label htmlFor="item-name">Item Name</label>
            <input required type="text" id="item-name" name="name" onChange={(event)=>{handleChange(event)}}/>
            <br/>
            <label htmlFor="price">Item Price</label>
            <button disabled className="rupee-symbol">&#8377;</button>
            <input required type="number" id="price" name="price" onChange={(event)=>{handleChange(event)}} min = {1}/>
            <br />
            <label htmlFor="image">Item Image</label>
            <input  type="file" id="image" name="image" accept="image/*" onChange={(event)=>{handleChange(event)}}/>
            <br />
            <label htmlFor="cat-image">Category Image</label>
            <input required type="file" id="cat-image" name="cat_image" accept="image/*" onChange={(event)=>{handleChange(event)}}/>
            <br />
            <button required type="submit" className="submit-item">Upload Item</button>
        </form>
    )
}

export default AdminPage;