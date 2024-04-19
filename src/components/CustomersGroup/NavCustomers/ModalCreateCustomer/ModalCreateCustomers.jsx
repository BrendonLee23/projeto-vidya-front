import { Footer, Modal, ModalForms, ModalTitle, Overlay, SaveButton } from "./ModalCreateCustomers-Styles";
import CloseIcon from "../../../../assets/images/close.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../../schemas/CustomersSchema";

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
