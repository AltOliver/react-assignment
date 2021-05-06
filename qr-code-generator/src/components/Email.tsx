import React, { useState } from 'react';
//import QRCode from 'qrcode-react'; //This declaration could have been used if qrcode-react is ES6 module feature compliant

const Emailwork: React.FC = () => {
  const QRCode = require('qrcode.react');

  const [message, setMessage] = useState('');
  const [Url, setUrl] = useState('');
  const [number, setNumber] = useState('');
  const [mail, setMail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');


  const Messageeditor = (event: any) => {
    setMessage(event.target.value);
  }
  const GetUrl = (event: any) => {
    setUrl(event.target.value);
  }
  const PutNumber = (event: any) => {
    setNumber(event.target.value);
  }
  const PutMail = (event: any) => {
    setMail(event.target.value);
  }
  const GetSubject = (event: any) => {
    setSubject(event.target.value);
  }
  const GetBody = (event: any) => {
    setBody(event.target.value);
  }

  return (
    <div className="columns has-background-black-ter">
      <div className="column has-background-danger-light">
        <div className="field">
          <QRCode value={`SMS:${number}:${message}`} size={256} />
          <div className="control">
            <label className="label">Phone Number</label>
          </div>
          <input className="input" type="text" placeholder="Phone Number..." onInput={PutNumber} />
        </div>

        <div className="field">
          <label className="label">message</label>
          <div className="control">
            <input className="input" type="text" placeholder="Message..." onInput={Messageeditor} />
          </div>
        </div>

      </div>
      <div className="column has-background-warning-dark " >
        <div className="field">
          <QRCode value={`mailto:${mail} Subject=${subject} &body=${body}.`} size={256} />
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="text" placeholder="Email..." onInput={PutMail} />
          </div>
        </div>

        <div className="field">
          <label className="label">Subject</label>
          <div className="control">
            <input className="input" type="text" placeholder="Subject..." onInput={GetSubject} />
          </div>
        </div>

        <div className="field">
          <label className="label">Body</label>
          <div className="control">
            <input className="input" type="text" placeholder="Body..." onInput={GetBody} />
          </div>
        </div>

      </div>
      <div className="column has-background-danger-dark">
        <div className="field">
        <QRCode value={`URL = ${Url}`} size={256}/>
          <label className="label">URL</label>
          <div className="control">
            <input className="input" type="text" placeholder="URL..." onInput={GetUrl} />
          </div>
        </div>
      </div>


    </div>

  )
}


export default Emailwork;