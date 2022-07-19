import React from 'react';

export default function IconoPieDePagina(props) {

    function tipoIcono(titulo) {
        switch (titulo) {
            case 'youtube':
                return 	<g><path d="M295.24 137.04c-97.18 3.25-156.98 8.13-178.76 14.63-49.08 14.63-79.3 53.95-92.3 119.93-16.57 83.84-19.17 313.3-4.87 429 9.1 73.46 33.48 118.63 75.73 139.1 40.3 19.83 134.23 26 403.34 26.33 182.33 0 313.96-3.9 362.39-11.38C931.3 843.6 969 795.17 980.7 700.59c14.3-115.7 11.7-345.16-4.88-429.01-12.67-65.65-41.6-103.68-90.68-119.6-45.83-14.94-355.89-22.74-589.9-14.94zm241.48 274.31C616.67 459.13 682 499.43 682 500.73c0 1.3-65.33 41.6-145.28 89.38-80.28 48.1-148.85 89.38-152.75 91.98l-7.47 4.55V314.83l7.47 4.55c3.9 2.59 72.48 43.87 152.75 91.97z" /></g>
                ;
            case 'facebook':
                return  <g><path d="M500,10C229.4,10,10,229.4,10,500c0,130.6,51.5,249,134.8,336.9C234.1,931,360,990,500,990c140,0,265.9-59,355.2-153.1C938.5,749,990,630.6,990,500C990,229.4,770.6,10,500,10z M358.9,395.3h65.9v-67.5c0-69.1,23.9-113.6,70.8-132.5c23-9.1,42.8-11.5,63.4-11.5H661v112h-60.9c-18.1,0-29.6,4.9-35.4,14.8c-4.1,6.6-5.8,18.1-5.8,33.8v51h103.7L650.3,508H559v325.2H424.8V508h-65.9V395.3z"/></g>
                ;                
            case 'instagram':
                return <g><path d="M621.2,389.1h50.7c8,0,14.5-6.8,14.5-15.1v-52.6c0-8.3-6.5-15.1-14.5-15.1h-50.7c-8,0-14.5,6.8-14.5,15.1V374C606.7,382.4,613.2,389.1,621.2,389.1z"/><path d="M500,592.2c49.4,0,89.5-41.6,89.5-93c0-51.4-40.1-93-89.5-93c-49.4,0-89.5,41.6-89.5,93S450.6,592.2,500,592.2z"/><path d="M500,10C229.4,10,10,229.4,10,500c0,270.6,219.4,490,490,490c270.6,0,490-219.4,490-490C990,229.4,770.6,10,500,10z M737.4,335.2v55.1v43.2v231.2h-0.2c0,0.6,0.2,1.1,0.2,1.6c0,41.1-31.3,74.3-70.4,76.2v0.4h-1.4H334.3H333v-0.4c-39.1-1.8-70.4-35.1-70.4-76.2c0-0.6,0.1-1.1,0.2-1.6h-0.2V433.5v-43.2v-55.1h0.2c0-0.6-0.2-1.1-0.2-1.6c0-41.1,31.3-74.3,70.4-76.2v-0.4h1.4h331.3h1.4v0.4c39.1,1.8,70.4,35.1,70.4,76.2c0,0.6-0.1,1.1-0.2,1.6H737.4z"/><path d="M637.9,499.3c0,79.1-61.7,143.3-137.9,143.3s-137.9-64.2-137.9-143.3c0-10,1-19.8,2.9-29.3h-52.4v209.7c0,8.3,6.5,15.1,14.5,15.1H673c8,0,14.5-6.8,14.5-15.1V470H635C636.9,479.4,637.9,489.2,637.9,499.3z"/></g>
                ;      
            case 'telefono':
                return <g><path d="M990 784c0 12.5-2.3 28.9-7 49.1-4.6 20.2-9.5 36.1-14.6 47.7-9.7 23.2-38 47.8-84.9 73.8C839.9 978.2 796.7 990 754 990c-12.5 0-24.7-.8-36.5-2.4-11.8-1.6-25.2-4.5-40-8.7-14.8-4.2-25.9-7.5-33.1-10.1-7.2-2.6-20.1-7.3-38.6-14.3-18.6-7-29.9-11.1-34.1-12.5-45.5-16.2-86.1-35.5-121.8-57.8-59.4-36.7-120.8-86.7-184.1-150s-113.3-124.7-150-184.1C93.5 514.4 74.3 473.8 58 428.3c-1.4-4.2-5.6-15.5-12.5-34.1-7-18.6-11.7-31.4-14.3-38.6-2.6-7.2-5.9-18.2-10.1-33.1-4.2-14.8-7.1-28.2-8.7-40S10 258.5 10 246c0-42.7 11.8-85.8 35.5-129.5 26-46.9 50.6-75.2 73.8-84.9 11.6-5.1 27.5-10 47.7-14.6 20.2-4.6 36.5-7 49.1-7 6.5 0 11.4.7 14.6 2.1 8.4 2.8 20.6 20.4 36.9 52.9 5.1 8.8 12.1 21.3 20.9 37.6 8.8 16.2 16.9 31 24.4 44.2 7.4 13.2 14.6 25.6 21.6 37.2 1.4 1.9 5.5 7.7 12.2 17.4 6.7 9.7 11.7 18 15 24.7 3.2 6.7 4.9 13.3 4.9 19.8 0 9.3-6.6 20.9-19.8 34.8-13.2 13.9-27.6 26.7-43.2 38.3-15.5 11.6-29.9 23.9-43.2 36.9-13.2 13-19.8 23.7-19.8 32 0 4.2 1.2 9.4 3.5 15.7 2.3 6.3 4.3 11 5.9 14.3 1.6 3.2 4.9 8.8 9.7 16.7s7.5 12.3 8 13.2c35.3 63.6 75.6 118.1 121.1 163.6s100 85.8 163.6 121.1c.9.5 5.3 3.1 13.2 8 7.9 4.9 13.5 8.1 16.7 9.7 3.2 1.6 8 3.6 14.3 5.9 6.3 2.3 11.5 3.5 15.7 3.5 8.4 0 19-6.6 32-19.8 13-13.2 25.3-27.6 36.9-43.2 11.6-15.5 24.4-29.9 38.3-43.2s25.5-19.8 34.8-19.8c6.5 0 13.1 1.6 19.8 4.9 6.7 3.2 15 8.2 24.7 15s15.5 10.8 17.4 12.2c11.6 7 24 14.2 37.2 21.6 13.2 7.4 28 15.5 44.2 24.4 16.2 8.8 28.8 15.8 37.6 20.9 32.5 16.2 50.1 28.5 52.9 36.9 1.2 3.1 1.9 8 1.9 14.5z" /></g>
                ; 
            case 'ubicacion':
                    return  <g><path d="M500 10c-203 0-367.5 164.5-367.5 367.5S500 990 500 990s367.5-409.5 367.5-612.5S703 10 500 10zm0 520.6c-101.5 0-183.8-82.3-183.8-183.8C316.2 245.3 398.5 163 500 163c101.5 0 183.8 82.2 183.8 183.8 0 101.6-82.3 183.8-183.8 183.8z" /></g>
                ; 
            case 'autos':
                    return  <path d="M983.2 355.3c-2.3-6.8-10.6-12.1-17.5-12.1h-89.5c-5.7 0-12.4 3.7-15.8 8.8-18.8-44.8-40.5-90.8-61.3-122.8-3.7-5.7-9.4-10-15.9-12-3.8-1.2-95.1-28.6-283.1-28.6-188 0-279.3 27.4-283.1 28.6-6.6 2-12.2 6.3-15.9 12-20.8 31.9-42.5 78-61.3 122.8-3.4-5.1-10.1-8.8-15.8-8.8H34.5c-6.9 0-15.1 5.3-17.5 12.1-9.1 26.4-9.1 41.5 0 67.9 2.3 6.8 10.6 12.1 17.5 12.1h47.1c-21.9 21.9-35.5 52.2-35.5 85.5 0 1.6.1 3.1.3 4.7l2.8 20.8c.9 6.9 3.9 13.1 8.3 18.1v47.3h-2.7c-6.5 0-11.7 5.3-11.7 11.7v140.3c0 26.2 21.3 47.6 47.6 47.6h95.1c26.2 0 47.6-21.3 47.6-47.6v-60.3h538.7v60.3c0 26.2 21.3 47.6 47.6 47.6h95.1c26.2 0 47.6-21.3 47.6-47.6V623.5c0-6.5-5.3-11.7-11.7-11.7H948V569c7-5.4 11.9-13.4 13.1-22.7l2.8-20.8c.2-1.5.3-3.1.3-4.7 0-33.4-13.6-63.6-35.5-85.5H966c6.9 0 15.1-5.3 17.5-12.1 8.8-26.4 8.8-41.5-.3-67.9zm-739-84.6c27.6-6.6 112.1-23.4 255.8-23.4 143.7 0 228.2 16.8 255.8 23.4 19.6 32.5 40.2 78.5 57.7 121.6-46.1-7.5-136.8-16-311-16-185.2 0-274.6 9.8-316.6 17.7 17.6-43.6 38.5-90.3 58.3-123.3zM81.9 677.3v-30.5h83.3l8.8 30.5H81.9zm-1.2-65.6v-57.6l161.8 10.4 15.8 47.2H80.7zm620.6 60.8H303.6l-12.2-39.6h422.1l-12.2 39.6zm20.6-60.8H283l-11.9-35.5h462.6l-11.8 35.5zm-458-57.7-12.1-39.4h501.3L741 554H263.9zM923 677.3h-92l8.8-30.5H923v30.5zm1.2-65.6H746.6l15.8-47.2 161.8-10.4v57.6z" />
                ; 
            case 'informacion':
                    return <path d="M500 360c38.3 0 70-31.7 70-70s-31.7-70-70-70-70 31.7-70 70 31.7 70 70 70zm0-350C229.8 10 10 229.8 10 500s219.8 490 490 490 490-219.8 490-490S770.2 10 500 10zm0 840c-193.6 0-350-156.4-350-350s156.4-350 350-350 350 156.4 350 350-156.4 350-350 350zm70-350c0-35-35-70-70-70h-70c-35 0-70 35-70 70h70v210c0 35 35 70 70 70h70c35 0 70-35 70-70h-70V500z" />
                ;
            case 'sevicios':
                return <path d="M990 476.7c0-63.9-43-117.1-101.5-134C826.4 188.8 676.2 80 500 80S173.6 188.8 111.5 342.7C53 359.5 10 412.8 10 476.7c0 77.3 62.7 140 140 140V396.1c44.8-151.3 184.2-261.9 350-261.9s305.2 110.6 350 261.9v190c-34.4 109.4-118.6 196.7-226.4 235.2-10.6-11-25.4-17.9-41.9-17.9-32.2 0-58.3 26.1-58.3 58.3 0 32.2 26.1 58.3 58.3 58.3 28.4 0 52-20.3 57.2-47.2 123.4-43 220.3-141.6 261-265.7C952.5 587 990 536.4 990 476.7zm-490-280c-154.7 0-280 125.4-280 280s125.4 280 280 280c154.7 0 280-125.4 280-280 0-154.7-125.3-280-280-280zM386.1 609.6l.1.2c5.3 5.7 53.8 55.9 124.5 57.1 31 .5 77.7-8.8 124.4-55.9 9.1-9.2 35.5-33-.2-33s-214.6.2-247.7-1.3c-33-1.5-9.9 23.5-1.1 32.9" />
                ;   
            default:
              return 'No icono';
          }
      }

    return (
        <svg {...props} x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000">
            {tipoIcono(props.titulo)}
        </svg>
    );
}