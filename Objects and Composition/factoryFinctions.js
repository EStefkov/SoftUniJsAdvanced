function createRect(width, height) {

    const rect = { width, height };
  
    rect.getArea = () => {
  
      return rect.width * rect.height;
  
    };
  
    return rect;
  
  }

  const myRect = createRect(4,8);
  console.log(myRect);
  console.log(myRect.getArea());

  const getArea = myRect.getArea;
  console.log(getArea());