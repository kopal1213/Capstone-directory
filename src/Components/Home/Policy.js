import React from 'react'
import Layout from '../Products/Layout'
import privacypolicy from '../../Assets/privacy.jpg'

export default function Policy() {
  return (
    <Layout title={'Policy'}>
      <div className="row policy">
        <div className="col-md-6">
          <img src={privacypolicy} 
          alt="Privacy Policy"
          style={{width: '100%'}} />
        </div>
        <div className="col-md-4">
          <p className="mt-3">
            Privacy Policy
          </p>
        </div>

      </div>
    </Layout>
  )
}
