import { Footer, Modal, ModalForms, ModalTitle, Overlay, SaveButton } from "./ModalCreateCustomers-Styles";
import CloseIcon from "../../../../assets/images/close.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    nome: yup.string().required('Nome é obrigatório').max(20, 'Nome deve ter no máximo 20 caracteres'),
    cnpj: yup.string()
        .required('CNPJ é obrigatório')
        .matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, 'CNPJ deve ter o formato 00.000.000/0000-00'),
    telefone: yup.string()
        .required('Telefone é obrigatório')
        .matches(/^\(\d{2}\)\d{5}-\d{4}$/, 'Telefone deve ter o formato (00)00000-0000'),
    cep: yup.string()
        .required('CEP é obrigatório')
        .matches(/^\d{5}-\d{3}$/, 'CEP deve ter o formato 00000-000'),
    estado: yup.string()
        .required('Estado é obrigatório')
        .matches(/^(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)$/, 'Estado deve ser uma UF válida'),
    cidade: yup.string().required('Cidade é obrigatória').max(20, 'Cidade deve ter no máximo 20 caracteres'),
    bairro: yup.string().required('Bairro é obrigatório').max(20, 'Bairro deve ter no máximo 20 caracteres'),
    endereco: yup.string().required('Endereço é obrigatório').max(20, 'Endereço deve ter no máximo 20 caracteres'),
    numero: yup.string().required('Número é obrigatório').max(8, 'Número deve ter no máximo 8 caracteres'),
});



export default function ModalCreateCustomers(props) {

    const { activeCreateCustomersModal } = props;
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data, "teste");
        activeCreateCustomersModal(); 
        alert("KKKKK")
    };

    return (
        <>
            <Overlay>
                <Modal onSubmit={handleSubmit(onSubmit)}>
                    <ModalTitle>
                        <h2>Cadastrar cliente</h2>
                        <img onClick={activeCreateCustomersModal} src={CloseIcon} alt="CloseIcon" />
                    </ModalTitle>
                    <ModalForms >
                        <div>
                            <h1>Nome</h1>
                            <input type="text" {...register("nome")} />
                            {errors.nome && <p>{errors.nome.message}</p>}
                        </div>
                        <div>
                            <h1>CNPJ</h1>
                            <input type="text" {...register("cnpj")} />
                            {errors.cnpj && <p>{errors.cnpj.message}</p>}
                        </div>
                        <div>
                            <h1>Telefone</h1>
                            <input type="text" {...register("telefone")} />
                            {errors.telefone && <p>{errors.telefone.message}</p>}
                        </div>
                        <div>
                            <h1>CEP</h1>
                            <input type="text" {...register("cep")} />
                            {errors.cep && <p>{errors.cep.message}</p>}
                        </div>
                        <div>
                            <h1>Estado</h1>
                            <input type="text" {...register("estado")} />
                            {errors.estado && <p>{errors.estado.message}</p>}
                        </div>
                        <div>
                            <h1>Cidade</h1>
                            <input type="text" {...register("cidade")} />
                            {errors.cidade && <p>{errors.cidade.message}</p>}
                        </div>
                        <div>
                            <h1>Bairro</h1>
                            <input type="text" {...register("bairro")} />
                            {errors.bairro && <p>{errors.bairro.message}</p>}
                        </div>
                        <div>
                            <h1>Endereço</h1>
                            <input type="text" {...register("endereco")} />
                            {errors.endereco && <p>{errors.endereco.message}</p>}
                        </div>
                        <div>
                            <h1>Número</h1>
                            <input type="text" {...register("numero")} />
                            {errors.numero && <p>{errors.numero.message}</p>}
                        </div>
                    </ModalForms>
                    <Footer>
                        <SaveButton type="submit">
                            <p>Salvar</p>
                        </SaveButton>
                    </Footer>
                </Modal>
            </Overlay>
        </>
    );
}
