import { IonImg, IonPage, IonText } from "@ionic/react";
import React from "react";
import './index.css';
import { useHistory } from 'react-router-dom';
import { useMyContext } from "../../Contexto/context";


interface data{
    NameProd:string;
    UrlImage:string;
    Telephone:string;
    description:String;
    price:number;
    avaliation:number;
    SellerName:string;
}

interface props{
    Data?:data;
    OnClick?:(value: any)=>void;
}


export const CardDetails:React.FC<props> = ({Data,OnClick}:props) =>{
    const history = useHistory();
    const { atualizarDados } = useMyContext();

    function handleClick(){
        atualizarDados(Data);
        if(OnClick){
            OnClick(Data);
            history.push({
                pathname:'/DetailsProd'
        });
        }
    }

    return(
    <IonPage className="ContainerCardDetail" onClick={handleClick}>
        <IonPage className="ContainerImgCardDetail">
            <img className="ImgCardDetail" src={Data?.UrlImage} alt="Imagem aleatoria"/>
        </IonPage>
        <IonPage className="ContainerResulmCardDetail">
            <IonText>{Data?.NameProd}</IonText>
            <IonText>{Data?.description}</IonText>
        </IonPage>
    </IonPage>
    )

}