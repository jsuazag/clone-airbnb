import React from 'react'
import {Title} from './../../components/Title'
import { CardDetail } from './components/CardDetail'
import { Button } from '../../components/Button'
import { FramePage } from '../FramePage'
import { useParams } from 'react-router-dom'

const buttonStyle = {
    backgroundColor: '#FC642D',
    borderColor: '#fe530c'
}

// hook

export const DetailPage = () => {

    const { id } = useParams()

    return (
        <FramePage>
            <Title label="Parapente San Felix" />
            <CardDetail />
            <Button isLink={true} linkTo={`/booking/${id}`} style={ buttonStyle } label="¡Reserva ahora!" />
        </FramePage>
    )
}