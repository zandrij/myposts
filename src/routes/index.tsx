import { Route, RouteComponentProps } from 'react-router-dom';
import { LoginPage } from '../pages/login';
import { RegisterPage } from '../pages/register';
import { IonRouterOutlet } from '@ionic/react';
import { FC } from 'react';
import { RecoveryPage } from '../pages/recovery';

export const LoginRoutes: FC<RouteComponentProps> = () => {
    return ( <IonRouterOutlet>
        <Route exact path="/" children={<LoginPage />} />
        <Route exact path="/sign-in" children={<LoginPage />} />
        <Route exact path="/sign-up" component={RegisterPage} />
        <Route exact path="/recovery" component={RecoveryPage} />
    </IonRouterOutlet>)
}