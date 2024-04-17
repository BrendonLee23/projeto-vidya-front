import { useState } from "react";
import { CustomersCard, CustomersList, Description } from "./CustomersTable-Style"

import ModalDetails from "./ModalDetails/ModalDetails";

export default function CustomersTable() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    function activeDetailsModal() {
        setIsModalVisible(!isModalVisible);
    }

    return (
        <>
            <CustomersList>
                <CustomersCard  onClick={activeDetailsModal}>
                    <h1>BM</h1>
                    <Description>
                        <h2>Brendo Moreira</h2>
                        <h3>00.000.000/0000-00</h3>
                    </Description>
                </CustomersCard>
                <CustomersCard>
                    <h1>BM</h1>
                    <Description>
                        <h2>Brendo Moreira</h2>
                        <h3>00.000.000/0000-00</h3>
                    </Description>
                </CustomersCard>
                <CustomersCard>
                    <h1>BM</h1>
                    <Description>
                        <h2>Brendo Moreira</h2>
                        <h3>00.000.000/0000-00</h3>
                    </Description>
                </CustomersCard>
                <CustomersCard>
                    <h1>BM</h1>
                    <Description>
                        <h2>Brendo Moreira</h2>
                        <h3>00.000.000/0000-00</h3>
                    </Description>
                </CustomersCard>
                <CustomersCard>
                    <h1>BM</h1>
                    <Description>
                        <h2>Brendo Moreira</h2>
                        <h3>00.000.000/0000-00</h3>
                    </Description>
                </CustomersCard>
                <CustomersCard>
                    <h1>BM</h1>
                    <Description>
                        <h2>Brendo Moreira</h2>
                        <h3>00.000.000/0000-00</h3>
                    </Description>
                </CustomersCard>
                <CustomersCard>
                    <h1>BM</h1>
                    <Description>
                        <h2>Brendo Moreira</h2>
                        <h3>00.000.000/0000-00</h3>
                    </Description>
                </CustomersCard>
                <CustomersCard>
                    <h1>BM</h1>
                    <Description>
                        <h2>Brendo Moreira</h2>
                        <h3>00.000.000/0000-00</h3>
                    </Description>
                </CustomersCard>
                <CustomersCard>
                    <h1>BM</h1>
                    <Description>
                        <h2>Brendo Moreira</h2>
                        <h3>00.000.000/0000-00</h3>
                    </Description>
                </CustomersCard>
                <CustomersCard>
                    <h1>BM</h1>
                    <Description>
                        <h2>Brendo Moreira</h2>
                        <h3>00.000.000/0000-00</h3>
                    </Description>
                </CustomersCard>
                <CustomersCard>
                    <h1>BM</h1>
                    <Description>
                        <h2>Brendo Moreira</h2>
                        <h3>00.000.000/0000-00</h3>
                    </Description>
                </CustomersCard>
                <CustomersCard>
                    <h1>BM</h1>
                    <Description>
                        <h2>Brendo Moreira</h2>
                        <h3>00.000.000/0000-00</h3>
                    </Description>
                </CustomersCard>
                <CustomersCard>
                    <h1>BM</h1>
                    <Description>
                        <h2>Brendo Moreira</h2>
                        <h3>00.000.000/0000-00</h3>
                    </Description>
                </CustomersCard>
                <CustomersCard>
                    <h1>BM</h1>
                    <Description>
                        <h2>Brendo Moreira</h2>
                        <h3>00.000.000/0000-00</h3>
                    </Description>
                </CustomersCard>
                <CustomersCard>
                    <h1>BM</h1>
                    <Description>
                        <h2>Brendo Moreira</h2>
                        <h3>00.000.000/0000-00</h3>
                    </Description>
                </CustomersCard>
                <CustomersCard>
                    <h1>BM</h1>
                    <Description>
                        <h2>Brendo Moreira</h2>
                        <h3>00.000.000/0000-00</h3>
                    </Description>
                </CustomersCard>
            </CustomersList>
            {isModalVisible && (
                <ModalDetails activeDetailsModal={activeDetailsModal}/>
            )}
        </>
    )
}



