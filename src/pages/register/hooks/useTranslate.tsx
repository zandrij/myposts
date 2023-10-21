import { useState } from "react";
import { RegisterTranslate } from "../../../utils/languages/register";
import { Langs } from "../../../utils/languages/interfaces/langs";

export const useTranslateRegister = () => {

    const [language] = useState<Langs>('es');
    const translation = RegisterTranslate[language!];

    return {
        translation
    }

}