import React from 'react';
import { IonContent } from '@ionic/react';
import { IonIcon } from '@ionic/react';
import { arrowBackCircleOutline } from 'ionicons/icons';

interface CustomBackButtonProps {
  onClick: () => void;
}

export const CustomBackButton: React.FC<CustomBackButtonProps> = ({ onClick }) => {
  return (
    <IonContent className="backButton" onClick={onClick}>
      <IonIcon icon={arrowBackCircleOutline} onClick={onClick} />
    </IonContent>
  );
};
