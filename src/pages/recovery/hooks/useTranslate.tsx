import { useState } from "react";
import { Langs } from "../../../utils/languages/interfaces/langs";
import { RecoveryTranslate } from "../../../utils/languages/recovery";

export const useTranslateRecovery = () => {

    const [language] = useState<Langs>('en');
    const translation = RecoveryTranslate[language!];

    return {
        translation
    }

}