import { useEffect, useState } from "react"

const useTshirts = () => {
    const [tshirts, handleTshirts] = useState([]);
    useEffect(() => {
        fetch('tshirts.json')
            .then(res => res.json())
            .then(data => handleTshirts(data))
    }, [])
    return [tshirts, handleTshirts]
}

export default useTshirts;