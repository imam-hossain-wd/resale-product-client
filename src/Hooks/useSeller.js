import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    // const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/seller/${email}`)
            // fetch(`http://localhost:5000/users/seller/d@da.com`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsSeller(data.isSeller);
                    // setIsAdminLoading(false);
                })
        }
    }, [email])
    // return [isAdmin, isAdminLoading]
    return [isSeller]
}

export default useSeller;