import * as yup from "yup";

export const requestSchema = yup.object().shape({
    code: yup.string(),
    image: yup.string().matches(/^https?:\/\/\S+$/, 'A imagem deve ser uma URL válida').required('A imagem é obrigatória'),
    name: yup.string().max(20, 'O nome deve ter no máximo 20 caracteres').required('O nome é obrigatório'),
    price: yup.string()
        .required('O preço é obrigatório'),
    description: yup.string().max(200, 'A descrição deve ter no máximo 200 caracteres').required('A descrição é obrigatória'),
});
