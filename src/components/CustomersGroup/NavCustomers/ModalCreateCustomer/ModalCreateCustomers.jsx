import { Footer, Modal, ModalForms, ModalTitle, Overlay, SaveButton } from "./ModalCreateCustomers-Styles";
import CloseIcon from "../../../../assets/images/close.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    nome: yup.string().required('Nome é obrigatório'),
    cnpj: yup.string().required('CNPJ é obrigatório'),
    telefone: yup.string().required('Telefone é obrigatório'),
    cep: yup.string().required('CEP é obrigatório'),
    estado: yup.string().required('Estado é obrigatório'),
    cidade: yup.string().required('Cidade é obrigatória'),
    bairro: yup.string().required('Bairro é obrigatório'),
    endereco: yup.string().required('Endereço é obrigatório'),
    numero: yup.string().required('Número é obrigatório'),
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
