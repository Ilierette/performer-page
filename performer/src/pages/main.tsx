import React from "react";
import { Client } from "@notionhq/client"
import { useEffect } from "react";
import axios from "axios";

export const MainPage = () => {

    useEffect(() => {
        fetch("http://localhost:8000/")
            .then((response) => response.json())
            .then((payload) => {
                console.log(payload)
            });
    }, [])

    return (
        <>
            shajshahjsga
        </>
    )
}