import { IonPage, IonText } from "@ionic/react";
import React from "react"
import './index.css'
import { useLocation } from 'react-router-dom';
import { useMyContext } from "../../Contexto/context";
import { CardDetails } from "../../components/CardDetails";

interface props{
    OnClick?:(value: any)=>void;
}

export const DetailsProd:React.FC<props> = ({OnClick}:props) =>{
    const { dados } = useMyContext();
    const data = dados;
    console.log('Dados recebidos:', dados);
    return (
    <IonPage className="ContainerDetailsProd" >
        <IonPage className="ContainerHeaderDetailsProd" >
            <IonPage className="ContainerDescriptionsDetailsProd" >
                <IonPage className="ContainerIMGDetailsProd" >
                    {data && (<img src={data?.UrlImage} alt="Imagem" className="ImgDetailsProd"/>)}
                </IonPage>
                <IonPage className="ContainerTextDescriptionDetailsProd" >
                    <IonText>{data?.NameProd}</IonText>
                    <IonText>{data?.Telephone}</IonText>
                    <IonText>{data?.avaliation}</IonText>
                </IonPage>
            </IonPage>
            <IonPage className="ContainerTelDetailsProd" >
                <img/>
            </IonPage>
        </IonPage>
        <IonPage className="ContainerDescriptionDetailsProd">
            <IonPage className="ContainerImgDescriptionDetailsProd">
                <img className="ImgDescriptionDetailsProd" src={data?.UrlImage} alt="Imagem aleatoria"/>
            </IonPage>
            <IonPage className="ContainerDescriptionResulmDetailsProd">
                <IonPage className="ContainertestResulmDetailsProd">
                    <IonText>Revenda: {data?.SellerName}</IonText>
                    <IonText>{data?.Telephone}</IonText>
                </IonPage>
                <IonPage>
                    <IonText>{data?.price}</IonText>
                </IonPage> 
            </IonPage>
            

        </IonPage>
    </IonPage>
    )

}