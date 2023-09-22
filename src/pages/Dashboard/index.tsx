import { IonContent, IonPage, IonText } from "@ionic/react";
import React from "react";
import { CardDetails } from "../../components/CardDetails";
import json from '../../data/db.json';
import './index.css'
import { useHistory } from 'react-router-dom';

export let Dashboard:React.FC = () =>{
    const history = useHistory();
    const objetos = json.dados;
  
    function handleClick(objeto: any) {
        history.push({
          pathname: '/DetailsProd',
          state: { data: objeto },
        });
      }

    return(
    <IonPage>
      <IonContent className="Header">
        <IonText class="HeaderTitle">Lista de Produtos</IonText>
      </IonContent>
    <IonPage className="Itens">
          {objetos && objetos.map((objeto:any,index:any)=>(
            <CardDetails key={index} Data={objeto} OnClick={() => handleClick(objeto)} />
        ))}
    </IonPage>
    </IonPage>
    )
}