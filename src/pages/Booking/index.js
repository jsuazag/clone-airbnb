import React, { useState, useEffect } from 'react'
import { FramePage } from './../FramePage'
import { Button } from './../../components/Button'
import { useParams } from 'react-router-dom'

export const BookingPage = () => {

    const { id } = useParams()
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [bookingDate, setBookingDate] = useState('')
    const [isValidForm, setIsValidForm] = useState(false)

    const bookingHandler = (e) => {
        e.preventDefault()
        requestBooking()
    }

    const requestBooking = () => {
        const body = {
            id,
            name, // name: name
            phone,
            email_address: email,
            bookingDate
        }
        console.log('body', body)
    }

    // component did mount
    useEffect(() => {
        // http request
    }, [])

    // component update
    useEffect(() => {
        setIsValidForm(name !== '' && phone !== '' && email !== '' && bookingDate !== '')
    }, [name, phone, email, bookingDate])

    return (
        <FramePage>
            <form onSubmit={bookingHandler} className="booking-form">
                <div>
                    <label>Nombre:</label>
                    <input value={name} onChange={e => setName(e.target.value) } type="text" />
                </div>
                <div>
                    <label>Teléfono:</label>
                    <input value={phone} type="tel" onChange={e => setPhone(e.target.value) } />
                </div>
                <div>
                    <label>Correo:</label>
                    <input value={email} type="email" onChange={e => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Fecha de reserva:</label>
                    <input value={bookingDate} type="date" onChange={e => setBookingDate(e.target.value) } />
                </div>
                <Button disabled={!isValidForm} type="submit" label="Reservar ahora" />
            </form>
        </FramePage>
    )
}