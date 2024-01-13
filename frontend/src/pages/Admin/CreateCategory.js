import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
// import CategoryForm from "../../components/Form/CategoryForm";
// import { Modal } from "antd";

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  
  //get all categories
  const getAllCategory = async () => {
  try {
    console.log("Fetching categories...");
    const { data } = await axios.get("/api/v1/category/get-category");
    console.log("Response data:", data);  // Add this line for debugging

    if (data.success) {
      setCategories(data.category);
    } else {
      console.error("Error fetching categories:", data.message);  // Add this line for debugging
      toast.error(data.message);
    }
  } catch (error) {
    console.error("Error fetching categories:", error);
    toast.error("Something went wrong in getting category");
  }
};


  useEffect(() => {
      console.log("Fetching categories...");

    getAllCategory();
  }, []);

  // //update category
  // const handleUpdate = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await axios.put(
  //       `/api/v1/category/update-category/${selected._id}`,
  //       { name: updatedName }
  //     );
  //     if (data.success) {
  //       toast.success(`${updatedName} is updated`);
  //       setSelected(null);
  //       setUpdatedName("");
  //       setVisible(false);
  //       getAllCategory();
  //     } else {
  //       toast.error(data.message);
  //     }
  //   } catch (error) {
  //     toast.error("Somtihing went wrong");
  //   }
  // };
  // //delete category
  // const handleDelete = async (pId) => {
  //   try {
  //     const { data } = await axios.delete(
  //       `/api/v1/category/delete-category/${pId}`
  //     );
  //     if (data.success) {
  //       toast.success(`category is deleted`);

  //       getAllCategory();
  //     } else {
  //       toast.error(data.message);
  //     }
  //   } catch (error) {
  //     toast.error("Somthing went wrong");
  //   }
  // };
  return (
    <Layout title={"Dashboard - Create Category"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Manage Category</h1>
            <div>
              <table className="table">
  <thead>
    <tr>
      
      <th scope="col">Name</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    
     {categories.map(c =>(
      <>
      <tr>
      <td key={c._id}>{c.name}</td>
      <td>
        <button className="btn-btn-primary">Edit</button>
      </td>
</tr>
</>
     ))}
  </tbody>
</table>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;