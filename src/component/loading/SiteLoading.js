import React, { useEffect, useRef } from 'react';
import "./SiteLoading.scss";
import loadImg from '../../assets/images/load.svg';
const SiteLoading = () => {
  const loadingRef = useRef(null);
  useEffect(()=>{
    if(loadingRef.current){
      console.log('here');
      loadingRef.current.style.display = 'none';
      console.log(loadingRef);
    }else{
      loadingRef.current = true;
    }
  },[])
  return (
    <div ref={loadingRef} id="site-loading">
      <img src={loadImg} id="load-img"/>
    </div>
  )
};

export default SiteLoading;
