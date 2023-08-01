import React from 'react'
import Layout from '../Products/Layout'
import contact from '../../Assets/contact.jpg';
import {BiMailSend, BiSolidPhoneCall, BiSupport} from 'react-icons/bi';


export default function Contact() {
  return (
    <Layout title={'Contact'}>
        <div className="row contactus">
          <div className="col-md-6">
            <img src={contact} 
            alt="Contact Us"
            style={{width: "100%" }} />
          </div>
          <div className="col-md-4">
            <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
            <p className="text-justify mt-2">
              Any query and info about products feel free to call us anytime
              you want to..
              We are available 24*7.
            </p>
            <p className="mt-3">
              <BiMailSend /> www.help@upgradeshop.com
            </p>
            <p className="mt-3">
              <BiSolidPhoneCall /> 012-3659849
            </p>
            <p className="mt-3">
              <BiSupport /> 1800 1800 1010 (Toll Free)
            </p>

          </div>
        </div>     
    </Layout>
  )
}
