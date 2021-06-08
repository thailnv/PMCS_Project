import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextError from './textError';
import { IoIosClose } from "react-icons/io";
import { MdCameraAlt } from "react-icons/md";

const initialValues = {
  title: '',
  content: ''
};

const validationSchema = Yup.object({
  title: Yup.string().required('Không được bỏ trống tiêu đề'),
  content: Yup.string().required('Không được bỏ trống nội dung')
});

const onSubmit = (values) => {
  console.log(values);
}

function DiscussionForm() {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImagesChoose = (e) => {
    if (e.target.files) {
      // console.log(e.target.files[0]);
      const fileArray = Array.from(e.target.files).map(file => ({
        name: file.name,
        url: URL.createObjectURL(file)
      }));

      const expectedImages = [...selectedImages].concat(fileArray);

      setSelectedImages(expectedImages);

      Array.from(e.target.files).map(file => URL.revokeObjectURL(file));
    }
  }

  const handleRemoveImageClick = (image) => {
    const expectedImages = selectedImages.filter(img => img.url !== image.url);
    setSelectedImages(expectedImages);
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
              <div className="form-control">
                <label htmlFor="title">Tiêu đề</label>
                <Field type="text" id="title" name="title" />
                <ErrorMessage name="title" component={TextError} />
              </div>

              <div className="form-control">
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
                      <span>{image.name}</span>
                      <IoIosClose className="remove-img-icon" onClick={() => handleRemoveImageClick(image)} />
                    </span>
                  ))}
                </div>
              </div>

              <div className="btn-group">
                <button type="button" className="clear-btn" onClick={() => formik.resetForm()}>Hủy</button>
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