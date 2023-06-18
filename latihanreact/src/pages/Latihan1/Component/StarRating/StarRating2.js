import React from 'react'
import { FaStar } from 'react-icons/fa'

// disini dgn props

const createArray = length => [...Array(length)]

const Star = ({ selected = false }) => (
    <FaStar color={selected ? "red" : "grey"} />
  )

export default function StarRating2({ totalStars = 5 }) {
    createArray(totalStars).map((n, i) => <Star key={i} />)
}
