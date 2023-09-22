import { IonBackButton, IonPage, IonText } from "@ionic/react";
import React from "react"
import './index.css'
import { useLocation, useHistory } from 'react-router-dom';
import { useMyContext } from "../../Contexto/context";
import { IonItem, IonList, IonSelect, IonButtons } from '@ionic/react';
import {CustomBackButton} from "../../components/BackButton/BackButton"

interface props{
    OnClick?:(value: any)=>void;
}

export const DetailsProd:React.FC<props> = ({OnClick}:props) =>{
    const { dados } = useMyContext();
    const data = dados;
    console.log('Dados recebidos:', dados);

    const history = useHistory();

    // Função para voltar à página anterior
    const handleVoltar = () => {
      history.goBack();
    };

    return (
        
    <IonPage className="ContainerDetailsProd" >
        <IonButtons slot="start">
            <CustomBackButton onClick={handleVoltar} />
        </IonButtons>
        <IonPage className="ContainerHeaderDetailsProd" >
            <IonPage className="ContainerDescriptionsDetailsProd" >
                <IonPage className="ContainerIMGDetailsProd" >
                    {data && (<img src={data?.UrlImage} alt="Imagem" className="ImgDetailsProd"/>)}
                </IonPage>
                <IonPage className="ContainerTextDescriptionDetailsProd" >
                    <IonText>{data?.NameProd}</IonText>
                    <IonText>{data?.Telephone}</IonText>
                    <IonText>Avaliação do Produto: {data?.avaliation}</IonText>
                </IonPage>
            </IonPage>

        </IonPage>
        <IonPage className="textDescription">
                <IonText className="descriptionTitle">Descrição do Produto<br/></IonText>
                <IonText>{data?.description}</IonText>
        </IonPage>
        <IonPage className="ContainerDescriptionDetailsProd">
            <IonPage className="ContainerImgDescriptionDetailsProd">
                <img className="ImgDescriptionDetailsProd" src={data?.UrlImage} alt="Imagem aleatoria"/>
            </IonPage>
            <IonPage className="ContainerDescriptionResulmDetailsProd">
                <IonPage className="ContainertestResulmDetailsProd">
                    <IonText>Revenda: {data?.SellerName}</IonText>
                    <IonText>{data?.Telephone}</IonText>
                    <IonText>R$: {data?.price}</IonText>
                </IonPage>
            </IonPage>
        </IonPage>

    </IonPage>
    )

}