import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        if (!currency) return
        
        setLoading(true)
        setError(null)
        
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
            .then((res) => {
                if (!res.ok) throw new Error(`API Error: ${res.status}`)
                return res.json()
            })
            .then((res) => {
                setData(res[currency] || {})
                setLoading(false)
            })
            .catch((err) => {
                console.error("Failed to fetch currency data:", err)
                setError(err.message)
                setData({})
                setLoading(false)
            })
    }, [currency])
    
    return { data, error, loading }
}

export default useCurrencyInfo