import React from 'react'
import Layout from '../Products/Layout';
import { Link } from 'react-router-dom';
import './Pagenotfound.css'

export default function Pagenotfound() {
  return (
    <Layout title={'Go Back - Page Not Found'}>
      <div className="pnf">
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading">OOps! Page Not Found</h2>
        <Link to={'/'} className="pnf-btn">
          Go Back
        </Link>
      </div>
    </Layout>
  )
}
