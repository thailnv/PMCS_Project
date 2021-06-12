import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextError from './textError';
import { IoIosClose } from "react-icons/io";
import { MdCameraAlt } from "react-icons/md";
import axios from 'axios';

const initialValues = {
  title: '',
  content: ''
};

const validationSchema = Yup.object({
  title: Yup.string().required('Không được bỏ trống tiêu đề'),
  content: Yup.string().required('Không được bỏ trống nội dung')
});

function DiscussionForm({ refetch }) {
  const [selectedImages, setSelectedImages] = useState([]);

  const getImagesUrl = async () => {
    let imagesUrl = [];

    for (const image of selectedImages) {
      var form = new FormData();
      form.append('key', '92375a8cb3c4edce26332a38805e6251');
      form.append('image', image);

      const response = await axios.post('https://api.imgbb.com/1/upload', form);
      imagesUrl.push(response.data.data.image.url);
    }

    return imagesUrl;
  }

  const onSubmit = async (values, { resetForm }) => {
    // console.log(values);
    const images = await getImagesUrl();

    const config = {
      headers: {
        Authorization: JSON.parse(localStorage.getItem('token'))
      }
    }

    const data = {
      title: values.title,
      content: values.content,
      imgs: images
    }

    axios.post('https://fathomless-castle-76283.herokuapp.com/api/problems', data, config)
      .then(response => {
        console.log(response.data);
        resetForm();
        setSelectedImages([]);
        refetch();
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleImagesChoose = (e) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files);
      const expectedImages = [...selectedImages].concat(fileArray);
      setSelectedImages(expectedImages);
    }
  }

  const handleRemoveImageClick = (image) => {
    const expectedImages = selectedImages.filter(img => img !== image);
    setSelectedImages(expectedImages);
  }

  const handleCancelClick = (resetForm) => {
    resetForm();
    setSelectedImages([]);
  }

  return (
    <div className="discussion-posting-area">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnBlur={false}
      >
        {formik => {
          return (
            <Form className="discussion-posting-wrapper">
              <div className="input-control">
                <label htmlFor="title">Tiêu đề</label>
                <Field type="text" id="title" name="title" />
                <ErrorMessage name="title" component={TextError} />
              </div>

              <div className="input-control">
                <label htmlFor="content">Nội dung</label>
                <Field as="textarea" id="content" name="content" />
                <ErrorMessage name="content" component={TextError} />
                <input type="file" multiple name="image" id="image" accept="image/*" onChange={handleImagesChoose} />
                <label htmlFor="image" className="image-upload">
                  <MdCameraAlt className="image-upload-icon" />
                </label>
                <div className="uploaded-images-area">
                  {selectedImages.map((image) => (
                    <span className="uploaded-img">
                      <span className="img-name">{image.name}</span>
                      <IoIosClose className="remove-img-icon" onClick={() => handleRemoveImageClick(image)} />
                    </span>
                  ))}
                </div>
              </div>

              <div className="btn-group">
                <button type="button" className="clear-btn" onClick={() => handleCancelClick(formik.resetForm)}>Hủy</button>
                <button type="submit" className="submit-btn">Gửi</button>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  );
}

export default DiscussionForm;