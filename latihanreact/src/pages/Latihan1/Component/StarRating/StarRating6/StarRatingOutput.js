import React,{useState} from 'react'
import colorData from './data/color-data.json'
import ColorList from './ColorList'

export default function StarRatingOutput() {
    const [colors] = useState(colorData)
    return <ColorList colors={colors} />
}
