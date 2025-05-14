import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    .bg-primary{
        background-color: ${({ theme }: { theme: any }) => theme.bgPrimary};
    }
    .bg-second{
        background-color: ${({ theme }) => theme.bgSecond};
    }
    .bg-button{
        background-color: ${({ theme }) => theme.bgPrimaryButton};
    }
    .bg-button:hover{
        background-color: ${({ theme }) => theme.bgPrimaryButtonHover};
    }
    .bg-save{
        background-color: ${({ theme }) => theme.bgSaveButton};
    }
    .bg-save:hover{
        background-color: ${({ theme }) => theme.bgSaveButtonHover};
    }
    .shadow-primary{
        box-shadow: ${({ theme }) => theme.shadowPrimary};
    }
    .text-highlight:hover{
        color: ${({ theme }) => theme.textHighlight};
    }
    .text-footer{
        color: ${({ theme }) => theme.textFooter};
    }
    .text-icon{
        color: ${({ theme }) => theme.textIcon};
    }
    .text-icon:hover{
        color: ${({ theme }) => theme.textIconHover};
    }
    .text-button{
        color: ${({ theme }) => theme.textButton};
    }
    .text-hint{
        color: ${({ theme }) => theme.textHint};
    }
    .border-primary{
        border-color: ${({ theme }) => theme.borderPrimary};
    }
    .text-doprdown-icon{
        color: ${({ theme }) => theme.dropdownIcon};
    }
    .dropdown li:hover{
        background-color: ${({ theme }) => theme.bgPrimaryButtonHover};
    }
    .bg-bar{
        background-color: ${({ theme }) => theme.bgBar};
    }
    input[type="range"].strong::-webkit-slider-thumb {
        box-shadow: ${({ theme }) => theme.barStrongShadow};
    }
    input[type="range"].weak::-webkit-slider-thumb {
        box-shadow: ${({ theme }) => theme.barWeakShadow};
    }
    input[type="range"]::-webkit-slider-thumb {
        background-color: ${({ theme }) => theme.barBackground};
    }
    .text-redirect{
        color: ${({ theme }) => theme.textRedirect};
    }
    .text-redirect:hover{
        color: ${({ theme }) => theme.textRedirectHover};
    }
    .beat-list li {
        box-shadow: ${({ theme }) => theme.beatListShadow};
        background: ${({ theme }) => theme.beaListBackground};
    }

    .beat-list li.active {
        background: ${({ theme }) => theme.beatListActiveBackground};
        box-shadow: ${({ theme }) => theme.beatListActiveShadow};
    }
`
