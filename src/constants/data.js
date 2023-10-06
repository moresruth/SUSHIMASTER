import {images }from '../constants'


const temaki = [
    {
      title: 'Tobiko Temaki',
      price: '$56',
     
    },
    {
      title: 'Unagi Nigiri',
      price: '$53',
    
    },
    {
      title: 'Tamago Nigiri',
      price: '$44',
      
    },
    {
      title: 'Eel and Avocado Temaki',
      price: '$31',
      
    },
    
  ];

  const uramaki = [
    {
      title: 'California Sunset Roll',
      price: '$55',
     
    },
    {
      title: 'Spicy Tuna Roll',
      price: '$53',
    
    },
    {
      title: 'Dragon Roll',
      price: '$42',
      
    },
    {
      title: 'Tempura Roll',
      price: '$30',
      
    },
    
  ];

  const products =[
    {
      imgUrl: images.salmontemaki,
      name:'Salmon Tamaki',
      descritpion: 'Nihonryōri',
      price: '$10.99'
    },

    {
      imgUrl: images.tamagoyaki,
      name:'Tamagoyaki',
      descritpion: 'Nihonryōri',
      price: '$8.99'
    },
    {
      imgUrl: images.hosomaki,
      name:'Hosomaki',
      descritpion: 'Hosomaki',
      price: '$12.99'
    }
  ]

  export default { temaki , uramaki, products};