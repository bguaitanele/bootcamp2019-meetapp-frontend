import * as Yup from 'yup';

export const userValidation = {
  name: Yup.string().required('O nome é de preenchimento obrigatório'),
  email: Yup.string()
    .email('O e-mail inválido')
    .required('O E-mail é de preenchimento obrigatório'),
};
