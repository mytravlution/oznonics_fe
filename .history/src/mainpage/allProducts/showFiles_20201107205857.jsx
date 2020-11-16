import React from 'react'

export default function ShowFiles() {

    const handleLogInClick = async () => {
        const apiresponse = await post(baseUrl + "saveImage/", {
            imageStr: str[0],
            fileName: fname
        });
        console.log(apiresponse);
        if (apiresponse.msg === "SUCCESS") alert("File uploaded successfully");
        else alert("Invalid USername or password");
    };

    return (
        <div>
            <button></button>
        </div>
    )
}
