import React,{useState} from 'react'
import { FaStar } from "react-icons/fa"

// dsini dgn state hook alias gunakan useState
const createArray = length => [...Array(length)]

//klo gak salah Star dibwh ini pure function
const Star = ({ selected = false }) => (
    <FaStar color={selected ? "red" : "grey"} />
  )

export default function StarRating3({ totalStars = 5 }) {
    const [selectedStars] = useState(3)

  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star key={i} selected={selectedStars > i} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  )
}
