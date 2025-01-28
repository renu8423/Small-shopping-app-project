


class MultipleImageSetter {
    constructor(images, containerId) {
      const container = document.getElementById(containerId);
      if (!container) {
        console.error('Container not found');
        return;
      }
  
      // Apply grid styles to the container
      Object.assign(container.style, {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        padding: '1b0px',
        // padding: '12px',
        backgroundColor: '#f0f0f0',
        marginTop: '4em',
      });
  
      // Iterate over the image data array
      images.forEach(({ src, alt }, index) => {
        // Create a wrapper figure element
        const figure = document.createElement('figure');
        figure.classList.add('image-item', `unique-${index + 1}`);
        Object.assign(figure.style, {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '10px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff',
         
        });
  
        // Create an image element
        const img = document.createElement('img');
        Object.assign(img.style, {
          width: '100%',
          height: 'auto',
          borderRadius: '4px',
          marginBottom: '10px',
        
         
        });
        img.src = src;
        img.alt = alt;
         
        // Create a caption element
        const caption = document.createElement('figcaption');
        caption.textContent = alt;
        Object.assign(caption.style, {
          fontSize: '14px',
          color: '#333',
          textAlign: 'center',
          });
  
        // Append image and caption to the figure
        figure.appendChild(img);
        figure.appendChild(caption);
  
        // Append the figure to the container
        container.appendChild(figure);
      });
    }
  }
  
  // Array of image data
  const imageData = [
    { src: 'https://images.pexels.com/photos/30004713/pexels-photo-30004713/free-photo-of-elegant-portrait-of-woman-in-white-lace-dress.jpeg?auto=compress&cs=tinysrgb&w=250&lazy=load', alt: 'Elegant Portrait' },
    { src: 'https://images.pexels.com/photos/8952192/pexels-photo-8952192.jpeg?auto=compress&cs=tinysrgb&w=250', alt: 'Relaxing Woman' },
    { src: 'https://images.pexels.com/photos/30260829/pexels-photo-30260829/free-photo-of-stylish-woman-relaxing-on-a-modern-sofa.jpeg?auto=compress&cs=tinysrgb&250', alt: 'Stylish Woman' },
    { src: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=250', alt: 'Calm Landscape' },
    { src: 'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=250', alt: 'City Lights' },
    { src: 'https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=250', alt: 'Beach Sunset' },
    { src: 'https://images.pexels.com/photos/30004713/pexels-photo-30004713/free-photo-of-elegant-portrait-of-woman-in-white-lace-dress.jpeg?auto=compress&cs=tinysrgb&w=250&lazy=load', alt: 'image1' },
    { src: "https://images.pexels.com/photos/8952192/pexels-photo-8952192.jpeg?auto=compress&cs=tinysrgb&w=250" ,alt:"image2" },
    { src: "https://images.pexels.com/photos/30260829/pexels-photo-30260829/free-photo-of-stylish-woman-relaxing-on-a-modern-sofa.jpeg?auto=compress&cs=tinysrgb&250", alt: 'image2' },
    { src: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=250", alt: 'image3 ' },
    { src: "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=250", alt: 'image4 ' },
    { src: "https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=250", alt: 'image5 ' },
    { src: 'https://images.pexels.com/photos/30260829/pexels-photo-30260829/free-photo-of-stylish-woman-relaxing-on-a-modern-sofa.jpeg?auto=compress&cs=tinysrgb&250', alt: 'Stylish Woman' },
    { src: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=250', alt: 'Calm Landscape' },
    { src: 'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=250', alt: 'City Lights' },
    { src: 'https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=250', alt: 'Beach Sunset' },
  
   
  
  ];
  
  // Create an instance of the class to set multiple images
  new MultipleImageSetter(imageData, 'image-container');
  





















