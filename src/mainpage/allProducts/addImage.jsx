import React, { useState, useEffect } from 'react'
import Header from '../../shared/header/header';
import './allProducts.scss'
import 'font-awesome/css/font-awesome.min.css';
import { useParams } from 'react-router-dom';
import MidHeader from '../../shared/midHeader/midHeader';
import { baseUrl, post } from "../../shared/http-service";
import Loader from '../../shared/loader/loader';
import MailPopup from './MailPopup';
import Axios from 'axios';
import DeleteFilePopup from './deleteFilePopup';
import ShowCommentPopup from './showCommentPopup';
import messageIcon from '../../images/message.png'

export default function AddImage() {
    var user_type = localStorage.getItem('user-type');
    var username = localStorage.getItem('username');
    var email = localStorage.getItem('email');
    let { id } = useParams();
    console.log("ext:" + id);

    var parameter = id.replaceAll("_", "/").toUpperCase();
    var str = [];
    let fname = '';
    // const [imageStr, setImageStr] = useState('');
    const [loader, setloader] = useState(false);
    const [mailPopup, setMailPopup] = useState(false);
    const [deletePopup, setdeletePopup] = useState(false)
    const [filename, setFilename] = useState('');
    const [loaderCategory, setLoaderCategory] = useState('upload');
    // const [buttonClicked, isButtonClicked] = useState(false);
    const [dataValue, setDatavalue] = useState([]);
    const [comment, setComment] = useState('');
    const [showCommentPopup, setShowCommentPopup] = useState(false);
    const [file_id, setFile_id] = useState('');

    useEffect(() => {
        console.log("clicked");
        async function fetchData() {
            const response = await post(baseUrl + "sendAllFiles/", {
                id: id.substring(id.indexOf('_') + 1),
                email: email
            });
            if (response.msg === "SUCCESS") {
                console.log(response.data);
                setDatavalue(response.data);

            } else { alert("Soemthing went wrong") }
        }
        fetchData();
    }, [id, email]);

    const openMailPopup = (name, file_id) => {
        setMailPopup(true);

        setFilename(name);
        setFile_id(file_id);
        console.log("file_id:" + file_id);
    }

    const deleteFilePopup = (name, file_id) => {
        setdeletePopup(true);
        setFile_id(file_id);
        console.log(name);
        setFilename(name);
    }

    const updateComment = (comment) => {
        const comm = document.getElementById("comments").value
        // console.log(comm);
        setComment(comm);
    }
    const showComments = (comments, name, file_id) => {
        setShowCommentPopup(true);
        setComment(comments);
        setFilename(name);
        console.log(showCommentPopup);
        console.log(comment);

    }

    // const showChat = (name, file_id) => {
    //     setShowChatPopup(true);
    //     setFilename(name);
    //     console.log(showChatPopup);
    //     setFile_id(file_id);

    // }

    const fileSelected = async (event) => {
        let files = event.target.files;
        fname = event.target.files[0].name;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        console.log("Size:" + files[0].size);
        if (files[0].size > 75445000) {
            alert("Large file, may take longer time to upload")
        }

        setloader(true);
        reader.onload = (event) => {
            console.log("uploading done");

            str.push(event.target.result);
            // str = (event.target.result);
            // setImageStr(str[0]);
            // console.log("pic dataa:", str[0]);
            // console.log("file name:" + fname);

            handleLogInClick();
        }
    }
    const fileUploader12 = (val, file_id) => {
        setloader(true);
        setLoaderCategory('download')
        console.log("id:" + val + "   loader:" + loader);
        // isButtonClicked(true);
        Axios({
            url: baseUrl + "sendFile/",
            method: 'GET',
            responseType: "blob",
            params: {
                id: file_id
            }
        }).then(res => {
            // console.log(res.data);
            console.log("resoluc:" + res.statusText);
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', val);
            document.body.appendChild(link);
            link.click();
            setloader(false);

        })
    }




    const handleLogInClick = async () => {
        setloader(true);
        const apiresponse = await post(baseUrl + "saveb64", {
            imageStr: str[0],
            fileName: fname,
            category: parameter,
            id: id,
            comments: comment,
            username: username
        });
        if (apiresponse.msg === "SUCCESS") {
            alert("File uploaded successfully")
            setloader(false);
            window.location.reload();
        }
        else if (apiresponse.status !== 200) {
            alert("Something went wrong");
            setloader(false);
        }
    };


    return (
        <div className="bg-color">

            <Header />

            <div className="products-outer">
                <MidHeader />
                {/* <Loader file="file"/>  */}
                {loader ? <Loader file="file" loaderCategory={loaderCategory} /> : null}
                {mailPopup ? <MailPopup filename={filename} file_id={file_id} /> : null}
                {deletePopup ? <DeleteFilePopup filename={filename} id={id} file_id={file_id} /> : null}
                {showCommentPopup ? <ShowCommentPopup filename={filename} comments={comment} id={id} /> : null}
                {/* {showChatPopup ? <Redirect to={`/message/${file_id}`} /> : null} */}


                <div style={{ marginTop: "20px" }}>
                    <div className="caption">    <p>{parameter}</p>
                    </div>


                    {/* <button onClick={showFiles}>Show all files</button> */}
                    <div className="showFiles">
                        {dataValue.map((link, index) => (

                            <div className="file-popup-body" key={index}>
                                <div>{link.file_name}</div>

                                <div className="addImageIcons">
                                    <a href={`/message/${link.file_id}`} className="notification">
                                        <img src={messageIcon} alt="File Name" />
                                        {link.message_count > 0 &&
                                            <span className="badge">{link.message_count}</span>
                                        }
                                    </a>

                                    {/* <Link to={`/message/${link.file_id}`} >
                                        <div ><img src={messageIcon} alt="File Name" className="mail-icon" /></div>
                                    </Link> */}


                                    <div onClick={() => fileUploader12(link.file_name, link.file_id)} >
                                        <img className="file-popup-img" src={require("../../images/download.png")} alt="download" />
                                    </div>
                                    <div onClick={() => showComments(link.comments, link.file_name, link.file_id)} >
                                        <i className="fa fa-comments  mail-icon" aria-hidden="true"></i>
                                        {/* <img className="file-popup-img" src={require("../../images/download.png")} alt="download" /> */}
                                    </div>
                                    <div onClick={() => openMailPopup(link.file_name, link.file_id)} >
                                        <i className="fa fa-envelope mail-icon" aria-hidden="true"></i>
                                        {/* <img className="file-popup-img" src={require("../../images/download.png")} /> */}
                                    </div>
                                    <div onClick={() => deleteFilePopup(link.file_name, link.file_id)}>
                                        <i title="Delete File" style={{ paddingLeft: "0px" }} className={user_type === "admin" ? "fa fa-trash del_icon" : "display-none"}
                                        />
                                    </div>
                                </div>
                            </div>)
                        )}

                    </div>
                    <p></p>
                    <hr className="solid_files" />

                    <h5>Upload file</h5>
                    <div >
                        <textarea
                            rows="3"
                            cols="50" placeholder="Comments"
                            id="comments"
                            onChange={() => updateComment()}
                            className="textAreaComment"
                        ></textarea>
                        <p></p>
                        <input type="file" id="file_name" name="img" onChange={fileSelected} multiple style={{ paddingLeft: "10%" }} />
                    </div>
                </div>
            </div>

        </div>
    )
}
