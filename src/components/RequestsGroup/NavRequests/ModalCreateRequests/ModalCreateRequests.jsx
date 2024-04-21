import { Description, Footer, ImageInput, Modal, ModalTitle, Name, NameAndPrice, Overlay, Price, SaveButton, SearchArea } from "./ModalCreateRequests-Styles";
import CloseIcon from "../../../../assets/images/close.svg";
import Upload from "../../../../assets/images/upload.svg";
import { requestSchema } from "../../../../schemas/RequestsSchema";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addRequests, closeModal } from "../../../../tools/requestsSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef } from "react"; // Importe o useState

export default function ModalCreateRequests(props) {
    const dispatch = useDispatch();
    const lastCode = useRef(0); // Definindo lastCode como um ref
    const { activeCreateRequestsModal } = props;
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(requestSchema)
    });

    const onSubmit = async (data) => {
        try {
            const requestData = {
                ...data,
                code: String(++lastCode.current).padStart(2, '0'), // Incrementando lastCode.current
            };

            dispatch(addRequests(requestData));
            dispatch(closeModal());
            const requestsData = JSON.parse(localStorage.getItem('requests')) || [];
            const updatedRequests = [...requestsData, requestData];
            localStorage.setItem('requests', JSON.stringify(updatedRequests));
            activeCreateRequestsModal();
        } catch (error) {
            console.error('Erro ao cadastrar produto:', error);
        }
    };

    return (
        <>
            <Overlay>
                <Modal onSubmit={handleSubmit(onSubmit)}>
                    <ModalTitle>
                        <h2>Cadastrar produto</h2>
                        <img onClick={activeCreateRequestsModal} src={CloseIcon} alt="CloseIcon" />
                    </ModalTitle>
                    <SearchArea>
                        <NameAndPrice>
                            <Name>
                                <h1>Nome</h1>
                                <input type="text" {...register("name")} />
                                {errors.name && <p>{errors.name.message}</p>}
                            </Name>
                            <Price>
                                <h1>Preço</h1>
                                <input type="text" {...register("price")} placeholder="0,00" />
                                {errors.price && <p>{errors.price.message}</p>}
                            </Price>
                        </NameAndPrice>
                    </SearchArea>
                    <Description>
                        <h1>Descrição</h1>
                        <input type="text" {...register("description")} />
                        {errors.description && <p>{errors.description.message}</p>}
                    </Description>
                    <ImageInput>
                        <h1>Foto do produto</h1>
                        <div>
                            <input type="text" {...register("image")}/>
                            {errors.image && <p>{errors.image.message}</p>}
                            <img src={Upload} alt="Upload" />
                            <h2>JPG e PNG, somente</h2>
                        </div>
                    </ImageInput>
                    <Footer>
                        <SaveButton type="submit">
                            <p>Salvar</p>
                        </SaveButton>
                    </Footer>
                </Modal>
            </Overlay>
        </>
    )
}
