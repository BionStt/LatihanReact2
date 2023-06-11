import React from 'react'

export default function DisplayEmptyList({ data = [], renderEmpty }) {
    if (!data.length) return renderEmpty;
    return <p>{data.length} items</p>;
}
