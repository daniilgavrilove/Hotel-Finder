import {emailRegExp, numberRegExp, upperCaseFirstLetterRegExp} from "shared/lib/consts/regExps";
import * as yup from "yup";

export const yupName = yup
    .string()
    .required('Введите имя')
    .matches(upperCaseFirstLetterRegExp, 'Должно начинаться с большой буквы')
    .max(32, 'Должно быть меньше 32')
export const yupPicture = yup
    .string()
    .required('Выберите картинку')
export const yupPictures = yup
    .array()
    .required('Выберите картинку')
    .min(1,'Выберите хотя бы одну картинку')

export const yupEmail = yup
    .string()
    .required('Введите email')
    .matches(emailRegExp, 'Неккоректный email')
export const yupPassword = yup
    .string()
    .required('Введите пароль')
    .min(6, 'Должен быть больше 7')
    .max(32, 'Должен быть меньше 32')
export const yupWord = yup
    .string()
    .required('Заполните поле')
    .matches(upperCaseFirstLetterRegExp, 'Должно начинаться с большой буквы')
    .min(2, 'Должен быть больше 2')
    .max(32, 'Должен быть меньше 32')
export const yupNumber = yup
    .string()
    .required('Заполните поле')
    .matches(numberRegExp, 'Должно быть числом')
    //.lessThan(80000,'Должно быть не больше 80 000')
    .max(32, 'Должен быть меньше 32')

export const nameValidationRules =
    {
        required: {
            value: true,
            message: 'Введите имя'
        },

        pattern: {
            value: upperCaseFirstLetterRegExp,
            message: 'Должно начинаться с большой буквы'
        },
        maxLength: {
            value: 32,
            message: 'Должно быть меньше 32'
        }
    }

export const pictureValidationRules =
    {
        required: {
            value: true,
            message: 'Выберите картинку'
        },

    }

export const emailValidationRules =
    {
        required: {
            value: true,
            message: 'Введите email'
        },
        pattern: {
            value: emailRegExp,
            message: 'Неккоректный email'
        }
    }

export const passwordValidationRules =
    {
        required: {
            value: true,
            message: 'Введите пароль'
        },
        minLength: {
            value: 7,
            message: 'Должен быть больше 7'
        },

        maxLength: {
            value: 32,
            message: 'Должен быть меньше 32'
        }
    }

export const wordFieldValidationRules =
    {
        required: {
            value: true,
            message: 'Заполните поле'
        },
        pattern: {
            value: upperCaseFirstLetterRegExp,
            message: 'Должно начинаться с большой буквы'
        },
        minLength: {
            value: 3,
            message: 'Должен быть больше 2'
        },
        maxLength: {
            value: 32,
            message: 'Должно быть меньше 32'
        }
    }

export const numberFieldValidationRules =
    {
        required: {
            value: true,
            message: 'Введите значение'
        },
        pattern: {
            value: numberRegExp,
            message: 'Должно быть числом',
        },
        max: {
            value: 80000,
            message: 'Должно быть не больше 80 000'
        }
    }