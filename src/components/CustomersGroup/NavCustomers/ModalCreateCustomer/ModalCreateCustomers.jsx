import { Footer, Modal, ModalForms, ModalTitle, Overlay, SaveButton } from "./ModalCreateCustomers-Styles";
import CloseIcon from "../../../../assets/images/close.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../../schemas/CustomersSchema";
import { useDispatch } from 'react-redux';
import { closeModal, addCustomer } from '../../../../tools/customersSlice';
import axios from 'axios';

export default function ModalCreateCustomers(props) {
    const dispatch = useDispatch();
    const { activeCreateCustomersModal } = props;
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        try {
            dispatch(addCustomer(data));
            dispatch(closeModal());
            const customersData = JSON.parse(localStorage.getItem('customers')) || [];
            const updatedCustomers = [...customersData, data];
            localStorage.setItem('customers', JSON.stringify(updatedCustomers));
            activeCreateCustomersModal();
        } catch (error) {
            console.error('Erro ao cadastrar cliente:', error);
        }
    };

    const updateWithCEPChange = async (event) => {
        const cep = event.target.value;
        if (cep.length === 8) {
            try {
                const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
                const { data } = response;

                if (!data.erro) {
                    setValue('state', data.uf);
                    setValue('city', data.localidade);
                    setValue('neighborhood', data.bairro);
                    setValue('address', data.logradouro);
                    setValue('number', data.siafi);
                }
            } catch (error) {
                console.error('Erro ao buscar o CEP:', error);
            }
        }
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
                            <input type="text" {...register("name")} />
                            {errors.name && <p>{errors.name.message}</p>}
                        </div>
                        <div>
                            <h1>CNPJ</h1>
                            <input type="text" {...register("cnpj")} />
                            {errors.cnpj && <p>{errors.cnpj.message}</p>}
                        </div>
                        <div>
                            <h1>Telefone</h1>
                            <input type="text" {...register("phone")} />
                            {errors.phone && <p>{errors.phone.message}</p>}
                        </div>
                        <div>
                            <h1>CEP</h1>
                            <input type="text" {...register("cep")} onChange={updateWithCEPChange} />
                            {errors.cep && <p>{errors.cep.message}</p>}
                        </div>
                        <div>
                            <h1>Estado</h1>
                            <input type="text" {...register("state")} />
                            {errors.state && <p>{errors.state.message}</p>}
                        </div>
                        <div>
                            <h1>Cidade</h1>
                            <input type="text" {...register("city")} />
                            {errors.city && <p>{errors.city.message}</p>}
                        </div>
                        <div>
                            <h1>Bairro</h1>
                            <input type="text" {...register("neighborhood")} />
                            {errors.neighborhood && <p>{errors.neighborhood.message}</p>}
                        </div>
                        <div>
                            <h1>Endereço</h1>
                            <input type="text" {...register("address")} />
                            {errors.address && <p>{errors.address.message}</p>}
                        </div>
                        <div>
                            <h1>Número</h1>
                            <input type="text" {...register("number")} />
                            {errors.number && <p>{errors.number.message}</p>}
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
