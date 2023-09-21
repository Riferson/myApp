import { IonPage, IonText } from "@ionic/react";
import React from "react"
import './index.css'
import { useLocation } from 'react-router-dom';

interface props{
    OnClick?:(value: any)=>void;
}
interface Data{
    NameProd:string;
    UrlImage:string;
    Telephone:string;
    description:String;
    price:number;
    avaliation:number;
    SellerName:string;
}
interface ProductData {
    data:Data
}

export const DetailsProd:React.FC<props> = ({OnClick}:props) =>{
    const location = useLocation();
    const  state   = location.state as ProductData;

    console.log('state',state.data.NameProd)
    // if (state && state.value) {
    //     const data = state.value;
    //     console.log(data); // Faça algo com os dados aqui
    //   } else {
    //     console.error('Dados não encontrados no state.');
    //   }
    return (
    <IonPage className="Container" >
        {/* <IonPage className="ContainerHeader" >
            <IonPage className="ContainerDescriptions" >
                <IonPage className="ContainerIMG" >
                    {data && (<img src={data?.UrlImage} alt="Imagem"/>)}
                </IonPage>
                <IonPage className="ContainerTextDescription" >
                    <IonText>{data?.NameProd}</IonText>
                    <IonText>{data?.Telephone}</IonText>
                    <IonText>{data?.avaliation}</IonText>
                </IonPage>
            </IonPage>
            <IonPage className="ContainerTel" >
                <img/>
            </IonPage>
        </IonPage>
        <IonPage className="Container">
            <IonPage className="ContainerImg">
                <img className="Img" src={data?.UrlImage} alt="Imagem aleatoria"/>
            </IonPage>
            <IonPage className="ContainerResulm">
                <IonText>{data?.SellerName}</IonText>
                <IonText></IonText>
            </IonPage>
            <IonPage>
                <IonText>{data?.price}</IonText>
            </IonPage>
        </IonPage> */}
    </IonPage>
    )

}