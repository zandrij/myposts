import { FC } from "react";
import { IonButton, IonCol, IonContent, IonInput, IonPage, IonRow, IonText } from "@ionic/react";
import { useTranslateLogin } from "./hooks/useTranslate";
import { Link } from "react-router-dom";
import './styles/login.scss';

export const LoginPage: FC = () => {

    const { translation } = useTranslateLogin();

    return (
        <IonPage>
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
                                <IonText>
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
                                    type="text"
                                />

                                <IonInput
                                    label={translation.password}
                                    fill="outline"
                                    labelPlacement="floating"
                                    className="custom-input"
                                    type="password"
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
                                    <IonText color="primary">
                                        <small>
                                            <Link to="/recovery" className="n-decorate">
                                                <b>{translation.forgot}</b>
                                            </Link>
                                        </small>
                                    </IonText>
                                </IonRow>

                                <IonRow className="ion-justify-content-center mt-1">
                                    <IonText>
                                        <small>
                                            {translation.register} {' '} 
                                            <IonText color="primary">
                                                <Link to="/sign-up">
                                                    <b>{translation.registerLink}</b>
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
    );
}