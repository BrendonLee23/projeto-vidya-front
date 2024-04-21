import * as yup from "yup";

export const customerSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório').max(20, 'Nome deve ter no máximo 20 caracteres'),
    cnpj: yup.string()
        .required('CNPJ é obrigatório')
        .matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, 'CNPJ deve ter o formato 00.000.000/0000-00'),
    phone: yup.string()
        .required('Telefone é obrigatório')
        .matches(/^\(\d{2}\)\d{5}-\d{4}$/, 'Telefone deve ter o formato (00)00000-0000'),
    cep: yup.string()
        .required('CEP é obrigatório')
        .matches(/^\d{5}\d{3}$/, 'CEP deve ter o formato 00000-000'),
    state: yup.string()
        .required('Estado é obrigatório')
        .matches(/^(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)$/, 'Estado deve ser uma UF válida'),
    city: yup.string().required('Cidade é obrigatória').max(20, 'Cidade deve ter no máximo 20 caracteres'),
    neighborhood: yup.string().required('Bairro é obrigatório').max(20, 'Bairro deve ter no máximo 20 caracteres'),
    address: yup.string().required('Endereço é obrigatório').max(30, 'Endereço deve ter no máximo 30 caracteres'),
    number: yup.string().required('Número é obrigatório').max(8, 'Número deve ter no máximo 8 caracteres'),
});