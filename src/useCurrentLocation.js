import { useState, useEffect } from "react"

export function useCurrentLocation() {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                }
            );
        } else {
            console.error("Error");
        }
    }, []);

    return location;

}