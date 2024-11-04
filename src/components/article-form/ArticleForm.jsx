import {useFormik} from "formik";

export default function ArticleForm({ title = '', description = '', onSubmit }) {
    const initialValues = {
        title: title,
        description: description
    }

    const handleSubmit = (values) => {
        onSubmit(values);
    }

    const handleErrors = (values) => {
        const errors = {};
        if (!values.title) {
            errors.title = 'Required';
        } else if (values.title.length < 6) {
            errors.title = 'Title must have at least 6 characters';
        }

        if (!values.description) {
            errors.description = 'Required';
        } else if (values.description.length < 10) {
            errors.description = 'Description must have at least 10 characters';
        }

        return errors;
    }

    const articleForm = useFormik({
        initialValues: initialValues,
        validate: handleErrors,
        onSubmit: handleSubmit,
        validateOnMount: true
    })

    return (
        <>
            <form onSubmit={articleForm.handleSubmit}>
                <div className="form-group my-2">
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        value={articleForm.values.title}
                        onBlur={articleForm.handleBlur}
                        onChange={articleForm.handleChange}
                        className="form-control"
                    />
                    {(articleForm.touched.title && articleForm.errors.title) && <span className="text-danger">{articleForm.errors.title}</span>}
                </div>

                <div className="form-group my-2">
                    <label htmlFor="description">Description</label> {/* name, value, onBlur, onChange*/}
                    <input
                        id="description"
                        name="description"
                        type="text"
                        value={articleForm.values.description}
                        onBlur={articleForm.handleBlur}
                        onChange={articleForm.handleChange}
                        className="form-control"
                    />
                    {(articleForm.touched.description && articleForm.errors.description) && <span className="text-danger">{articleForm.errors.description}</span>}
                </div>

                <div className="d-flex justify-content-center gap-2">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={!articleForm.isValid}
                    >Submit</button>
                </div>
            </form>
        </>
    )
}
