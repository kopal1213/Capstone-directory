import React from 'react'
import Layout from '../Products/Layout'
import about from '../../Assets/about.png'

export default function About() {
  return (
    <Layout title={'About us'}>
      <div className="row about">
        <div className="col-md-6">
        <img 
        src={about}
        alt='About Us'
        style={{width: '100%'}}
        />
        </div>
        <div className="col-md-5">
          <p className="mt-3 text-normal">
            <strong>This website belongs to educational toys of kids</strong><br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore error doloribus aliquid quod, 
            voluptas fuga quasi incidunt ipsum provident vel excepturi et nisi quos tempora autem illum quas
            repellendus pariatur ipsam doloremque dolor nihil necessitatibus. Quia sed tempore fugiat natus 
            unde! Aspernatur, placeat cumque cupiditate minima, dolor quasi odio neque quaerat itaque, 
            exercitationem expedita omnis? Natus porro
            modi ipsam neque voluptatibus quasi nisi corrupti esse beatae cum. Deleniti, ducimus libero.
          </p>
        </div>
      </div>
    </Layout>
  )
}
