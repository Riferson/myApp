import { IonImg, IonPage, IonText } from "@ionic/react";
import React from "react";
import './index.css';
import { useHistory } from 'react-router-dom';


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
    function handleClick(){
        console.log('value',Data)
        if(OnClick){
            OnClick(Data);
            history.push(
                {pathname:'/DetailsProd',
            state:{Data}
        });
        }
    }

    return(
    <IonPage className="Container" onClick={handleClick}>
        <IonPage className="ContainerImg">
            <img className="Img" src={Data?.UrlImage} alt="Imagem aleatoria"/>
        </IonPage>
        <IonPage className="ContainerResulm">
            <IonText>{Data?.NameProd}</IonText>
            <IonText>{Data?.description}</IonText>
        </IonPage>
    </IonPage>
    )

}