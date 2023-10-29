"use client"
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
const MovieDetailsCard = ({ request }: { request: movie }) => {
    const contVariant = {
        hidden: {
            x: "-100vw"
        },
        show: {
            x: 0,
            transition: {
                duration: 1,
                type: "spring",
                stiffness: 180,
                when: "beforeChildren",
            }
        },
    }

    const childVariant = {
        hidden: {
            y: 20,
            opacity: 0
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
            }
        },
    }


    return (
        <div className='w-full grid place-items-center mx-auto'>
            <motion.div className="w-[90vw] h-[80vh] mx-auto flex justify-between items-center bg-zinc-300 p-16 space-x-8 rounded-lg" variants={contVariant} initial="hidden" animate="show">
                <motion.div className="text-xl flex flex-col" variants={childVariant}>
                    <div className='font-medium font-serif'>title : {request.title}</div>
                    <div className='font-medium font-serif'>year : {request.year}</div>
                    <div className='font-medium font-serif'>Rated : {request.rated}</div>
                    <div className='font-medium font-serif'>runtime : {request.runtime}</div>
                    <div className='font-medium font-serif'>actor : {request.actors}</div>
                    <div className='font-medium font-serif'>released : {request.released}</div>
                    <div className='font-medium font-serif'>director : {request.director}</div>
                    <div className='font-medium font-serif'>writer : {request.writer}</div>
                    <div className='font-medium font-serif'>plot : {request.plot}</div>
                    <div className='font-medium font-serif'>country : {request.country}</div>
                </motion.div>
                <motion.div variants={childVariant} className='flex justify-center items-center w-[20vw] h-[30vh]'><Image width={600} height={400} src={request.poster} alt="movie picture" className="rounded-lg" /></motion.div>
            </motion.div>
        </div>
    )
}

export default MovieDetailsCard
{/*


*/}