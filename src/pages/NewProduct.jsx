import { useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import { uploadImage } from '../api/uploader';
import { addNewProduct } from '../api/firebase';

export default function NewProduct() {
  const { register, handleSubmit, reset } = useForm();
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState(null);

  const options = [
    'acoustic-guitar',
    'elec-guitar',
    'bass-guitar',
    'piano',
    'drum',
  ];

  const handleChange = (e) => {
    setFile(e.target.files && e.target.files[0]);
  };

  const onSubmit = async (data) => {
    // 1. image - upload into cloud and get url where the image saved in db.

    setIsUploading(true);
    uploadImage(file)
      // 2. call a function to upload new product
      .then((url) => {
        addNewProduct(data, url) //
          .then(() => {
            // set uploading success message
            setSuccess(
              `The new Product- ${data.name} is successfully registered!`
            );

            setTimeout(() => {
              setSuccess(null);
            }, 4000);

            // reset input fields using react form hook fn
            reset();
            setFile(null);
          });
      }) // finally reset uploading status as false
      .finally(() => setIsUploading(false));
  };

  return (
    <section className='w-full text-center px-4'>
      <h1 className='text-2xl font-bold'>Register New Product</h1>

      {success && <p className='my-2'>{success}</p>}

      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt='local file'
          className='w-96 mx-auto my-4 rounded-lg'
        />
      )}

      <form
        className='flex flex-col px-12 gap-4 w-full mt-4'
        onSubmit={handleSubmit(onSubmit)}
      >
        <input onChange={handleChange} type='file' accept='image/*' />
        <input
          {...register('name', { required: true })}
          type='text'
          placeholder='Product Name'
        />
        <input
          {...register('price', { required: true })}
          type='text'
          placeholder='Price'
        />
        <select {...register('category')} type='text' placeholder='Category'>
          {options.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          {...register('description')}
          type='text'
          placeholder='Description'
        />
        <input {...register('sort', { required: true })} type='text' />
        <button disabled={isUploading}>
          {isUploading
            ? `uploading the new product...`
            : 'Register the product'}
        </button>
      </form>
    </section>
  );
}
