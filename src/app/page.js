'use client';
// import Image from 'next/image';
import React, { useState } from 'react';
import styles from './page.module.css';
import Menu from './components/Menu';
import OffersSlider from './components/Offers';
import JumbotronComponent from './components/JumbotronComponent';
import FeaturedItems from './components/FeaturedItems';
import TrendingItems from './components/TrendingItems';
import Events_workshops from './components/Event_workshops';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const images = [
  { src: 'featured3.jpeg', alt: 'Image 1' },
  { src: 'https://via.placeholder.com/400x300', alt: 'Image 2' },
  { src: 'https://via.placeholder.com/400x300', alt: 'Image 3' },
];

const pairImages = [
  { src: 'featured1.jpeg', alt: 'Image A' },
  { src: 'featured2.jpeg', alt: 'Image B' },
];

const quadImages = [
  { src: 'https://via.placeholder.com/300x200', alt: 'Image X' },
  { src: 'https://via.placeholder.com/300x200', alt: 'Image Y' },
  { src: 'https://via.placeholder.com/300x200', alt: 'Image Z' },
  { src: 'https://via.placeholder.com/300x200', alt: 'Image W' },
];

export default function Home() {
  return (
    <>
      <Menu />
      <OffersSlider />
      <JumbotronComponent
        title="Welcome to Our Website"
        subtitle="We are glad to have you here. Explore our content and learn more about us."
        buttonText="Learn More"
        buttonLink="#"
        imageUrl="https://via.placeholder.com/1200x400" // Replace with your image URL
      />
      <center>
        <h2 className="headlineCopy">Your One Stop Shop For Style</h2>
      </center>

      <FeaturedItems images={images} />
      <TrendingItems images={pairImages} />
      <Events_workshops images={quadImages} />

      <Container className="newsletter">
        <center>
        <h2> Join the Newsletter</h2>
        </center>
        <Newsletter />
        <br/>
        <br/>
      </Container>
      <Footer/>
    </>
  );
}
