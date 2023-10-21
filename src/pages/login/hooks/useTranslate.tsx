import { useState } from "react";
import { LoginLanguage } from "../../../utils/languages/login";
import { Langs } from "../../../utils/languages/interfaces/langs";

export const useTranslateLogin = () => {

    const [language] = useState<Langs>('es');
    const translation = LoginLanguage[language!];

    return {
        translation
    }
}