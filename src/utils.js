export const getImageUrl = (path) => {
    // console.log("path:"+path);
    // console.log(new URL(`/assets/${path}`, import.meta.url).href);
    // //return new URL(`/assets/${path}`, import.meta.url).href;
    //console.log(`/assets/${path}`);
    return (`/assets/${path}`);
};