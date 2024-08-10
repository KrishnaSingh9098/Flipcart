// import React, { useState } from 'react';

// const AddProductForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     price: '',
//     category: '',
//     image: '',
//   });

//   const [preview, setPreview] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     console.log(e.target.files)
//     const file = e.target.files[0]; // whole information get.
//     setFormData({
//       ...formData,
//       image: file,
//     });
    
//     // Preview the image
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData,'hhhhhh')
    
//     // const formDataToSend = new FormData();
//     // formDataToSend.append('name', formData.name);
//     // formDataToSend.append('description', formData.description);
//     // formDataToSend.append('price', formData.price);
//     // formDataToSend.append('category', formData.category);
//     // if (formData.image) {
//     //   formDataToSend.append('image', formData.image);
//     // }
    
//     // // You can use fetch or axios to send formDataToSend to your server
//     // fetch('/api/products', {
//     //   method: 'POST',
//     //   body: formDataToSend,
//     // })
//     // .then(response => response.json())
//     // .then(data => {
//     //   console.log('Success:', data);
//     //   // Reset form data
//     //   setFormData({
//     //     name: '',
//     //     description: '',
//     //     price: '',
//     //     category: '',
//     //     image: null,
//     //   });
//     //   setPreview('');
//     // })
//     // .catch((error) => {
//     //   console.error('Error:', error);
//     // });
//   };

//   return (
//     <div className="add-product-form">
//       <h2>Add New Product</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input 
//             type="text" 
//             name="name" 
//             value={formData.name} 
//             onChange={handleChange} 
//             required 
//           />
//         </div>
//         <div>
//           <label>Description:</label>
//           <textarea 
//             name="description" 
//             value={formData.description} 
//             onChange={handleChange} 
//             required 
//           />
//         </div>
//         <div>
//           <label>Price:</label>
//           <input 
//             type="number" 
//             name="price" 
//             value={formData.price} 
//             onChange={handleChange} 
//             required 
//           />
//         </div>
//         <div>
//           <label>Category:</label>
//           <input 
//             type="text" 
//             name="category" 
//             value={formData.category} 
//             onChange={handleChange} 
//             required 
//           />
//         </div>
//         <div>
//           <label>Image:</label>
//           <input 
//             type="file" 
//             accept="image/*" 
//             onChange={handleFileChange} 
//           />
//           {preview && <img src={preview} alt="Preview" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />}
//         </div>
//         <button type="submit">Add Product</button>
//       </form>
//     </div>
//   );
// };

// export default AddProductForm;
