import { useCallback, useState } from 'react';

export default function useForm(initialValues = {}, validate = () => ({})) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setValues((currentValues) => ({ ...currentValues, [name]: value }));
    setErrors((currentErrors) => ({ ...currentErrors, [name]: undefined }));
  }, []);

  const handleBlur = useCallback((event) => {
    const { name } = event.target;
    const validationErrors = validate(values);
    setErrors((currentErrors) => ({ ...currentErrors, [name]: validationErrors[name] }));
  }, [validate, values]);

  const handleSubmit = useCallback((callback) => (event) => {
    if (event) {
      event.preventDefault();
    }

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    Promise.resolve(callback?.(values)).finally(() => setIsSubmitting(false));
  }, [validate, values]);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setIsSubmitting(false);
  }, [initialValues]);

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setValues,
    setErrors,
  };
}
