import { FC } from "react";
import { IonButton, IonCol, IonContent, IonHeader, IonInput, IonPage, IonRow, IonText } from "@ionic/react";
import { useTranslateRecovery } from "./hooks/useTranslate";
import { ToolBar } from "../../components/toolbar";
import { Link } from "react-router-dom";

export const RecoveryPage: FC = () => {

    const { translation } = useTranslateRecovery();

    return <IonPage>
        <IonHeader>
            <ToolBar title={translation.back} url="/sign-in" back />
        </IonHeader>

        <IonContent>
            <div className="ion-padding center-content">
                <IonRow>
                    <IonCol>
                        <IonRow className="ion-justify-content-center">
                            <IonText>
                                <h1>MyPosts</h1>
                            </IonText>
                        </IonRow>
                        <IonRow className="ion-justify-content-center">
                            <IonText className='tc'>
                                <small>{translation.slogan}</small>
                            </IonText>
                        </IonRow>
                    </IonCol>
                </IonRow>

                <IonRow className="ion-justify-content-center form-auth">
                    <IonCol size="12">
                        <form>
                            <IonInput
                                label={translation.email}
                                fill="outline"
                                labelPlacement="floating"
                                className="custom-input"
                                type="email"
                            />

                            <IonButton 
                                expand="block" 
                                mode="ios" 
                                color="primary" 
                                className="button-form"
                                type="submit"
                            >
                                {translation.submit}
                            </IonButton>

                            <IonRow className="ion-justify-content-center">
                                <IonText>
                                    <small>
                                        {translation.login} {' '} 
                                        <IonText color="primary">
                                            <Link to="/sign-in">
                                                <b>{translation.loginLink}</b>
                                            </Link>
                                        </IonText>
                                    </small>
                                </IonText>
                            </IonRow>
                        </form>
                    </IonCol>
                </IonRow>
            </div>
        </IonContent>
    </IonPage>
}