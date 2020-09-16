import React, { useEffect, useState } from 'react'
import { Housing } from './Housing'
import { requestHttp } from '../../../config/HttpRequest'

export const Experiences = () => {

    const [experiences, setExperiences] = useState([])

    useEffect(() => {
        getAllExperiences()
    }, [])

    const getAllExperiences = async () => {
        try {
            const response = await requestHttp('get', '/experiences')
            setExperiences(response.experiences)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <section className="experiences">
            {
                experiences.map(el => <Housing key={el.id} {...el} />)
            }
        </section>
    )
}