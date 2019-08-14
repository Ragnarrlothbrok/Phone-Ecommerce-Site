import React, { Component } from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
//the modal is only gonna be diplayed if  this modal open is true so we need conditional rendering
export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    // we have access to both of these because they are in value
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalProduct;
                    if (!modalOpen) return null;
                    return (
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div
                                        id="modal"
                                        className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                        <h5>item added to the cart</h5>
                                        <img
                                            src={img}
                                            className="img-fluid"
                                            alt="product"
                                        />
                                        <h1>{title}</h1>
                                        <h5 className="text-muted">
                                            price : ${price}
                                        </h5>
                                        <Link to="/">
                                            <ButtonContainer
                                                onClick={() => closeModal()}>
                                                store
                                            </ButtonContainer>
                                        </Link>
                                        <Link to="/cart">
                                            <ButtonContainer
                                                onClick={() => closeModal()}>
                                                go to cart
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                    );
                }}
            </ProductConsumer>
        );
    }
}
const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal {
        background: var(--mainWhite);
    }
`;
