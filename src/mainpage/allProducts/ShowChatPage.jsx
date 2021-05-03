import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { baseUrl } from '../../shared/http-service';
import Header from '../../shared/header/header';
import MidHeader from '../../shared/midHeader/midHeader';
import { useParams } from 'react-router-dom';
import arr_reply from '../../images/arr_reply.png';
import arr_forward from '../../images/arr_forward.png';
import send_icon from '../../images/send.png';
import tick_black from '../../images/tick_black.png';
import tick_green from '../../images/tick_green.png';
import Loader from '../../shared/loader/loader';


export default function ShowChatPage() {
    let { id } = useParams();
    var email = localStorage.getItem('email');
    const [loader, setloader] = useState(false);
    const [message, setMessage] = useState('');
    const [message_to, setMessage_to] = useState('');
    const [mid, setMid] = useState(0);
    const [replyClicked, setReplyClicked] = useState(false);
    const [messageList, setMessageList] = useState([]);
    const [forwardClicked, setForwardClicked] = useState(false);
    const [fileName, setFileName] = useState('');
    const [usersList, setUsersList] = useState([]);
    const [showUsers, setShowUsers] = useState(false);
    useEffect(() => {
        async function fetchData() {
            Axios({
                url: baseUrl + "showMessageByFile",
                method: 'GET',
                params: {
                    file_id: id,
                    email:email
                }
            }).then(res => {
                setMessageList(res.data.data);
                setFileName(res.data.fileName);
                setUsersList(res.data.users);
            })

        }
        fetchData();
    }, [id, email]);

    const onReplyClick = (id) => {
        console.log("id:" + id);
        setMid(id);
        setReplyClicked(!replyClicked);
        setForwardClicked(false);
    }
    const onForwardClick = (id) => {
        setForwardClicked(!forwardClicked);
        setReplyClicked(false);
        setMid(id);
    }
    const updateMessage = (message) => {
        const comm = document.getElementById("message").value
        setMessage(comm);
    }

    const updateTo=(to)=>{
        const ab = document.querySelectorAll('input[type=checkbox]:checked');
        const arr =[];
        ab.forEach(element => {
            // console.log(element.attributes.value.value);
            var val = element.attributes.value.value;
            arr.push(val);
            // message_to.push(val);
        });
       
        console.log("to:"+arr.toString());
        setMessage_to(arr.toString());
    }


    const sendMessage = (message_to) => {
        setloader(true);
        Axios.post(baseUrl + "sendMessage",
            {
                file_id: id,
                message: message,
                message_by: email,
                message_to: message_to
            })
            .then(res => {
                console.log("status:" + res.data.msg);
                if (res.data.msg === 'SUCCESS') {
                    alert("Message sent Successfully");
                    window.location.reload();
                    setloader(false);
                }

            })
    }
    return (
        <div className="bg-color">
            <Header />
            <div className="products-outer">
            <MidHeader />
                {loader ? <Loader file="" loaderCategory="" /> : null}


                <div >
                    <h2><span>Messages</span></h2>

                    <div className="message-file">  {fileName}</div>
                    <hr style={{ width: "90%" }} />

                    <div className="message-outer">
                        {/* if there are no messages in the file, forward segment */}
                        {messageList.length === 0 &&
                            <div className="reply-box">                                
                                <input type="text" placeholder='Forward To' id="to" className="reply-p" onClick={() => { setShowUsers(!showUsers) }} />
                                {showUsers &&
                                    <div className="users-list">
                                        {usersList.map((users, index) => {
                                            return (
                                                <div  key={index}>
                                                    <input key={index} type="checkbox" value={users.email} className="check" 
                                                    onChange={()=>updateTo(users.email)}/>{users.email}
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                }
                                <hr style={{ width: "95%" }} />
                                <textarea placeholder="Type the message here..."
                                    className="reply-text" id="message"
                                    onChange={() => updateMessage()}
                                >
                                </textarea>
                                <img src={send_icon} className="send-icon" alt="Send Icon" onClick={() => sendMessage(message_to)} />
                            </div>}
                            {/* tracking the messages */}
                        {messageList.map((messages, index) => {
                            return (
                                <div key={index}>
                                    <div className="message-head">
                                        <div className="from_text"><b>From:</b> { messages.message_by === email ? "Me": messages.message_by}  </div>
                                        <div className="from_text"><b>To:</b> { messages.message_to === email ? "Me": messages.message_to}</div>
                                        <div className="time-head">
                                            <img src={ messages.msg_status === "DELIVERED" ? tick_black:tick_green} className="tick" alt="check tick"/>
                                            {messages.logtime}
                                        </div>
                                    </div>
                                    <div className="message-info">
                                        <div>
                                            {messages.message}
                                        </div>
                                        {/* Reply  message */}
                                        <div className="arrow-head">
                                            <div onClick={() => onReplyClick(index)}  style={{display: messages.message_to !== email ? 'none': null}}>
                                                <img src={arr_reply} className="reply-arrow" alt="Reply" />
                                                <p style={{ cursor: "pointer" }}>Reply</p>
                                            </div>
                                            {/* forward message */}
                                            <div onClick={() => onForwardClick(index)}>
                                                <img src={arr_forward} className="reply-arrow" alt="forward" />
                                                <p style={{ cursor: "pointer" }}>Forward</p>
                                            </div>

                                            {/* <i className="fa fa-reply" aria-hidden="true" style={{color:"black"}}></i>
                                        <i className="fa fa-share" style={{color:"black"}}></i> */}

                                        </div>

                                    </div>

                                    {((replyClicked || forwardClicked) && mid === index) &&
                                        <div className="reply-box">
                                            {forwardClicked ? <p className="reply-p" onClick={() => { setShowUsers(!showUsers) }}>Forward To: </p> :
                                                <p className="reply-p">Reply To: {messages.message_by}</p>
                                            }
                                            {showUsers &&
                                                <div className="users-list">
                                                    {usersList.map((users, index) => {
                                                        return (
                                                            <div  key={index}>
                                                                <input key={index} type="checkbox" value={users.email} className="check" 
                                                                onChange={()=>updateTo(users.email)}/>{users.email}
                                                            </div>
                                                        )
                                                    })
                                                    }
                                                </div>
                                            }
                                            <hr style={{ width: "95%" }} />
                                            <textarea placeholder="Type the message here..."
                                                className="reply-text" id="message"
                                                onChange={() => updateMessage()}
                                            >
                                            </textarea>
                                            <img src={send_icon} className="send-icon" alt="Send Here"  onClick={replyClicked ? ()=>sendMessage(messages.message_by) : ()=>sendMessage(message_to)}
                                            />
                                        </div>
                                    }
                                    <hr style={{ width: "90%" }} />
                                </div>


                                // <div> {messages.message_by} / {messages.logtime} / {messages.message_to} /{messages.message} </div>
                                // <input type="text" onChange={() => updateMessage()} id="message" />

                            )
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}


