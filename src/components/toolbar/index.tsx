import { FC } from "react";
import { ToolbarProp } from "../interfaces/toolbar";
import { IonButton, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { BsArrowLeftShort } from "react-icons/bs";
import "./index.scss";
import { useHistory } from "react-router";

export const ToolBar: FC<ToolbarProp> = ({ title, back, url }) => {

    const navigate = useHistory();

    return (
        <IonToolbar mode="md">
            <IonRow class="toolbar">
                {back && (
                    <IonButton 
                        shape="round" 
                        fill="clear" 
                        className="toolbar-button"
                        onClick={()=> url ? navigate.push(url) : navigate.goBack()}
                    >
                        <BsArrowLeftShort size={30} color="#000" />
                    </IonButton>
                )}
                <IonTitle className="toolbar-title">{title}</IonTitle>
            </IonRow>
        </IonToolbar>
    );
};
