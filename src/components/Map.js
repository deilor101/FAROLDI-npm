import { AspectRatio } from '@chakra-ui/react'

export default function MapFooter() {
    return(
        <>
        <AspectRatio ratio={4 / 3}>
             <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.7951101215544!2d-48.950689386115855!3d-16.33340998871816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ea46284fa6c71%3A0x7ed948754f6dc6!2sAv.%20Pinheiro%20Chagas%2C%2032%20-%20Jundia%C3%AD%2C%20An%C3%A1polis%20-%20GO%2C%2075110-580!5e0!3m2!1spt-BR!2sbr!4v1651556349081!5m2!1spt-BR!2sbr'
                alt='demo'
            />
        </AspectRatio>
        </>




    ) 
}



