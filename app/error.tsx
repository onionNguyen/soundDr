"use client";

import { useEffect } from "react";

const Error = ({ error, reset} : {error:
Error; reset: () => void }) => {

    useEffect(() => {
        console.log(error.message);
    }, [error]);    
  return ( <div>{error.message}</div>);
}

export default Error;