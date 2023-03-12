import { FurnitureFormData, FurnituresState } from "./furnitureSlice"

const API_URL = "http://localhost:3000";

export async function fetchFurnitures() {
    return fetch(`${API_URL}/furnitures.json`, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        },
    })
        .then((response) => response.json())
        .catch((error) => {
            console.log("Error: ", error);
            return {} as FurnituresState
        })
}

export async function createFurniture(payload: FurnitureFormData) {
    const furniture = payload.furniture;
    return fetch(`${API_URL}/furnitures.json`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            furniture
        })
    })
        .then((response) => response.json())
        .catch((error) => {
            console.log("Error: ", error);
            return {} as FurnituresState
        })
}
